// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add',function(song){
      if(this.length === 1){
        this.playFirst();
      }
    },this);
  },

  playFirst: function(){
    this.at(0).play();
  }

  // set up an "on change" event listener
  // so that when the SongQueue collection changes, it will:
    // 1) update the SongQueueView
    // 2) if the change was "add first song to the queue", also invoke play on that song
});