import React from 'react'
import Company1moduleCss from './Company1.module.css'
export default function Company1() {
    return (
    <>
  <div id="OurExperience" className={`${Company1moduleCss.TimeLineSectionMargin}`}>
        <div className={`${Company1moduleCss['text-main-text']}`}>
          <h1 style={{color: `black`}} className={`${Company1moduleCss.headings}`}>COMPANY TIMELINE</h1>
          <div className={`${Company1moduleCss.subhead}`}>
            Ensure your safety with a range of our services for individuals and businesses.
          </div>
      </div>
      <div className={`${Company1moduleCss.timeline}`}>
        <div className={`${Company1moduleCss['containerTimeline']} ${Company1moduleCss.left}`}>
          <div className={`${Company1moduleCss.contentTimeLine}`}>
            <h2>2017</h2>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className={`${Company1moduleCss.containerTimeline} ${Company1moduleCss.right}`}>
          <div className={`${Company1moduleCss.contentTimeLine}`}>
            <h2>2016</h2>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className={`${Company1moduleCss.containerTimeline}  ${Company1moduleCss.left}`}>
          <div className={`${Company1moduleCss.contentTimeLine}`}>
            <h2>2015</h2>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className={`${Company1moduleCss.containerTimeline}  ${Company1moduleCss.right}`}>
          <div className={`${Company1moduleCss.contentTimeLine}`}>
            <h2>2012</h2>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className={`${Company1moduleCss.containerTimeline} ${Company1moduleCss.left}`}>
          <div className={`${Company1moduleCss.contentTimeLine}`}>
            <h2>2011</h2>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className={`${Company1moduleCss.containerTimeline}  ${Company1moduleCss.right}`}>
          <div className={`${Company1moduleCss.contentTimeLine}`}>
            <h2>2007</h2>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
      </div>
    </div>



    </>
    )
}
