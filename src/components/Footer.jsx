export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 text-center py-10 text-mauve-400">
      <p>&copy; 2026 Word Guess! All rights reserved. By: Guilherme Machado</p>
      <section className="social-media flex justify-center items-center mt-6 gap-6">
        <a href="https://github.com/devbianchi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <h1>GitHub</h1>
        </a>
        <a href="https://www.linkedin.com/in/guilherme-bmachado/?locale=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <h1>LinkedIn</h1>
        </a>
      </section>
    </footer>
  );
}
