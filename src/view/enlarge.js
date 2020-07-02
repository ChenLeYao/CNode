export default function enlarge( className ){
    let imageGroup =  document.querySelectorAll(`.${className} img`);
    imageGroup = [].slice.call(imageGroup);
    document.addEventListener('click',(e)=>{
        let target = e.target;
        if ( imageGroup.indexOf(target) !== -1 ){
            let index = imageGroup.indexOf(target);
            let mask = document.createElement('div');
            let wrap = document.createElement('div');
            let close = document.createElement('div');
            let img = new Image();
            close.innerHTML = '关闭';
            img.src = imageGroup[index].src;
            img.onload = function(){
                if ( img.width < window.innerWidth  ){
                    img.style.width = window.innerWidth + 'px';
                }else if ( img.width > window.innerWidth && window.innerWidth < 500 ){
                    img.style.width = 3 * window.innerWidth + 'px';
                }else if ( img.width > window.innerWidth  ){
                    img.style.width = window.innerWidth + 'px';
                }
            };
            mask.classList.add('wrap_mask');
            wrap.classList.add('wrap_box');
            close.classList.add('wrap_close');
            wrap.appendChild(img);
            wrap.appendChild(close);
            document.body.appendChild(mask);
            document.body.appendChild(wrap);
            close.onclick= function () {
                document.body.removeChild(mask);
                document.body.removeChild(wrap);
            }
        }
    })
}
