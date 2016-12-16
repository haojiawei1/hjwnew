;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pinglun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M286.3134 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.14775 58.263985 56.165184 58.263985 31.017434 0 56.165184-26.079982 56.165184-58.263985C342.478584 403.021983 317.330834 376.940978 286.3134 376.940978zM510.976182 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.148773 58.263985 56.165184 58.263985s56.165184-26.079982 56.165184-58.263985C567.141366 403.021983 541.992593 376.940978 510.976182 376.940978zM735.638965 376.940978c-31.017434 0-56.166207 26.079982-56.166207 58.262962 0 32.184003 25.148773 58.263985 56.166207 58.263985s56.165184-26.079982 56.165184-58.263985C791.804149 403.021983 766.655376 376.940978 735.638965 376.940978zM847.968309 85.637426 173.982008 85.637426c-62.034868 0-112.330368 52.175313-112.330368 116.526947l0 436.95584c0 64.352657 51.421136 123.670647 114.88147 123.670647l171.183777 0c29.837562 31.785937 153.332201 159.63986 153.332201 159.63986 5.483898 5.703909 14.370289 5.703909 19.854187 0 0 0 90.418312-102.513792 149.328004-159.63986L845.41823 762.79086c63.461357 0 114.882494-59.319014 114.882494-123.670647L960.300724 202.164373C960.300724 137.812739 910.004201 85.637426 847.968309 85.637426zM904.13554 639.120212c0 32.1707-26.986631 65.929572-58.71731 65.929572L673.137469 705.049784c-20.869307 0-39.628556 21.459754-39.628556 21.459754L512.538771 851.977112l-120.942513-125.467573c0 0-23.037692-21.459754-42.782386-21.459754L176.533111 705.049784c-31.730679 0-58.716286-33.758871-58.716286-65.929572L117.816824 202.164373c0-32.18298 25.14775-58.265008 56.165184-58.265008l673.986301 0c31.017434 0 56.167231 26.082028 56.167231 58.265008L904.13554 639.120212z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuanfa" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M860.545766 442.937065c-13.630439 0-24.684192 11.407817-24.729218 25.497721l-0.002047 0 0 216.940914c0 33.909297-27.489074 61.398372-61.398372 61.398372l-542.352285 0c-33.909297 0-61.398372-27.489074-61.398372-61.398372l0-433.881828c0-33.909297 27.489074-61.398372 61.398372-61.398372l265.539772 0c0.171915 0.004093 0.342808 0.013303 0.515746 0.013303 12.836353 0 23.243377-10.765181 23.243377-24.044626 0-13.278421-10.407024-24.044626-23.243377-24.044626-0.00307 0-0.00614 0-0.00921 0l0-0.020466L199.720206 141.999085c-45.212738 0-81.864496 36.651758-81.864496 81.864496l0 489.140363c0 45.212738 36.651758 81.864496 81.864496 81.864496l603.750657 0c45.212738 0 81.864496-36.651758 81.864496-81.864496l0-244.570181-0.061398 0C885.228935 454.345905 874.176205 442.937065 860.545766 442.937065z"  ></path>' +
    '' +
    '<path d="M917.57769 272.146237l0-0.278339L738.752886 92.502787l-5.649674-5.494131-0.715291 0.741897c-3.960195-2.220574-8.43409-3.399423-13.05841-3.399423-14.897292 0-27.012214 12.138458-27.012214 27.059286 0 4.653997 1.173732 9.124821 3.402493 13.085016l-0.797156 0.818645 124.499525 124.833123-127.768989 0.047072C483.616044 276.136108 432.534646 404.848585 417.483858 604.680842c0 14.922874 12.110829 27.059286 27.00812 27.059286 12.168134 0 22.491247-8.100492 25.864064-19.212574l1.226944-7.18361c15.818267-188.993398 53.073776-282.241152 221.042325-301.000402l126.796848 0-118.979812 119.314433-4.825912 6.7968c-1.715061 3.604084-2.610454 7.996115-2.610454 11.981892 0 14.926968 12.115945 27.064402 27.012214 27.064402 4.239558 0 8.919137-1.02433 12.673647-2.964518l184.126554-183.368284c1.633197-1.149173 3.634784-3.972475 3.634784-6.119371S919.209864 273.290293 917.57769 272.146237z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)