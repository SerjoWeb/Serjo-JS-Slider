class SerjoJSSlider {
    constructor(el) {
        this.el = el;

        /** Default params for slider/carousel */
        this.slideParams = {
            controls: true,
            slides: [
                {
                    title: 'Test Slide 1',
                    description: 'Test slide description 1',
                    img: 'test.jpg'
                },
                {
                    title: 'Test Slide 2',
                    description: 'Test slide description 2',
                    img: 'test.jpg'
                },
                {
                    title: 'Test Slide 3',
                    description: 'Test slide description 3',
                    img: 'test.jpg'
                }
            ]
        };
    }

    /**
     * Initialize Slider
     * @param {*} params 
     */
    Init(params) {
        try {
            if (this.el && typeof this.el === 'string') {
                const _params = params === undefined ? this.slideParams : params;

                if (typeof _params === 'object') {
                    this.el = document.querySelectorAll(this.el)[0];
                    
                    if (this.el !== undefined || this.el !== null && typeof this.el === 'object') {
                        /** Draw slider */
                        this._BuildSliderFromElements(_params);

                        /** Move slides */
                        this._controlButtonsActions();

                        /** Apply slider settings */
                        this._controlVisibility(_params.controls);
                    } else {
                        console.error('Selector for slider is wrong');
                        return;
                    }
                } else {
                    console.error('Slider has wrong params');
                    return;
                }
            } else {
                console.error('Slider cannot be initialize with an empty dom element');
                return;
            }
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Private function DrawSlider
     */
    _CreateMainSliderElements() {
        try {
            /** Create and setup slider wrapper */
            const $sliderWrapper = document.createElement('div');
                  $sliderWrapper.className = 'serjo-slider-wrapper';
                  $sliderWrapper.setAttribute('id', 'serjo-slider-wrapper-id');

            /** Create and setup slider content (moveable part) */
            const $sliderContent = document.createElement('div');
                  $sliderContent.className = 'serjo-slider-wrapper__content';
                  $sliderContent.setAttribute('id', 'serjo-slider-wrapper-id-content');

            /** Create and setup slider dot controls content */
            const $sliderDotControlContent = document.createElement('div');
                  $sliderDotControlContent.className = 'serjo-slider-wrapper__dot-controls';

            return {
                sliderWrapper: $sliderWrapper,
                sliderContent: $sliderContent,
                sliderDotControlContent: $sliderDotControlContent
            };
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Private function Create Slider Controls
     */
    _CreateSliderControls() {
        try {
            /** Create and setup slider btn prev */
            const $sliderBtnPrev = document.createElement('button');
                  $sliderBtnPrev.className = 'serjo-slider-btn-prev';
                  $sliderBtnPrev.setAttribute('id', 'serjo-slider-btn-prev');
                  $sliderBtnPrev.setAttribute('type', 'button');

            /** Create and setup slider btn next */
            const $sliderBtnNext = document.createElement('button');
                  $sliderBtnNext.className = 'serjo-slider-btn-next';
                  $sliderBtnNext.setAttribute('id', 'serjo-slider-btn-next');
                  $sliderBtnNext.setAttribute('type', 'button');
            
            /** Create prev arrow */
            const $prevArrow = document.createElement('span');
                  $prevArrow.innerHTML = "<";

            /** Create next arrow */
            const $nextArrow = document.createElement('span');
                  $nextArrow.innerHTML = ">";

            /** Fill buttons */
            $sliderBtnPrev.appendChild($prevArrow);
            $sliderBtnNext.appendChild($nextArrow);

            return {
                sliderBtnPrev: $sliderBtnPrev,
                sliderBtnNext: $sliderBtnNext
            };
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Private function BuildSlider
     */
    _BuildSliderFromElements(params = {}) {
        try {
            const _params = params;
            const selectedEl = this.el;
            const sliderElements = this._CreateMainSliderElements();
            const sliderControls = this._CreateSliderControls();
                        
            
            /** Fill slider content */
            for(let [index, slide] of _params.slides.entries()) {
                /** Create and setup slider item */
                const $sliderItem = document.createElement('div');
                      $sliderItem.className = 'serjo-slider-wrapper__item';
                      $sliderItem.setAttribute('id', `serjo-slider-wrapper__item_${index}`);
                      $sliderItem.style.background = this._ApplyBackGroundImage(slide.img);

                /** set Active first element */
                if (index === 0) {
                    $sliderItem.classList.add('serjo-slider-wrapper__item__active-slide');
                }

                /** Create and setup slider title */
                const $sliderItemTitle = document.createElement('h3');
                      $sliderItemTitle.className = 'serjo-slider-wrapper__title';

                /** Create and setup slider description */
                const $sliderItemDesc = document.createElement('p');
                      $sliderItemDesc.className = 'serjo-slider-wrapper__desc';

                /** Create and setup slider description */
                const $sliderItemInfo = document.createElement('div');
                      $sliderItemInfo.className = 'serjo-slider-wrapper__info';

                /** Create and setup slider dots */
                const $sliderDotControl = document.createElement('div');
                      $sliderDotControl.className = 'serjo-slider-dots-control';

                /** Fill slider item */
                $sliderItemInfo.appendChild($sliderItemDesc);
                $sliderItemInfo.insertBefore($sliderItemTitle, $sliderItemDesc);
                $sliderItem.appendChild($sliderItemInfo);

                /** Fill values */
                $sliderItemTitle.innerHTML = slide.title;
                $sliderItemDesc.innerHTML = slide.description;

                /** Fill slider content */
                sliderElements.sliderContent.appendChild($sliderItem);

                /** Fill slider dot controls content */
                sliderElements.sliderDotControlContent.appendChild($sliderDotControl);
            }

            /** Fill slider wrapper */
            sliderElements.sliderWrapper.appendChild(sliderElements.sliderContent);

            /** Fill slider with controls */
            sliderElements.sliderWrapper.appendChild(sliderControls.sliderBtnPrev);
            sliderElements.sliderWrapper.appendChild(sliderControls.sliderBtnNext);
            sliderElements.sliderWrapper.appendChild(sliderElements.sliderDotControlContent);

            /** Fill selected element */
            selectedEl.appendChild(sliderElements.sliderWrapper);
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Private Function Apply Background For Slider Item
     */
    _ApplyBackGroundImage(img) {
        return `linear-gradient(180deg,rgba(0, 0, 0, 0.08),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4)),transparent url('${img}') center center/cover no-repeat fixed`;
    }

    /**
     * Click Function
     */
    _btnControlsOnClick(btn) {
        let sliderCurrent = 0;
        const sliderItems = document.getElementsByClassName('serjo-slider-wrapper__item');

        for(let slider of sliderItems) {
            if (slider.classList.contains('serjo-slider-wrapper__item__active-slide')) {
                sliderCurrent = slider;
            }
        }   
    
        let sliderCurrentID = sliderCurrent.getAttribute('id');
            sliderCurrentID = sliderCurrentID.split('_');
            sliderCurrentID = sliderCurrentID[sliderCurrentID.length - 1];

        const math = btn === 'prev' ? Number(sliderCurrentID) - 1 : Number(sliderCurrentID) + 1;

        if (document.getElementById(`serjo-slider-wrapper__item_${math}`) == null) {
            return;
        }

        sliderCurrent.classList.remove('serjo-slider-wrapper__item__active-slide');
        document.getElementById(`serjo-slider-wrapper__item_${math}`).classList.add('serjo-slider-wrapper__item__active-slide');
    }

    /**
     * Private Funtion movements
    */
    _controlButtonsActions() {
        const prevBtn = document.getElementById('serjo-slider-btn-prev');
        const nextBtn = document.getElementById('serjo-slider-btn-next');

        prevBtn.addEventListener('click', () => {
            this._btnControlsOnClick('prev');
        });

        nextBtn.addEventListener('click', () => {
            this._btnControlsOnClick('next');
        });
    }

    /**
     * Function Setting Up Controls Visibility
     */
    _controlVisibility(val) {
        const visible = val === true ? true : false;
        const prevBtn = document.getElementById('serjo-slider-btn-prev');
        const nextBtn = document.getElementById('serjo-slider-btn-next');
        const setVisibility = (opacity, visibility) => {
            prevBtn.style.opacity = opacity;
            prevBtn.style.visibility = visibility;

            nextBtn.style.opacity = opacity;
            nextBtn.style.visibility = visibility;
        };

        if (visible) {
            setVisibility(1, 'visibile');
        } else {
            setVisibility(0, 'hidden');
        }
    }
}