export function createMarkup(movies)
{
    return movies.map(movie => {
        return `
    <li class="examples__item">
     <a href="" class="examples__link">
        <div class="exampls__thumb">
        <picture>
        <source
            srcset="
            ./Images/img1_lg.jpg    1x,
            ./Images/img1_lg@2x.jpg 2x
            "
            media="(min-width:1200px)"
            type="image/jpeg"
        />
        <source
            srcset="
            ./Images/img1_md.jpg    1x,
            ./Images/img1_md@2x.jpg 2x
            "
            media="(min-width:768px)"
            type="image/jpeg"
        />
        <source
            srcset="
            ./Images/img1_sm.jpg    1x,
            ./Images/img1_sm@2x.jpg 2x
            "
            media="(min-width:480px)"
            type="image/jpeg"
        />
        <img src="./Images/img1_sm.jpg" alt="Greyhound" />
        </picture>
    </div>
    <div class="examples__content">
        <h2 class="examples__name"></h2>
        <p class="examples__type"></p>
    </div>
    </a>
    </li> `;
    }).join('');
    
}