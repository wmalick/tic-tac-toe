import { useState } from "react";

export default function Player({ name, symbol, active, onNameChange }) {
  const [newName, setNewName] = useState(name);
  const [isEditing, setIsEditiong] = useState(false);

  function handleEditClick() {
    setIsEditiong((editiong) => !editiong);
  }

  function handleNameChange(event) {
    setNewName(event.target.value);

    if (isEditing) {
      onNameChange(symbol, newName);
    }
  }

  let content = <span className="player-name">{newName}</span>;
  if (isEditing) {
    content = (
      <input
        placeholder="Player Name"
        type="text"
        required
        defaultValue={newName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={active ? "active" : undefined}>
      <span className="player">
        {content}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
