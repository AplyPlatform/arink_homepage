
$(function() {     
  const setButtons = () => {    
    const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
    
    paintandquestPreviewButton.addEventListener('click', function (evt) {
      paintandquestPreviewButton.setAttribute("visible", false);
      document.querySelector("#paintandquest-video-mp4").play();
    });
  }

  const showPortfolio = () => {
    const portfolio = document.querySelector("#portfolio-panel");
    portfolio.setAttribute("visible", true);
    
    const avatar = document.querySelector("#avatar");
    let z = -0.3;
    const id = setInterval(() => {
      z += 0.02;
      if (z >= 1.5) {
        clearInterval(id);
      }
      avatar.setAttribute("position", "0 0 " + z);
    }, 10);    
  }

  function updateMindSet() {
    const sceneEl = document.querySelector('a-scene');
    const cardTarget = document.querySelector("#guidecard");
    setButtons();

    sceneEl.addEventListener('targetFound', event => {                            
      cardTarget.setAttribute("visible", false);      
      showPortfolio();
    });
      
    sceneEl.addEventListener('targetLost', event => {            
      paintandquestPreviewButton.setAttribute("visible", true);
      cardTarget.setAttribute("visible", true);
      document.querySelector("#paintandquest-video-mp4").stop();
    });    
  }

  updateMindSet();
});    