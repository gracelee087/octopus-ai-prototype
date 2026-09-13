// Fictional demo conversations, 500–600 words per meeting in each language.
const conversationFixtures={
  "1": {
    "titleDe": "Auftakt zur Hoteleröffnung",
    "turns": [
      [
        "00:00",
        0,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "03:18",
        1,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "06:36",
        2,
        "Opening on 1 October; soft opening with 40 rooms on 24 September.",
        "Eröffnung am 1. Oktober; Soft Opening mit 40 Zimmern am 24. September.",
        "information"
      ],
      [
        "09:55",
        3,
        "Operations reports 148 approved rooms. Another 16 await final technical sign-off.",
        "Operations meldet 148 abgenommene Zimmer. 16 Zimmer warten auf die finale technische Abnahme.",
        "information"
      ],
      [
        "13:13",
        4,
        "Sales is prioritising local corporate clients. Revenue is preparing three pricing scenarios.",
        "Sales priorisiert lokale Firmenkunden. Revenue erstellt drei Preisszenarien.",
        "information"
      ],
      [
        "16:31",
        5,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "19:50",
        0,
        "Lena will take responsibility for this commitment: Approve the opening roadmap. The agreed due date is 2026-09-04. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Lena übernimmt diese Zusage: Eröffnungsfahrplan freigeben. Der vereinbarte Termin ist der 2026-09-04. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "23:08",
        1,
        "David will take responsibility for this commitment: Build a corporate pipeline with 30 target clients. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "David übernimmt diese Zusage: Firmenkunden-Pipeline mit 30 Zielkunden aufbauen. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "26:26",
        2,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "29:45",
        3,
        "Our decision is recorded as follows: The opening date remains 1 October.",
        "Unsere Entscheidung wird so festgehalten: Der Eröffnungstermin bleibt der 1. Oktober.",
        "decision"
      ],
      [
        "33:03",
        4,
        "Our decision is recorded as follows: The soft opening will start with 40 rooms and invited test guests.",
        "Unsere Entscheidung wird so festgehalten: Das Soft Opening startet mit 40 Zimmern und eingeladenen Testgästen.",
        "decision"
      ],
      [
        "36:21",
        5,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "39:40",
        0,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "42:58",
        1,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "46:16",
        2,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "49:35",
        3,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "52:53",
        4,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "56:11",
        5,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "2": {
    "titleDe": "Vertriebsstrategie & Preisgestaltung",
    "turns": [
      [
        "00:00",
        0,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "02:28",
        1,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "04:56",
        2,
        "Expected October occupancy is 62%. Our target is 72%.",
        "Die erwartete Oktober-Auslastung beträgt 62 %. Unser Ziel sind 72 %.",
        "information"
      ],
      [
        "07:25",
        0,
        "Nordlicht Consulting is requesting 120 room nights per month. Contract review is pending.",
        "Nordlicht Consulting fragt 120 Zimmernächte pro Monat an. Die Vertragsprüfung ist offen.",
        "information"
      ],
      [
        "09:53",
        1,
        "The flexible starting rate is €189. Corporate rates require a €145 minimum.",
        "Die flexible Einstiegsrate liegt bei 189 €. Firmenraten benötigen eine Untergrenze von 145 €.",
        "information"
      ],
      [
        "12:21",
        2,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "14:50",
        0,
        "Sofia will take responsibility for this commitment: Finalise the Q4 demand calendar. The agreed due date is 2026-09-09. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Sofia übernimmt diese Zusage: Nachfragekalender Q4 finalisieren. Der vereinbarte Termin ist der 2026-09-09. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "17:18",
        1,
        "David will take responsibility for this commitment: Send the Nordlicht corporate offer. The agreed due date is 2026-09-10. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "David übernimmt diese Zusage: Nordlicht-Firmenangebot versenden. Der vereinbarte Termin ist der 2026-09-10. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "19:46",
        2,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "22:15",
        0,
        "Our decision is recorded as follows: Flexible opening rate: from €189 per night.",
        "Unsere Entscheidung wird so festgehalten: Flexible Eröffnungsrate: ab 189 € pro Nacht.",
        "decision"
      ],
      [
        "24:43",
        1,
        "Our decision is recorded as follows: Corporate rates below €145 require the General Manager’s approval.",
        "Unsere Entscheidung wird so festgehalten: Firmenraten unter 145 € benötigen die Freigabe des General Managers.",
        "decision"
      ],
      [
        "27:11",
        2,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "29:40",
        0,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "32:08",
        1,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "34:36",
        2,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "37:05",
        0,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "39:33",
        1,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "42:01",
        2,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "3": {
    "titleDe": "Betrieb · Zimmerbereitschaft",
    "turns": [
      [
        "00:00",
        3,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "01:38",
        5,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "03:16",
        3,
        "148 of 164 rooms are approved. Door-lock tests are outstanding in 16 rooms.",
        "148 von 164 Zimmern sind abgenommen. Bei 16 Zimmern fehlen die Türschloss-Tests.",
        "information"
      ],
      [
        "04:55",
        5,
        "The supplier needs the updated room inventory before the linen quotation can be finalised.",
        "Der Lieferant benötigt die aktualisierte Zimmerliste, bevor das Wäscheangebot finalisiert werden kann.",
        "information"
      ],
      [
        "06:33",
        3,
        "Amira is arranging two trial shifts. Six service positions are still open.",
        "Amira organisiert zwei Probeschichten. Sechs Service-Stellen sind noch offen.",
        "information"
      ],
      [
        "08:11",
        5,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "09:50",
        3,
        "Jonas will take responsibility for this commitment: Obtain the final linen quotation. The agreed due date is 2026-09-11. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Jonas übernimmt diese Zusage: Finales Wäscheangebot einholen. Der vereinbarte Termin ist der 2026-09-11. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "11:28",
        5,
        "Jonas will take responsibility for this commitment: Send the updated room inventory. The agreed due date is 2026-09-10. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Jonas übernimmt diese Zusage: Aktualisierte Zimmerliste senden. Der vereinbarte Termin ist der 2026-09-10. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "13:06",
        3,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "14:45",
        5,
        "Our decision is recorded as follows: Door-lock tests take priority over the remaining decorative inspections.",
        "Unsere Entscheidung wird so festgehalten: Türschloss-Tests haben Priorität vor der dekorativen Restabnahme.",
        "decision"
      ],
      [
        "16:23",
        3,
        "Our decision is recorded as follows: An additional housekeeping shift will be scheduled for the soft opening.",
        "Unsere Entscheidung wird so festgehalten: Für das Soft Opening wird ein zusätzlicher Housekeeping-Dienst eingeplant.",
        "decision"
      ],
      [
        "18:01",
        5,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "19:40",
        3,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "21:18",
        5,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "22:56",
        3,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "24:35",
        5,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "26:13",
        3,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "27:51",
        5,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "4": {
    "titleDe": "Marke & Social-Media-Start",
    "turns": [
      [
        "00:00",
        0,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "02:45",
        1,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "05:30",
        3,
        "The content calendar includes twelve posts, four reels and the creator preview.",
        "Der Redaktionsplan umfasst zwölf Beiträge, vier Reels und die Creator Preview.",
        "information"
      ],
      [
        "08:15",
        4,
        "The photo shoot is scheduled for 15 September. Two suites must be approved by 14 September.",
        "Das Shooting ist für den 15. September geplant. Zwei Suiten müssen bis zum 14. September freigegeben sein.",
        "information"
      ],
      [
        "11:00",
        0,
        "David also needs the final photos for the corporate offer.",
        "David benötigt die finalen Fotos auch für das Firmenkunden-Angebot.",
        "information"
      ],
      [
        "13:45",
        1,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "16:30",
        3,
        "Mia will take responsibility for this commitment: Approve the 12-post content calendar. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Redaktionsplan mit 12 Beiträgen freigeben. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "19:15",
        4,
        "Jonas will take responsibility for this commitment: Approve two suites for the photo shoot. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Jonas übernimmt diese Zusage: Zwei Suiten für das Shooting freigeben. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "22:00",
        0,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "24:45",
        1,
        "Our decision is recorded as follows: Launch budget of €8,000 approved.",
        "Unsere Entscheidung wird so festgehalten: Launch-Budget von 8.000 € freigegeben.",
        "decision"
      ],
      [
        "27:30",
        3,
        "Our decision is recorded as follows: The creator preview will take place on 25 September with eight local creators.",
        "Unsere Entscheidung wird so festgehalten: Die Creator Preview findet am 25. September mit acht lokalen Creators statt.",
        "decision"
      ],
      [
        "30:15",
        4,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "33:00",
        0,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "35:45",
        1,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "38:30",
        3,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "41:15",
        4,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "44:00",
        0,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "46:45",
        1,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "5": {
    "titleDe": "Personal & Servicekultur",
    "turns": [
      [
        "00:00",
        3,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "02:11",
        5,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "04:23",
        3,
        "Four of the six open positions have candidates for a trial shift.",
        "Vier der sechs offenen Stellen haben Kandidaten für eine Probeschicht.",
        "information"
      ],
      [
        "06:35",
        5,
        "Jonas will provide check-in and complaint-handling procedures by 14 September.",
        "Jonas stellt die Check-in- und Reklamationsabläufe bis zum 14. September bereit.",
        "information"
      ],
      [
        "08:46",
        3,
        "All employees will complete service training before the soft opening.",
        "Alle Mitarbeitenden absolvieren vor dem Soft Opening ein Service-Training.",
        "information"
      ],
      [
        "10:58",
        5,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "13:10",
        3,
        "Jonas will take responsibility for this commitment: Document check-in and complaint-handling procedures. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Jonas übernimmt diese Zusage: Check-in- und Reklamationsabläufe dokumentieren. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "15:21",
        5,
        "Amira will take responsibility for this commitment: Prepare service training. The agreed due date is 2026-09-18. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Amira übernimmt diese Zusage: Service-Training vorbereiten. Der vereinbarte Termin ist der 2026-09-18. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "17:33",
        3,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "19:45",
        5,
        "Our decision is recorded as follows: Service training for all departments on 21 and 22 September.",
        "Unsere Entscheidung wird so festgehalten: Service-Training für alle Abteilungen am 21. und 22. September.",
        "decision"
      ],
      [
        "21:56",
        3,
        "Our decision is recorded as follows: Each shift will have a named service buddy.",
        "Unsere Entscheidung wird so festgehalten: Jede Schicht erhält einen benannten Service-Buddy.",
        "decision"
      ],
      [
        "24:08",
        5,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "26:20",
        3,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "28:31",
        5,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "30:43",
        3,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "32:55",
        5,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "35:06",
        3,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "37:18",
        5,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "6": {
    "titleDe": "Umsatz & Vertrieb · Wochenrunde",
    "turns": [
      [
        "00:00",
        0,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "01:55",
        1,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "03:50",
        2,
        "The demand calendar is complete. We expect high demand over the trade fair weekend.",
        "Der Nachfragekalender ist fertig. Für das Messewochenende erwarten wir eine hohe Nachfrage.",
        "information"
      ],
      [
        "05:45",
        4,
        "The Nordlicht offer has been sent; contract discussions follow on 16 September.",
        "Das Nordlicht-Angebot wurde verschickt; die Vertragsrunde folgt am 16. September.",
        "information"
      ],
      [
        "07:40",
        0,
        "We are keeping the corporate rate minimum at €145. Separate rates apply during the trade fair weekend.",
        "Wir halten die Firmenraten-Untergrenze bei 145 €. Am Messewochenende gelten separate Raten.",
        "information"
      ],
      [
        "09:35",
        1,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "11:30",
        2,
        "David will take responsibility for this commitment: Prepare Nordlicht contract discussions. The agreed due date is 2026-09-16. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "David übernimmt diese Zusage: Nordlicht-Vertragsrunde vorbereiten. Der vereinbarte Termin ist der 2026-09-16. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "13:25",
        4,
        "Sofia will take responsibility for this commitment: Test channel mapping and rates. The agreed due date is 2026-09-15. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Sofia übernimmt diese Zusage: Channel-Mapping und Raten testen. Der vereinbarte Termin ist der 2026-09-15. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "15:20",
        0,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "17:15",
        1,
        "Our decision is recorded as follows: Trade fair weekends are excluded from flat corporate rates.",
        "Unsere Entscheidung wird so festgehalten: Messewochenenden werden von pauschalen Firmenraten ausgenommen.",
        "decision"
      ],
      [
        "19:10",
        2,
        "Our decision is recorded as follows: Launch campaigns will link directly to the booking flow.",
        "Unsere Entscheidung wird so festgehalten: Launch-Kampagnen verlinken direkt auf die Buchungsstrecke.",
        "decision"
      ],
      [
        "21:05",
        4,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "23:00",
        0,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "24:55",
        1,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "26:50",
        2,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "28:45",
        4,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "30:40",
        0,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "32:35",
        1,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "7": {
    "titleDe": "Lenkungskreis zur Hoteleröffnung",
    "turns": [
      [
        "00:00",
        0,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "03:12",
        1,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "06:24",
        2,
        "The room inventory was sent yesterday. The final linen quotation is still outstanding.",
        "Die Zimmerliste wurde gestern verschickt. Das finale Wäscheangebot fehlt weiterhin.",
        "information"
      ],
      [
        "09:37",
        3,
        "Jonas will follow up with the supplier. The order must wait for price approval.",
        "Jonas fasst beim Lieferanten nach. Die Bestellung darf erst nach Preisfreigabe ausgelöst werden.",
        "information"
      ],
      [
        "12:49",
        4,
        "Without suite approval on Monday, the photo-shoot date is at risk.",
        "Ohne Freigabe der Suiten am Montag gefährden wir den Shooting-Termin.",
        "information"
      ],
      [
        "16:01",
        5,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "19:14",
        0,
        "Lena will take responsibility for this commitment: Give final approval for the supplier price. The agreed due date is 2026-09-15. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Lena übernimmt diese Zusage: Lieferantenpreis final freigeben. Der vereinbarte Termin ist der 2026-09-15. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "22:26",
        1,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "25:38",
        2,
        "Our decision is recorded as follows: Place the linen order only after final price approval.",
        "Unsere Entscheidung wird so festgehalten: Wäschebestellung erst nach finaler Preisfreigabe.",
        "decision"
      ],
      [
        "28:51",
        3,
        "Our decision is recorded as follows: The two photo-shoot suites will be signed off before the remaining work.",
        "Unsere Entscheidung wird so festgehalten: Die zwei Shooting-Suiten werden vor den übrigen Restarbeiten abgenommen.",
        "decision"
      ],
      [
        "32:03",
        4,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "35:15",
        5,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "38:28",
        0,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "41:40",
        1,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "44:52",
        2,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "48:05",
        3,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "51:17",
        4,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "8": {
    "titleDe": "Gästereise · Probedurchlauf",
    "turns": [
      [
        "00:00",
        3,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "02:28",
        4,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "04:56",
        5,
        "Test check-in takes eight minutes on average; the target is five.",
        "Der Test-Check-in dauert im Schnitt acht Minuten; Ziel sind fünf Minuten.",
        "information"
      ],
      [
        "07:25",
        3,
        "The service buddies will support the next run.",
        "Die Service-Buddies begleiten den nächsten Durchlauf.",
        "information"
      ],
      [
        "09:53",
        4,
        "The pre-arrival email still needs parking information.",
        "Die Pre-Arrival-Mail benötigt noch einen Hinweis zum Parken.",
        "information"
      ],
      [
        "12:21",
        5,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "14:50",
        3,
        "Jonas will take responsibility for this commitment: Prioritise dry-run issues. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Jonas übernimmt diese Zusage: Dry-Run-Fehler priorisieren. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "17:18",
        4,
        "Mia will take responsibility for this commitment: Add parking information to the pre-arrival email. The agreed due date is 2026-09-15. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Parkhinweis in Pre-Arrival-Mail ergänzen. Der vereinbarte Termin ist der 2026-09-15. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "19:46",
        5,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "22:15",
        3,
        "Our decision is recorded as follows: Target for a regular check-in: no more than five minutes.",
        "Unsere Entscheidung wird so festgehalten: Ziel für den regulären Check-in: maximal fünf Minuten.",
        "decision"
      ],
      [
        "24:43",
        4,
        "Our decision is recorded as follows: A second dry run will take place on 18 September.",
        "Unsere Entscheidung wird so festgehalten: Ein zweiter Dry Run findet am 18. September statt.",
        "decision"
      ],
      [
        "27:11",
        5,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "29:40",
        3,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "32:08",
        4,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "34:36",
        5,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "37:05",
        3,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "39:33",
        4,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "42:01",
        5,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "9": {
    "titleDe": "Sommerkomfort · Lieferantenprüfung",
    "turns": [
      [
        "00:00",
        0,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "02:09",
        3,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "04:18",
        4,
        "For summer 2027, we are looking for high-quality, breathable quilts with a lightweight cotton filling.",
        "Für die Sommersaison 2027 suchen wir hochwertige, atmungsaktive Decken mit einer leichten Baumwollfüllung.",
        "information"
      ],
      [
        "06:28",
        0,
        "The supplier we discussed is Elbweave Textiles. Our contact is Clara Beck. The model is AirCotton 200.",
        "Der besprochene Lieferant heißt Elbweave Textiles. Die Ansprechpartnerin ist Clara Beck. Das Modell heißt AirCotton 200.",
        "information"
      ],
      [
        "08:37",
        3,
        "The summer quilts must be washable at 60°C. Before ordering, we will test two samples for comfort and wash durability.",
        "Die Sommerdecken müssen bei 60 °C waschbar sein. Vor einer Bestellung prüfen wir zwei Muster auf Komfort und Waschbeständigkeit.",
        "information"
      ],
      [
        "10:46",
        4,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "12:56",
        0,
        "Jonas will take responsibility for this commitment: Request two AirCotton 200 samples from Elbweave. The agreed due date is 2026-09-16. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Jonas übernimmt diese Zusage: Zwei AirCotton-200-Muster bei Elbweave anfordern. Der vereinbarte Termin ist der 2026-09-16. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "15:05",
        3,
        "Mia will take responsibility for this commitment: Clarify summer quilt material sourcing for guest communication. The agreed due date is 2026-09-17. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Materialherkunft der Sommerdecken für die Gästekommunikation klären. Der vereinbarte Termin ist der 2026-09-17. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "17:15",
        4,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "19:24",
        0,
        "Our decision is recorded as follows: AirCotton 200 from Elbweave Textiles has been shortlisted for sampling.",
        "Unsere Entscheidung wird so festgehalten: AirCotton 200 von Elbweave Textiles kommt in die Musterauswahl.",
        "decision"
      ],
      [
        "21:33",
        3,
        "Our decision is recorded as follows: An order requires sample testing and price approval first.",
        "Unsere Entscheidung wird so festgehalten: Eine Bestellung erfolgt erst nach Musterprüfung und Preisfreigabe.",
        "decision"
      ],
      [
        "23:43",
        4,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "25:52",
        0,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "28:01",
        3,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "30:11",
        4,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "32:20",
        0,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "10": {
    "titleDe": "Montagsrunde · Direktbuchungsstart",
    "turns": [
      [
        "00:00",
        1,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "01:38",
        2,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "03:16",
        4,
        "All metrics refer to stays from 5 to 11 October, not completed September stays.",
        "Alle Kennzahlen beziehen sich auf Aufenthalte vom 5. bis 11. Oktober, nicht auf tatsächliche September-Aufenthalte.",
        "information"
      ],
      [
        "04:55",
        1,
        "Sofia provides net room revenue and booked room nights. Mia tests campaign parameters. David checks corporate enquiries.",
        "Sofia liefert Netto-Zimmerumsatz und gebuchte Zimmernächte. Mia testet Kampagnenparameter. David prüft Firmenanfragen.",
        "information"
      ],
      [
        "06:33",
        2,
        "The project team maintains the working conversation. Lena receives the Friday summary with metrics and decisions.",
        "Der Mitarbeiter-Dialog bleibt im Projektteam. Lena erhält am Freitag die Zusammenfassung mit Kennzahlen und Entscheidungen.",
        "information"
      ],
      [
        "08:11",
        4,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "09:50",
        1,
        "Mia will take responsibility for this commitment: Approve the 12-post content calendar. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Redaktionsplan mit 12 Beiträgen freigeben. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "11:28",
        2,
        "Mia will take responsibility for this commitment: Set up direct-booking tracking. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Direktbuchungs-Tracking einrichten. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "13:06",
        4,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "14:45",
        1,
        "Our decision is recorded as follows: Weekly snapshots compare the same stay dates.",
        "Unsere Entscheidung wird so festgehalten: Für die Wochenübersicht wird immer derselbe Aufenthaltszeitraum verglichen.",
        "decision"
      ],
      [
        "16:23",
        2,
        "Our decision is recorded as follows: Paid campaigns start only after booking tracking is verified.",
        "Unsere Entscheidung wird so festgehalten: Bezahlte Kampagnen starten erst nach geprüftem Buchungs-Tracking.",
        "decision"
      ],
      [
        "18:01",
        4,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "19:40",
        1,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "21:18",
        2,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "22:56",
        4,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "24:35",
        1,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "26:13",
        2,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "27:51",
        4,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "11": {
    "titleDe": "Mittwochsprüfung · Zuordnung & Buchungsablauf",
    "turns": [
      [
        "00:00",
        1,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "00:48",
        2,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "01:36",
        1,
        "Channel attribution works on direct entry but loses a parameter when the language is changed.",
        "Die Kanalzuordnung funktioniert beim direkten Einstieg, verliert aber beim Sprachwechsel einen Parameter.",
        "information"
      ],
      [
        "02:25",
        2,
        "Paid campaigns remain paused until the error is fixed.",
        "Bezahlte Kampagnen bleiben bis zur Fehlerbehebung pausiert.",
        "information"
      ],
      [
        "03:13",
        1,
        "Parking information remains a separate existing communication task.",
        "Der Parkhinweis wird als eigene bestehende Kommunikationsaufgabe weitergeführt.",
        "information"
      ],
      [
        "04:01",
        2,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "04:50",
        1,
        "Mia will take responsibility for this commitment: Set up direct-booking tracking. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Direktbuchungs-Tracking einrichten. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "05:38",
        2,
        "Mia will take responsibility for this commitment: Add parking information to the pre-arrival email. The agreed due date is 2026-09-15. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Parkhinweis in Pre-Arrival-Mail ergänzen. Der vereinbarte Termin ist der 2026-09-15. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "06:26",
        1,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "07:15",
        2,
        "Our decision is recorded as follows: Language switching is a required tracking test case.",
        "Unsere Entscheidung wird so festgehalten: Sprachwechsel wird als Pflichtfall in den Tracking-Test aufgenommen.",
        "decision"
      ],
      [
        "08:03",
        1,
        "Our decision is recorded as follows: No additional media budget before tracking is verified.",
        "Unsere Entscheidung wird so festgehalten: Kein zusätzliches Mediabudget vor geprüftem Tracking.",
        "decision"
      ],
      [
        "08:51",
        2,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "09:40",
        1,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "10:28",
        2,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "11:16",
        1,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "12:05",
        2,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "12:53",
        1,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "13:41",
        2,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  },
  "12": {
    "titleDe": "Freitagsübergabe · Kennzahlen & Entscheidungen",
    "turns": [
      [
        "00:00",
        1,
        "Good morning, everyone. How are you? Before we start, does anyone have something urgent from the hotel floor that changes today’s priorities? I have the shared project notes open. Let us leave this meeting with named owners and dates, so the next shift can understand what we agreed without having to call each of us.",
        "Guten Morgen zusammen. Wie geht es euch? Bevor wir anfangen: Gibt es etwas Dringendes aus dem Hotelbetrieb, das unsere heutigen Prioritäten verändert? Ich habe die gemeinsamen Projektnotizen geöffnet. Wir sollten das Meeting mit klaren Verantwortlichen und Terminen beenden. Dann versteht auch die nächste Schicht unsere Vereinbarungen, ohne uns einzeln anrufen zu müssen.",
        ""
      ],
      [
        "00:48",
        2,
        "Morning! Good, thanks. It has been a busy start, but nothing needs an emergency decision. I would like to check the dependencies as well as the task list. Something can look nearly finished in our tracker and still be waiting for a colleague’s approval. That is the part I do not want us to overlook today.",
        "Morgen! Gut, danke. Der Start war lebhaft, aber wir brauchen keine sofortige Notfallentscheidung. Ich möchte neben der Aufgabenliste auch die Abhängigkeiten prüfen. Eine Aufgabe kann im System fast fertig aussehen und trotzdem noch auf die Freigabe eines Kollegen warten. Genau diesen Punkt sollten wir heute nicht übersehen oder versehentlich als erledigt betrachten.",
        ""
      ],
      [
        "01:36",
        4,
        "804 booked room nights out of 1,148 available room nights give 70.03% booked occupancy.",
        "804 gebuchte Zimmernächte ergeben bei 1.148 verfügbaren Zimmernächten 70,03 % gebuchte Auslastung.",
        "information"
      ],
      [
        "02:25",
        1,
        "160,000 euros in net room revenue give 199.00 euros ADR and 139.37 euros RevPAR.",
        "160.000 Euro Netto-Zimmerumsatz ergeben 199,00 Euro ADR und 139,37 Euro RevPAR.",
        "information"
      ],
      [
        "03:13",
        2,
        "342 direct room nights represent a 42.54% direct share.",
        "342 direkt gebuchte Zimmernächte entsprechen 42,54 % Direktanteil.",
        "information"
      ],
      [
        "04:01",
        4,
        "That makes sense. From a guest’s perspective, the handover between departments should be invisible. If Reception gives one answer and the website gives another, the guest has to do our coordination for us. Could we agree which document is authoritative and keep the latest approved wording there? A message in a chat should not quietly replace an approved instruction.",
        "Das ist sinnvoll. Aus Sicht eines Gastes sollte der Übergang zwischen unseren Abteilungen reibungslos sein. Wenn die Rezeption etwas anderes sagt als die Website, muss der Gast unsere Abstimmung übernehmen. Können wir festlegen, welches Dokument verbindlich ist, und dort den freigegebenen Wortlaut pflegen? Eine beiläufige Chatnachricht darf eine bestätigte Anweisung nicht unbemerkt ersetzen.",
        ""
      ],
      [
        "04:50",
        1,
        "Mia will take responsibility for this commitment: Approve the 12-post content calendar. The agreed due date is 2026-09-14. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Redaktionsplan mit 12 Beiträgen freigeben. Der vereinbarte Termin ist der 2026-09-14. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "05:38",
        2,
        "Mia will take responsibility for this commitment: Plan the creator preview with eight confirmations. The agreed due date is 2026-09-18. Please keep that date on the task and flag any dependency before it becomes a missed deadline.",
        "Mia übernimmt diese Zusage: Creator Preview mit acht Zusagen planen. Der vereinbarte Termin ist der 2026-09-18. Bitte haltet diesen Termin bei der Aufgabe fest und meldet Abhängigkeiten, bevor daraus eine Terminüberschreitung entsteht.",
        "task"
      ],
      [
        "06:26",
        4,
        "Yes. Please also distinguish a request from a confirmation. A supplier saying that something should be possible is useful context, but it is not a delivery commitment. The same applies to a potential booking or an approval request. We can record the opportunity and the uncertainty together, then update the existing record when the written confirmation arrives.",
        "Ja. Bitte unterscheidet außerdem zwischen einer Anfrage und einer Bestätigung. Wenn ein Lieferant sagt, dass etwas wahrscheinlich möglich ist, hilft uns das als Kontext. Es ist aber noch keine Lieferzusage. Dasselbe gilt für mögliche Buchungen oder angefragte Freigaben. Wir können die Chance und die Unsicherheit gemeinsam festhalten und den bestehenden Eintrag nach der schriftlichen Bestätigung aktualisieren.",
        ""
      ],
      [
        "07:15",
        1,
        "Our decision is recorded as follows: The report separates forecast data from project progress.",
        "Unsere Entscheidung wird so festgehalten: Der Bericht zeigt Forecast-Daten und Projektfortschritt in getrennten Abschnitten.",
        "decision"
      ],
      [
        "08:03",
        2,
        "Our decision is recorded as follows: Tracking approval remains a separate decision gate.",
        "Unsere Entscheidung wird so festgehalten: Die Tracking-Freigabe bleibt ein eigenständiger Entscheidungspunkt.",
        "decision"
      ],
      [
        "08:51",
        4,
        "Can we pause on ownership for a moment? If someone is unavailable, forwarding the message is not enough. The replacement needs the reason, the source document and the expected result. I would rather have a short, clear handover than another duplicate task. We should keep the original meeting attached, so the next person can understand why the work matters.",
        "Können wir kurz bei der Verantwortung bleiben? Wenn jemand nicht verfügbar ist, reicht das Weiterleiten einer Nachricht nicht. Die Vertretung braucht den Grund, das Quelldokument und das erwartete Ergebnis. Mir ist eine kurze, klare Übergabe lieber als eine doppelte Aufgabe. Das ursprüngliche Meeting sollte verknüpft bleiben, damit die nächste Person auch den Hintergrund versteht.",
        ""
      ],
      [
        "09:40",
        1,
        "Agreed. Let us review the practical impact before we close. What would the next shift actually need to know? We should separate confirmed decisions from open questions, and keep any guest-facing promise within what we can deliver. If the situation changes after this call, add the missing context to this meeting and link it back to the project.",
        "",
        ""
      ],
      [
        "10:28",
        2,
        "One more practical point: please put evidence next to the update. A checked document, a supplier reply or a completed test tells the next person much more than the word done. If evidence is missing, keep the question visible instead of guessing. That will make our next review shorter and more useful.",
        "",
        ""
      ],
      [
        "11:16",
        4,
        "",
        "Einverstanden. Prüfen wir vor dem Abschluss noch die praktische Auswirkung. Was muss die nächste Schicht tatsächlich wissen? Wir sollten bestätigte Entscheidungen von offenen Fragen trennen und Gästen nur das versprechen, was wir leisten können. Wenn sich nach diesem Gespräch etwas ändert, ergänzt bitte den Kontext bei diesem Meeting und verknüpft ihn wieder mit dem Projekt.",
        ""
      ],
      [
        "12:05",
        1,
        "",
        "Noch ein praktischer Punkt: Bitte hinterlegt den Beleg direkt beim Update. Ein geprüftes Dokument, eine Lieferantenantwort oder ein abgeschlossener Test sagt der nächsten Person viel mehr als das Wort erledigt. Wenn ein Beleg fehlt, lassen wir die Frage sichtbar, statt zu raten. Dadurch wird unsere nächste Prüfung kürzer und hilfreicher.",
        ""
      ],
      [
        "12:53",
        2,
        "",
        "Damit kann ich arbeiten. Wenn wir etwas verschieben müssen, sollte der ursprüngliche Termin im Verlauf sichtbar bleiben. Ein neuer Termin braucht eine Begründung. Sonst sieht das Projekt besser aus, obwohl die Abhängigkeit unverändert ist. Zeigen wir dem Team, was sich geändert hat und wer die weitere Klärung übernimmt.",
        ""
      ],
      [
        "13:41",
        4,
        "Thanks, everyone. The owners and next steps are clear. Please add any later clarification to the project. Speak soon.",
        "Danke zusammen. Verantwortliche und nächste Schritte sind klar. Ergänzt spätere Klarstellungen bitte beim Projekt. Bis bald.",
        ""
      ]
    ]
  }
};
