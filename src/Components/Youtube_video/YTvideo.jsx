
const YTvideo = ({ videoId }) => {

    return (
        <div>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube video"
                />
            </div>
        </div>
    );
};
export default YTvideo;
