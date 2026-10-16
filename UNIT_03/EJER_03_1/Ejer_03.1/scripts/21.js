// El botón de la tarjeta premium debe tener una funcionalidad. Haz que, al pulsarlo, se dispare una alerta del 
// navegador con el mensaje: ‘Accediendo a información exclusiva para miembros premium’.

const botomPremium = document.getElementById('btn-info-premium');

console.log("21.", botomPremium.addEventListener('click', function() {alert("Accediendo a información exclusiva para miembros premium")}));