import { ApolloQueryResult, gql, FetchResult } from "@apollo/client";

import { makeClient } from "./client";

export async function getUser(token: string) {
    const query = gql`
        query {
            myProfile {
                id
                name
                avatar
            }
        }
    `;
    const client = makeClient(token);

    const { data }: ApolloQueryResult<UserDTO> = await client.query({ query });

    return data;
}

export async function getToken({
    email,
    password,
}: {
    email: string;
    password: string;
}) {
    const query = gql`
        mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                access_token
                refresh_token
            }
        }
    `;
    const client = makeClient();

    const { data }: FetchResult<SessionObject> = await client.mutate({
        mutation: query,
        variables: { email, password },
    });

    if (data) {
        const tokens = data.login;

        return tokens;
    }
}

export async function refreshToken(token: string) {
    const query = gql`
        mutation Refresh($refresh_token: String!) {
            refreshToken(refreshToken: $refresh_token) {
                access_token
                refresh_token
            }
        }
    `;
    const client = makeClient();

    const { data }: FetchResult<SessionObject> = await client.mutate({
        mutation: query,
        variables: { token },
    });

    if (data) {
        const tokens = data.login;

        return tokens;
    }
}
