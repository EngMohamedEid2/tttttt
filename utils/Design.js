export const SetBGImage = ()=>{
    let allImgs = document.getElementsByClassName('bg-img')
      for (var i = 0; i < allImgs.length; i++) {
        var image = allImgs[i];
        var parent = image.parentElement;
        var imageSrc = image.getAttribute('src')
        parent.classList.add('bg-size');
        parent.style['background-image'] = `url(${imageSrc})`
        parent.style['background-size'] = `cover`
        parent.style['background-position'] = `center`
        parent.style['background-repeat'] = `no-repeat`
        parent.style['display'] = `block`
        image.style['display'] = 'none'
      }
}