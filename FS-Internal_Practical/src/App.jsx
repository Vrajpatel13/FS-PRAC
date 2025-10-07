import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import { motion } from 'framer-motion';

const styles = {
  app: { backgroundColor: '#111', color: '#fff', minHeight: '100vh', fontFamily: 'Helvetica, Arial, sans-serif' },
  navbar: { position: 'fixed', top: 0, left: 0, right: 0, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', zIndex: 50, transition: 'background-color 300ms' },
  navLogo: { fontWeight: '700', letterSpacing: 1.5 },
  banner: { position: 'relative', height: '50vh', display: 'flex', alignItems: 'flex-end', padding: '40px', backgroundSize: 'cover', backgroundPosition: 'center' },
  bannerContent: { maxWidth: '60%' },
  button: { padding: '10px 18px', marginRight: 10, borderRadius: 4, border: 'none', cursor: 'pointer' },
  rowsContainer: { padding: '20px' },
  row: { marginBottom: 24 },
  rowTitle: { fontSize: 18, margin: '8px 0' },
  cards: { display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8 },
  card: { minWidth: 150, height: 200, borderRadius: 6, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer', transition: 'transform 200ms', flex: '0 0 auto' },
  modalOverlay: { position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 },
  modalContent: { width: '80%', maxWidth: 900, backgroundColor: '#000', padding: 12, borderRadius: 8 }
};

const OMDB_KEY = '207985b8';
const OMDB_BASE = 'https://www.omdbapi.com/';

function Navbar() {
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    function onScroll() { setShowBg(window.scrollY > 80); }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ ...styles.navbar, backgroundColor: showBg ? 'rgba(17,17,17,0.95)' : 'transparent' }}>
      <div style={styles.navLogo}>VrajFlix (OMDb)</div>
    </div>
  );
}

function Banner({ featured }) {
  if (!featured) return null;
  const bg = featured.Poster && featured.Poster !== 'N/A' ? featured.Poster : undefined;
  const title = featured.Title;
  const truncated = (text, n = 150) => text?.length > n ? text.substr(0, n - 1) + '…' : text;
  return (
    <header style={{ ...styles.banner, backgroundImage: bg ? `url(${bg})` : undefined }}>
      <div style={styles.bannerContent}>
        <h1 style={{ fontSize: 28, margin: 0 }}>{title}</h1>
        <p style={{ maxWidth: '80%' }}>{truncated(featured.Plot, 170)}</p>
        <div style={{ marginTop: 12 }}>
          <button style={{ ...styles.button, backgroundColor: '#e6e6e6' }}>Play</button>
          <button style={{ ...styles.button, backgroundColor: '#333', color: '#fff' }}>My List</button>
        </div>
      </div>
    </header>
  );
}

function useOmdbSearch(query) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${OMDB_BASE}?apikey=${OMDB_KEY}&s=${encodeURIComponent(query)}`;
        const res = await axios.get(url);
        setItems(res.data.Search || []);
      } catch (err) {
        console.error('OMDb fetch error', err);
      }
    }
    fetchData();
  }, [query]);
  return items;
}

function Row({ title, search, onCardClick }) {
  const items = useOmdbSearch(search);
  return (
    <div style={styles.row}>
      <h3 style={styles.rowTitle}>{title}</h3>
      <div style={styles.cards}>
        {items.map(item => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={item.imdbID}
            onClick={() => onCardClick(item)}
            style={{ ...styles.card, backgroundImage: item.Poster && item.Poster !== 'N/A' ? `url(${item.Poster})` : undefined }}
            title={item.Title}
          />
        ))}
      </div>
    </div>
  );
}

function TrailerModal({ show, onClose, trailerUrl }) {
  if (!show) return null;
  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ float: 'right', marginBottom: 8 }}>Close</button>
        <div style={{ clear: 'both' }}>
          {trailerUrl ? (
            <ReactPlayer url={trailerUrl} width="100%" controls />
          ) : (
            <div style={{ padding: 40, textAlign: 'center' }}>Trailer not available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [featured, setFeatured] = useState(null);
  useEffect(() => {
    async function pickFeatured() {
      try {
        const res = await axios.get(`${OMDB_BASE}?apikey=${OMDB_KEY}&s=avengers`);
        const arr = res.data.Search || [];
        if (arr.length) {
          const full = await axios.get(`${OMDB_BASE}?apikey=${OMDB_KEY}&i=${arr[0].imdbID}&plot=full`);
          setFeatured(full.data);
        }
      } catch (err) { console.error(err); }
    }
    pickFeatured();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  async function openTrailerFor(item) {
    const query = encodeURIComponent(item.Title + ' trailer');
    setTrailerUrl(`https://www.youtube.com/results?search_query=${query}`);
    setModalOpen(true);
  }

  return (
    <div style={styles.app}>
      <Navbar />
      <div style={{ paddingTop: 70 }} />
      <Banner featured={featured} />
      <main style={styles.rowsContainer}>
        <Row title="Avengers" search="avengers" onCardClick={openTrailerFor} />
        <Row title="Batman" search="batman" onCardClick={openTrailerFor} />
        <Row title="Spider-Man" search="spiderman" onCardClick={openTrailerFor} />
        <Row title="Harry Potter" search="harry potter" onCardClick={openTrailerFor} />
      </main>
      <TrailerModal show={modalOpen} onClose={() => setModalOpen(false)} trailerUrl={trailerUrl} />
      <footer style={{ padding: 20, textAlign: 'center', color: '#888' }}>Built with OMDb API • Demo clone</footer>
    </div>
  );
}