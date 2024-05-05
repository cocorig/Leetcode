/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
    const accessableRooms = new Set([0]);

    for (const room of accessableRooms) {
      rooms[room].forEach(key => accessableRooms.add(key))
    }

    return accessableRooms.size === rooms.length;
};