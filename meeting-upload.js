// Upload a Zoom recording on "Add meeting": Gemini (Vertex AI) listens and writes the transcript,
// minutes and decisions; the form is pre-filled and the saved meeting carries the bilingual transcript.
const recordingState={file:null,result:null,status:'',error:'',prefill:null,busy:false,selected:new Set()};
const recordingKinds={none:'','':'',task:'task',deadline:'deadline',decision:'decision',commitment:'commitment',information:'information'};
function recordingPanelHTML(){const r=recordingState.result;
return `<section class="panel recording-panel" id="recording-panel"><div class="recording-head"><span class="recording-icon">◉</span><div><h2>${L('Upload a Zoom recording','Zoom-Aufnahme hochladen')}</h2><p>${L('Gemini on Vertex AI listens to the meeting, writes the transcript and pre-fills the minutes below. You can still edit everything before saving.','Gemini auf Vertex AI hört das Meeting, schreibt das Transkript und füllt das Protokoll unten vor. Du kannst alles vor dem Speichern bearbeiten.')}</p></div></div><form id="recording-form" class="recording-form"><label class="recording-file"><input type="file" name="recording" accept="audio/*,video/mp4,video/webm,video/quicktime,.m4a,.mp3,.wav,.mp4,.webm,.mov"><span>${recordingState.file?safe(recordingState.file.name)+' · '+Math.round(recordingState.file.size/1048576*10)/10+' MB':L('Choose a video or audio file (max. 30 MB)','Video- oder Audiodatei wählen (max. 30 MB)')}</span></label><button class="button primary" type="submit" ${recordingState.busy||!recordingState.file?'disabled':''}>${recordingState.busy?L('Gemini is listening …','Gemini hört zu …'):L('Transcribe with Gemini','Mit Gemini transkribieren')} →</button></form>${recordingState.status?`<p class="recording-status">${safe(recordingState.status)}</p>`:''}${recordingState.error?`<p class="error-message" role="alert">${safe(recordingState.error)}</p>`:''}${r?`<div class="recording-result"><p class="transcript-label">${L('Transcript written by','Transkript erstellt von')} ${safe(r.model)} · ${r.turns.length} ${L('speaking turns','Beiträge')} · ${L('language','Sprache')}: ${safe(r.language||'?')}</p><div class="highlight-legend">${Object.entries(highlightNames).map(([key,names])=>`<span class="extract-${key}">${L(...names)}</span>`).join('')}</div><div class="recording-turns">${r.turns.map(t=>`<article class="transcript-turn"><time>${safe(t.time)}</time><div><strong>${safe(t.speaker)}</strong><p>${t.kind?`<mark class="extract-${t.kind}">${safe(L(t.en,t.de))}</mark>`:safe(L(t.en,t.de))}</p></div></article>`).join('')}</div><h3>${L('Tasks, commitments & deadlines found by Octopus','Von Octopus erkannte Aufgaben, Zusagen & Termine')}</h3>${r.tasks.length?`<div class="detected-tasks">${r.tasks.map((t,i)=>`<label class="detected-task"><input type="checkbox" name="task-${i}" data-detected="${i}" ${recordingState.selected.has(i)?'checked':''}><div><strong>${safe(L(t.title_en,t.title_de))}</strong><small><span class="badge ${t.kind==='dependency'?'risk':t.kind==='commitment'?'donebadge':'open'}">${t.kind==='dependency'?L('Dependency','Abhängigkeit'):t.kind==='commitment'?L('Commitment','Zusage'):L('Task','Aufgabe')}</span> ${L('Owner','Verantwortlich')}: ${safe(t.owner||L('unclear','unklar'))} · ${L('Due','Fällig')}: ${t.due?date(t.due):L('not specified','nicht angegeben')}</small><p>„${safe(L(t.detail_en,t.detail_de))}“</p></div></label>`).join('')}</div><p class="demo-note">${L('Checked items become tasks linked to this meeting when you save it. Uncheck anything Octopus got wrong.','Markierte Einträge werden beim Speichern zu Aufgaben, die mit diesem Meeting verknüpft sind. Entferne den Haken bei falsch Erkanntem.')}</p>`:`<p class="empty">${L('No tasks or commitments were spoken in this recording.','In dieser Aufnahme wurden keine Aufgaben oder Zusagen genannt.')}</p>`}<p class="demo-note">${L('The form below has been filled from this recording. Check the wording, then save the meeting.','Das Formular unten wurde aus dieser Aufnahme befüllt. Prüfe die Formulierung und speichere dann das Meeting.')}</p></div>`:''}</section>`}
function fillMeetingForm(){const f=$('#meeting-form'),r=recordingState.result;
if(!f||!r)return;
const prefill={title:L(r.title_en,r.title_de),notes:(language==='en'?r.minutes_en:r.minutes_de).join('\n'),decisions:(language==='en'?r.decisions_en:r.decisions_de).join('\n')};
f.elements.namedItem('title').value=prefill.title;
if(/^\d{4}-\d{2}-\d{2}$/.test(r.date||''))f.date.value=r.date;
if([...f.category.options].some(o=>o.value===r.department))f.category.value=r.department;
f.notes.value=prefill.notes;
f.decisions.value=prefill.decisions;
recordingState.prefill=prefill}
function mountRecordingPanel(){const form=$('#meeting-form');
if(!form||$('#recording-panel'))return;
const subtitle=$('#app .heading .subtitle');
if(subtitle)subtitle.textContent=L('Upload a Zoom recording and let Gemini write the transcript, or enter the minutes manually.','Lade eine Zoom-Aufnahme hoch und lass Gemini das Transkript schreiben, oder erfasse das Protokoll manuell.');
form.insertAdjacentHTML('beforebegin',recordingPanelHTML());
const panel=$('#recording-panel');
panel.querySelector('input[type=file]').onchange=e=>{recordingState.file=e.target.files[0]||null;recordingState.error='';recordingState.status='';
panel.outerHTML=recordingPanelHTML();mountRecordingWiring()};
mountRecordingWiring();
if(recordingState.result)fillMeetingForm()}
function mountRecordingWiring(){const panel=$('#recording-panel');
if(!panel)return;
panel.querySelector('input[type=file]').onchange=e=>{recordingState.file=e.target.files[0]||null;recordingState.error='';recordingState.status='';
panel.outerHTML=recordingPanelHTML();mountRecordingWiring()};
panel.querySelectorAll('[data-detected]').forEach(el=>el.onchange=()=>{el.checked?recordingState.selected.add(+el.dataset.detected):recordingState.selected.delete(+el.dataset.detected)});
panel.querySelector('#recording-form').onsubmit=async e=>{e.preventDefault();
if(!recordingState.file||recordingState.busy)return;
if(recordingState.file.size>30*1048576){recordingState.error=L('This file is larger than 30 MB. Export a shorter clip or audio only.','Diese Datei ist größer als 30 MB. Exportiere einen kürzeren Clip oder nur die Tonspur.');panel.outerHTML=recordingPanelHTML();mountRecordingWiring();return}
recordingState.busy=true;recordingState.error='';recordingState.result=null;
recordingState.status=L('Uploading the recording and asking Gemini to listen. This usually takes 20–90 seconds.','Aufnahme wird hochgeladen und Gemini hört zu. Das dauert meist 20–90 Sekunden.');
panel.outerHTML=recordingPanelHTML();mountRecordingWiring();
const body=new FormData();body.append('file',recordingState.file);body.append('people',JSON.stringify(people.map(p=>p.name)));body.append('meeting_date',$('#meeting-form')?.date?.value||'');
try{const response=await fetch('/api/transcribe',{method:'POST',body});
const data=await response.json().catch(()=>({}));
if(!response.ok)throw Error(data.detail||response.statusText);
recordingState.result=data;recordingState.status='';recordingState.selected=new Set((data.tasks||[]).map((t,i)=>i));
toast(L('Transcript ready · form pre-filled','Transkript fertig · Formular vorbefüllt'))}catch(error){recordingState.error=String(error.message||error)}
recordingState.busy=false;
const current=$('#recording-panel');
if(current){current.outerHTML=recordingPanelHTML();mountRecordingWiring();fillMeetingForm()}}}
function speakerIndex(name){const key=String(name||'').trim().toLowerCase();
if(!key)return onboarding.person;
let i=people.findIndex(p=>p.name.toLowerCase()===key||p.name.toLowerCase().split(/\s+/)[0]===key.split(/\s+/)[0]);
if(i>=0)return i;
people.push({name:String(name).trim(),role:L('Meeting participant','Meeting-Teilnehmer/in'),initial:String(name).trim().split(/\s+/).slice(0,2).map(s=>s[0]).join('').toUpperCase(),color:'#e1eadd'});
return people.length-1}
function attachRecording(m){const r=recordingState.result,f=$('#meeting-form'),p=recordingState.prefill;
if(!r||!m)return;
const same=(field,value)=>p&&f&&f.elements.namedItem(field).value.trim()===p[field].trim()&&value;
if(same('title',true)){m.title=r.title_de;translations[r.title_de]=r.title_en}
if(same('notes',true)){m.notes=[...r.minutes_de];r.minutes_de.forEach((de,i)=>translations[de]=r.minutes_en[i]||de);m.summary=r.summary_de;translations[r.summary_de]=r.summary_en}
if(same('decisions',true)){m.decisions=[...r.decisions_de];r.decisions_de.forEach((de,i)=>translations[de]=r.decisions_en[i]||de)}
m.turns=r.turns.map(t=>[t.time,speakerIndex(t.speaker),t.en,t.de,recordingKinds[t.kind]||'']);
m.people=[...new Set([...m.turns.map(t=>t[1]),onboarding.person])];
m.duration=Math.max(5,Math.ceil((()=>{const last=r.turns.at(-1)?.time||'0:00',[mm,ss]=last.split(':').map(Number);return (mm*60+(ss||0))/60})()));
m.recording=true;m.model=r.model;
const today=new Date().toISOString().slice(0,10),fallbackDue=(()=>{const d=new Date((m.date||today)+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+7);return d.toISOString().slice(0,10)})();
let created=0;
(r.tasks||[]).forEach((t,i)=>{if(!recordingState.selected.has(i))return;
const titleDe=String(t.title_de||t.title_en).trim().slice(0,150),titleEn=String(t.title_en||t.title_de).trim().slice(0,150);
if(!titleDe)return;translations[titleDe]=titleEn;
const detailDe=String(t.detail_de||t.detail_en||'').trim(),detailEn=String(t.detail_en||t.detail_de||'').trim();if(detailDe)translations[detailDe]=detailEn;
const task={id:Math.max(0,...tasks.map(t=>t.id))+1,title:titleDe,owner:t.owner?speakerIndex(t.owner):onboarding.person,meeting:m.id,projectId:null,due:/^\d{4}-\d{2}-\d{2}$/.test(t.due||'')?t.due:fallbackDue,description:detailDe,progress:0,status:'Offen',source:'recording',kind:t.kind,ownerUnclear:!t.owner,createdBy:onboarding.person,history:[{date:today,text:L('Extracted from the meeting recording by Gemini and confirmed on save.','Von Gemini aus der Meeting-Aufnahme extrahiert und beim Speichern bestätigt.')}]};
tasks.push(task);created++});
m.people=[...new Set([...m.people,...tasks.filter(t=>t.meeting===m.id).map(t=>t.owner)])];
if(created)setTimeout(()=>toast(L(`Meeting saved · ${created} task${created===1?'':'s'} created from the recording`,`Meeting gespeichert · ${created} Aufgabe${created===1?'':'n'} aus der Aufnahme erstellt`)),50);
recordingState.result=null;recordingState.file=null;recordingState.prefill=null;recordingState.selected=new Set()}
let meetingsBeforeSubmit=0;
document.addEventListener('submit',e=>{if(e.target.id==='meeting-form')meetingsBeforeSubmit=meetings.length},true);
document.addEventListener('submit',e=>{if(e.target.id==='meeting-form'&&meetings.length>meetingsBeforeSubmit)attachRecording(meetings.at(-1))});
const renderBeforeUpload=render;render=function(){renderBeforeUpload();
if(onboarding.ready&&view==='add')mountRecordingPanel()};
const meetingDetailBeforeUpload=meetingDetail;meetingDetail=function(id){meetingDetailBeforeUpload(id);
const m=meetings.find(m=>m.id===id);
if(m?.recording&&$('#detail').open){const label=$('#detail .transcript-label');
if(label)label.textContent=L('Transcribed from your uploaded recording by ','Aus deiner hochgeladenen Aufnahme transkribiert von ')+m.model+L('. Highlights were suggested by Gemini.','. Hervorhebungen wurden von Gemini vorgeschlagen.')}};
