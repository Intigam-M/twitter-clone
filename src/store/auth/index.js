import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'intigam_mammadli',
        fullName: 'Intigam Mammadli',
        avatar: 'https://pbs.twimg.com/profile_images/1427292844612595720/RC1YSvuT_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'intigam_mammadli',
            fullName: 'Intigam Mammadli',
            avatar: 'https://pbs.twimg.com/profile_images/1427292844612595720/RC1YSvuT_400x400.jpg'

        },
        {
            id: 2,
            username: 'tesla',
            fullName: 'Tesla',
            avatar: 'https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png'
        }
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer