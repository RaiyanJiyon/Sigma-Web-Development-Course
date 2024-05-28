function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
    } else {
        return views;
    }
}

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const container = document.querySelector('.container');

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = thumbnail;
    img.className = 'thumbnail';
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;
    cardBody.appendChild(cardTitle);

    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    const channelName = document.createElement('span');
    channelName.textContent = cName;
    cardDetails.appendChild(channelName);

    const viewCount = document.createElement('span');
    viewCount.textContent = formatViews(views) + ' views';
    cardDetails.appendChild(viewCount);

    const uploadInfo = document.createElement('span');
    uploadInfo.textContent = monthsOld + ' months ago';
    cardDetails.appendChild(uploadInfo);

    const videoDuration = document.createElement('span');
    videoDuration.textContent = duration;
    cardDetails.appendChild(videoDuration);

    cardBody.appendChild(cardDetails);
    card.appendChild(cardBody);

    container.appendChild(card);
}

createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodeWithHarry",
    727000,
    2,
    "31:20",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ"
);
