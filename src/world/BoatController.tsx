const BoatController = (boat: THREE.Group) => {
  const _onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "w":
        boat.position.x += 0.05;
        console.log('choo choo');
        
        break;
      case "a":
        break;
      case "s":
        break;
      case "d":
        break;
    }
  };

  document.addEventListener("keydown", _onKeyDown);
};

export default BoatController;
