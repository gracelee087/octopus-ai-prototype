// "Ask Octopus" answers with Gemini over the meetings, tasks, projects and memories the signed-in
// person is allowed to see. Falls back to the local keyword search when the server is unavailable.
const chatUserKey=()=>`${onboarding.organization}|${onboarding.email||people[onboarding.person]?.name||''}`;
const loadedChats=new Set();
async function loadConversation(){const key=chatUserKey();if(loadedChats.has(key))return;loadedChats.add(key);
try{const data=await (await fetch('/api/conversations?user='+encodeURIComponent(key))).json();const c=conversation();
if(c.messages.length||!data.messages?.length)return;
for(const x of data.messages){c.messages.push({role:'user',text:x.question});c.messages.push({role:'assistant',answer:{kind:'gemini',text:x.answer,meetingIds:x.meetingIds||[],taskIds:x.taskIds||[],model:x.model}})}
if(view==='assistant')render()}catch{}}
const enterBeforeAsk=enterWorkspace;enterWorkspace=function(person){enterBeforeAsk(person);loadConversation()};
function askContext(){const ms=meetings.map(m=>({id:m.id,title:tr(m.title),date:m.date,category:m.category,participants:m.people.map(i=>people[i]?.name).filter(Boolean),summary:tr(m.summary),decisions:(m.decisions||[]).map(tr),minutes:(m.notes||[]).slice(0,8).map(tr),transcript:(m.turns||[]).map(t=>`${people[t[1]]?.name||'?'}: ${language==='en'?t[2]:t[3]}`).join('\n').slice(0,2500)}));
const ts=tasks.map(t=>({id:t.id,title:tr(t.title),owner:people[t.owner]?.name,due:t.due,status:tr(t.status),progress:t.progress,meetingId:t.meeting,project:t.projectId||null,notes:t.description||''}));
const ps=(typeof activeHotelProjects==='function'?activeHotelProjects():[]).map(p=>{const s=projectStats(p);return {id:p.id,name:pickText(p.name),lead:people[p.lead]?.name,due:p.due,progress:Math.round(s.progress),completed:s.completed,count:s.count,blocked:s.blocked}});
const mem=(typeof projectMemories!=='undefined'?projectMemories:[]).map(x=>({meetingId:x.meetingId,project:x.projectId,by:people[x.by]?.name,kind:x.kind,text:x.text,due:x.due}));
return {user:{name:people[onboarding.person]?.name,role:people[onboarding.person]?.role,isManager:onboarding.role==='manager'},today:new Date().toISOString().slice(0,10),meetings:ms,tasks:ts,projects:ps,memories:mem}}
function askSourcesHTML(a){let html='';
const ms=(a.meetingIds||[]).map(id=>meetings.find(m=>m.id===id)).filter(Boolean),ts=(a.taskIds||[]).map(id=>tasks.find(t=>t.id===id)).filter(Boolean);
if(ms.length||ts.length)html+=`<div class="answer-source"><small>${L('SOURCES','QUELLEN')}</small>${ms.map(m=>`<button data-source="${m.id}">${safe(tr(m.title))} · ${date(m.date)} ↗</button>`).join('')}${ts.map(t=>`<button data-task="${t.id}">✓ ${safe(tr(t.title))} · ${safe(people[t.owner].name)} · ${date(t.due)} ↗</button>`).join('')}</div>`;
if(ms[0]&&canReadTranscript(ms[0]))html+=graphHTML(ms[0]);
return html}
function sharedMeetingDialog(m){const linked=tasks.filter(t=>t.meeting===m.id||m.relatedTaskIds?.includes(t.id));
showDialog(tr(m.title),`<span class="badge open">${L('Shared via Octopus memory · read-only','Über das Octopus-Gedächtnis geteilt · nur lesen')}</span><div class="transcript-participants">${m.people.map(i=>`<span>${avatar(i)} ${safe(people[i].name)}</span>`).join('')}</div><h3>${L('Summary','Zusammenfassung')}</h3><p>${safe(tr(m.summary))}</p><h3>${L('Decisions','Entscheidungen')}</h3><ul>${(m.decisions||[]).map(d=>`<li>${safe(tr(d))}</li>`).join('')||`<li>${L('No decisions recorded.','Keine Entscheidungen erfasst.')}</li>`}</ul><h3>${L('Minutes','Protokoll')}</h3>${(m.notes||[]).map(n=>`<p class="quote">${safe(tr(n))}</p>`).join('')}<h3>${L('Tasks from this meeting','Aufgaben aus diesem Meeting')}</h3>${linked.map(t=>`<div class="extracted-task"><button class="textlink" data-task="${t.id}">${safe(tr(t.title))} →</button><small>${safe(people[t.owner].name)} · ${L('Due','Fällig')}: ${date(t.due)} · ${safe(tr(t.status))}</small></div>`).join('')||`<p>${L('No tasks recorded.','Keine Aufgaben erfasst.')}</p>`}`,`${longDate(m.date)} · ${m.time} · ${m.duration} ${L('minutes','Minuten')}`)}
function sharedTaskDialog(t){const m=meetings.find(m=>m.id===t.meeting);
showDialog(tr(t.title),`<span class="badge open">${L('Shared via Octopus memory · read-only','Über das Octopus-Gedächtnis geteilt · nur lesen')}</span><p>${safe(people[t.owner].name)} · ${safe(people[t.owner].role)}</p><p>${L('Due','Fällig')}: ${date(t.due)} · ${safe(tr(t.status))} · ${t.progress}%</p>${t.description?`<p>${safe(tr(t.description))}</p>`:''}${m?`<h3>${L('Source meeting','Quellmeeting')}</h3><button class="textlink" data-source="${m.id}">${safe(tr(m.title))} · ${date(m.date)} ↗</button>`:''}<h3>${L('History','Verlauf')}</h3>${(t.history||[]).map(h=>`<div class="event"><b>${date(h.date)}</b><p>${safe(tr(h.text))}</p></div>`).join('')}`)}
const meetingDetailBeforeAsk=meetingDetail;meetingDetail=function(id){const m=meetings.find(m=>m.id===id);
if(m&&!canReadTranscript(m)){sharedMeetingDialog(m);return}meetingDetailBeforeAsk(id)};
const taskDetailBeforeAsk=taskDetail;taskDetail=function(id){const t=tasks.find(t=>t.id===id);
if(t&&!permittedTask(t)){sharedTaskDialog(t);return}taskDetailBeforeAsk(id)};
document.addEventListener('click',e=>{const b=e.target.closest('#detail [data-source]');if(b)meetingDetail(+b.dataset.source)});
const answerBeforeGemini=answerHTML;answerHTML=function(a){if(a.kind!=='gemini')return answerBeforeGemini(a);
const text=String(a.text||'').split(/\n{2,}|\n(?=[-•*] )/).map(p=>p.trim()).filter(Boolean).map(p=>p.startsWith('- ')||p.startsWith('• ')||p.startsWith('* ')?`<ul>${p.split(/\n/).map(l=>`<li>${safe(l.replace(/^[-•*]\s*/,''))}</li>`).join('')}</ul>`:`<p>${safe(p)}</p>`).join('');
return `${a.pending?`<p class="muted">${L('Octopus is reading your meetings …','Octopus liest deine Meetings …')}</p>`:text}${askSourcesHTML(a)}${a.model?`<small class="muted">${safe(a.model)}</small>`:''}`};
submitQuestion=async function(q){q=String(q).trim();
if(!q||q.length>1500)return;
const c=conversation();
c.messages.push({role:'user',text:q});
const placeholder={role:'assistant',answer:{kind:'gemini',pending:true,text:''}};
c.messages.push(placeholder);
c.draft='';view='assistant';
render();
try{const history=c.messages.slice(-7,-2).map(m=>m.role==='user'?{role:'user',text:m.text}:{role:'assistant',text:m.answer.kind==='gemini'?m.answer.text:L(m.answer.en||'',m.answer.de||'')});
const response=await fetch('/api/ask',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:q,language,history,context:askContext()})});
const data=await response.json();
if(!response.ok)throw Error(data.detail||response.statusText);
placeholder.answer={kind:'gemini',text:data.answer,meetingIds:data.meetingIds||[],taskIds:data.taskIds||[],model:data.model};
if(data.meetingIds?.[0])c.lastMeeting=data.meetingIds[0];
fetch('/api/conversations',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:chatUserKey(),exchange:{question:q,answer:data.answer,meetingIds:data.meetingIds||[],taskIds:data.taskIds||[],language,model:data.model}})}).catch(()=>{})}catch(error){placeholder.answer=answerQuestion(q)}
if(view==='assistant')render();$('#agent-question')?.focus()};
