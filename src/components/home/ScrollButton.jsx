'use client';

export default function ScrollButton() {
  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  return (
    <button onClick={scrollToBottom} className="trovaci-button">
      <svg width="20" height="20" viewBox="0 0 45.657 45.657" fill="currentColor">
        <path d="M22.829,0C12.396,0,3.911,8.486,3.911,18.917c0,13.405,17.023,25.839,17.748,26.362c0.349,0.251,0.759,0.378,1.17,0.378 c0.389,0,0.775-0.113,1.113-0.339c0.728-0.487,17.805-12.102,17.805-26.401C41.747,8.487,33.26,0,22.829,0z M22.867,41.163 C19.201,38.246,7.911,28.48,7.911,18.918c0-8.226,6.692-14.917,14.918-14.917c8.227,0,14.918,6.692,14.918,14.917 C37.747,29.135,26.542,38.398,22.867,41.163z" />
        <path d="M23.033,10.461c-4.359,0-7.905,3.546-7.905,7.905c0,4.358,3.546,7.905,7.905,7.905c4.358,0,7.905-3.547,7.905-7.905 C30.938,14.007,27.391,10.461,23.033,10.461z M23.033,24.271c-3.256,0-5.905-2.649-5.905-5.905s2.649-5.905,5.905-5.905 s5.905,2.649,5.905,5.905S26.289,24.271,23.033,24.271z" />
      </svg>
      TROVACI
    </button>
  );
}