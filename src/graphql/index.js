import gql from 'graphql-tag'

export const GET_BRANCH_ZONE = gql`
    query getBranch($filterBrnCode: String){
        getBranch(filterBrnCode: $filterBrnCode){
            BrnCode
            BrnName
            CtsId
            cts{
                CtsName
            }
            AreaId
            area{
                AreaName
            }
        }
    } 
`