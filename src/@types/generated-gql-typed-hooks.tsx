import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    String: string;
};

export type Query = {
    fetchAutoCompleteAddresses: Array<Maybe<AddressAutoComplete>>;
};

export type Morph = AddressAutoCompleteBreakdown | AddressAutoComplete;

export type AddressAutoCompleteBreakdown = {
    __typename?: 'AddressAutoCompleteBreakdown';
    mainText: Scalars['String'];
    secondaryText: Scalars['String'];
};

export type AddressAutoComplete = {
    __typename?: 'AddressAutoComplete';
    matchedAddress: Scalars['String'];
    placeId?: Maybe<Scalars['String']>;
    structuredFormatting?: Maybe<AddressAutoCompleteBreakdown>;
    types: Array<Maybe<Scalars['String']>>;
};

export type AutoCompleteQueryVariables = Exact<{
    query: Scalars['String'];
}>;

export type AutoCompleteQuery = { __typename?: 'Query' } & {
    fetchAutoCompleteAddresses: Array<Maybe<{ __typename?: 'AddressAutoComplete' } & Pick<AddressAutoComplete, 'matchedAddress'>>>;
};

export const AutoCompleteDocument = gql`
    query AutoComplete($query: String!) {
        fetchAutoCompleteAddresses(query: $query) {
            matchedAddress
        }
    }
`;

export function useAutoCompleteQuery(baseOptions?: Apollo.QueryHookOptions<AutoCompleteQuery, AutoCompleteQueryVariables>) {
    return Apollo.useQuery<AutoCompleteQuery, AutoCompleteQueryVariables>(AutoCompleteDocument, baseOptions);
}
export function useAutoCompleteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AutoCompleteQuery, AutoCompleteQueryVariables>) {
    return Apollo.useLazyQuery<AutoCompleteQuery, AutoCompleteQueryVariables>(AutoCompleteDocument, baseOptions);
}
export type AutoCompleteQueryHookResult = ReturnType<typeof useAutoCompleteQuery>;
export type AutoCompleteLazyQueryHookResult = ReturnType<typeof useAutoCompleteLazyQuery>;
export type AutoCompleteQueryResult = Apollo.QueryResult<AutoCompleteQuery, AutoCompleteQueryVariables>;
