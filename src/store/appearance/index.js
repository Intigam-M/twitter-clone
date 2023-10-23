import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	backgroundColor: {
		name: 'darker',
		primary: '#000000',
		secondary: '#16181c',
		third: '#212327',
		modal: '#5b708366'
	},
	color: {
		primary: '#1d9bf0',
		secondary: '#8ecdf8',
		base: '#e7e9ea',
		baseSecondary: '#71767b'
	},
	boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
	fontSize: 16
}

const appearance = createSlice({
	name: 'appearance',
	initialState,
	reducers: {
		_setBackgroundColor: (state, action) => {
			state.backgroundColor = action.payload
		},
		_setColor: (state, action) => {
			state.color = action.payload
		},
		_setFontSize: (state, action) => {
			state.fontSize = action.payload
		},
		_setBoxShadow: (state, action) => {
			state.boxShadow = action.payload
		}
	}
})

export const { _setBackgroundColor, _setColor, _setFontSize, _setBoxShadow } = appearance.actions
export default appearance.reducer