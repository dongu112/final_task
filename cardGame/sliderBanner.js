const bannerContainer = document.getElementById('banner');
const bannerList = document.getElementsByClassName('banner-item');

function renderBanner (index = 0, bool = false){
    for (let i = 0; i < bannerList.length; i++){
        bannerList[i].style.transform = `translateX(${(i - index) * 100}%)`;
        if (bool){
            bannerList[i].style.transition = 'none';
        }
        else{
            bannerList[i].style.transition = 'all 1s ease-in-out';
        }
    }
    
}

function intervalSlider() {
    let time = $("#banner").attr("data-time");
    let isInterVal = $("#banner").attr("data-interval");
    if (isInterVal === "true") {
        clearInterval(subInterval);
        subInterval = setInterval(() => {
            if (indexSlider < bannerList.length - 1) {
            indexSlider += 1;
            } else {
            indexSlider = 0;
            renderBanner(indexSlider, true);
            return;
            }
            renderBanner(indexSlider);
        }, 2 * time);
    }
}

function renderListDots() {
    const listDots = document.getElementsByClassName('list-dots');
    if (listDots.length > 0) {
      for (let i = 0; i < bannerList.length; i++) {
        const node = document.createElement('span');
        node.setAttribute('data-index-slider', i);
        node.classList.add('dot');
        node.addEventListener('click', () => {
          renderBanner(i);
        });
        listDots[0].appendChild(node);
      }
    }
  }

let indexSlider = 0;
let subInterval;
renderBanner(0, true);
$(document).ready(function () {
  renderListDots();
  intervalSlider();
  $("#icon-right").click((e) => {
    if (indexSlider < bannerList.length - 1) {
      indexSlider += 1;
    } else {
      indexSlider = 0;
      renderBanner(indexSlider, true);
      return;
    }
    renderBanner(indexSlider);
  });
  $("#icon-left").click((e) => {
    if (indexSlider > 0) {
      indexSlider -= 1;
    } else {
      indexSlider = bannerList.length - 1;
      renderBanner(indexSlider, true);
      return;
    }
    renderBanner(indexSlider);
  });
});