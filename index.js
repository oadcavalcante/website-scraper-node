import scrape from "website-scraper";
import PuppeteerPlugin from "website-scraper-puppeteer";
import path from "path";
import { fileURLToPath } from "url";

// Obter o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

scrape({
  // Forneça a URL do site que você quer copiar
  urls: ["https://site-que-voce-quer-copiar.com.br"],

  // Especifique a pasta onde os arquivos do site serão salvos
  directory: path.resolve(__dirname, "pasta-do-site"),

  // Carregue o plugin do Puppeteer
  plugins: [
    new PuppeteerPlugin({
      launchOptions: {
        headless: true,
      },
      scrollToBottom: {
        timeout: 10000,
        viewportN: 10,
      },
    }),
  ],
})
  .then((result) => {
    console.log("Website scraped successfully!", result);
  })
  .catch((err) => {
    console.error("Error scraping the website:", err);
  });
