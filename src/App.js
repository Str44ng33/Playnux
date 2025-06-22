import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const JOGOS = [
  "The Witcher 3: Wild Hunt",
  "Cyberpunk 2077",
  "Elden Ring",
  "Red Dead Redemption 2",
  "Dota 2",
  "Apex Legends",
  "Terraria",
  "Left 4 Dead 2",
  "Rust",
  "ARK: Survival Evolved",
  "Hades",
  "Hollow Knight",
  "Portal 2",
  "Stardew Valley",
  "PAYDAY 2",
  "Don't Starve Together",
  "Team Fortress 2",
  "Fall Guys",
  "BattleBit Remastered",
  "Dead by Daylight",
  "Phasmophobia",
  "No Man's Sky",
  "Among Us",
  "Slay the Spire",
  "Dark Souls III",
  "Subnautica",
  "Grounded",
  "Deep Rock Galactic",
  "Sea of Thieves",
  "The Forest",
];

const ITEMS = [
  {
    img: "https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Forg%2Fvinegarhq%2FSober%2Ffb119a2d63c453db229276ffae1bf0a4%2Ficons%2F128x128%2Forg.vinegarhq.Sober.png&w=128&q=100",
    title: "Roblox",
    link: "https://flathub.org/apps/org.vinegarhq.Sober",
    text: "Sober (Flathub)",
  },
  {
    img: "https://images.dwncdn.net/images/t_app-icon-l/p/1e3e961e-69c6-4059-befc-5e036db98548/3930184263/tlauncher-logo",
    title: "Minecraft Java",
    link: "https://tlauncher.org/",
    text: "TLauncher",
  },
  {
    img: "https://dl.flathub.org/media/io/mrarm/mcpelauncher/21378b563da742b4b2d73451a6e240d5/icons/128x128@2/io.mrarm.mcpelauncher.png",
    title: "Minecraft Bedrock",
    link: "https://flathub.org/apps/io.mrarm.mcpelauncher",
    text: "Nix Launcher",
  },
  {
    img: "https://images.seeklogo.com/logo-png/27/1/counter-strike-global-offensive-logo-png_seeklogo-273411.png",
    title: "CS:GO",
    link: "https://www.protondb.com/app/730",
    text: "ProtonDB",
  },
  {
    img: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?resize=1&w=480&h=270&quality=medium",
    title: "GTA V",
    link: "https://www.protondb.com/app/271590",
    text: "ProtonDB",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Roblox_Studio_logo_2021_present.svg/2048px-Roblox_Studio_logo_2021_present.svg.png",
    title: "Roblox Studio",
    link: "https://flathub.org/pt-BR/apps/org.vinegarhq.Vinegar",
    text: "Vinegar",
  },
  {
    img: "https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Fsh%2Fppy%2Fosu%2Ff1197c8dab8a0883bb8edbc4e1a5c803%2Ficons%2F128x128%2Fsh.ppy.osu.png&w=128&q=100",
    title: "OSU!",
    link: "https://flathub.org/pt-BR/apps/sh.ppy.osu",
    text: "Flathub",
  },
  {
    img: "https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Forg%2Fppsspp%2FPPSSPP%2Fcd7d2c7175435b4524b858caa3ec88a1%2Ficons%2F128x128%2Forg.ppsspp.PPSSPP.png&w=128&q=100",
    title: "PPSSPP",
    link: "https://flathub.org/pt-BR/apps/org.ppsspp.PPSSPP",
    text: "Flathub",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const idx = useRef(0);
  const ch = useRef(0);
  const to = useRef(null);

  useEffect(() => {
    function type() {
      const game = JOGOS[idx.current];
      if (ch.current <= game.length) {
        setPlaceholder(game.slice(0, ch.current));
        ch.current++;
        to.current = setTimeout(type, 120);
      } else {
        to.current = setTimeout(() => {
          ch.current = 0;
          idx.current = (idx.current + 1) % JOGOS.length;
          type();
        }, 1500);
      }
    }
    type();
    return () => clearTimeout(to.current);
  }, []);

  const buscar = () => {
    if (!search.trim()) return alert("Digite o nome do jogo!");
    window.open(
      `https://www.protondb.com/search?q=${encodeURIComponent(search.trim())}`,
      "_blank"
    );
  };

  return (
    <div className="app">
      <div className="gif-wrap">
        <img
          src="https://i.pinimg.com/originals/ba/e3/0e/bae30e0c7acfec296e5a30d0a75af0f1.gif"
          alt="vibe"
          className="gif"
        />
      </div>
      <h1 className="title">Playnux: "Roda no Linux?"</h1>

      <div className="grid">
        {ITEMS.map((i) => (
          <div className="card" key={i.title}>
            <img src={i.img} alt={i.title} className="icon" />
            <h2>{i.title}</h2>
            <a href={i.link} target="_blank" rel="noopener noreferrer">
              {i.text}
            </a>
          </div>
        ))}
      </div>

      <div className="search">
        <h2>Não achou seu jogo e ele é da Steam?</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscar()}
          placeholder={placeholder}
        />
        <button onClick={buscar}>Pesquisar</button>
        <p className="legend">
          Se o seu jogo estiver marcado como{" "}
          <span className="nat">Nativo</span>,{" "}
          <span className="gold">Ouro</span>,{" "}
          <span className="silv">Prata</span> ou{" "}
          <span className="bron">Bronze</span>, ele roda no Linux!
        </p>
      </div>

      <footer className="footer">
        Feito por{" "}
        <a
          href="https://github.com/Str44ng33"
          target="_blank"
          rel="noreferrer"
        >
          Matheus
        </a>
      </footer>
    </div>
  );
}

export default App;
