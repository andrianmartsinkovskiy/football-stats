import {makeAutoObservable} from "mobx";

class Players {
  selectedPlayers = []
  isChooseModalOpen = false
  selectedPlayerId = null
  isColorModalOpen = false
  statsData = null

  constructor() {
    makeAutoObservable(this)
  }

  setStatsData(data) {
    this.statsData = data
    this.selectedPlayers = []
  }

  addPlayerToList(player) {
    if (this.selectedPlayers.length >= 4) return
    this.selectedPlayers = [...this.selectedPlayers, player]
  }

  removePlayerFromList(player) {
    this.selectedPlayers = this.selectedPlayers.filter(item => item.player.id !== player.id)
  }

  changePlayerColor(color) {
    this.selectedPlayers = this.selectedPlayers.map(item => {
      if (item.player.id === this.selectedPlayerId) {
        item.color = color
      }

      return item
    })
  }

  openChoosePlayerModal() {
    this.isChooseModalOpen = true
  }

  closeChoosePlayerModal() {
    this.isChooseModalOpen = false
  }

  openColorModal(playerId) {
    this.isColorModalOpen = true
    this.selectedPlayerId = playerId
  }

  closeColorModal() {
    this.selectedPlayerId = null
    this.isColorModalOpen = false
  }
}

const PlayersStore = new Players()

export {
  PlayersStore
}
