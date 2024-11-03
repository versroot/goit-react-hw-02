import "./Profile.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div id="profile">
      <div id="profilewrapper">
        <img src={image} alt={name} /> <p id="name">{name}</p>{" "}
        <p id="tag">@{tag}</p>
        <p id="location">{location}</p>
      </div>
      <ul id="stats">
        <li>
          <span className="statkey">Followers</span>{" "}
          <span className="statvalue">{stats.followers}</span>
        </li>

        <li>
          <span className="statkey">Views</span>{" "}
          <span className="statvalue">{stats.views}</span>
        </li>

        <li>
          <span className="statkey">Likes</span>{" "}
          <span className="statvalue">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
