
function cardgen(title, channel_name, views, months_old, duration_1) {
    function formatViews(num) {
        // Ensure the input is a number and not negative.
        if (isNaN(num) || num < 0) {
            return 'Invalid Input';
        }
        if (num < 1000) {
            return num.toString();
        } 
        else if (num < 1000000) {
            const formattedNum = (num / 1000).toFixed(1);
            return formattedNum.endsWith('.0') ? formattedNum.slice(0, -2) + 'K' : formattedNum + 'K';
        } 
        else if (num < 1000000000) {

            const formattedNum = (num / 1000000).toFixed(2);
            return formattedNum.endsWith('.00') ? formattedNum.slice(0, -3) + 'M' : formattedNum + 'M';
        } 
        else {
            const formattedNum = (num / 1000000000).toFixed(2);
            return formattedNum.endsWith('.00') ? formattedNum.slice(0, -3) + 'B' : formattedNum + 'B';
        }
    }
    let a = e => {
        let b = String(e)
        let c = (`${b[0] + b[1]}:${b[2] + b[3]}`)
        return c
    }
    document.body.children[0].insertAdjacentHTML("beforeend", (`<div class="card">
            <div class="thumbnail">
                <img src="hqdefault.avif" alt="">
                <div class="duration">${a(duration_1)}</div>
            </div>
            <div class="text">
                <div class="title">${title}</div>
                <div class="channel-name-views-old">${channel_name} • ${formatViews(views)} views • ${months_old} month ago</div>
            </div>
        </div>`))
}
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 4521)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
cardgen("Installing Vs Code & How Webside Works | Sigma Web Developer Course - Tutorial #1", " Code Channel", 12343, 3, 1353)
