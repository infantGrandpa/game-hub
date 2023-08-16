const getCroppedImageUrl = (url: string, imageText?: string) => {
    if (!url)
        return (
            "https://fakeimg.pl/600x400" +
            (imageText ? "?text=" + imageText : "")
        );
    const targetString = "media/";
    const index = url.indexOf(targetString) + targetString.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
