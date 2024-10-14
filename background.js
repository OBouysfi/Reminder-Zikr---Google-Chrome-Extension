// Fonction pour déclencher l'alerte
function showReminder() {
    alert('لا تنسى ذكر الله');
  }
  
  // Configurer une alarme toutes les 10 minutes
  chrome.alarms.create('zikrReminder', { periodInMinutes: 1 });
  
  // Détecter quand l'alarme sonne et afficher le rappel
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'zikrReminder') {
      showReminder();
    }
  });
  