import { Board } from '~/server/models/Board.model'


export default defineEventHandler(async (event) => {

	const user = event.context.user
	const boardId = getRouterParam(event, 'boardId')

	const board = await Board.findOne({
		_id: boardId,
		owner: user._id
	}).populate({
		path: "lists",
		model: "List"
	})

	return board;

})