const getCroppedImageUrl = (url: string) => {
    if (!url) return "";
    const targetString = "media/";
    const index = url.indexOf(targetString) + targetString.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
