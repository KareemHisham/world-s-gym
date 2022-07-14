import { Spinner } from "../../CompContainer";
const Vidoes = ({ youtubeVideos, name }) => {
  return (
    <div className="videos-section">
      <div className="head mb-3">
        <h4>
          Watch <span className="text-capitalize">{name} </span>exercise videos
        </h4>
      </div>
      <div className="row">
        {!youtubeVideos.contents ? (
          <Spinner />
        ) : (
          youtubeVideos.contents.slice(0, 3).map((video) => {
            return (
              <div className="col-12 col-md-4" key={video.video.channelId}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.video.channelId}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-decoration-none video-link"
                >
                  <img src={video.video.thumbnails[0].url} alt={video.title} />
                  <p className="mt-3"> {video.video.title}</p>
                  <h6>{video.video.channelName}</h6>
                </a>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Vidoes;
