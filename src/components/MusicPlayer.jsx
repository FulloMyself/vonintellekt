import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";

function MusicPlayer() {
  const [songs, setSongs] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    async function loadSongs() {
      const { data } = await supabase.from("songs").select("*").order("created_at");
      setSongs(data || []);
    }
    loadSongs();
  }, []);

  return (
    <div className="music-player">
      {current && (
        <div className="now-playing">
          <img src={current.cover_url} alt={current.title} />
          <h3>{current.title}</h3>
          <p>{current.artist}</p>
          <audio controls autoPlay src={current.audio_url}></audio>
        </div>
      )}

      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} onClick={() => setCurrent(song)}>
            <img src={song.cover_url} alt={song.title} />
            <p>{song.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicPlayer;