export const API_URL = process.env.NEXT_PUBLIC_TEST_MODE === "0" ? process.env.NEXT_PUBLIC_SERVER_TESTNET : process.env.NEXT_PUBLIC_SERVER_MAINNET;


export const SEND_FORM = "telegram/notification";