import fs from 'fs';

const PLACE_ID = 'ChIJo9N1B6eTBUgR962yM-1iEkA'; 
// !!! METS TA CLE API GOOGLE OBTENUE SUR LA GOOGLE CLOUD CONSOLE ICI !!!
const API_KEY = 'VOTRE_API_KEY_GOOGLE'; 

async function fetchReviews() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}&language=fr`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === "OK" && data.result.reviews) {
      // Vérifie si le dossier de destination existe, sinon le crée
      if (!fs.existsSync('./src/data')){
          fs.mkdirSync('./src/data', { recursive: true });
      }
      
      // Écrit le fichier en dur
      fs.writeFileSync('./src/data/google-reviews.json', JSON.stringify(data.result.reviews, null, 2));
      console.log('✅ Avis Google synchronisés en dur avec succès !');
    } else {
      console.error('❌ Erreur de réponse Google API :', data.error_message || data.status);
    }
  } catch (error) {
    console.error('❌ Erreur lors de la requête Google:', error);
  }
}

fetchReviews();