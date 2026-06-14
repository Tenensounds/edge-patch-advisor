const RANDOM_CATEGORY = "Random Inspiration";
const FAVORITES_STORAGE_KEY = "edgePatchAdvisorFavorites";

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

const param = (control, value, note) => ({ control, value, note });
const cable = (from, to, color) => ({ from, to, color });
const patch = ({
  id,
  category,
  name,
  description,
  parameters,
  pitch,
  velocity,
  patchCables = [],
  performanceTips,
}) => ({
  id,
  category,
  name,
  description,
  parameters,
  sequencer: { pitch, velocity },
  patchCables,
  performanceTips,
});

const patchLibrary = [
  patch({
    id: "kick-sub-foundation",
    category: "Kick Drum",
    name: "Sub Foundation Kick",
    description: "Tiefe, runde Kick mit kurzem Filter-Punch und kontrolliertem Sub-Ende.",
    parameters: [
      param("OSC 1 Tune", "8 Uhr", "tiefer Grundton"),
      param("OSC 2 Tune", "9 Uhr", "leicht darueber fuer mehr Koerper"),
      param("FM Amount", "9 Uhr", "nur ein Hauch Click"),
      param("OSC Mix", "13 Uhr", "mehr OSC 1"),
      param("Noise Level", "Aus", "sauberer Attack"),
      param("Mixer Drive", "11 Uhr", "leichte Saettigung"),
      param("VCF Cutoff", "9 Uhr", "dumpfer Punch"),
      param("Resonance", "10 Uhr", "keine Pfeifresonanz"),
      param("VCF Mod", "11 Uhr", "Envelope drueckt den Transient"),
      param("Filter Env Amt", "12 Uhr", "klarer Anriss"),
      param("VCA Decay", "10 Uhr", "kurz und straff"),
      param("VCF Decay", "9 Uhr", "kurzer Schlag"),
      param("Accent Amount", "12 Uhr", "Step 1 hervorheben"),
      param("Tempo", "126 BPM", "clubtauglicher Start"),
    ],
    pitch: ["12 Uhr", "12 Uhr", "11 Uhr", "12 Uhr", "12 Uhr", "11 Uhr", "12 Uhr", "10 Uhr"],
    velocity: ["hoch", "niedrig", "mittel", "niedrig", "hoch", "niedrig", "mittel", "accent"],
    patchCables: [
      cable("VEL OUT", "VCF MOD", "#ff9f1c"),
      cable("PITCH OUT", "OSC 1 CV", "#2ec4b6"),
    ],
    performanceTips: [
      "VCF Cutoff langsam oeffnen, um von weich zu aggressiv zu fahren.",
      "VCA Decay minimal verlaengern, wenn der Mix mehr Body braucht.",
      "Accent Amount hochziehen, falls einzelne Steps staerker springen sollen.",
    ],
  }),
  patch({
    id: "kick-hard-snap",
    category: "Kick Drum",
    name: "Hard Snap Kick",
    description: "Trockenere Kick mit knackigem Anriss und etwas mehr FM-Haerte fuer moderne Techno-Impulse.",
    parameters: [
      param("OSC 1 Tune", "9 Uhr", "solider Low-End-Kern"),
      param("OSC 2 Tune", "11 Uhr", "Attack-Haerte"),
      param("FM Amount", "11 Uhr", "transienter Biss"),
      param("Pitch Mod", "12 Uhr", "klassischer Downward-Sweep"),
      param("OSC Mix", "12 Uhr", "beide Oszillatoren praesent"),
      param("Noise Level", "8 Uhr", "minimaler Luftanteil"),
      param("Mixer Drive", "13 Uhr", "harter Druck"),
      param("VCF Cutoff", "10 Uhr", "mehr Klick im Oberton"),
      param("Resonance", "9 Uhr", "stabil und direkt"),
      param("VCA Decay", "9 Uhr", "sehr kurz"),
      param("VCF Decay", "10 Uhr", "knackiger Snap"),
      param("Snappy", "11 Uhr", "zusaetzliche Attack-Kante"),
      param("Tempo", "132 BPM", "harter Groove"),
    ],
    pitch: ["12 Uhr", "11 Uhr", "12 Uhr", "10 Uhr", "12 Uhr", "11 Uhr", "12 Uhr", "9 Uhr"],
    velocity: ["accent", "mittel", "hoch", "niedrig", "accent", "mittel", "hoch", "mittel"],
    patchCables: [
      cable("VEL OUT", "VCA CV", "#ff6b6b"),
      cable("PITCH OUT", "OSC 2 FM", "#4ecdc4"),
    ],
    performanceTips: [
      "FM Amount ist der schnellste Weg zwischen rund und brutal.",
      "Pitch Mod in kleinen Bewegungen veraendern, sonst kippt die Kick in Tom-Gebiet.",
      "Mixer Drive kurz vor dem Drop leicht anheben.",
    ],
  }),
  patch({
    id: "kick-pulse-bloom",
    category: "Kick Drum",
    name: "Pulse Bloom Kick",
    description: "Etwas offenere Kick mit laengerem Bauch und gut kontrollierbarer Live-Dynamik.",
    parameters: [
      param("OSC 1 Tune", "8 Uhr", "subtiefe Basis"),
      param("OSC 2 Tune", "10 Uhr", "mehr Kontur im oberen Bauch"),
      param("FM Amount", "10 Uhr", "kontrollierter Punch"),
      param("Pitch Mod", "11 Uhr", "weicher Sweep"),
      param("OSC Mix", "13 Uhr", "mehr Fundament als Attack"),
      param("Mixer Drive", "12 Uhr", "griffig ohne zu zerren"),
      param("VCF Cutoff", "9 Uhr", "dunkler Start"),
      param("VCF Mod", "12 Uhr", "Punch in der ersten Phase"),
      param("VCA Decay", "11 Uhr", "etwas laengeres Tail"),
      param("VCF Decay", "10 Uhr", "runde Filterhuelle"),
      param("Accent Amount", "11 Uhr", "sanfte Groove-Spruenge"),
      param("Tempo", "124 BPM", "mehr Platz fuer den Bauch"),
    ],
    pitch: ["12 Uhr", "11 Uhr", "12 Uhr", "11 Uhr", "12 Uhr", "10 Uhr", "12 Uhr", "11 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "mittel", "accent", "mittel", "hoch", "niedrig"],
    patchCables: [cable("VEL OUT", "VCF MOD", "#ffbf69")],
    performanceTips: [
      "VCA Decay ist hier der groesste Hebel zwischen Kick und Bass Drum.",
      "VCF Mod leicht anheben, wenn die Kick vorne im Mix mehr Ansprache braucht.",
      "Accent Amount eher sparsam einsetzen, damit der Groove nicht holprig wird.",
    ],
  }),
  patch({
    id: "bass-drum-rumble",
    category: "Bass Drum Variation",
    name: "Rumble Seed",
    description: "Tiefe Bass Drum mit laengerem Tail als Ausgangspunkt fuer dubbige oder industrialnahe Grooves.",
    parameters: [
      param("OSC 1 Tune", "8 Uhr", "maximaler Tiefgang"),
      param("OSC 2 Tune", "10 Uhr", "leichter Schimmer ueber dem Sub"),
      param("FM Amount", "10 Uhr", "feine Textur"),
      param("Noise Level", "9 Uhr", "sanfter Luftanteil"),
      param("Mixer Drive", "12 Uhr", "Druck ohne Zerfall"),
      param("VCF Cutoff", "8 Uhr", "sehr dunkel"),
      param("Resonance", "11 Uhr", "mehr Bauch im Sweep"),
      param("VCF Mod", "10 Uhr", "subtile Bewegung"),
      param("VCA Decay", "12 Uhr", "laengeres Tail"),
      param("VCF Decay", "11 Uhr", "klingt nach"),
      param("Tempo", "118 BPM", "mehr Raum zwischen den Schlaegen"),
    ],
    pitch: ["12 Uhr", "10 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "10 Uhr", "11 Uhr", "9 Uhr"],
    velocity: ["hoch", "niedrig", "mittel", "niedrig", "hoch", "niedrig", "mittel", "accent"],
    patchCables: [
      cable("VCF OUT", "EXT AUDIO IN", "#7b61ff"),
      cable("VEL OUT", "VCF MOD", "#f4a261"),
    ],
    performanceTips: [
      "Resonance langsam anheben, um mehr Rumble statt nur mehr Volume zu bekommen.",
      "VCA Decay in langen Passagen ausfahren und im Breakdown wieder zuruecknehmen.",
      "Das Feedback ueber EXT AUDIO IN nur in kleinen Schritten erhoehen.",
    ],
  }),
  patch({
    id: "bass-drum-wood-hit",
    category: "Bass Drum Variation",
    name: "Wooden Thud",
    description: "Kurze, holzige Bass Drum zwischen Kick und tiefer Percussion mit trockenem Punch.",
    parameters: [
      param("OSC 1 Tune", "10 Uhr", "etwas hoeher gestimmt"),
      param("OSC 2 Tune", "11 Uhr", "Attack-Farbe"),
      param("FM Amount", "10 Uhr", "holzige Obertone"),
      param("Pitch Mod", "11 Uhr", "kurzer Tonfall"),
      param("OSC Mix", "11 Uhr", "mehr OSC 2 fuer Klopfcharakter"),
      param("Noise Level", "8 Uhr", "fast clean"),
      param("VCF Cutoff", "11 Uhr", "mehr Mitten"),
      param("Resonance", "9 Uhr", "kontrolliert"),
      param("VCA Decay", "9 Uhr", "trocken und kurz"),
      param("VCF Decay", "10 Uhr", "knapp ueber dem Amp"),
      param("Snappy", "9 Uhr", "nur leichte Kontur"),
      param("Tempo", "124 BPM", "fuer tribalige Loops"),
    ],
    pitch: ["11 Uhr", "10 Uhr", "12 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "11 Uhr", "9 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "mittel", "hoch", "mittel", "niedrig", "accent"],
    patchCables: [cable("PITCH OUT", "OSC 1 CV", "#06d6a0")],
    performanceTips: [
      "OSC Mix Richtung OSC 2 kippen, wenn du mehr Holz statt Sub willst.",
      "Snappy vorsichtig anheben fuer staerkere Attack-Definition.",
      "Tempo leicht hochfahren, damit der Groove perkussiver wirkt.",
    ],
  }),
  patch({
    id: "bass-drum-low-piston",
    category: "Bass Drum Variation",
    name: "Low Piston",
    description: "Mechanische Low-End-Drum mit straffem Ende und leichtem FM-Druck.",
    parameters: [
      param("OSC 1 Tune", "9 Uhr", "tiefe Piston-Basis"),
      param("OSC 2 Tune", "10 Uhr", "kompakter Oberton"),
      param("FM Amount", "11 Uhr", "mechanischer Klick"),
      param("Pitch Mod", "12 Uhr", "deutlicher Fall"),
      param("OSC Mix", "12 Uhr", "gleichgewichtiger Kern"),
      param("Mixer Drive", "12 Uhr", "griffige Mitte"),
      param("VCF Cutoff", "9 Uhr", "massive Front"),
      param("Resonance", "10 Uhr", "enger Low-Fokus"),
      param("VCA Decay", "10 Uhr", "straffes Ende"),
      param("VCF Decay", "9 Uhr", "kurzer Impact"),
      param("Tempo", "127 BPM", "vorwaertsdrueckender Puls"),
    ],
    pitch: ["12 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "9 Uhr"],
    velocity: ["accent", "mittel", "niedrig", "hoch", "mittel", "niedrig", "hoch", "mittel"],
    patchCables: [cable("PITCH OUT", "OSC 2 FM", "#00d1b2")],
    performanceTips: [
      "Pitch Mod bestimmt hier stark, wie modern oder klassisch die Drum wirkt.",
      "Mit etwas mehr Drive wird aus der Variation schnell eine Industrial-Kick.",
      "Steps 1 und 5 als Accent sind gute Kandidaten fuer Live-Dynamik.",
    ],
  }),
  patch({
    id: "perc-line-tribal",
    category: "Percussion Line",
    name: "Tribal Motion Line",
    description: "Rollende Percussion-Linie mit alternierenden Akzenten und genuegend Midrange fuer dichte Grooves.",
    parameters: [
      param("OSC 1 Tune", "11 Uhr", "mittlere Grundstimmung"),
      param("OSC 2 Tune", "13 Uhr", "obere Kontur"),
      param("FM Amount", "10 Uhr", "lebendige Attack"),
      param("OSC Mix", "12 Uhr", "gleichgewichtige Schichten"),
      param("Noise Level", "9 Uhr", "etwas Luft"),
      param("VCF Cutoff", "12 Uhr", "offener Mittenfokus"),
      param("Resonance", "10 Uhr", "leichte Betonung"),
      param("VCF Decay", "10 Uhr", "kurz aber nicht stumm"),
      param("VCA Decay", "10 Uhr", "schneller Groove"),
      param("Accent Amount", "13 Uhr", "deutliche Stepspruenge"),
      param("Tempo", "128 BPM", "laufender 8-Step-Drive"),
    ],
    pitch: ["11 Uhr", "13 Uhr", "12 Uhr", "10 Uhr", "11 Uhr", "14 Uhr", "12 Uhr", "10 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "hoch", "mittel", "accent", "niedrig", "hoch"],
    patchCables: [
      cable("VEL OUT", "VCA CV", "#ffd166"),
      cable("PITCH OUT", "VCF MOD", "#118ab2"),
    ],
    performanceTips: [
      "Accent Amount und VCF Cutoff zusammen bewegen fuer lebendige Patternfahrten.",
      "Ein leichter Dreh an OSC 2 Tune schiebt den Groove sofort in andere Register.",
      "Velocity-Mod auf VCA ist ideal fuer mehr menschliche Dynamik.",
    ],
  }),
  patch({
    id: "perc-line-metal",
    category: "Percussion Line",
    name: "Metal Grid Perc",
    description: "Etwas haertere Percussion-Linie mit FM-Glimmern und tighter Huelle fuer modulare Grooves.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "neutrale Basis"),
      param("OSC 2 Tune", "14 Uhr", "heller Oberton"),
      param("FM Amount", "12 Uhr", "metallischer Schimmer"),
      param("Pitch Mod", "10 Uhr", "wenig Sweep"),
      param("Noise Level", "8 Uhr", "fast kein Noise"),
      param("Mixer Drive", "12 Uhr", "griffige Mitten"),
      param("VCF Cutoff", "13 Uhr", "offen fuer Details"),
      param("Resonance", "11 Uhr", "mehr Ring"),
      param("VCA Decay", "9 Uhr", "kurzer Tick"),
      param("VCF Decay", "9 Uhr", "scharfer Ausklang"),
      param("Tempo", "134 BPM", "schneller Lauf"),
    ],
    pitch: ["12 Uhr", "14 Uhr", "11 Uhr", "13 Uhr", "12 Uhr", "15 Uhr", "10 Uhr", "13 Uhr"],
    velocity: ["mittel", "hoch", "niedrig", "accent", "mittel", "hoch", "niedrig", "hoch"],
    patchCables: [
      cable("PITCH OUT", "OSC 2 FM", "#ef476f"),
      cable("CLOCK OUT", "TRIGGER IN", "#06d6a0"),
    ],
    performanceTips: [
      "FM Amount ist hier der Hauptregler fuer mehr Metall oder mehr Holz.",
      "Resonance nur fein nachziehen, damit der Pattern-Punch bleibt.",
      "Clock-Retrigger entfernen, wenn der Groove luftiger werden soll.",
    ],
  }),
  patch({
    id: "perc-line-dry-jam",
    category: "Percussion Line",
    name: "Dry Jam Perc",
    description: "Knackige Mid-Percussion mit knapper Huelle und gutem Platz fuer Layer im Mix.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "neutraler Body"),
      param("OSC 2 Tune", "13 Uhr", "leichte Hoehenkante"),
      param("FM Amount", "9 Uhr", "sehr kontrolliert"),
      param("Pitch Mod", "11 Uhr", "kurzer Fall"),
      param("OSC Mix", "11 Uhr", "etwas mehr OSC 2"),
      param("Noise Level", "8 Uhr", "nur ein Hauch Luft"),
      param("VCF Cutoff", "12 Uhr", "klare Mitten"),
      param("Resonance", "9 Uhr", "trocken"),
      param("VCA Decay", "9 Uhr", "schnelle Schlaege"),
      param("VCF Decay", "9 Uhr", "enger Ausklang"),
      param("Tempo", "126 BPM", "enge Groove-Tasche"),
    ],
    pitch: ["12 Uhr", "11 Uhr", "13 Uhr", "10 Uhr", "12 Uhr", "13 Uhr", "11 Uhr", "10 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "hoch", "niedrig", "accent", "mittel", "hoch"],
    patchCables: [cable("VEL OUT", "VCA CV", "#76c893")],
    performanceTips: [
      "VCA Decay und OSC 2 Tune sind hier gute Live-Tweaks fuer kleine Variationen.",
      "Fuer trockenere Grooves Resonance ganz niedrig halten.",
      "Mit etwas mehr Noise Level schiebt der Klang Richtung Shaker-Percussion.",
    ],
  }),
  patch({
    id: "hat-noise-sizzle",
    category: "Hi-Hat / Noise Percussion",
    name: "Sizzle Hat",
    description: "Knappe Noise-Hat mit analogem Schimmer und klarer Velocity-Reaktion.",
    parameters: [
      param("OSC 1 Tune", "14 Uhr", "nur fuer leichten Tonkern"),
      param("OSC 2 Tune", "15 Uhr", "hellere Kante"),
      param("Noise Level", "14 Uhr", "Noise klar im Vordergrund"),
      param("OSC Mix", "9 Uhr", "wenig Ton, viel Rauschen"),
      param("VCF Cutoff", "14 Uhr", "offene Hats"),
      param("Resonance", "9 Uhr", "sauber ohne Pfeifen"),
      param("VCF Mod", "10 Uhr", "leichte Bewegung"),
      param("VCA Decay", "8 Uhr", "sehr kurz"),
      param("VCF Decay", "8 Uhr", "schnell weg"),
      param("Snappy", "13 Uhr", "mehr Crisp"),
      param("Tempo", "136 BPM", "fuer Hats und Shuffles"),
    ],
    pitch: ["13 Uhr", "14 Uhr", "13 Uhr", "15 Uhr", "13 Uhr", "14 Uhr", "13 Uhr", "15 Uhr"],
    velocity: ["hoch", "niedrig", "hoch", "mittel", "hoch", "niedrig", "accent", "mittel"],
    patchCables: [
      cable("VEL OUT", "VCF MOD", "#f77f00"),
      cable("NOISE OUT", "EXT AUDIO IN", "#80ed99"),
    ],
    performanceTips: [
      "Noise Level und VCF Cutoff zusammen bewegen fuer von tight bis splashy.",
      "Snappy leicht senken, wenn die Hats zu spitz werden.",
      "EXT AUDIO Feedback nur minimal dosieren fuer mehr Schmutz.",
    ],
  }),
  patch({
    id: "hat-noise-chiff",
    category: "Hi-Hat / Noise Percussion",
    name: "Chiff Dust",
    description: "Trockene Noise-Percussion zwischen Hat, Shaker und kurzer Burst-Textur.",
    parameters: [
      param("Noise Level", "13 Uhr", "rauschbetont"),
      param("OSC 1 Tune", "13 Uhr", "leichtes Tonzentrum"),
      param("OSC 2 Tune", "14 Uhr", "mehr Glanz"),
      param("Mixer Drive", "10 Uhr", "kontrollierte Koernigkeit"),
      param("VCF Cutoff", "12 Uhr", "mittlere Offenheit"),
      param("Resonance", "10 Uhr", "enger Fokus"),
      param("VCA Decay", "8 Uhr", "extrem kurz"),
      param("VCF Decay", "9 Uhr", "ein Hauch Nachschwanz"),
      param("Accent Amount", "11 Uhr", "kurze Spitzen"),
      param("Tempo", "122 BPM", "mehr Pocket als Rave"),
    ],
    pitch: ["12 Uhr", "13 Uhr", "12 Uhr", "14 Uhr", "12 Uhr", "13 Uhr", "12 Uhr", "14 Uhr"],
    velocity: ["mittel", "niedrig", "hoch", "niedrig", "mittel", "hoch", "niedrig", "accent"],
    patchCables: [cable("VEL OUT", "VCA CV", "#8ecae6")],
    performanceTips: [
      "VCA Decay nur millimeterweise bewegen, das veraendert sofort den Charakter.",
      "Cutoff etwas absenken, wenn die Percussion eher wie ein Shaker wirken soll.",
      "Accent Amount punktuell anheben fuer kleine Fill-Momente.",
    ],
  }),
  patch({
    id: "hat-noise-static-ring",
    category: "Hi-Hat / Noise Percussion",
    name: "Static Ring Hat",
    description: "Offenere Noise-Hat mit leichtem Resonanz-Fokus fuer dunklere, rasche Pattern.",
    parameters: [
      param("OSC 1 Tune", "15 Uhr", "nur noch Tonkante"),
      param("OSC 2 Tune", "16 Uhr", "helle Spitzen"),
      param("Noise Level", "13 Uhr", "Hauptanteil im Noise"),
      param("Mixer Drive", "11 Uhr", "leicht verdichtete Hoehen"),
      param("VCF Cutoff", "13 Uhr", "nicht ganz offen"),
      param("Resonance", "11 Uhr", "enger Luftfokus"),
      param("VCF Mod", "11 Uhr", "kleine Huelle"),
      param("VCA Decay", "9 Uhr", "kurz, aber nicht zu trocken"),
      param("VCF Decay", "8 Uhr", "schnelle Schliessung"),
      param("Tempo", "138 BPM", "fuer schnellere Top-Loops"),
    ],
    pitch: ["14 Uhr", "15 Uhr", "14 Uhr", "16 Uhr", "14 Uhr", "15 Uhr", "14 Uhr", "16 Uhr"],
    velocity: ["hoch", "mittel", "hoch", "niedrig", "accent", "mittel", "hoch", "niedrig"],
    patchCables: [cable("VEL OUT", "VCF MOD", "#fcbf49")],
    performanceTips: [
      "Mit Resonance kannst du schnell zwischen staubig und bissig fahren.",
      "Ein bisschen mehr Drive verdichtet die Hats fuer dichte Techno-Loops.",
      "Pitch muss hier nicht tonal sein, kleine Verschiebungen reichen fuer Leben.",
    ],
  }),
  patch({
    id: "tom-fm-bongo",
    category: "Tom / FM Percussion",
    name: "Rubber Bongo",
    description: "Federnde Tom-Percussion mit kurzem FM-Biss und tonal spielbarem Mittelpunkt.",
    parameters: [
      param("OSC 1 Tune", "11 Uhr", "mittlerer Tom-Grundton"),
      param("OSC 2 Tune", "13 Uhr", "Obertonkante"),
      param("FM Amount", "11 Uhr", "gummiger Snap"),
      param("Pitch Mod", "11 Uhr", "klassischer Tom-Fall"),
      param("OSC Mix", "12 Uhr", "beide Stimmen tragend"),
      param("VCF Cutoff", "11 Uhr", "erdige Mitte"),
      param("Resonance", "10 Uhr", "fokussiert"),
      param("VCA Decay", "10 Uhr", "kurzer Nachklang"),
      param("VCF Decay", "10 Uhr", "gleichmaessiger Ausklang"),
      param("Tempo", "124 BPM", "tribaliger Puls"),
    ],
    pitch: ["11 Uhr", "12 Uhr", "13 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "14 Uhr", "11 Uhr"],
    velocity: ["hoch", "mittel", "hoch", "niedrig", "mittel", "hoch", "accent", "mittel"],
    patchCables: [
      cable("PITCH OUT", "OSC 1 CV", "#00b4d8"),
      cable("VEL OUT", "OSC 2 FM", "#ffb703"),
    ],
    performanceTips: [
      "OSC 1 Tune transponiert die Linie sofort zwischen Tom und Bongo.",
      "FM Amount leicht hochziehen fuer haerteren Rim-Charakter.",
      "Velocity-auf-FM sorgt fuer lebendige Schlaege und darf im Mix gut sichtbar bleiben.",
    ],
  }),
  patch({
    id: "tom-fm-clang",
    category: "Tom / FM Percussion",
    name: "Clang Tom",
    description: "Metallischer Tom-Hybrid mit deutlicher FM-Farbe und kurzem, artikuliertem Ausklang.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "neutraler Kern"),
      param("OSC 2 Tune", "15 Uhr", "helle Modulationsquelle"),
      param("FM Amount", "13 Uhr", "starke metallische Note"),
      param("Pitch Mod", "10 Uhr", "weniger Body, mehr Clang"),
      param("Noise Level", "8 Uhr", "kaum Rauschen"),
      param("VCF Cutoff", "13 Uhr", "mehr Obertone"),
      param("Resonance", "11 Uhr", "enge Betonung"),
      param("VCA Decay", "9 Uhr", "kurz und knackig"),
      param("VCF Decay", "9 Uhr", "scharfer Exit"),
      param("Tempo", "130 BPM", "schnelle Perc-Hooks"),
    ],
    pitch: ["12 Uhr", "15 Uhr", "11 Uhr", "14 Uhr", "12 Uhr", "15 Uhr", "10 Uhr", "13 Uhr"],
    velocity: ["hoch", "accent", "mittel", "hoch", "mittel", "accent", "niedrig", "hoch"],
    patchCables: [
      cable("PITCH OUT", "OSC 2 FM", "#d00000"),
      cable("GATE OUT", "TRIGGER IN", "#219ebc"),
    ],
    performanceTips: [
      "Wenn es zu metallisch wird, FM Amount zuerst zuruecknehmen, nicht Cutoff.",
      "Retrigger aufheben, falls das Pattern offener schwingen soll.",
      "Resonance leicht anheben fuer fast schon glockenartige Ansaetze.",
    ],
  }),
  patch({
    id: "tom-fm-hollow-slap",
    category: "Tom / FM Percussion",
    name: "Hollow Slap",
    description: "Leicht hohl klingende FM-Percussion zwischen Tom, Conga und synthetischem Woodblock.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "mittige Hauptlage"),
      param("OSC 2 Tune", "14 Uhr", "luftige Oberkante"),
      param("FM Amount", "10 Uhr", "knackig statt metallisch"),
      param("Pitch Mod", "12 Uhr", "spuerbarer Tonfall"),
      param("OSC Mix", "11 Uhr", "ein Tick mehr OSC 2"),
      param("VCF Cutoff", "12 Uhr", "offene Hohlkammer"),
      param("Resonance", "10 Uhr", "saubere Kontur"),
      param("VCA Decay", "9 Uhr", "kurzes Slap-Ende"),
      param("VCF Decay", "10 Uhr", "klare Mittenbewegung"),
      param("Tempo", "126 BPM", "griffige Perc-Linie"),
    ],
    pitch: ["12 Uhr", "13 Uhr", "11 Uhr", "12 Uhr", "14 Uhr", "11 Uhr", "13 Uhr", "10 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "accent", "mittel", "hoch", "niedrig", "hoch"],
    patchCables: [cable("VEL OUT", "OSC 2 FM", "#ff9f1c")],
    performanceTips: [
      "OSC 2 Tune leicht nach oben bringt sofort mehr Slap und weniger Tom.",
      "Pitch Mod steuert hier stark, wie akustisch oder synthetisch es wirkt.",
      "Mit schnellerem Tempo funktioniert das Patch auch als perkussive Fill-Linie.",
    ],
  }),
  patch({
    id: "bassline-mono-grit",
    category: "Bassline",
    name: "Mono Grit Bass",
    description: "Monophone Bassline mit staubigem Filter und genug Drive fuer wiederholte 8-Step-Figuren.",
    parameters: [
      param("OSC 1 Tune", "9 Uhr", "tiefer Basiskern"),
      param("OSC 2 Tune", "10 Uhr", "leichte Detune-Spannung"),
      param("FM Amount", "9 Uhr", "kaum metallisch"),
      param("OSC Mix", "12 Uhr", "breiter Grundkoerper"),
      param("Noise Level", "Aus", "fokussierter Bass"),
      param("Mixer Drive", "13 Uhr", "griffige Mitten"),
      param("VCF Cutoff", "10 Uhr", "klassisch geschlossen"),
      param("Resonance", "11 Uhr", "saeureiger Rand"),
      param("VCF Mod", "12 Uhr", "Filter lebt mit dem Pattern"),
      param("VCA Decay", "11 Uhr", "notiert statt nur kickt"),
      param("VCF Decay", "11 Uhr", "sprechender Filter"),
      param("Tempo", "124 BPM", "rollender Bassgroove"),
    ],
    pitch: ["9 Uhr", "11 Uhr", "10 Uhr", "12 Uhr", "9 Uhr", "11 Uhr", "13 Uhr", "10 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "hoch", "mittel", "hoch", "accent", "mittel"],
    patchCables: [
      cable("PITCH OUT", "OSC 1 CV", "#90be6d"),
      cable("VEL OUT", "VCF MOD", "#f94144"),
    ],
    performanceTips: [
      "VCF Cutoff und Resonance sind hier dein klassisches Performance-Duo.",
      "Drive nur anheben, wenn im Arrangement genug Platz fuer Mitten da ist.",
      "Mit OSC 2 Tune fein detunen fuer mehr Bewegung ohne neue Steps.",
    ],
  }),
  patch({
    id: "bassline-round-swing",
    category: "Bassline",
    name: "Round Swing Bass",
    description: "Warme, etwas weichere Bassline mit gutem Zusammenspiel von Velocity und Filterbewegung.",
    parameters: [
      param("OSC 1 Tune", "10 Uhr", "nicht zu sublastig"),
      param("OSC 2 Tune", "10 Uhr", "enger zusammen fuer Waerme"),
      param("FM Amount", "8 Uhr", "praktisch aus"),
      param("OSC Mix", "13 Uhr", "mehr OSC 1-Rundung"),
      param("Mixer Drive", "11 Uhr", "leichte Koernung"),
      param("VCF Cutoff", "11 Uhr", "waermer offen"),
      param("Resonance", "10 Uhr", "sanfter Peak"),
      param("VCF Mod", "11 Uhr", "musikalische Bewegung"),
      param("VCA Decay", "12 Uhr", "laengerer Note-Hold"),
      param("VCF Decay", "11 Uhr", "weich ausklingend"),
      param("Tempo", "116 BPM", "entspannter Groove"),
    ],
    pitch: ["10 Uhr", "12 Uhr", "11 Uhr", "10 Uhr", "13 Uhr", "11 Uhr", "12 Uhr", "9 Uhr"],
    velocity: ["mittel", "hoch", "mittel", "niedrig", "accent", "mittel", "hoch", "niedrig"],
    patchCables: [cable("VEL OUT", "VCF MOD", "#577590")],
    performanceTips: [
      "VCF Decay leicht verlaengern, wenn der Bass mehr Legato-Charakter braucht.",
      "OSC Mix Richtung OSC 1 schieben fuer mehr Fundament.",
      "Mit etwas weniger Tempo funktioniert diese Linie auch als Halftime-Hook.",
    ],
  }),
  patch({
    id: "bassline-dirty-trip",
    category: "Bassline",
    name: "Dirty Trip Bass",
    description: "Mehr Drive und engeres Filter fuer eine bissigere, leicht acidnahe Bassline.",
    parameters: [
      param("OSC 1 Tune", "9 Uhr", "starker Grundkern"),
      param("OSC 2 Tune", "11 Uhr", "raue Kante"),
      param("FM Amount", "10 Uhr", "feiner Dreck im Attack"),
      param("OSC Mix", "12 Uhr", "beide Quellen praesent"),
      param("Mixer Drive", "14 Uhr", "griffige Saettigung"),
      param("VCF Cutoff", "9 Uhr", "enger Start"),
      param("Resonance", "12 Uhr", "bissiger Rand"),
      param("VCF Mod", "13 Uhr", "sprechende Steps"),
      param("VCA Decay", "10 Uhr", "straffer Lauf"),
      param("VCF Decay", "12 Uhr", "mehr Silben pro Step"),
      param("Tempo", "128 BPM", "schnellere Bassfahrt"),
    ],
    pitch: ["9 Uhr", "12 Uhr", "10 Uhr", "13 Uhr", "9 Uhr", "11 Uhr", "14 Uhr", "10 Uhr"],
    velocity: ["hoch", "accent", "mittel", "hoch", "niedrig", "hoch", "accent", "mittel"],
    patchCables: [
      cable("PITCH OUT", "OSC 1 CV", "#2a9d8f"),
      cable("VEL OUT", "VCF MOD", "#e76f51"),
    ],
    performanceTips: [
      "Drive und Resonance zusammen nur in kleinen Schritten bewegen, der Sweet Spot ist klein.",
      "VCF Decay oeffnet hier viele Variationen zwischen Bass und Sequenz-Hook.",
      "Accent Steps eher auf 2 und 7 lassen, damit der Groove bleibt.",
    ],
  }),
  patch({
    id: "acid-bite",
    category: "Acid-artige Sequenz",
    name: "Corroded Acid Lane",
    description: "Scharfe, rollende Sequenz mit resonantem Filter und deutlich akzentuierten Steps.",
    parameters: [
      param("OSC 1 Tune", "11 Uhr", "tragfaehige Mid-Bass-Lage"),
      param("OSC 2 Tune", "12 Uhr", "leichte Saegekante"),
      param("FM Amount", "9 Uhr", "nur Schmutz"),
      param("OSC Mix", "12 Uhr", "beide Quellen aktiv"),
      param("Mixer Drive", "13 Uhr", "mehr Grip"),
      param("VCF Cutoff", "10 Uhr", "enge Startposition"),
      param("Resonance", "14 Uhr", "deutlich acidig"),
      param("VCF Mod", "13 Uhr", "starke Huellenbewegung"),
      param("Filter Env Amt", "14 Uhr", "saeureiger Biss"),
      param("VCA Decay", "10 Uhr", "kurzer Schritt"),
      param("VCF Decay", "12 Uhr", "sprechender Sweep"),
      param("Tempo", "132 BPM", "laufende Sequenz"),
    ],
    pitch: ["11 Uhr", "13 Uhr", "12 Uhr", "14 Uhr", "11 Uhr", "13 Uhr", "15 Uhr", "12 Uhr"],
    velocity: ["hoch", "accent", "mittel", "hoch", "niedrig", "accent", "hoch", "mittel"],
    patchCables: [
      cable("PITCH OUT", "OSC 1 CV", "#43aa8b"),
      cable("VEL OUT", "VCF MOD", "#f3722c"),
      cable("GATE OUT", "ACCENT IN", "#f9c74f"),
    ],
    performanceTips: [
      "Cutoff und Resonance zusammen drehen fuer den klassischen Acid-Morph.",
      "Accent Steps leben besonders von mehr VCF Mod statt nur mehr Lautstaerke.",
      "Drive kurz vor Selbstoszillation ist hier oft der Sweet Spot.",
    ],
  }),
  patch({
    id: "acid-squelch",
    category: "Acid-artige Sequenz",
    name: "Squelch Rail",
    description: "Gummige Sequenz mit mehr Resonanz und engerem VCA fuer fokussierte Acid-Hooks.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "etwas hoeher fuer Lead-Bass"),
      param("OSC 2 Tune", "13 Uhr", "leichtes Ziehen"),
      param("Mixer Drive", "12 Uhr", "griffig aber nicht zerrend"),
      param("VCF Cutoff", "9 Uhr", "enger Start"),
      param("Resonance", "15 Uhr", "nah an Selbstresonanz"),
      param("VCF Mod", "12 Uhr", "gummige Huelle"),
      param("Filter Env Amt", "13 Uhr", "artikulierte Sweeps"),
      param("VCA Decay", "9 Uhr", "trocken und springend"),
      param("VCF Decay", "11 Uhr", "kurze Sprachform"),
      param("Tempo", "128 BPM", "klassische Laufrichtung"),
    ],
    pitch: ["12 Uhr", "13 Uhr", "11 Uhr", "14 Uhr", "12 Uhr", "15 Uhr", "11 Uhr", "13 Uhr"],
    velocity: ["mittel", "accent", "hoch", "mittel", "niedrig", "accent", "hoch", "mittel"],
    patchCables: [
      cable("VEL OUT", "VCF MOD", "#f8961e"),
      cable("PITCH OUT", "OSC 1 CV", "#277da1"),
    ],
    performanceTips: [
      "Kleine Bewegungen an Resonance reichen voellig, der Sweet Spot ist schmal.",
      "Mit VCA Decay wird aus Acid schnell eine perkussive Hook.",
      "Pitch Step 6 und 7 sind gute Kandidaten fuer Live-Transpositionen.",
    ],
  }),
  patch({
    id: "acid-needle-run",
    category: "Acid-artige Sequenz",
    name: "Needle Run",
    description: "Etwas duennere, aggressivere Acid-Linie mit viel Filter-Ansprache und enger Sequenzkontur.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "mittiger Lead-Bass"),
      param("OSC 2 Tune", "14 Uhr", "scharfe Oberkante"),
      param("FM Amount", "8 Uhr", "fast sauber"),
      param("OSC Mix", "11 Uhr", "etwas mehr Spitze"),
      param("Mixer Drive", "13 Uhr", "griffige Mittenspitze"),
      param("VCF Cutoff", "8 Uhr", "enger, bissiger Start"),
      param("Resonance", "14 Uhr", "deutlicher Quack"),
      param("VCF Mod", "14 Uhr", "starke Step-Sprache"),
      param("Filter Env Amt", "15 Uhr", "radikale Sweeps"),
      param("VCA Decay", "9 Uhr", "kurzer Step"),
      param("VCF Decay", "10 Uhr", "engeres Zupacken"),
      param("Tempo", "134 BPM", "schnelle Sequenz"),
    ],
    pitch: ["12 Uhr", "14 Uhr", "11 Uhr", "15 Uhr", "12 Uhr", "13 Uhr", "10 Uhr", "14 Uhr"],
    velocity: ["hoch", "accent", "mittel", "hoch", "niedrig", "accent", "hoch", "mittel"],
    patchCables: [
      cable("PITCH OUT", "OSC 1 CV", "#43aa8b"),
      cable("VEL OUT", "VCF MOD", "#ff7b00"),
      cable("GATE OUT", "ACCENT IN", "#ffd166"),
    ],
    performanceTips: [
      "Filter Env Amt ist hier der direkteste Weg zu mehr oder weniger Biss.",
      "Wenn es zu duenn wird, zuerst OSC Mix wieder Richtung Mitte ziehen.",
      "Mit etwas weniger Tempo bekommt die Linie mehr klassische Acid-Luft.",
    ],
  }),
  patch({
    id: "experimental-broken-clock",
    category: "Experimental Groove",
    name: "Broken Clock Ritual",
    description: "Asymmetrischer Groove mit Cross-Mod und Clock-Retrigger fuer kaputte, aber tanzbare Patterns.",
    parameters: [
      param("OSC 1 Tune", "11 Uhr", "stabile Mitte"),
      param("OSC 2 Tune", "15 Uhr", "chaotische Oberseite"),
      param("FM Amount", "13 Uhr", "deutliche Modulation"),
      param("Pitch Mod", "12 Uhr", "starker Bewegungskern"),
      param("Noise Level", "10 Uhr", "unsaubere Kontur"),
      param("Mixer Drive", "13 Uhr", "gesaettigte Mitte"),
      param("VCF Cutoff", "12 Uhr", "genug Platz fuer Spektrum"),
      param("Resonance", "12 Uhr", "enger Fokus"),
      param("VCA Decay", "9 Uhr", "zerhackte Events"),
      param("VCF Decay", "10 Uhr", "knappe Echos"),
      param("Tempo", "129 BPM", "vorwaertsdrueckend"),
    ],
    pitch: ["11 Uhr", "15 Uhr", "9 Uhr", "14 Uhr", "10 Uhr", "13 Uhr", "12 Uhr", "16 Uhr"],
    velocity: ["hoch", "niedrig", "accent", "mittel", "niedrig", "hoch", "mittel", "accent"],
    patchCables: [
      cable("CLOCK OUT", "TRIGGER IN", "#8338ec"),
      cable("PITCH OUT", "OSC 2 FM", "#3a86ff"),
      cable("VEL OUT", "VCF MOD", "#ff006e"),
    ],
    performanceTips: [
      "Clock-Retrigger an- und abstecken aendert den Groove radikal.",
      "FM Amount ist hier mehr ein Kompositionswerkzeug als nur Klangfarbe.",
      "Pitch Mod auf dem Break hochziehen fuer kontrolliertes Chaos.",
    ],
  }),
  patch({
    id: "experimental-noise-loop",
    category: "Experimental Groove",
    name: "Noise Loop Sketch",
    description: "Raues Hybridpattern aus Noise, Feedback und kurzen tonal-perkussiven Fragmenten.",
    parameters: [
      param("OSC 1 Tune", "13 Uhr", "kleiner Tonkern"),
      param("OSC 2 Tune", "14 Uhr", "bricht das Spektrum auf"),
      param("FM Amount", "10 Uhr", "unsteter Rand"),
      param("Noise Level", "13 Uhr", "deutlich rauschig"),
      param("Mixer Drive", "12 Uhr", "griffiges Zentrum"),
      param("VCF Cutoff", "11 Uhr", "Kontur im Mittelfeld"),
      param("Resonance", "13 Uhr", "nahe am Pfeifen"),
      param("VCF Mod", "11 Uhr", "schwankender Fokus"),
      param("VCA Decay", "8 Uhr", "kurze Bursts"),
      param("VCF Decay", "10 Uhr", "kurze Filterfaecher"),
      param("Tempo", "120 BPM", "mehr Raum fuer Texturen"),
    ],
    pitch: ["13 Uhr", "10 Uhr", "14 Uhr", "11 Uhr", "15 Uhr", "9 Uhr", "12 Uhr", "16 Uhr"],
    velocity: ["mittel", "hoch", "niedrig", "accent", "hoch", "niedrig", "mittel", "accent"],
    patchCables: [
      cable("NOISE OUT", "EXT AUDIO IN", "#ffbe0b"),
      cable("VCF OUT", "VCF MOD", "#fb5607"),
      cable("VEL OUT", "VCA CV", "#3a86ff"),
    ],
    performanceTips: [
      "Feedback ueber VCF OUT sehr vorsichtig bewegen, sonst kippt der Pegel schnell.",
      "Noise Level und Resonance sind der schnellste Weg von Textur zu Krach.",
      "Ideal fuer Intro- oder Breakdown-Flaechen, bevor wieder klare Steps einsetzen.",
    ],
  }),
  patch({
    id: "experimental-gate-crackle",
    category: "Experimental Groove",
    name: "Gate Crackle Maze",
    description: "Gestotterte Perc-Textur mit viel Trigger-Spiel und harscher Modulationskante.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "mittlerer Kern"),
      param("OSC 2 Tune", "15 Uhr", "harte Oberseite"),
      param("FM Amount", "12 Uhr", "klarer Bruch im Attack"),
      param("Pitch Mod", "11 Uhr", "unstete Faelle"),
      param("Noise Level", "11 Uhr", "rauer Belag"),
      param("Mixer Drive", "13 Uhr", "griffige Mitte"),
      param("VCF Cutoff", "12 Uhr", "offene Stoerlinie"),
      param("Resonance", "11 Uhr", "enger Fokus"),
      param("VCA Decay", "8 Uhr", "knappe Gates"),
      param("VCF Decay", "9 Uhr", "kurzer Biss"),
      param("Tempo", "131 BPM", "nervoeser Vortrieb"),
    ],
    pitch: ["12 Uhr", "14 Uhr", "10 Uhr", "15 Uhr", "11 Uhr", "13 Uhr", "9 Uhr", "14 Uhr"],
    velocity: ["hoch", "accent", "niedrig", "hoch", "mittel", "accent", "niedrig", "hoch"],
    patchCables: [
      cable("GATE OUT", "TRIGGER IN", "#ef476f"),
      cable("PITCH OUT", "OSC 2 FM", "#118ab2"),
      cable("VEL OUT", "VCA CV", "#ffd166"),
    ],
    performanceTips: [
      "GATE OUT nach Bedarf abziehen, wenn dir das Pattern zu dicht wird.",
      "FM Amount oeffnet den Klang sofort Richtung digitale Stoerung.",
      "Mit weniger Noise Level wird die Figur trockener und perkussiver.",
    ],
  }),
  patch({
    id: "snare-paper-snap",
    category: "Snare / Clap Hybrid",
    name: "Paper Snap",
    description: "Kurzer, trockener Snare-Clap-Hybrid mit viel Noise und enger Amp-Huelle.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "kleiner tonaler Kern"),
      param("OSC 2 Tune", "14 Uhr", "mehr Luftkante"),
      param("Noise Level", "14 Uhr", "Hauptanteil der Snare"),
      param("OSC Mix", "10 Uhr", "mehr Noise als Ton"),
      param("Mixer Drive", "11 Uhr", "griffige Mitte"),
      param("VCF Cutoff", "12 Uhr", "kontrollierte Offenheit"),
      param("Resonance", "9 Uhr", "trocken"),
      param("VCF Mod", "11 Uhr", "kleiner Snap"),
      param("VCA Decay", "8 Uhr", "scharf und kurz"),
      param("VCF Decay", "9 Uhr", "knapper Burst"),
      param("Snappy", "14 Uhr", "mehr Snare-Spannung"),
      param("Tempo", "128 BPM", "passt gut in 4-on-the-floor"),
    ],
    pitch: ["12 Uhr", "12 Uhr", "13 Uhr", "12 Uhr", "12 Uhr", "13 Uhr", "12 Uhr", "14 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "hoch", "mittel", "accent", "niedrig", "hoch"],
    patchCables: [
      cable("VEL OUT", "VCA CV", "#ff7f51"),
      cable("NOISE OUT", "EXT AUDIO IN", "#6ee7b7"),
    ],
    performanceTips: [
      "Snappy und Noise Level sind hier deine schnellsten Live-Regler.",
      "Mit etwas mehr VCF Cutoff wird der Clap-Anteil heller und luftiger.",
      "VCA Decay nur minimal anheben, sonst kippt das Patch schnell Richtung Burst.",
    ],
  }),
  patch({
    id: "snare-industrial-rush",
    category: "Snare / Clap Hybrid",
    name: "Industrial Rush",
    description: "Breiterer Snare-Ansatz mit mehr Drive und haerterer Mittenkante.",
    parameters: [
      param("OSC 1 Tune", "11 Uhr", "mehr Body im Zentrum"),
      param("OSC 2 Tune", "13 Uhr", "oberer Crack"),
      param("Noise Level", "13 Uhr", "rauschbetonte Snare"),
      param("FM Amount", "10 Uhr", "synthetischer Rand"),
      param("Mixer Drive", "13 Uhr", "aggressiver Zusammenhalt"),
      param("VCF Cutoff", "11 Uhr", "fokussierte Mitten"),
      param("Resonance", "10 Uhr", "enger Punch"),
      param("VCA Decay", "9 Uhr", "straffe Laenge"),
      param("VCF Decay", "10 Uhr", "kurzes Aufreissen"),
      param("Snappy", "13 Uhr", "klare Attack-Kante"),
      param("Tempo", "132 BPM", "schnellere Techno-Kante"),
    ],
    pitch: ["11 Uhr", "12 Uhr", "13 Uhr", "11 Uhr", "12 Uhr", "14 Uhr", "11 Uhr", "13 Uhr"],
    velocity: ["hoch", "mittel", "accent", "hoch", "niedrig", "hoch", "mittel", "accent"],
    patchCables: [cable("VEL OUT", "VCF MOD", "#ffb703")],
    performanceTips: [
      "Drive und Snappy machen den groessten Unterschied zwischen trocken und brutal.",
      "Mit etwas mehr OSC 1 Body wird aus dem Patch schnell eine Tom-Snare-Hybridfarbe.",
      "Accent auf Step 3 und 8 liefert gute Fill-Energie.",
    ],
  }),
  patch({
    id: "rim-wire-rim",
    category: "Rim / Click Percussion",
    name: "Wire Rim",
    description: "Heller Rim-artiger Klick mit kurzem Tonkern und enger Huelle.",
    parameters: [
      param("OSC 1 Tune", "14 Uhr", "hoher Hauptton"),
      param("OSC 2 Tune", "16 Uhr", "harte Spitze"),
      param("FM Amount", "11 Uhr", "drahtiger Klick"),
      param("Pitch Mod", "10 Uhr", "nur leichter Fall"),
      param("Noise Level", "8 Uhr", "nahezu clean"),
      param("VCF Cutoff", "13 Uhr", "offene Kante"),
      param("Resonance", "10 Uhr", "enger Fokus"),
      param("VCA Decay", "8 Uhr", "sehr kurz"),
      param("VCF Decay", "8 Uhr", "kurzer Exit"),
      param("Tempo", "125 BPM", "trockenes Perc-Fundament"),
    ],
    pitch: ["14 Uhr", "16 Uhr", "14 Uhr", "15 Uhr", "14 Uhr", "16 Uhr", "13 Uhr", "15 Uhr"],
    velocity: ["hoch", "mittel", "niedrig", "hoch", "mittel", "accent", "niedrig", "hoch"],
    patchCables: [cable("PITCH OUT", "OSC 2 FM", "#48cae4")],
    performanceTips: [
      "OSC 2 Tune ist der beste Regler zwischen Rim und digitalem Tick.",
      "Mit etwas mehr Resonance wird der Klick enger und praesenter.",
      "VCA Decay extrem klein halten, damit der Patch nicht tonal kippt.",
    ],
  }),
  patch({
    id: "rim-digital-tick",
    category: "Rim / Click Percussion",
    name: "Digital Tick",
    description: "Sehr kurze Click-Percussion mit fast sequencerartigem Raster-Gefuehl.",
    parameters: [
      param("OSC 1 Tune", "15 Uhr", "helle Basis"),
      param("OSC 2 Tune", "16 Uhr", "noch haertere Spitze"),
      param("FM Amount", "12 Uhr", "klarer Tick-Rand"),
      param("OSC Mix", "11 Uhr", "mehr obere Harmonie"),
      param("Noise Level", "Aus", "sauberer Klick"),
      param("VCF Cutoff", "14 Uhr", "voll offen"),
      param("Resonance", "9 Uhr", "trockenes Ende"),
      param("VCA Decay", "8 Uhr", "quasi instant"),
      param("VCF Decay", "8 Uhr", "kaum Nachlauf"),
      param("Tempo", "130 BPM", "klarer Raster-Impuls"),
    ],
    pitch: ["15 Uhr", "16 Uhr", "15 Uhr", "16 Uhr", "14 Uhr", "16 Uhr", "15 Uhr", "16 Uhr"],
    velocity: ["mittel", "hoch", "niedrig", "accent", "mittel", "hoch", "niedrig", "hoch"],
    patchCables: [cable("VEL OUT", "OSC 2 FM", "#fb8500")],
    performanceTips: [
      "FM Amount fein bewegen, damit der Click nicht zu scharf wird.",
      "Dieser Patch funktioniert sehr gut als Layer auf Hats oder snares.",
      "Accent liefert sofort kleine Fill-Momente ohne neue Steps.",
    ],
  }),
  patch({
    id: "drone-fog-resonator",
    category: "Drone / Texture",
    name: "Fog Resonator",
    description: "Langsamer, droniger Textur-Startpunkt mit Feedback und resonanter Filterfarbe.",
    parameters: [
      param("OSC 1 Tune", "11 Uhr", "tragende Grundfarbe"),
      param("OSC 2 Tune", "12 Uhr", "leichte Schwebung"),
      param("FM Amount", "9 Uhr", "nur ein feiner Drift"),
      param("Noise Level", "11 Uhr", "atmende Textur"),
      param("Mixer Drive", "10 Uhr", "weich verdichtet"),
      param("VCF Cutoff", "10 Uhr", "dunkle Flaeche"),
      param("Resonance", "13 Uhr", "resonante Kontur"),
      param("VCF Mod", "10 Uhr", "langsame Bewegung"),
      param("VCA Decay", "13 Uhr", "mehr Schwebe"),
      param("VCF Decay", "12 Uhr", "weite Huelle"),
      param("Tempo", "96 BPM", "viel Platz fuer Textur"),
    ],
    pitch: ["11 Uhr", "12 Uhr", "11 Uhr", "13 Uhr", "11 Uhr", "12 Uhr", "10 Uhr", "13 Uhr"],
    velocity: ["mittel", "niedrig", "hoch", "mittel", "niedrig", "accent", "hoch", "mittel"],
    patchCables: [
      cable("VCF OUT", "EXT AUDIO IN", "#9b5de5"),
      cable("NOISE OUT", "VCF MOD", "#00bbf9"),
    ],
    performanceTips: [
      "VCF Cutoff und Feedback ueber EXT AUDIO IN langsam bewegen, nie ruckartig.",
      "Mit weniger Tempo bekommt das Patch fast schon Ambient-Charakter.",
      "Noise Level fein austarieren, damit die Drone nicht den Grundton verliert.",
    ],
  }),
  patch({
    id: "drone-pulse-mist",
    category: "Drone / Texture",
    name: "Pulse Mist",
    description: "Leicht pulsierende Texture zwischen Drone, FM-Schweben und perkussivem Nebel.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "stabile Mitte"),
      param("OSC 2 Tune", "14 Uhr", "schimmernde Oberlage"),
      param("FM Amount", "11 Uhr", "schwebender Modulationsrand"),
      param("Pitch Mod", "10 Uhr", "kleine tonale Bewegung"),
      param("Noise Level", "10 Uhr", "weicher Staub"),
      param("VCF Cutoff", "11 Uhr", "leichte Oeffnung"),
      param("Resonance", "12 Uhr", "fokussierte Luft"),
      param("VCA Decay", "12 Uhr", "langes Pulsieren"),
      param("VCF Decay", "11 Uhr", "atmende Filterkontur"),
      param("Tempo", "102 BPM", "ruhiger Puls"),
    ],
    pitch: ["12 Uhr", "14 Uhr", "11 Uhr", "13 Uhr", "12 Uhr", "15 Uhr", "11 Uhr", "13 Uhr"],
    velocity: ["niedrig", "mittel", "hoch", "mittel", "niedrig", "accent", "hoch", "mittel"],
    patchCables: [
      cable("PITCH OUT", "OSC 2 FM", "#06d6a0"),
      cable("VEL OUT", "VCF MOD", "#ffd166"),
    ],
    performanceTips: [
      "Mit FM Amount und Resonance kannst du die Texture schnell zwischen weich und glasig verschieben.",
      "Lange Decay-Werte machen das Patch flaechiger, kurze Werte eher pulsierend.",
      "Ideal fuer Intros, Uebergaenge oder als leises Hintergrundbett.",
    ],
  }),
  patch({
    id: "sync-staggered-pulse",
    category: "Syncopated Trigger Groove",
    name: "Staggered Pulse",
    description: "Knapper Groove mit Retrigger, der versetzte Akzente und eine leichte ratcheting-Ahnung erzeugt.",
    parameters: [
      param("OSC 1 Tune", "12 Uhr", "mittige Basis"),
      param("OSC 2 Tune", "13 Uhr", "leicht heller Rand"),
      param("FM Amount", "10 Uhr", "griffiger Attack"),
      param("Pitch Mod", "11 Uhr", "kurzer Fall"),
      param("Mixer Drive", "11 Uhr", "saubere Verdichtung"),
      param("VCF Cutoff", "12 Uhr", "offene Mitten"),
      param("Resonance", "10 Uhr", "enger Fokus"),
      param("VCA Decay", "9 Uhr", "kurzes Gate"),
      param("VCF Decay", "9 Uhr", "schneller Ausklang"),
      param("Accent Amount", "12 Uhr", "klare Synkopen"),
      param("Tempo", "129 BPM", "dichter Groove"),
    ],
    pitch: ["12 Uhr", "13 Uhr", "11 Uhr", "14 Uhr", "12 Uhr", "11 Uhr", "13 Uhr", "10 Uhr"],
    velocity: ["hoch", "niedrig", "accent", "mittel", "hoch", "niedrig", "accent", "mittel"],
    patchCables: [
      cable("CLOCK OUT", "TRIGGER IN", "#3a86ff"),
      cable("VEL OUT", "VCA CV", "#ff006e"),
    ],
    performanceTips: [
      "Retrigger ist hier der Kern des Grooves. Kurz entfernen und wieder stecken bringt sofort Variation.",
      "Mit etwas mehr VCA Decay wird das Pattern weniger nervoes und musikalischer.",
      "Accent Amount bestimmt stark, wie synkopiert der Lauf wirkt.",
    ],
  }),
  patch({
    id: "sync-late-accent",
    category: "Syncopated Trigger Groove",
    name: "Late Accent Runner",
    description: "Groove-Pattern mit spaeteren Akzenten, das zwischen Percussion-Linie und modulierter Bassfigur sitzt.",
    parameters: [
      param("OSC 1 Tune", "11 Uhr", "tragender Grundton"),
      param("OSC 2 Tune", "12 Uhr", "leichter Oberton"),
      param("FM Amount", "9 Uhr", "kontrollierte Kante"),
      param("OSC Mix", "12 Uhr", "ausgewogen"),
      param("VCF Cutoff", "11 Uhr", "fokussierte Mitte"),
      param("Resonance", "11 Uhr", "mehr Artikulation"),
      param("VCF Mod", "12 Uhr", "lebendige Huelle"),
      param("VCA Decay", "10 Uhr", "griffige Steps"),
      param("VCF Decay", "10 Uhr", "deutlicher Ausklang"),
      param("Accent Amount", "13 Uhr", "spaete Schuebe"),
      param("Tempo", "123 BPM", "rollend statt hektisch"),
    ],
    pitch: ["11 Uhr", "12 Uhr", "11 Uhr", "13 Uhr", "10 Uhr", "12 Uhr", "14 Uhr", "11 Uhr"],
    velocity: ["mittel", "niedrig", "hoch", "mittel", "niedrig", "accent", "hoch", "accent"],
    patchCables: [
      cable("PITCH OUT", "OSC 1 CV", "#38b000"),
      cable("VEL OUT", "VCF MOD", "#f77f00"),
    ],
    performanceTips: [
      "Accent auf den spaeten Steps macht die Figur lebendig, ohne sie zu ueberladen.",
      "VCF Mod und Resonance zusammen bewegen fuer schnelle Patternfahrten.",
      "Wenn der Groove zu bassig wird, OSC 1 Tune minimal anheben.",
    ],
  }),
];

const categorySelect = document.querySelector("#categorySelect");
const generateBtn = document.querySelector("#generateBtn");
const favoriteBtn = document.querySelector("#favoriteBtn");
const exportTxtBtn = document.querySelector("#exportTxtBtn");
const exportPdfBtn = document.querySelector("#exportPdfBtn");
const favoriteStatus = document.querySelector("#favoriteStatus");
const favoritesList = document.querySelector("#favoritesList");
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
let favorites = loadFavorites();

const knobValueNodes = new Map(
  [...document.querySelectorAll(".knob")].map((knob) => [
    knob.dataset.control,
    knob.querySelector(".knob-value"),
  ]),
);

const knobNodes = new Map(
  [...document.querySelectorAll(".knob")].map((knob) => [knob.dataset.control, knob]),
);

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function buildCategoryMenu() {
  const categories = [...new Set(patchLibrary.map((entry) => entry.category))];
  const options = [RANDOM_CATEGORY, ...categories];

  categorySelect.innerHTML = "";

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

  sequenceGrid.innerHTML = "";
  sequenceGrid.append(fragment);
}

function choosePatch(category) {
  const pool =
    category === RANDOM_CATEGORY
      ? patchLibrary
      : patchLibrary.filter((entry) => entry.category === category);

  if (!pool.length) {
    return patchLibrary[0];
  }

  return pool[Math.floor(Math.random() * pool.length)];
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
  const patchVariant = deepClone(basePatch);

  patchVariant.parameters = patchVariant.parameters.map((parameter) => {
    if (Math.random() > 0.28) {
      return parameter;
    }

    return {
      ...parameter,
      value: varyClockValue(parameter.value),
      note: `${parameter.note}; leicht variiert`,
    };
  });

  patchVariant.sequencer.pitch = patchVariant.sequencer.pitch.map((step) =>
    Math.random() > 0.22 ? step : varyClockValue(step),
  );
  patchVariant.sequencer.velocity = patchVariant.sequencer.velocity.map((step) =>
    Math.random() > 0.22 ? step : varyVelocity(step),
  );

  return patchVariant;
}

function renderList(target, items, renderItem) {
  target.innerHTML = "";

  items.forEach((item, index) => {
    const element = document.createElement("li");
    element.innerHTML = renderItem(item, index);
    target.append(element);
  });
}

function renderPatch(patchToRender) {
  currentPatch = deepClone(patchToRender);
  patchName.textContent = currentPatch.name;
  patchCategory.textContent = currentPatch.category;
  patchDescription.textContent = currentPatch.description;

  renderList(
    parameterList,
    currentPatch.parameters,
    (parameter) =>
      `<strong>${parameter.control}</strong>: ${parameter.value}<br><span class="muted">${parameter.note}</span>`,
  );

  const cables =
    currentPatch.patchCables.length > 0
      ? currentPatch.patchCables
      : [{ from: "Keine", to: "Direktspielbar", color: "transparent" }];

  renderList(
    cableList,
    cables,
    (entry, index) =>
      entry.from === "Keine"
        ? `<span class="muted">Kein Patchkabel noetig. Dieser Vorschlag funktioniert direkt ueber das Grundpanel.</span>`
        : `<div class="cable-row"><span class="cable-swatch" style="background:${entry.color}"></span><div><strong>Kabel ${
            index + 1
          }</strong>: ${entry.from} &rarr; ${entry.to}</div></div>`,
  );

  renderList(
    pitchList,
    currentPatch.sequencer.pitch,
    (value, index) => `<strong>Step ${index + 1}</strong>: ${value}`,
  );
  renderList(
    velocityList,
    currentPatch.sequencer.velocity,
    (value, index) => `<strong>Step ${index + 1}</strong>: ${value}`,
  );
  renderList(tipsList, currentPatch.performanceTips, (tip) => tip);

  updatePanelValues(currentPatch);
  updateSequencerDisplay(currentPatch);
  updateFavoriteControls();
}

function updatePanelValues(patchToRender) {
  const values = { ...defaultControls };

  patchToRender.parameters.forEach((parameter) => {
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

function updateSequencerDisplay(patchToRender) {
  patchToRender.sequencer.pitch.forEach((value, index) => {
    const pitchNode = document.querySelector(`[data-step-pitch="${index}"]`);
    const velocityNode = document.querySelector(`[data-step-velocity="${index}"]`);

    if (pitchNode) {
      pitchNode.textContent = value;
    }

    if (velocityNode) {
      velocityNode.textContent = patchToRender.sequencer.velocity[index];
    }
  });
}

function clearJackHighlights() {
  document.querySelectorAll(".jack").forEach((jack) => {
    jack.classList.remove("active");
    jack.style.removeProperty("--jack-accent");
  });
}

function getJackPosition(jackName, accentColor) {
  const jack = document.querySelector(`[data-jack="${jackName}"]`);
  if (!jack) {
    return null;
  }

  if (accentColor) {
    jack.style.setProperty("--jack-accent", accentColor);
  }

  jack.classList.add("active");

  const panelBounds = edgePanel.getBoundingClientRect();
  const bounds = jack.getBoundingClientRect();

  return {
    x: bounds.left - panelBounds.left + bounds.width / 2,
    y: bounds.top - panelBounds.top + bounds.height / 2,
  };
}

function getPatchbayTop() {
  const patchbaySection = document.querySelector(".patchbay-section");
  if (!patchbaySection) {
    return edgePanel.clientHeight * 0.75;
  }

  const panelBounds = edgePanel.getBoundingClientRect();
  const sectionBounds = patchbaySection.getBoundingClientRect();
  return sectionBounds.top - panelBounds.top;
}

function buildCablePath(start, end, index, total, patchbayTop) {
  const compact = window.matchMedia("(max-width: 720px)").matches;
  const spread = index - (total - 1) / 2;
  const laneGap = compact ? 16 : 20;
  const laneY = Math.max(28, patchbayTop - (compact ? 18 : 24) - index * laneGap);
  const entryShift = spread * (compact ? 8 : 12);
  const exitShift = spread * (compact ? -8 : -12);
  const bend = compact ? 16 : 22;

  return [
    `M ${start.x} ${start.y}`,
    `C ${start.x} ${start.y - bend}, ${start.x + entryShift} ${laneY + bend}, ${
      start.x + entryShift
    } ${laneY}`,
    `L ${end.x + exitShift} ${laneY}`,
    `C ${end.x + exitShift} ${laneY + bend}, ${end.x} ${end.y - bend}, ${end.x} ${end.y}`,
  ].join(" ");
}

function drawPatchCables(cables) {
  clearJackHighlights();
  cableLayer.innerHTML = "";

  if (!cables.length) {
    return;
  }

  const width = edgePanel.clientWidth;
  const height = edgePanel.clientHeight;
  const patchbayTop = getPatchbayTop();

  cableLayer.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const resolvedCables = cables
    .map((entry) => {
      const start = getJackPosition(entry.from, entry.color);
      const end = getJackPosition(entry.to, entry.color);

      if (!start || !end) {
        return null;
      }

      return { ...entry, start, end };
    })
    .filter(Boolean)
    .sort(
      (left, right) =>
        Math.abs(right.start.x - right.end.x) - Math.abs(left.start.x - left.end.x),
    );

  const compact = window.matchMedia("(max-width: 720px)").matches;

  resolvedCables.forEach((entry, index) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      buildCablePath(entry.start, entry.end, index, resolvedCables.length, patchbayTop),
    );
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", entry.color);
    path.setAttribute("stroke-width", compact ? "3.2" : "4");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("opacity", compact ? "0.92" : "0.96");
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

function getPatchSignature(patchToCheck) {
  return JSON.stringify({
    category: patchToCheck.category,
    name: patchToCheck.name,
    description: patchToCheck.description,
    parameters: patchToCheck.parameters.map(({ control, value }) => ({ control, value })),
    sequencer: patchToCheck.sequencer,
    patchCables: patchToCheck.patchCables.map(({ from, to, color }) => ({ from, to, color })),
  });
}

function loadFavorites() {
  try {
    const stored = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistFavorites() {
  try {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    // Ignore storage errors and keep the UI usable.
  }
}

function isCurrentPatchFavorite() {
  if (!currentPatch) {
    return false;
  }

  const signature = getPatchSignature(currentPatch);
  return favorites.some((entry) => entry.signature === signature);
}

function updateFavoriteControls() {
  const isFavorite = isCurrentPatchFavorite();
  favoriteBtn.textContent = isFavorite ? "Favorit entfernen" : "Zu Favoriten speichern";
  favoriteStatus.textContent = isFavorite
    ? "Dieser Vorschlag ist bereits in deinen Favoriten gespeichert."
    : "Dieser Vorschlag ist noch nicht als Favorit gespeichert.";
}

function createFavoriteEntry(patchToSave) {
  return {
    favoriteId:
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    savedAt: new Date().toLocaleString("de-DE"),
    signature: getPatchSignature(patchToSave),
    patch: deepClone(patchToSave),
  };
}

function toggleFavorite() {
  if (!currentPatch) {
    return;
  }

  const signature = getPatchSignature(currentPatch);
  const existingIndex = favorites.findIndex((entry) => entry.signature === signature);

  if (existingIndex >= 0) {
    favorites.splice(existingIndex, 1);
  } else {
    favorites.unshift(createFavoriteEntry(currentPatch));
    favorites = favorites.slice(0, 32);
  }

  persistFavorites();
  renderFavorites();
  updateFavoriteControls();
}

function renderFavorites() {
  favoritesList.innerHTML = "";

  if (!favorites.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "favorite-empty";
    emptyItem.textContent =
      "Noch keine Favoriten gespeichert. Speichere einen guten Startpunkt, um ihn spaeter schnell wieder aufzurufen.";
    favoritesList.append(emptyItem);
    return;
  }

  favorites.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "favorite-item";
    item.innerHTML = `
      <div class="favorite-meta">
        <span class="favorite-chip">${entry.patch.category}</span>
        <h5>${entry.patch.name}</h5>
        <p>${entry.patch.description}</p>
        <span class="favorite-time">Gespeichert: ${entry.savedAt}</span>
      </div>
      <div class="favorite-actions">
        <button class="favorite-load" type="button" data-action="load" data-favorite-id="${entry.favoriteId}">
          Laden
        </button>
        <button class="favorite-remove" type="button" data-action="remove" data-favorite-id="${entry.favoriteId}">
          Entfernen
        </button>
      </div>
    `;
    favoritesList.append(item);
  });
}

function handleFavoritesClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const favoriteId = button.dataset.favoriteId;
  const favoriteEntry = favorites.find((entry) => entry.favoriteId === favoriteId);
  if (!favoriteEntry) {
    return;
  }

  if (button.dataset.action === "load") {
    renderPatch(favoriteEntry.patch);
    window.requestAnimationFrame(() => drawPatchCables(favoriteEntry.patch.patchCables));
    return;
  }

  favorites = favorites.filter((entry) => entry.favoriteId !== favoriteId);
  persistFavorites();
  renderFavorites();
  updateFavoriteControls();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatPatchText(patchToExport) {
  const parameterLines = patchToExport.parameters
    .map((parameter) => `- ${parameter.control}: ${parameter.value} (${parameter.note})`)
    .join("\n");
  const cableLines =
    patchToExport.patchCables.length > 0
      ? patchToExport.patchCables
          .map((entry, index) => `- Kabel ${index + 1}: ${entry.from} -> ${entry.to}`)
          .join("\n")
      : "- Kein Patchkabel noetig";
  const pitchLines = patchToExport.sequencer.pitch
    .map((value, index) => `- Step ${index + 1}: ${value}`)
    .join("\n");
  const velocityLines = patchToExport.sequencer.velocity
    .map((value, index) => `- Step ${index + 1}: ${value}`)
    .join("\n");
  const tipLines = patchToExport.performanceTips.map((tip) => `- ${tip}`).join("\n");

  return [
    "Behringer EDGE Patch Advisor",
    "",
    `Kategorie: ${patchToExport.category}`,
    `Sound-Name: ${patchToExport.name}`,
    "",
    "Beschreibung:",
    patchToExport.description,
    "",
    "Parameter:",
    parameterLines,
    "",
    "Sequencer Pitch:",
    pitchLines,
    "",
    "Sequencer Velocity:",
    velocityLines,
    "",
    "Patch-Kabel:",
    cableLines,
    "",
    "Performance-Tipps:",
    tipLines,
    "",
    "Hinweis:",
    "Alle Werte sind Startpunkte und sollten am Behringer EDGE nach Gehoer fein angepasst werden.",
  ].join("\n");
}

function downloadTextFile(fileName, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

function exportCurrentPatchAsText() {
  if (!currentPatch) {
    return;
  }

  const fileName = `${slugify(currentPatch.category)}-${slugify(currentPatch.name)}.txt`;
  downloadTextFile(fileName, formatPatchText(currentPatch));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildPrintMarkup(patchToExport) {
  const parameterItems = patchToExport.parameters
    .map(
      (parameter) =>
        `<li><strong>${escapeHtml(parameter.control)}</strong>: ${escapeHtml(parameter.value)}<br><span>${escapeHtml(
          parameter.note,
        )}</span></li>`,
    )
    .join("");
  const cableItems =
    patchToExport.patchCables.length > 0
      ? patchToExport.patchCables
          .map(
            (entry, index) =>
              `<li><span class="swatch" style="background:${entry.color}"></span><strong>Kabel ${
                index + 1
              }</strong>: ${escapeHtml(entry.from)} &rarr; ${escapeHtml(entry.to)}</li>`,
          )
          .join("")
      : "<li>Kein Patchkabel noetig</li>";
  const pitchItems = patchToExport.sequencer.pitch
    .map((value, index) => `<li><strong>Step ${index + 1}</strong>: ${escapeHtml(value)}</li>`)
    .join("");
  const velocityItems = patchToExport.sequencer.velocity
    .map((value, index) => `<li><strong>Step ${index + 1}</strong>: ${escapeHtml(value)}</li>`)
    .join("");
  const tipItems = patchToExport.performanceTips
    .map((tip) => `<li>${escapeHtml(tip)}</li>`)
    .join("");

  return `<!DOCTYPE html>
  <html lang="de">
    <head>
      <meta charset="UTF-8" />
      <title>${escapeHtml(patchToExport.name)}</title>
      <style>
        :root {
          color-scheme: light;
          --ink: #111827;
          --muted: #4b5563;
          --line: #d7dee8;
          --panel: #f7fafc;
          --accent: #86b800;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 32px;
          font-family: "Avenir Next", "Segoe UI", Arial, sans-serif;
          color: var(--ink);
          background: #ffffff;
        }
        .sheet {
          max-width: 880px;
          margin: 0 auto;
        }
        h1, h2, h3, p {
          margin-top: 0;
        }
        .badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          background: #eef8d6;
          color: #567c00;
          font: 600 12px/1.2 "SFMono-Regular", Consolas, monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .intro {
          padding: 20px 24px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: var(--panel);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 18px;
        }
        .card {
          padding: 18px 20px;
          border: 1px solid var(--line);
          border-radius: 18px;
        }
        ul, ol {
          margin: 0;
          padding-left: 18px;
        }
        li {
          margin-bottom: 10px;
          line-height: 1.45;
        }
        span {
          color: var(--muted);
        }
        .swatch {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin-right: 8px;
          border-radius: 999px;
          vertical-align: middle;
        }
        .note {
          margin-top: 18px;
          color: var(--muted);
          font-size: 14px;
        }
        @media print {
          body {
            padding: 16px;
          }
          .grid {
            gap: 12px;
          }
        }
      </style>
    </head>
    <body>
      <main class="sheet">
        <section class="intro">
          <span class="badge">${escapeHtml(patchToExport.category)}</span>
          <h1>${escapeHtml(patchToExport.name)}</h1>
          <p>${escapeHtml(patchToExport.description)}</p>
        </section>
        <section class="grid">
          <article class="card">
            <h2>Parameter</h2>
            <ul>${parameterItems}</ul>
          </article>
          <article class="card">
            <h2>Patch-Kabel</h2>
            <ul>${cableItems}</ul>
          </article>
          <article class="card">
            <h2>Sequencer Pitch</h2>
            <ol>${pitchItems}</ol>
          </article>
          <article class="card">
            <h2>Sequencer Velocity</h2>
            <ol>${velocityItems}</ol>
          </article>
          <article class="card" style="grid-column: 1 / -1;">
            <h2>Performance-Tipps</h2>
            <ul>${tipItems}</ul>
          </article>
        </section>
        <p class="note">Alle Werte sind Startpunkte und sollten am Behringer EDGE nach Gehoer fein angepasst werden.</p>
      </main>
      <script>
        window.addEventListener("load", () => {
          window.print();
        });
      </script>
    </body>
  </html>`;
}

function exportCurrentPatchAsPdf() {
  if (!currentPatch) {
    return;
  }

  const printWindow = window.open("", "_blank", "noopener,noreferrer,width=960,height=900");
  if (!printWindow) {
    window.alert("Bitte Popups fuer diese Seite erlauben, damit der PDF-Export geoeffnet werden kann.");
    return;
  }

  printWindow.document.write(buildPrintMarkup(currentPatch));
  printWindow.document.close();
}

buildCategoryMenu();
createSequencerSlots();
renderFavorites();

generateBtn.addEventListener("click", generatePatch);
favoriteBtn.addEventListener("click", toggleFavorite);
exportTxtBtn.addEventListener("click", exportCurrentPatchAsText);
exportPdfBtn.addEventListener("click", exportCurrentPatchAsPdf);
favoritesList.addEventListener("click", handleFavoritesClick);

window.addEventListener("resize", () => {
  if (currentPatch) {
    window.requestAnimationFrame(() => drawPatchCables(currentPatch.patchCables));
  }
});

categorySelect.value = RANDOM_CATEGORY;
generatePatch();
