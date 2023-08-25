const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
        return text;
    }
    const trucnatedText = text.substring(0, length - 3) + "...";
    return trucnatedText;
};

export default truncateText;
