const RANDOM_CATEGORY = "Random Inspiration";

const defaultControls = {
  "OSC 1 Tune": "12 Uhr",
  "OSC 2 Tune": "12 Uhr",
  "FM Amount": "Aus",
  "Pitch Mod": "10 Uhr",
  "OSC Mix": "Mitte",
  "Noise Level": "Aus",
  "Mixer Drive": "11 Uhr",
  "Accent Amount": "12 Uhr",
  "VCF Cutoff": "12 Uhr",
  Resonance: "9 Uhr",
  "VCF Mod": "10 Uhr",
  "Filter Env Amt": "11 Uhr",
  "VCA Decay": "11 Uhr",
  "VCF Decay": "11 Uhr",
  Snappy: "10 Uhr",
  Tempo: "120 BPM",
};

const patchLibrary = [
  {
    id: "kick-sub-foundation",
    category: "Kick Drum",
    name: "Sub Foundation Kick",
    description:
      "Tiefe, runde Kick mit kurzem Filter-Punch und kontrolliertem Sub-Ende.",
    parameters: [
      { control: "OSC 1 Tune", value: "8 Uhr", note: "tiefer Grundton" },
      { control: "OSC 2 Tune", value: "9 Uhr", note: "leicht darüber für Körper" },
      { control: "FM Amount", value: "9 Uhr", note: "nur ein Hauch Click" },
      { control: "OSC Mix", value: "13 Uhr", note: "mehr OSC 1" },
      { control: "Noise Level", value: "Aus", note: "sauberer Attack" },
      { control: "Mixer Drive", value: "11 Uhr", note: "leichte Sättigung" },
      { control: "VCF Cutoff", value: "9 Uhr", note: "dumpfer Punch" },
      { control: "Resonance", value: "10 Uhr", note: "keine Pfeifresonanz" },
      { control: "VCF Mod", value: "11 Uhr", note: "Envelope drückt Transient" },
      { control: "Filter Env Amt", value: "12 Uhr", note: "klarer Anriss" },
      { control: "VCA Decay", value: "10 Uhr", note: "kurz und straff" },
      { control: "VCF Decay", value: "9 Uhr", note: "kurzer Schlag" },
      { control: "Accent Amount", value: "12 Uhr", note: "Step 1 hervorheben" },
      { control: "Tempo", value: "126 BPM", note: "clubtauglicher Start" },
    ],
    sequencer: {
      pitch: ["12 Uhr", "12 Uhr", "11 Uhr", "12 Uhr", "12 Uhr", "11 Uhr", "12 Uhr", "10 Uhr"],
      velocity: ["hoch", "niedrig", "mittel", "niedrig", "hoch", "niedrig", "mittel", "accent"],
    },
    patchCables: [
      { from: "VEL OUT", to: "VCF MOD", color: "#ff9f1c" },
      { from: "PITCH OUT", to: "OSC 1 CV", color: "#2ec4b6" },
    ],
    performanceTips: [
      "VCF Cutoff langsam oeffnen, um von weich zu aggressiv zu fahren.",
      "VCA Decay minimal verlaengern, wenn der Mix mehr Body braucht.",
      "Accent Amount hochziehen, falls einzelne Steps staerker springen sollen.",
    ],
  },
  {
    id: "kick-hard-snap",
    category: "Kick Drum",
    name: "Hard Snap Kick",
    description:
      "Trockenere Kick mit knackigem Anriss und etwas mehr FM-Haerte fuer moderne Techno-Impulse.",
    parameters: [
      { control: "OSC 1 Tune", value: "9 Uhr", note: "solider Low-End-Kern" },
      { control: "OSC 2 Tune", value: "11 Uhr", note: "Attack-Haerte" },
      { control: "FM Amount", value: "11 Uhr", note: "transienter Biss" },
      { control: "Pitch Mod", value: "12 Uhr", note: "klassischer Downward-Sweep" },
      { control: "OSC Mix", value: "12 Uhr", note: "beide Oszillatoren praegnant" },
      { control: "Noise Level", value: "8 Uhr", note: "minimaler Luftanteil" },
      { control: "Mixer Drive", value: "13 Uhr", note: "harter Druck" },
      { control: "VCF Cutoff", value: "10 Uhr", note: "mehr Klick im Oberton" },
      { control: "Resonance", value: "9 Uhr", note: "stabil und direkt" },
      { control: "VCA Decay", value: "9 Uhr", note: "sehr kurz" },
      { control: "VCF Decay", value: "10 Uhr", note: "knackiger Snap" },
      { control: "Snappy", value: "11 Uhr", note: "zusatzliche Attack-Kante" },
      { control: "Tempo", value: "132 BPM", note: "harter Groove" },
    ],
    sequencer: {
      pitch: ["12 Uhr", "11 Uhr", "12 Uhr", "10 Uhr", "12 Uhr", "11 Uhr", "12 Uhr", "9 Uhr"],
      velocity: ["accent", "mittel", "hoch", "niedrig", "accent", "mittel", "hoch", "mittel"],
    },
    patchCables: [
      { from: "VEL OUT", to: "VCA CV", color: "#ff6b6b" },
      { from: "PITCH OUT", to: "OSC 2 FM", color: "#4ecdc4" },
    ],
    performanceTips: [
      "FM Amount ist der schnellste Weg zwischen rund und brutal.",
      "Pitch Mod in kleinen Bewegungen veraendern, sonst kippt die Kick schnell in Tom-Gebiet.",
      "Mixer Drive vor dem Drop leicht anheben.",
    ],
  },
  {
    id: "bass-drum-rumble",
    category: "Bass Drum Variation",
    name: "Rumble Seed",
    description:
      "Tiefe Bass Drum mit etwas laengerem Tail als Ausgangspunkt fuer dubbige oder industrialnahe Grooves.",
    parameters: [
      { control: "OSC 1 Tune", value: "8 Uhr", note: "maximaler Tiefgang" },
      { control: "OSC 2 Tune", value: "10 Uhr", note: "leichter Schimmer ueber dem Sub" },
      { control: "FM Amount", value: "10 Uhr", note: "feine Textur" },
      { control: "Noise Level", value: "9 Uhr", note: "sanfter Luftanteil" },
      { control: "Mixer Drive", value: "12 Uhr", note: "Druck ohne Zerfall" },
      { control: "VCF Cutoff", value: "8 Uhr", note: "sehr dunkel" },
      { control: "Resonance", value: "11 Uhr", note: "mehr Bauch im Sweep" },
      { control: "VCF Mod", value: "10 Uhr", note: "subtile Bewegung" },
      { control: "VCA Decay", value: "12 Uhr", note: "laengeres Tail" },
      { control: "VCF Decay", value: "11 Uhr", note: "klingt nach" },
      { control: "Tempo", value: "118 BPM", note: "mehr Raum zwischen den Schlaegen" },
    ],
    sequencer: {
      pitch: ["12 Uhr", "10 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "10 Uhr", "11 Uhr", "9 Uhr"],
      velocity: ["hoch", "niedrig", "mittel", "niedrig", "hoch", "niedrig", "mittel", "accent"],
    },
    patchCables: [
      { from: "VCF OUT", to: "EXT AUDIO IN", color: "#7b61ff" },
      { from: "VEL OUT", to: "VCF MOD", color: "#f4a261" },
    ],
    performanceTips: [
      "Resonance langsam anheben, um mehr Rumble statt mehr Volume zu bekommen.",
      "VCA Decay auf laengeren Passagen ausfahren und im Breakdown zuruecknehmen.",
      "Das Feedback ueber EXT AUDIO IN nur in kleinen Schritten erhoehen.",
    ],
  },
  {
    id: "bass-drum-wood-hit",
    category: "Bass Drum Variation",
    name: "Wooden Thud",
    description:
      "Kurze, holzige Bass Drum zwischen Kick und tiefer Percussion mit trockenem Punch.",
    parameters: [
      { control: "OSC 1 Tune", value: "10 Uhr", note: "etwas hoeher gestimmt" },
      { control: "OSC 2 Tune", value: "11 Uhr", note: "Attack-Farbe" },
      { control: "FM Amount", value: "10 Uhr", note: "holzige Obertone" },
      { control: "Pitch Mod", value: "11 Uhr", note: "kurzer Tonfall" },
      { control: "OSC Mix", value: "11 Uhr", note: "mehr OSC 2 fuer Klopfcharakter" },
      { control: "Noise Level", value: "8 Uhr", note: "fast clean" },
      { control: "VCF Cutoff", value: "11 Uhr", note: "mehr Mitten" },
      { control: "Resonance", value: "9 Uhr", note: "kontrolliert" },
      { control: "VCA Decay", value: "9 Uhr", note: "trocken und kurz" },
      { control: "VCF Decay", value: "10 Uhr", note: "knapp ueber dem Amp" },
      { control: "Snappy", value: "9 Uhr", note: "nur leichte Kontur" },
      { control: "Tempo", value: "124 BPM", note: "fuer tribalige Loops" },
    ],
    sequencer: {
      pitch: ["11 Uhr", "10 Uhr", "12 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "11 Uhr", "9 Uhr"],
      velocity: ["hoch", "mittel", "niedrig", "mittel", "hoch", "mittel", "niedrig", "accent"],
    },
    patchCables: [
      { from: "PITCH OUT", to: "OSC 1 CV", color: "#06d6a0" },
    ],
    performanceTips: [
      "OSC Mix Richtung OSC 2 kippen, wenn du mehr Holz statt Sub willst.",
      "Snappy vorsichtig anheben fuer staerkere Attack-Definition.",
      "Tempo leicht hochfahren, damit der Groove perkussiver wirkt.",
    ],
  },
  {
    id: "perc-line-tribal",
    category: "Percussion Line",
    name: "Tribal Motion Line",
    description:
      "Rollende Percussion-Linie mit alternierenden Akzenten und genuegend Midrange fuer dichte Grooves.",
    parameters: [
      { control: "OSC 1 Tune", value: "11 Uhr", note: "mittlere Grundstimmung" },
      { control: "OSC 2 Tune", value: "13 Uhr", note: "obere Kontur" },
      { control: "FM Amount", value: "10 Uhr", note: "lebendige Attack" },
      { control: "OSC Mix", value: "12 Uhr", note: "gleichgewichtige Schichten" },
      { control: "Noise Level", value: "9 Uhr", note: "etwas Luft" },
      { control: "VCF Cutoff", value: "12 Uhr", note: "offener Mittenfokus" },
      { control: "Resonance", value: "10 Uhr", note: "leichte Betonung" },
      { control: "VCF Decay", value: "10 Uhr", note: "kurz aber nicht stumm" },
      { control: "VCA Decay", value: "10 Uhr", note: "schneller Groove" },
      { control: "Accent Amount", value: "13 Uhr", note: "deutliche Stepspruenge" },
      { control: "Tempo", value: "128 BPM", note: "laufender 8-Step-Drive" },
    ],
    sequencer: {
      pitch: ["11 Uhr", "13 Uhr", "12 Uhr", "10 Uhr", "11 Uhr", "14 Uhr", "12 Uhr", "10 Uhr"],
      velocity: ["hoch", "mittel", "niedrig", "hoch", "mittel", "accent", "niedrig", "hoch"],
    },
    patchCables: [
      { from: "VEL OUT", to: "VCA CV", color: "#ffd166" },
      { from: "PITCH OUT", to: "VCF MOD", color: "#118ab2" },
    ],
    performanceTips: [
      "Accent Amount und VCF Cutoff zusammen bewegen fuer lebendige Patternfahrten.",
      "Ein leichter Dreh an OSC 2 Tune schiebt den Groove sofort in andere Register.",
      "Velocity-Mod auf VCA ist ideal fuer mehr menschliche Dynamik.",
    ],
  },
  {
    id: "perc-line-metal",
    category: "Percussion Line",
    name: "Metal Grid Perc",
    description:
      "Etwas haertere Percussion-Linie mit FM-Glimmern und tighter Huelle fuer modulare Grooves.",
    parameters: [
      { control: "OSC 1 Tune", value: "12 Uhr", note: "neutrale Basis" },
      { control: "OSC 2 Tune", value: "14 Uhr", note: "heller Oberton" },
      { control: "FM Amount", value: "12 Uhr", note: "metallischer Schimmer" },
      { control: "Pitch Mod", value: "10 Uhr", note: "wenig Sweep" },
      { control: "Noise Level", value: "8 Uhr", note: "fast kein Noise" },
      { control: "Mixer Drive", value: "12 Uhr", note: "griffige Mitten" },
      { control: "VCF Cutoff", value: "13 Uhr", note: "offen fuer Details" },
      { control: "Resonance", value: "11 Uhr", note: "mehr Ring" },
      { control: "VCA Decay", value: "9 Uhr", note: "kurzer Tick" },
      { control: "VCF Decay", value: "9 Uhr", note: "scharfer Ausklang" },
      { control: "Tempo", value: "134 BPM", note: "schneller Lauf" },
    ],
    sequencer: {
      pitch: ["12 Uhr", "14 Uhr", "11 Uhr", "13 Uhr", "12 Uhr", "15 Uhr", "10 Uhr", "13 Uhr"],
      velocity: ["mittel", "hoch", "niedrig", "accent", "mittel", "hoch", "niedrig", "hoch"],
    },
    patchCables: [
      { from: "PITCH OUT", to: "OSC 2 FM", color: "#ef476f" },
      { from: "CLOCK OUT", to: "TRIGGER IN", color: "#06d6a0" },
    ],
    performanceTips: [
      "FM Amount ist hier der Hauptregler fuer mehr Metall oder mehr Holz.",
      "Resonance nur fein nachziehen, damit der Pattern-Punch bleibt.",
      "Clock-Retrigger entfernen, wenn der Groove luftiger werden soll.",
    ],
  },
  {
    id: "hat-noise-sizzle",
    category: "Hi-Hat / Noise Percussion",
    name: "Sizzle Hat",
    description:
      "Knappe Noise-Hat mit analogem Schimmer und klarer Velocity-Reaktion.",
    parameters: [
      { control: "OSC 1 Tune", value: "14 Uhr", note: "nur fuer leichten Tonkern" },
      { control: "OSC 2 Tune", value: "15 Uhr", note: "hellere Kante" },
      { control: "Noise Level", value: "14 Uhr", note: "Noise klar im Vordergrund" },
      { control: "OSC Mix", value: "9 Uhr", note: "wenig Ton, viel Rauschen" },
      { control: "VCF Cutoff", value: "14 Uhr", note: "offene Hats" },
      { control: "Resonance", value: "9 Uhr", note: "sauber ohne Pfeifen" },
      { control: "VCF Mod", value: "10 Uhr", note: "leichte Bewegung" },
      { control: "VCA Decay", value: "8 Uhr", note: "sehr kurz" },
      { control: "VCF Decay", value: "8 Uhr", note: "schnell weg" },
      { control: "Snappy", value: "13 Uhr", note: "mehr Crisp" },
      { control: "Tempo", value: "136 BPM", note: "fuer hats und shuffles" },
    ],
    sequencer: {
      pitch: ["13 Uhr", "14 Uhr", "13 Uhr", "15 Uhr", "13 Uhr", "14 Uhr", "13 Uhr", "15 Uhr"],
      velocity: ["hoch", "niedrig", "hoch", "mittel", "hoch", "niedrig", "accent", "mittel"],
    },
    patchCables: [
      { from: "VEL OUT", to: "VCF MOD", color: "#f77f00" },
      { from: "NOISE OUT", to: "EXT AUDIO IN", color: "#80ed99" },
    ],
    performanceTips: [
      "Noise Level und VCF Cutoff zusammen bewegen fuer von tight bis splashy.",
      "Snappy leicht senken, wenn die Hats zu spitz werden.",
      "EXT AUDIO Feedback nur minimal dosieren fuer mehr Schmutz.",
    ],
  },
  {
    id: "hat-noise-chiff",
    category: "Hi-Hat / Noise Percussion",
    name: "Chiff Dust",
    description:
      "Trockene Noise-Percussion zwischen Hat, Shaker und kurzer Burst-Textur.",
    parameters: [
      { control: "Noise Level", value: "13 Uhr", note: "rauschbetont" },
      { control: "OSC 1 Tune", value: "13 Uhr", note: "leichtes Tonzentrum" },
      { control: "OSC 2 Tune", value: "14 Uhr", note: "mehr Glanz" },
      { control: "Mixer Drive", value: "10 Uhr", note: "kontrollierte Koernigkeit" },
      { control: "VCF Cutoff", value: "12 Uhr", note: "mittlere Offenheit" },
      { control: "Resonance", value: "10 Uhr", note: "enger Fokus" },
      { control: "VCA Decay", value: "8 Uhr", note: "extrem kurz" },
      { control: "VCF Decay", value: "9 Uhr", note: "ein Hauch Nachschwanz" },
      { control: "Accent Amount", value: "11 Uhr", note: "kurze Spitzen" },
      { control: "Tempo", value: "122 BPM", note: "mehr Pocket als Rave" },
    ],
    sequencer: {
      pitch: ["12 Uhr", "13 Uhr", "12 Uhr", "14 Uhr", "12 Uhr", "13 Uhr", "12 Uhr", "14 Uhr"],
      velocity: ["mittel", "niedrig", "hoch", "niedrig", "mittel", "hoch", "niedrig", "accent"],
    },
    patchCables: [
      { from: "VEL OUT", to: "VCA CV", color: "#8ecae6" },
    ],
    performanceTips: [
      "VCA Decay nur millimeterweise bewegen, das veraendert sofort den Charakter.",
      "Cutoff etwas absenken, wenn die Percussion eher wie ein Shaker wirken soll.",
      "Accent Amount punktuell anheben fuer kleine Fill-Momente.",
    ],
  },
  {
    id: "tom-fm-bongo",
    category: "Tom / FM Percussion",
    name: "Rubber Bongo",
    description:
      "Federnde Tom-Percussion mit kurzem FM-Biss und tonal spielbarem Mittelpunkt.",
    parameters: [
      { control: "OSC 1 Tune", value: "11 Uhr", note: "mittlerer Tom-Grundton" },
      { control: "OSC 2 Tune", value: "13 Uhr", note: "Obertonkante" },
      { control: "FM Amount", value: "11 Uhr", note: "gummiger Snap" },
      { control: "Pitch Mod", value: "11 Uhr", note: "klassischer Tom-Fall" },
      { control: "OSC Mix", value: "12 Uhr", note: "beide Stimmen tragend" },
      { control: "VCF Cutoff", value: "11 Uhr", note: "erdige Mitte" },
      { control: "Resonance", value: "10 Uhr", note: "fokussiert" },
      { control: "VCA Decay", value: "10 Uhr", note: "kurzer Nachklang" },
      { control: "VCF Decay", value: "10 Uhr", note: "gleichmaessiger Ausklang" },
      { control: "Tempo", value: "124 BPM", note: "tribaliger Puls" },
    ],
    sequencer: {
      pitch: ["11 Uhr", "12 Uhr", "13 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "14 Uhr", "11 Uhr"],
      velocity: ["hoch", "mittel", "hoch", "niedrig", "mittel", "hoch", "accent", "mittel"],
    },
    patchCables: [
      { from: "PITCH OUT", to: "OSC 1 CV", color: "#00b4d8" },
      { from: "VEL OUT", to: "OSC 2 FM", color: "#ffb703" },
    ],
    performanceTips: [
      "OSC 1 Tune transponiert die Linie sofort zwischen Tom und Bongo.",
      "FM Amount leicht hochziehen fuer haerteren Rim-Charakter.",
      "Velocity-auf-FM sorgt fuer lebendige Schlaege, also gern im Mix stehen lassen.",
    ],
  },
  {
    id: "tom-fm-clang",
    category: "Tom / FM Percussion",
    name: "Clang Tom",
    description:
      "Metallischer Tom-Hybrid mit deutlicher FM-Farbe und kurzem, artikuliertem Ausklang.",
    parameters: [
      { control: "OSC 1 Tune", value: "12 Uhr", note: "neutraler Kern" },
      { control: "OSC 2 Tune", value: "15 Uhr", note: "helle Modulationsquelle" },
      { control: "FM Amount", value: "13 Uhr", note: "starke metallische Note" },
      { control: "Pitch Mod", value: "10 Uhr", note: "weniger Body, mehr Clang" },
      { control: "Noise Level", value: "8 Uhr", note: "kaum Rauschen" },
      { control: "VCF Cutoff", value: "13 Uhr", note: "mehr Obertone" },
      { control: "Resonance", value: "11 Uhr", note: "enge Betonung" },
      { control: "VCA Decay", value: "9 Uhr", note: "kurz und knackig" },
      { control: "VCF Decay", value: "9 Uhr", note: "scharfer Exit" },
      { control: "Tempo", value: "130 BPM", note: "schnelle Perc-Hooks" },
    ],
    sequencer: {
      pitch: ["12 Uhr", "15 Uhr", "11 Uhr", "14 Uhr", "12 Uhr", "15 Uhr", "10 Uhr", "13 Uhr"],
      velocity: ["hoch", "accent", "mittel", "hoch", "mittel", "accent", "niedrig", "hoch"],
    },
    patchCables: [
      { from: "PITCH OUT", to: "OSC 2 FM", color: "#d00000" },
      { from: "GATE OUT", to: "TRIGGER IN", color: "#219ebc" },
    ],
    performanceTips: [
      "Wenn es zu metallisch wird, FM Amount zuerst zuruecknehmen, nicht Cutoff.",
      "Retrigger aufheben, falls das Pattern offener schwingen soll.",
      "Resonance leicht anheben fuer fast schon Glocken-artige Ansaetze.",
    ],
  },
  {
    id: "bassline-mono-grit",
    category: "Bassline",
    name: "Mono Grit Bass",
    description:
      "Monophone Bassline mit staubigem Filter und genug Drive fuer wiederholte 8-Step-Figuren.",
    parameters: [
      { control: "OSC 1 Tune", value: "9 Uhr", note: "tiefer Basiskern" },
      { control: "OSC 2 Tune", value: "10 Uhr", note: "leichte Detune-Spannung" },
      { control: "FM Amount", value: "9 Uhr", note: "kaum metallisch" },
      { control: "OSC Mix", value: "12 Uhr", note: "breiter Grundkoerper" },
      { control: "Noise Level", value: "Aus", note: "fokussierter Bass" },
      { control: "Mixer Drive", value: "13 Uhr", note: "griffige Mitten" },
      { control: "VCF Cutoff", value: "10 Uhr", note: "klassisch geschlossen" },
      { control: "Resonance", value: "11 Uhr", note: "saeureiger Rand" },
      { control: "VCF Mod", value: "12 Uhr", note: "Filter lebt mit dem Pattern" },
      { control: "VCA Decay", value: "11 Uhr", note: "notiert statt nur kickt" },
      { control: "VCF Decay", value: "11 Uhr", note: "sprechender Filter" },
      { control: "Tempo", value: "124 BPM", note: "rollender Bassgroove" },
    ],
    sequencer: {
      pitch: ["9 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "9 Uhr", "11 Uhr", "13 Uhr", "10 Uhr"],
      velocity: ["hoch", "mittel", "niedrig", "hoch", "mittel", "hoch", "accent", "mittel"],
    },
    patchCables: [
      { from: "PITCH OUT", to: "OSC 1 CV", color: "#90be6d" },
      { from: "VEL OUT", to: "VCF MOD", color: "#f94144" },
    ],
    performanceTips: [
      "VCF Cutoff und Resonance sind hier dein klassisches Performance-Duo.",
      "Drive nur anheben, wenn im Arrangement genug Platz fuer Mitten da ist.",
      "Mit OSC 2 Tune fein detunen fuer mehr Bewegung ohne neue Steps.",
    ],
  },
  {
    id: "bassline-round-swing",
    category: "Bassline",
    name: "Round Swing Bass",
    description:
      "Warme, etwas weichere Bassline mit gutem Zusammenspiel von Velocity und Filterbewegung.",
    parameters: [
      { control: "OSC 1 Tune", value: "10 Uhr", note: "nicht zu sublastig" },
      { control: "OSC 2 Tune", value: "10 Uhr", note: "enger zusammen fuer Waerme" },
      { control: "FM Amount", value: "8 Uhr", note: "praktisch aus" },
      { control: "OSC Mix", value: "13 Uhr", note: "mehr OSC 1-Rundung" },
      { control: "Mixer Drive", value: "11 Uhr", note: "leichte Koernung" },
      { control: "VCF Cutoff", value: "11 Uhr", note: "waermer offen" },
      { control: "Resonance", value: "10 Uhr", note: "sanfter Peak" },
      { control: "VCF Mod", value: "11 Uhr", note: "musikalische Bewegung" },
      { control: "VCA Decay", value: "12 Uhr", note: "laengerer Note-Hold" },
      { control: "VCF Decay", value: "11 Uhr", note: "weich ausklingend" },
      { control: "Tempo", value: "116 BPM", note: "entspannter Groove" },
    ],
    sequencer: {
      pitch: ["10 Uhr", "12 Uhr", "11 Uhr", "10 Uhr", "13 Uhr", "11 Uhr", "12 Uhr", "9 Uhr"],
      velocity: ["mittel", "hoch", "mittel", "niedrig", "accent", "mittel", "hoch", "niedrig"],
    },
    patchCables: [
      { from: "VEL OUT", to: "VCF MOD", color: "#577590" },
    ],
    performanceTips: [
      "VCF Decay leicht verlaengern, wenn der Bass mehr Legato-Charakter braucht.",
      "OSC Mix Richtung OSC 1 schieben fuer mehr Fundament.",
      "Mit Tempo runtergehen funktioniert diese Linie auch als halftime Hook.",
    ],
  },
  {
    id: "acid-bite",
    category: "Acid-artige Sequenz",
    name: "Corroded Acid Lane",
    description:
      "Scharfe, rollende Sequenz mit resonantem Filter und deutlich akzentuierten Steps.",
    parameters: [
      { control: "OSC 1 Tune", value: "11 Uhr", note: "tragfaehige Mid-Bass-Lage" },
      { control: "OSC 2 Tune", value: "12 Uhr", note: "leichte Saegekante" },
      { control: "FM Amount", value: "9 Uhr", note: "nur Schmutz" },
      { control: "OSC Mix", value: "12 Uhr", note: "beide Quellen aktiv" },
      { control: "Mixer Drive", value: "13 Uhr", note: "mehr Grip" },
      { control: "VCF Cutoff", value: "10 Uhr", note: "enge Startposition" },
      { control: "Resonance", value: "14 Uhr", note: "deutlich acidig" },
      { control: "VCF Mod", value: "13 Uhr", note: "starke Huellenbewegung" },
      { control: "Filter Env Amt", value: "14 Uhr", note: "saeureiger Biss" },
      { control: "VCA Decay", value: "10 Uhr", note: "kurzer Schritt" },
      { control: "VCF Decay", value: "12 Uhr", note: "sprechender Sweep" },
      { control: "Tempo", value: "132 BPM", note: "laufende Sequenz" },
    ],
    sequencer: {
      pitch: ["11 Uhr", "13 Uhr", "12 Uhr", "14 Uhr", "11 Uhr", "13 Uhr", "15 Uhr", "12 Uhr"],
      velocity: ["hoch", "accent", "mittel", "hoch", "niedrig", "accent", "hoch", "mittel"],
    },
    patchCables: [
      { from: "PITCH OUT", to: "OSC 1 CV", color: "#43aa8b" },
      { from: "VEL OUT", to: "VCF MOD", color: "#f3722c" },
      { from: "ACCENT IN", to: "VCA CV", color: "#f9c74f" },
    ],
    performanceTips: [
      "Cutoff und Resonance zusammen drehen fuer den klassischen Acid-Morph.",
      "Accent Steps leben besonders von mehr VCF Mod statt nur mehr Lautstaerke.",
      "Drive kurz vor Selbstoszillation ist hier oft der Sweet Spot.",
    ],
  },
  {
    id: "acid-squelch",
    category: "Acid-artige Sequenz",
    name: "Squelch Rail",
    description:
      "Gummige Sequenz mit mehr Resonanz und engerem VCA fuer fokussierte Acid-Hooks.",
    parameters: [
      { control: "OSC 1 Tune", value: "12 Uhr", note: "etwas hoeher fuer Lead-Bass" },
      { control: "OSC 2 Tune", value: "13 Uhr", note: "leichtes Ziehen" },
      { control: "Mixer Drive", value: "12 Uhr", note: "griffig aber nicht zerrend" },
      { control: "VCF Cutoff", value: "9 Uhr", note: "enger Start" },
      { control: "Resonance", value: "15 Uhr", note: "nah an Selbstresonanz" },
      { control: "VCF Mod", value: "12 Uhr", note: "gummige Huelle" },
      { control: "Filter Env Amt", value: "13 Uhr", note: "artikulierte Sweeps" },
      { control: "VCA Decay", value: "9 Uhr", note: "trocken und springend" },
      { control: "VCF Decay", value: "11 Uhr", note: "kurze Sprachform" },
      { control: "Tempo", value: "128 BPM", note: "klassische Laufrichtung" },
    ],
    sequencer: {
      pitch: ["12 Uhr", "13 Uhr", "11 Uhr", "14 Uhr", "12 Uhr", "15 Uhr", "11 Uhr", "13 Uhr"],
      velocity: ["mittel", "accent", "hoch", "mittel", "niedrig", "accent", "hoch", "mittel"],
    },
    patchCables: [
      { from: "VEL OUT", to: "VCF MOD", color: "#f8961e" },
      { from: "PITCH OUT", to: "OSC 1 CV", color: "#277da1" },
    ],
    performanceTips: [
      "Kleine Bewegungen an Resonance reichen voellig, der Sweet Spot ist schmal.",
      "Mit VCA Decay wird aus Acid schnell eine perkussive Hook.",
      "Pitch Step 6 und 7 sind gute Kandidaten fuer Live-Transpositionen.",
    ],
  },
  {
    id: "experimental-broken-clock",
    category: "Experimental Groove",
    name: "Broken Clock Ritual",
    description:
      "Asymmetrischer Groove mit Cross-Mod und Clock-Retrigger fuer kaputte, aber tanzbare Patterns.",
    parameters: [
      { control: "OSC 1 Tune", value: "11 Uhr", note: "stabile Mitte" },
      { control: "OSC 2 Tune", value: "15 Uhr", note: "chaotische Oberseite" },
      { control: "FM Amount", value: "13 Uhr", note: "deutliche Modulation" },
      { control: "Pitch Mod", value: "12 Uhr", note: "starker Bewegungskern" },
      { control: "Noise Level", value: "10 Uhr", note: "unsaubere Kontur" },
      { control: "Mixer Drive", value: "13 Uhr", note: "gesaettigte Mitte" },
      { control: "VCF Cutoff", value: "12 Uhr", note: "genug Platz fuer Spektrum" },
      { control: "Resonance", value: "12 Uhr", note: "enger Fokus" },
      { control: "VCA Decay", value: "9 Uhr", note: "zerhackte Events" },
      { control: "VCF Decay", value: "10 Uhr", note: "knappe Echos" },
      { control: "Tempo", value: "129 BPM", note: "vorwaertsdrueckend" },
    ],
    sequencer: {
      pitch: ["11 Uhr", "15 Uhr", "9 Uhr", "14 Uhr", "10 Uhr", "13 Uhr", "12 Uhr", "16 Uhr"],
      velocity: ["hoch", "niedrig", "accent", "mittel", "niedrig", "hoch", "mittel", "accent"],
    },
    patchCables: [
      { from: "CLOCK OUT", to: "TRIGGER IN", color: "#8338ec" },
      { from: "PITCH OUT", to: "OSC 2 FM", color: "#3a86ff" },
      { from: "VEL OUT", to: "VCF MOD", color: "#ff006e" },
    ],
    performanceTips: [
      "Clock-Retrigger an- und abstecken aendert den Groove radikal.",
      "FM Amount ist hier mehr ein Kompositionswerkzeug als nur Klangfarbe.",
      "Pitch Mod auf dem Break hochziehen fuer kontrolliertes Chaos.",
    ],
  },
  {
    id: "experimental-noise-loop",
    category: "Experimental Groove",
    name: "Noise Loop Sketch",
    description:
      "Raues Hybridpattern aus Noise, Feedback und kurzen tonal-perkussiven Fragmenten.",
    parameters: [
      { control: "OSC 1 Tune", value: "13 Uhr", note: "kleiner Tonkern" },
      { control: "OSC 2 Tune", value: "14 Uhr", note: "bricht das Spektrum auf" },
      { control: "FM Amount", value: "10 Uhr", note: "unsteter Rand" },
      { control: "Noise Level", value: "13 Uhr", note: "deutlich rauschig" },
      { control: "Mixer Drive", value: "12 Uhr", note: "griffiges Zentrum" },
      { control: "VCF Cutoff", value: "11 Uhr", note: "Kontur im Mittelfeld" },
      { control: "Resonance", value: "13 Uhr", note: "nahe am Pfeifen" },
      { control: "VCF Mod", value: "11 Uhr", note: "schwankender Fokus" },
      { control: "VCA Decay", value: "8 Uhr", note: "kurze Bursts" },
      { control: "VCF Decay", value: "10 Uhr", note: "kurze Filterfaecher" },
      { control: "Tempo", value: "120 BPM", note: "mehr Raum fuer Texturen" },
    ],
    sequencer: {
      pitch: ["13 Uhr", "10 Uhr", "14 Uhr", "11 Uhr", "15 Uhr", "9 Uhr", "12 Uhr", "16 Uhr"],
      velocity: ["mittel", "hoch", "niedrig", "accent", "hoch", "niedrig", "mittel", "accent"],
    },
    patchCables: [
      { from: "NOISE OUT", to: "EXT AUDIO IN", color: "#ffbe0b" },
      { from: "VCF OUT", to: "VCF MOD", color: "#fb5607" },
      { from: "VEL OUT", to: "VCA CV", color: "#3a86ff" },
    ],
    performanceTips: [
      "Feedback ueber VCF OUT sehr vorsichtig bewegen, sonst kippt der Pegel schnell.",
      "Noise Level und Resonance sind der schnellste Weg von Textur zu Krach.",
      "Ideal fuer Intro- oder Breakdown-Flaechen, bevor wieder klare Steps einsetzen.",
    ],
  },
];

const categorySelect = document.querySelector("#categorySelect");
const generateBtn = document.querySelector("#generateBtn");
const patchName = document.querySelector("#patchName");
const patchCategory = document.querySelector("#patchCategory");
const patchDescription = document.querySelector("#patchDescription");
const parameterList = document.querySelector("#parameterList");
const cableList = document.querySelector("#cableList");
const pitchList = document.querySelector("#pitchList");
const velocityList = document.querySelector("#velocityList");
const tipsList = document.querySelector("#tipsList");
const sequenceGrid = document.querySelector("#sequenceGrid");
const cableLayer = document.querySelector("#cableLayer");
const edgePanel = document.querySelector("#edgePanel");
let currentPatch = null;

const knobValueNodes = new Map(
  [...document.querySelectorAll(".knob")].map((knob) => [
    knob.dataset.control,
    knob.querySelector(".knob-value"),
  ]),
);

const knobNodes = new Map(
  [...document.querySelectorAll(".knob")].map((knob) => [knob.dataset.control, knob]),
);

function buildCategoryMenu() {
  const categories = [...new Set(patchLibrary.map((patch) => patch.category))];
  const options = [RANDOM_CATEGORY, ...categories];

  options.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
  });
}

function createSequencerSlots() {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 8; index += 1) {
    const step = document.createElement("div");
    step.className = "step-card";
    step.innerHTML = `
      <span class="step-number">${index + 1}</span>
      <div class="step-meta">
        Pitch
        <span class="step-value" data-step-pitch="${index}">12 Uhr</span>
      </div>
      <div class="step-meta">
        Velocity
        <span class="step-value" data-step-velocity="${index}">mittel</span>
      </div>
    `;
    fragment.append(step);
  }

  sequenceGrid.append(fragment);
}

function choosePatch(category) {
  const pool =
    category === RANDOM_CATEGORY
      ? patchLibrary
      : patchLibrary.filter((patch) => patch.category === category);

  return pool[Math.floor(Math.random() * pool.length)];
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function varyClockValue(value) {
  const positions = [
    "8 Uhr",
    "9 Uhr",
    "10 Uhr",
    "11 Uhr",
    "12 Uhr",
    "13 Uhr",
    "14 Uhr",
    "15 Uhr",
    "16 Uhr",
  ];

  const index = positions.indexOf(value);
  if (index === -1) {
    return value;
  }

  const offset = Math.random() < 0.5 ? -1 : 1;
  const nextIndex = Math.min(positions.length - 1, Math.max(0, index + offset));
  return positions[nextIndex];
}

function varyVelocity(value) {
  const levels = ["niedrig", "mittel", "hoch", "accent"];
  const index = levels.indexOf(value);
  if (index === -1) {
    return value;
  }

  const offset = Math.random() < 0.5 ? -1 : 1;
  const nextIndex = Math.min(levels.length - 1, Math.max(0, index + offset));
  return levels[nextIndex];
}

function getKnobAngle(value) {
  const match = /^(\d{1,2}) Uhr$/.exec(value);
  if (!match) {
    return -90;
  }

  const hour = Number.parseInt(match[1], 10) % 12;
  const normalizedHour = hour === 0 ? 12 : hour;
  return normalizedHour * 30 - 90;
}

function createPatchVariant(basePatch) {
  const patch = deepClone(basePatch);

  patch.parameters = patch.parameters.map((parameter) => {
    if (Math.random() > 0.28) {
      return parameter;
    }

    return {
      ...parameter,
      value: varyClockValue(parameter.value),
      note: `${parameter.note}; leicht variiert`,
    };
  });

  patch.sequencer.pitch = patch.sequencer.pitch.map((step) =>
    Math.random() > 0.22 ? step : varyClockValue(step),
  );
  patch.sequencer.velocity = patch.sequencer.velocity.map((step) =>
    Math.random() > 0.22 ? step : varyVelocity(step),
  );

  return patch;
}

function renderList(target, items, renderItem) {
  target.innerHTML = "";

  items.forEach((item, index) => {
    const element = document.createElement("li");
    element.innerHTML = renderItem(item, index);
    target.append(element);
  });
}

function renderPatch(patch) {
  currentPatch = patch;
  patchName.textContent = patch.name;
  patchCategory.textContent = patch.category;
  patchDescription.textContent = patch.description;

  renderList(
    parameterList,
    patch.parameters,
    (parameter) =>
      `<strong>${parameter.control}</strong>: ${parameter.value}<br><span class="muted">${parameter.note}</span>`,
  );

  const cables =
    patch.patchCables.length > 0
      ? patch.patchCables
      : [{ from: "Keine", to: "Direktspielbar", color: "transparent" }];

  renderList(
    cableList,
    cables,
    (cable, index) =>
      cable.from === "Keine"
        ? `<span class="muted">Kein Patchkabel noetig. Dieser Vorschlag funktioniert direkt ueber das Grundpanel.</span>`
        : `<strong>Kabel ${index + 1}</strong>: ${cable.from} &rarr; ${cable.to}`,
  );

  renderList(
    pitchList,
    patch.sequencer.pitch,
    (value, index) => `<strong>Step ${index + 1}</strong>: ${value}`,
  );
  renderList(
    velocityList,
    patch.sequencer.velocity,
    (value, index) => `<strong>Step ${index + 1}</strong>: ${value}`,
  );
  renderList(tipsList, patch.performanceTips, (tip) => tip);

  updatePanelValues(patch);
  updateSequencerDisplay(patch);
}

function updatePanelValues(patch) {
  const values = { ...defaultControls };

  patch.parameters.forEach((parameter) => {
    if (values[parameter.control] !== undefined) {
      values[parameter.control] = parameter.value;
    }
  });

  knobValueNodes.forEach((node, control) => {
    node.textContent = values[control];
  });

  knobNodes.forEach((knob, control) => {
    knob.style.setProperty("--knob-angle", `${getKnobAngle(values[control])}deg`);
  });
}

function updateSequencerDisplay(patch) {
  patch.sequencer.pitch.forEach((value, index) => {
    const pitchNode = document.querySelector(`[data-step-pitch="${index}"]`);
    const velocityNode = document.querySelector(`[data-step-velocity="${index}"]`);

    if (pitchNode) {
      pitchNode.textContent = value;
    }

    if (velocityNode) {
      velocityNode.textContent = patch.sequencer.velocity[index];
    }
  });
}

function clearJackHighlights() {
  document.querySelectorAll(".jack").forEach((jack) => {
    jack.classList.remove("active");
  });
}

function getJackPosition(jackName) {
  const jack = document.querySelector(`[data-jack="${jackName}"]`);
  if (!jack) {
    return null;
  }

  jack.classList.add("active");

  const panelBounds = edgePanel.getBoundingClientRect();
  const bounds = jack.getBoundingClientRect();

  return {
    x: bounds.left - panelBounds.left + bounds.width / 2,
    y: bounds.top - panelBounds.top + bounds.height / 2,
  };
}

function buildCablePath(start, end) {
  const deltaX = end.x - start.x;
  const curveStrength = Math.max(32, Math.abs(deltaX) * 0.35);

  return `M ${start.x} ${start.y} C ${start.x} ${start.y + curveStrength}, ${end.x} ${end.y - curveStrength}, ${end.x} ${end.y}`;
}

function drawPatchCables(cables) {
  clearJackHighlights();
  cableLayer.innerHTML = "";

  if (!cables.length) {
    return;
  }

  const width = edgePanel.clientWidth;
  const height = edgePanel.clientHeight;
  cableLayer.setAttribute("viewBox", `0 0 ${width} ${height}`);

  cables.forEach((cable) => {
    const start = getJackPosition(cable.from);
    const end = getJackPosition(cable.to);

    if (!start || !end) {
      return;
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", buildCablePath(start, end));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", cable.color);
    path.setAttribute("stroke-width", "4");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("opacity", "0.95");
    path.setAttribute("filter", "drop-shadow(0 0 8px rgba(0, 0, 0, 0.28))");
    cableLayer.append(path);
  });
}

function generatePatch() {
  const basePatch = choosePatch(categorySelect.value);
  const variant = createPatchVariant(basePatch);
  renderPatch(variant);
  window.requestAnimationFrame(() => drawPatchCables(variant.patchCables));
}

buildCategoryMenu();
createSequencerSlots();
generateBtn.addEventListener("click", generatePatch);
window.addEventListener("resize", () => {
  if (currentPatch) {
    window.requestAnimationFrame(() => drawPatchCables(currentPatch.patchCables));
  }
});

categorySelect.value = RANDOM_CATEGORY;
generatePatch();
