import "./FriendListItem.css";
export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <div className="friendlistitem">
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      {isOnline ? (
        <span className="online">Online</span>
      ) : (
        <span className="offline">Offline</span>
      )}
    </div>
  );
}
