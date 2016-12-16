;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-zhanghao1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.000512 0.315178C229.403249 0.315178 0.314667 229.402737 0.314667 512.001023c0 282.598286 229.088582 511.684822 511.685845 511.684822 282.59624 0 511.684822-229.086535 511.684822-511.685845C1023.685333 229.402737 794.596751 0.315178 512.000512 0.315178zM512.000512 981.043652c-259.048941 0-469.044676-209.995735-469.044676-469.044676 0-259.047918 209.995735-469.043652 469.044676-469.043652 259.047918 0 469.043652 209.995735 469.043652 469.044676C981.044164 771.048941 771.048429 981.043652 512.000512 981.043652z"  ></path>'+
      ''+
      '<path d="M589.992817 545.257451c59.022255-28.40698 99.66593-88.039125 99.66593-157.01508 0-96.503914-79.534428-174.726463-177.661306-174.726463-98.126878 0-177.660282 78.222549-177.660282 174.726463 0 68.974931 40.645722 128.6081 99.66593 157.01508C324.87874 578.055438 245.497808 677.865655 245.497808 795.929608c0 8.037047 6.620791 14.554484 14.803147 14.554484s14.803147-6.517437 14.803147-14.554484c0-128.670521 106.061594-232.969982 236.895385-232.969982 130.837884 0 236.897432 104.299461 236.897432 232.969982 0 8.037047 6.619768 14.554484 14.802124 14.554484s14.804171-6.517437 14.804171-14.554484C778.501168 677.865655 699.12126 578.055438 589.992817 545.257451zM511.998465 533.841447c-1.61887 0-3.230578 0.031722-4.841262 0.060375-79.602989-2.51631-143.358035-66.770729-143.358035-145.657404 0-80.492242 66.35629-145.744385 148.199297-145.744385 81.846076 0 148.201343 65.252143 148.201343 145.744385 0 78.886675-63.755046 143.141094-143.359059 145.657404C515.230066 533.87317 513.617335 533.841447 511.998465 533.841447z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M889.6 426.666667l-42.666667 0 0-85.333333c0-187.733333-149.333333-341.333333-334.933333-341.333333-185.6 0-334.933333 153.6-334.933333 341.333333l0 85.333333-42.666667 0c-46.933333 0-83.2 38.4-83.2 85.333333l0 426.666667c0 46.933333 38.4 85.333333 83.2 85.333333l753.066667 0c46.933333 0 83.2-38.4 83.2-85.333333L970.666667 512C972.8 465.066667 934.4 426.666667 889.6 426.666667zM219.733333 341.333333c0-164.266667 132.266667-298.666667 292.266667-298.666667 162.133333 0 292.266667 134.4 292.266667 298.666667l0 85.333333-586.666667 0L217.6 341.333333zM930.133333 938.666667c0 23.466667-19.2 42.666667-42.666667 42.666667l-753.066667 0c-23.466667 0-42.666667-19.2-42.666667-42.666667L91.733333 512c0-23.466667 19.2-42.666667 42.666667-42.666667l753.066667 0c23.466667 0 42.666667 19.2 42.666667 42.666667L930.133333 938.666667z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
