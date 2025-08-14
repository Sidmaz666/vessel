const pages = [
  // Social / Feed / Network Style Tools
  { id: 'sightings-feed', name: 'Sightings Feed', desc: 'Anonymous, real-time WebSocket feed for "weird sightings" with location, timestamp, and optional attached glitched images', url: '/sightings-feed' },
  { id: 'darkboard', name: 'Darkboard', desc: 'Anonymous graffiti wall where anyone can draw in neon colors on a shared canvas', url: '/darkboard' },
  { id: 'dead-drop', name: 'Dead Drop', desc: 'A file-sharing system where uploads expire after 24h and are encrypted in-browser', url: '/dead-drop' },
  { id: 'rumor-mill', name: 'Rumor Mill', desc: 'A constantly scrolling text ticker of anonymous rumors submitted by visitors', url: '/rumor-mill' },
  { id: 'encrypted-bulletin', name: 'Encrypted Bulletin', desc: 'Public encrypted messages; only users with the right passphrase can decrypt in-browser', url: '/encrypted-bulletin' },
  { id: 'terminal-chat', name: 'Terminal Chat', desc: 'Retro BBS-style chatroom with ASCII art avatars', url: '/terminal-chat' },
  { id: 'whisper-network', name: 'Whisper Network', desc: 'One-on-one anonymous WebRTC chat that deletes messages after closing tab', url: '/whisper-network' },
  { id: 'phantom-calls', name: 'Phantom Calls', desc: 'VoIP tool for real-time masked voice calls (WebRTC + voice modulation)', url: '/phantom-calls' },
  { id: 'cryptic-polls', name: 'Cryptic Polls', desc: 'Create anonymous polls; results displayed as glitchy terminal bars', url: '/cryptic-polls' },
  { id: 'urban-legends-archive', name: 'Urban Legends Archive', desc: 'User-submitted "local myths" database with upvote/downvote', url: '/urban-legends-archive' },

  // Data & OS Simulation
  { id: 'fake-os-desktop', name: 'Fake OS Desktop', desc: 'Interactive fake hacker desktop (terminal, apps, popups)', url: '/fake-os-desktop' },
  { id: 'glitch-maps', name: 'Glitch Maps', desc: 'A map that shows distorted/fragmented map tiles with "hidden" pins', url: '/glitch-maps' },
  { id: 'retro-irc', name: 'Retro IRC', desc: 'Web-based IRC-style client with bots that feed weird data', url: '/retro-irc' },
  { id: 'password-cracker-simulator', name: 'Password Cracker Simulator', desc: 'Animated fake brute-force tool with customizable target', url: '/password-cracker-simulator' },
  { id: 'matrix-code-rain', name: 'Matrix Code Rain', desc: 'Interactive rain with hidden clickable "data fragments"', url: '/matrix-code-rain' },
  { id: 'dos-shell', name: 'DOS Shell', desc: 'Fully simulated DOS shell with commands unlocking pages', url: '/dos-shell' },
  { id: 'neural-net-visualizer', name: 'Neural Net Visualizer', desc: 'Fake AI decision visualizer with animated neuron maps', url: '/neural-net-visualizer' },
  { id: 'file-system-maze', name: 'File System Maze', desc: 'Navigate through a fake virtual directory structure to find "keys"', url: '/file-system-maze' },
  { id: 'packet-sniffer', name: 'Packet Sniffer', desc: 'Simulated network packet viewer with editable fake traffic', url: '/packet-sniffer' },
  { id: 'system-breach-game', name: 'System Breach Game', desc: 'Interactive hacking puzzle where you "break into" servers', url: '/system-breach-game' },

  // WebGL & Visual FX
  { id: '3d-city-flythrough', name: '3D City Flythrough', desc: 'Neon cyberpunk city flyover (WebGL)', url: '/3d-city-flythrough' },
  { id: 'crt-terminal', name: 'CRT Terminal', desc: 'Realistic CRT screen shader with distortion & ghosting', url: '/crt-terminal' },
  { id: '3d-globe-tracker', name: '3D Globe Tracker', desc: 'Displays "activity pings" around the globe', url: '/3d-globe-tracker' },
  { id: 'fractal-lab', name: 'Fractal Lab', desc: 'Explore real-time WebGL fractals', url: '/fractal-lab' },
  { id: 'cyberstorm', name: 'Cyberstorm', desc: 'Simulated thunderstorm with controllable lightning effects', url: '/cyberstorm' },
  { id: 'blackout-mode', name: 'Blackout Mode', desc: 'Simulates entire site "powering off" with glitch reboot', url: '/blackout-mode' },
  { id: 'liquid-code', name: 'Liquid Code', desc: 'Matrix rain morphing into user\'s typed messages', url: '/liquid-code' },
  { id: 'face-scanner', name: 'Face Scanner', desc: 'Webcam + ML face detection with fake "threat assessment"', url: '/face-scanner' },
  { id: 'glitch-portrait-maker', name: 'Glitch Portrait Maker', desc: 'Upload image → glitch distort in real time', url: '/glitch-portrait-maker' },
  { id: 'wireframe-worlds', name: 'Wireframe Worlds', desc: 'First-person exploration of abstract cyber wireframe levels', url: '/wireframe-worlds' },

  // Mini Games
  { id: 'terminal-rpg', name: 'Terminal RPG', desc: 'Text-based adventure where commands progress story', url: '/terminal-rpg' },
  { id: 'code-breaker', name: 'Code Breaker', desc: 'Mastermind-style code cracking puzzle', url: '/code-breaker' },
  { id: 'escape-the-server', name: 'Escape the Server', desc: 'Escape room logic puzzle inside fake server files', url: '/escape-the-server' },
  { id: 'memory-leak-game', name: 'Memory Leak', desc: 'Memory game where "RAM" fragments are matched', url: '/memory-leak-game' },
  { id: 'pixel-sniper', name: 'Pixel Sniper', desc: 'Retro shooter where targets are "data bugs"', url: '/pixel-sniper' },
  { id: 'firewall-maze', name: 'Firewall Maze', desc: 'Navigate through "firewalls" to reach target node', url: '/firewall-maze' },
  { id: 'botnet-builder', name: 'Botnet Builder', desc: 'Simulation game building a fake botnet', url: '/botnet-builder' },
  { id: 'defrag-game', name: 'Defrag Game', desc: 'Rearrange blocks to "optimize" fake hard drive', url: '/defrag-game' },
  { id: 'phishing-detective', name: 'Phishing Detective', desc: 'Identify fake emails in a mini-game', url: '/phishing-detective' },
  { id: 'terminal-tycoon', name: 'Terminal Tycoon', desc: 'Tycoon sim about running a hacker collective', url: '/terminal-tycoon' },

  // AR / VR / Camera Features
  { id: 'ghost-vision', name: 'Ghost Vision', desc: 'AR camera filter showing "entities" in environment', url: '/ghost-vision' },
  { id: 'thermal-scanner', name: 'Thermal Scanner', desc: 'Fake thermal vision filter with WebGL color maps', url: '/thermal-scanner' },
  { id: 'night-vision', name: 'Night Vision', desc: 'Green night-vision filter with grain', url: '/night-vision' },
  { id: 'face-mask-overlay', name: 'Face Mask Overlay', desc: 'Add real-time creepy masks to faces in webcam feed', url: '/face-mask-overlay' },
  { id: 'anomaly-detector', name: 'Anomaly Detector', desc: 'Shows random "heat spots" around camera view', url: '/anomaly-detector' },
  { id: 'data-overlay-hud', name: 'Data Overlay HUD', desc: 'Adds HUD overlays like in cyberpunk movies', url: '/data-overlay-hud' },
  { id: 'glitch-portal', name: 'Glitch Portal', desc: 'AR effect showing "alternate reality" when pointing camera', url: '/glitch-portal' },
  { id: 'secret-symbol-finder', name: 'Secret Symbol Finder', desc: 'Detects shapes (circles/triangles) in live video', url: '/secret-symbol-finder' },
  { id: 'entity-proximity-alarm', name: 'Entity Proximity Alarm', desc: 'Plays warning sound when "ghosts" are near', url: '/entity-proximity-alarm' },
  { id: 'cipher-lens', name: 'Cipher Lens', desc: 'Reveal hidden messages when scanning QR-like codes', url: '/cipher-lens' },

  // Sound / Music Tools
  { id: 'soundboard-of-doom', name: 'Soundboard of Doom', desc: 'Trigger glitchy sounds & hacker effects', url: '/soundboard-of-doom' },
  { id: 'frequency-analyzer', name: 'Frequency Analyzer', desc: 'Visualize ambient noise via microphone', url: '/frequency-analyzer' },
  { id: 'voice-scrambler', name: 'Voice Scrambler', desc: 'Real-time pitch shift + distortion', url: '/voice-scrambler' },
  { id: 'binaural-beats-generator', name: 'Binaural Beats Generator', desc: 'Create brainwave beats with visualizer', url: '/binaural-beats-generator' },
  { id: 'radio-noise-machine', name: 'Radio Noise Machine', desc: 'Randomized shortwave radio static generator', url: '/radio-noise-machine' },
  { id: 'audio-morpher', name: 'Audio Morpher', desc: 'Upload a sound → morph into creepy tones', url: '/audio-morpher' },
  { id: 'terminal-type-beats', name: 'Terminal Type Beats', desc: 'Auto-play typing + server beeps as music', url: '/terminal-type-beats' },
  { id: 'hacker-drum-machine', name: 'Hacker Drum Machine', desc: 'Retro grid-based beat maker', url: '/hacker-drum-machine' },
  { id: 'ghost-evp-recorder', name: 'Ghost EVP Recorder', desc: '"Capture" paranormal sounds with fake AI detection', url: '/ghost-evp-recorder' },
  { id: 'noise-encryption', name: 'Noise Encryption', desc: 'Encode messages into white noise audio', url: '/noise-encryption' },

  // Story / Lore Pages
  { id: 'incident-reports', name: 'Incident Reports', desc: 'Files describing strange cyber incidents', url: '/incident-reports' },
  { id: 'missing-persons-database', name: 'Missing Persons Database', desc: 'Stylized fictional missing persons search', url: '/missing-persons-database' },
  { id: 'coded-diaries', name: 'Coded Diaries', desc: 'Lore entries hidden behind puzzles', url: '/coded-diaries' },
  { id: 'system-logs', name: 'System Logs', desc: 'Scrollable logs telling hidden story', url: '/system-logs' },
  { id: 'black-files', name: 'Black Files', desc: 'Redacted documents about "classified projects"', url: '/black-files' },
  { id: 'terminal-broadcasts', name: 'Terminal Broadcasts', desc: 'Pre-recorded "hacker transmissions"', url: '/terminal-broadcasts' },
  { id: 'ai-memoirs', name: 'AI Memoirs', desc: 'Fictional AI\'s diary entries', url: '/ai-memoirs' },
  { id: 'virus-codex', name: 'The Virus Codex', desc: 'Archive of fictional cyber viruses', url: '/virus-codex' },
  { id: '404-museum', name: '404 Museum', desc: 'Each error page has lore & clues', url: '/404-museum' },
  { id: 'null-protocol', name: 'The Null Protocol', desc: '"Sacred" hacker document written in code', url: '/null-protocol' },

  // Interactive Science / Data Toys
  { id: 'satellite-tracker', name: 'Satellite Tracker', desc: 'Real-time positions of satellites', url: '/satellite-tracker' },
  { id: 'weather-distorter', name: 'Weather Distorter', desc: 'Modify weather maps with "hacker storms"', url: '/weather-distorter' },
  { id: 'particle-physics-sandbox', name: 'Particle Physics Sandbox', desc: 'WebGL particle simulations', url: '/particle-physics-sandbox' },
  { id: 'dna-sequencer-simulator', name: 'DNA Sequencer Simulator', desc: 'Fake genetic analysis tool', url: '/dna-sequencer-simulator' },
  { id: 'magnet-field-viewer', name: 'Magnet Field Viewer', desc: '3D magnetic field simulation', url: '/magnet-field-viewer' },
  { id: 'solar-flare-monitor', name: 'Solar Flare Monitor', desc: 'Real-time space weather data', url: '/solar-flare-monitor' },
  { id: 'earthquake-pulse', name: 'Earthquake Pulse', desc: 'Globe shaking when seismic events happen', url: '/earthquake-pulse' },
  { id: 'ai-image-tagger', name: 'AI Image Tagger', desc: 'Real-time object recognition', url: '/ai-image-tagger' },
  { id: 'time-distortion-clock', name: 'Time Distortion Clock', desc: 'Warping time visualizations', url: '/time-distortion-clock' },
  { id: 'gravity-sandbox', name: 'Gravity Sandbox', desc: 'Play with orbital bodies in 2D/3D', url: '/gravity-sandbox' },

  // Weird / Creepy Interactive Art
  { id: 'ai-dreamscape', name: 'AI Dreamscape', desc: 'Procedural nightmare visuals', url: '/ai-dreamscape' },
  { id: 'endless-hallway', name: 'Endless Hallway', desc: 'First-person infinite hallway walk', url: '/endless-hallway' },
  { id: 'signal-interference', name: 'Signal Interference', desc: 'Distorted TV transmission you can "tune"', url: '/signal-interference' },
  { id: 'the-eye', name: 'The Eye', desc: 'A giant blinking eye that follows your cursor', url: '/the-eye' },
  { id: 'breathing-walls', name: 'Breathing Walls', desc: '3D shader making walls look alive', url: '/breathing-walls' },
  { id: 'shadow-people', name: 'Shadow People', desc: 'Random shadow figures appear on screen', url: '/shadow-people' },
  { id: 'data-bloom', name: 'Data Bloom', desc: 'Text fragments growing like flowers', url: '/data-bloom' },
  { id: 'glitch-mirror', name: 'Glitch Mirror', desc: 'Webcam mirror that warps unpredictably', url: '/glitch-mirror' },
  { id: 'cursed-files', name: 'Cursed Files', desc: 'Download random corrupted files', url: '/cursed-files' },
  { id: 'noise-painting', name: 'Noise Painting', desc: 'Draw using TV static', url: '/noise-painting' },

  // Hidden / ARG Mechanics
  { id: 'access-gate', name: 'Access Gate', desc: 'Password-protected section for "inner circle"', url: '/access-gate' },
  { id: 'crypto-puzzle-hunt', name: 'Crypto Puzzle Hunt', desc: 'Series of ciphers unlocking hidden pages', url: '/crypto-puzzle-hunt' },
  { id: 'dead-mans-switch', name: 'Dead Man\'s Switch', desc: 'Page that unlocks if visited after set time', url: '/dead-mans-switch' },
  { id: 'time-locked-vault', name: 'Time-Locked Vault', desc: 'Content opens only at specific time', url: '/time-locked-vault' },
  { id: 'covert-channels', name: 'Covert Channels', desc: 'Hidden messages in page source', url: '/covert-channels' },
  { id: 'steganography-tool', name: 'Steganography Tool', desc: 'Hide messages in images', url: '/steganography-tool' },
  { id: 'invisible-forum', name: 'Invisible Forum', desc: 'Access only if referrer matches hidden link', url: '/invisible-forum' },
  { id: 'geolocked-content', name: 'GeoLocked Content', desc: 'Unlocks based on visitor\'s location', url: '/geolocked-content' },
  { id: 'fragmented-pages', name: 'Fragmented Pages', desc: 'Site scattered across multiple domains', url: '/fragmented-pages' },
  { id: 'black-key', name: 'The Black Key', desc: 'Hidden clickable key appearing at rare intervals', url: '/black-key' },

  // Classic Hacker Tools
  { id: 'ping-flood-simulator', name: 'Ping Flood Simulator', desc: 'Fake network stress tool', url: '/ping-flood-simulator' },
  { id: 'traceroute-visualizer', name: 'Traceroute Visualizer', desc: 'Animated path tracing across world map', url: '/traceroute-visualizer' },
  { id: 'port-scanner-sim', name: 'Port Scanner Sim', desc: 'Pretend to scan open ports', url: '/port-scanner-sim' },
  { id: 'hash-cracker-sim', name: 'Hash Cracker Sim', desc: 'Fake cracking hashes in real-time', url: '/hash-cracker-sim' },
  { id: 'sql-injector-puzzle', name: 'SQL Injector Puzzle', desc: 'Learn SQL injection in safe sim', url: '/sql-injector-puzzle' },
  { id: 'packet-injection-game', name: 'Packet Injection Game', desc: 'Modify packets to bypass firewall', url: '/packet-injection-game' },
  { id: 'password-strength-meter', name: 'Password Strength Meter', desc: 'Over-the-top animations for weak passwords', url: '/password-strength-meter' },
  { id: 'wifi-mapper', name: 'Wi-Fi Mapper', desc: 'Fake Wi-Fi networks appearing', url: '/wifi-mapper' },
  { id: 'keylogger-sim', name: 'Keylogger Sim', desc: 'Records fake keystrokes for demo', url: '/keylogger-sim' },
  { id: 'cyber-range', name: 'Cyber Range', desc: 'Safe hacking training sandbox', url: '/cyber-range' },

  // Misc Cool Utility Pages
  { id: 'retro-file-editor', name: 'Retro File Editor', desc: 'Edit text files in ANSI-style UI', url: '/retro-file-editor' },
  { id: 'gif-corruptor', name: 'GIF Corruptor', desc: 'Upload GIF → apply glitch effects', url: '/gif-corruptor' },
  { id: 'ansi-art-studio', name: 'ANSI Art Studio', desc: 'Draw in pure ASCII', url: '/ansi-art-studio' },
  { id: 'terminal-translator', name: 'Terminal Translator', desc: 'Translate text into "hacker speak"', url: '/terminal-translator' },
  { id: 'name-cipher', name: 'Name Cipher', desc: 'Encode your name in different ciphers', url: '/name-cipher' },
  { id: 'text-rain', name: 'Text Rain', desc: 'Words fall and bounce off mouse', url: '/text-rain' },
  { id: 'code-poetry', name: 'Code Poetry', desc: 'Animate poetic code lines', url: '/code-poetry' },
  { id: 'fake-virus-maker', name: 'Fake Virus Maker', desc: 'Generates fake malware animations', url: '/fake-virus-maker' },
  { id: 'glitched-clock', name: 'Glitched Clock', desc: 'Time display warps randomly', url: '/glitched-clock' },
  { id: 'binary-converter', name: 'Binary Converter', desc: 'Convert text to binary visually', url: '/binary-converter' },

  // Deep Glitch Zone
  { id: 'data-collapse', name: 'Data Collapse', desc: 'Shaders tearing apart page elements', url: '/data-collapse' },
  { id: '404-abyss', name: '404 Abyss', desc: 'Falling endlessly into void', url: '/404-abyss' },
  { id: 'corrupted-ui', name: 'Corrupted UI', desc: 'UI randomly rearranges itself', url: '/corrupted-ui' },
  { id: 'hacker-fever-dream', name: 'Hacker Fever Dream', desc: 'Pages overlayed with shifting random text', url: '/hacker-fever-dream' },
  { id: 'noise-takeover', name: 'Noise Takeover', desc: 'Page fills with uncontrollable static', url: '/noise-takeover' },
  { id: 'melting-text', name: 'Melting Text', desc: 'Text melts like wax', url: '/melting-text' },
  { id: 'terminal-infection', name: 'Terminal Infection', desc: 'Green "virus" spreads across page', url: '/terminal-infection' },
  { id: 'the-pulse', name: 'The Pulse', desc: 'Screen flashes to simulated heartbeat', url: '/the-pulse' },
  { id: 'memory-corruption', name: 'Memory Corruption', desc: 'Fake RAM dump slowly replacing site text', url: '/memory-corruption' },
  { id: 'time-freeze', name: 'Time Freeze', desc: 'Page animations stop & resume unpredictably', url: '/time-freeze' },

  // Meta & Self-Referential Pages
  { id: 'site-map-circuit', name: 'The Site Map as a Circuit', desc: 'Site map visualized as PCB', url: '/site-map-circuit' },
  { id: 'history-terminal', name: 'History Terminal', desc: 'Scroll through all past site versions', url: '/history-terminal' },
  { id: 'admin-backdoor', name: 'Admin Backdoor', desc: 'Fake admin panel with dummy data', url: '/admin-backdoor' },
  { id: 'bug-tracker', name: 'Bug Tracker', desc: 'Filled with weird "bugs" as lore', url: '/bug-tracker' },
  { id: 'changelog-apocalypse', name: 'Changelog of the Apocalypse', desc: 'Version updates describing dystopian events', url: '/changelog-apocalypse' },
  { id: 'visitor-log', name: 'Visitor Log', desc: 'Fake list of creepy usernames visiting site', url: '/visitor-log' },
  { id: 'corrupted-tos', name: 'Corrupted Terms of Service', desc: 'ToS filled with strange messages', url: '/corrupted-tos' },
  { id: 'privacy-policy-hell', name: 'Privacy Policy from Hell', desc: 'Overly complex & absurd', url: '/privacy-policy-hell' },
  { id: 'the-compiler', name: 'The Compiler', desc: 'Converts random input into bizarre output', url: '/the-compiler' },
  { id: 'glitch-credits', name: 'Glitch Credits', desc: 'Credits sequence with visual corruption', url: '/glitch-credits' },

  // Easter Egg Pages
  { id: 'hidden-snake-game', name: 'Hidden Snake Game', desc: 'Playable inside console', url: '/hidden-snake-game' },
  { id: 'ascii-doom-clone', name: 'ASCII Doom Clone', desc: 'FPS in ASCII', url: '/ascii-doom-clone' },
  { id: 'data-minesweeper', name: 'Data Minesweeper', desc: 'Minesweeper with "encrypted" cells', url: '/data-minesweeper' },
  { id: 'terminal-pong', name: 'Terminal Pong', desc: 'Pong inside the terminal', url: '/terminal-pong' },
  { id: 'cursor-chaos', name: 'Cursor Chaos', desc: 'Multiple fake cursors move around', url: '/cursor-chaos' },
  { id: 'reverse-text-world', name: 'Reverse Text World', desc: 'Entire site mirrored & inverted', url: '/reverse-text-world' },
  { id: 'fake-shutdown', name: 'Fake Shutdown', desc: 'Looks like OS shutting down', url: '/fake-shutdown' },
  { id: 'blue-screen-room', name: 'Blue Screen Room', desc: 'BSOD page with secrets', url: '/blue-screen-room' },
  { id: 'noise-room', name: 'The Noise Room', desc: 'Only sound, no visuals', url: '/noise-room' },
  { id: 'final-node', name: 'Final Node', desc: 'The last hidden page with an epic 3D sequence revealing site\'s "truth"', url: '/final-node' },
  {
    id: "Nakka Rocketry",
    name: "Nakka Rocketry",
    desc: "This site describes how to build, inexpensive, rocket motors using common material and simple hand tools.",
    url: "https://nakka-rocketry.net/pvcmot4.html"
  },
  {
    id: "Yarrlist",
    name: "Yarrlist",
    desc: "Movie/TV/Anime Website List",
    url: "https://yarrlist.com/"
  },
  {
    id: "Proxyium",
    name: "Proxyium",
    desc: "Free web proxy that lets you browse anonymously and unblock sites like YouTube and Facebook.",
    url: "https://proxyium.com"
  },
  {
    id: "Hidester",
    name: "Hidester",
    desc: "Free online proxy and VPN service for secure and anonymous surfing.",
    url: "https://hidester.one"
  },
  {
    id: "Whoer",
    name: "Whoer",
    desc: "Privacy tool to check IP info, VPN status, and browse via free anonymizer.",
    url: "https://whoer.net"
  },
  {
    id: "OSINT Framework",
    name: "OSINT Framework",
    desc: "Directory of hundreds of free OSINT tools for open-source intelligence gathering.",
    url: "https://osintframework.com"
  },
  {
    id: "SpiderFoot",
    name: "SpiderFoot",
    desc: "Automated OSINT reconnaissance tool integrating multiple data sources.",
    url: "https://spiderfoot.net"
  },
  {
    id: "Strudel",
    name: "Strudel.CC",
    desc: "With Strudel, you can expressively write dynamic music pieces. It is an official port of the Tidal Cycles pattern language to JavaScript.",
    url: "https://strudel.cc/"
  },
  {
    id: "Shodan",
    name: "Shodan",
    desc: "Search engine for Internet-connected devices including webcams and servers.",
    url: "https://shodan.io"
  },
  {
    id: "Intelligence X",
    name: "Intelligence X",
    desc: "Investigative search engine indexing leaks, darknet content, blockchain data, and more.",
    url: "https://intelx.io"
  },
  {
    id: "Godlike Productions",
    name: "Godlike Productions",
    desc: "Public forum discussing conspiracies, UFOs, advanced tech, and fringe topics.",
    url: "https://www.godlikeproductions.com"
  },
  {
    id: "Rense",
    name: "Rense",
    desc: "Alternative news aggregator covering conspiracies, politics, and fringe science.",
    url: "https://www.rense.com"
  },
  {
    id: "The Vigilant Citizen",
    name: "The Vigilant Citizen",
    desc: "Analyzes pop culture for hidden messages and occult symbolism.",
    url: "https://vigilantcitizen.com"
  },
  {
    id: "Glitch Art Generator",
    name: "Glitch Art Generator",
    desc: "Online tool for applying glitch effects to images via pixel displacement.",
    url: "https://glitchartgenerator.com"
  },
  {
    id: "Pixel Sorter",
    name: "Pixel Sorter",
    desc: "Image glitch tool that sorts pixels based on brightness and color intervals.",
    url: "https://pixel-sorter.com"
  },
  {
    id: "Hack Forums",
    name: "Hack Forums",
    desc: "Large online forum for hacker culture, tech discussions, and security topics.",
    url: "https://hackforums.net"
  },
  {
    id: "Tor Project",
    name: "Tor Project",
    desc: "Official site for Tor Browser, enabling anonymous browsing via onion routing.",
    url: "https://www.torproject.org"
  },
  {
    id: "Sacred Texts",
    name: "Sacred Texts",
    desc: "Massive library of religious, mythological, folklore, and occult books.",
    url: "http://sacred-texts.com"
  },
  {
    id: "Twilit Grotto Esoteric Archives",
    name: "Twilit Grotto Esoteric Archives",
    desc: "Collection of historical Western occult documents and manuscripts.",
    url: "http://esotericarchives.com"
  },
  {
    id: "advance-spectrograph",
    name: "Advance Spectrograph",
    desc: "A spectrograph that shows the frequency of the audio input.",
    url: "/advance-spectrograph"
  },
  {
    id: "audio-modulator",
    name: "Audio Modulator v8",
    desc: "A tool that allows you to modulate audio in real-time.",
    url: "/audio-modulator"
  }
];

module.exports = pages;
