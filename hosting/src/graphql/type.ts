import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: string; output: string; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "argument_chats" */
export type Argument_Chats = {
  __typename?: 'argument_chats';
  /** An object relationship */
  argument: Arguments;
  argument_id: Scalars['uuid']['output'];
  author_id: Scalars['uuid']['output'];
  chat: Scalars['String']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "argument_chats" */
export type Argument_ChatsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "argument_chats" */
export type Argument_ChatsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "argument_chats" */
export type Argument_ChatsReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "argument_chats" */
export type Argument_ChatsReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "argument_chats" */
export type Argument_Chats_Aggregate = {
  __typename?: 'argument_chats_aggregate';
  aggregate?: Maybe<Argument_Chats_Aggregate_Fields>;
  nodes: Array<Argument_Chats>;
};

export type Argument_Chats_Aggregate_Bool_Exp = {
  count?: InputMaybe<Argument_Chats_Aggregate_Bool_Exp_Count>;
};

export type Argument_Chats_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Argument_Chats_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "argument_chats" */
export type Argument_Chats_Aggregate_Fields = {
  __typename?: 'argument_chats_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Argument_Chats_Max_Fields>;
  min?: Maybe<Argument_Chats_Min_Fields>;
};


/** aggregate fields of "argument_chats" */
export type Argument_Chats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "argument_chats" */
export type Argument_Chats_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Argument_Chats_Max_Order_By>;
  min?: InputMaybe<Argument_Chats_Min_Order_By>;
};

/** input type for inserting array relation for remote table "argument_chats" */
export type Argument_Chats_Arr_Rel_Insert_Input = {
  data: Array<Argument_Chats_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Chats_On_Conflict>;
};

/** Boolean expression to filter rows from the table "argument_chats". All fields are combined with a logical 'AND'. */
export type Argument_Chats_Bool_Exp = {
  _and?: InputMaybe<Array<Argument_Chats_Bool_Exp>>;
  _not?: InputMaybe<Argument_Chats_Bool_Exp>;
  _or?: InputMaybe<Array<Argument_Chats_Bool_Exp>>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  chat?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "argument_chats" */
export enum Argument_Chats_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArgumentChatsPkey = 'argument_chats_pkey'
}

/** input type for inserting data into table "argument_chats" */
export type Argument_Chats_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Argument_Chats_Max_Fields = {
  __typename?: 'argument_chats_max_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  chat?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "argument_chats" */
export type Argument_Chats_Max_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  chat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Argument_Chats_Min_Fields = {
  __typename?: 'argument_chats_min_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  chat?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "argument_chats" */
export type Argument_Chats_Min_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  chat?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "argument_chats" */
export type Argument_Chats_Mutation_Response = {
  __typename?: 'argument_chats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Argument_Chats>;
};

/** input type for inserting object relation for remote table "argument_chats" */
export type Argument_Chats_Obj_Rel_Insert_Input = {
  data: Argument_Chats_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Chats_On_Conflict>;
};

/** on_conflict condition type for table "argument_chats" */
export type Argument_Chats_On_Conflict = {
  constraint: Argument_Chats_Constraint;
  update_columns?: Array<Argument_Chats_Update_Column>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};

/** Ordering options when selecting data from "argument_chats". */
export type Argument_Chats_Order_By = {
  argument?: InputMaybe<Arguments_Order_By>;
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  chat?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: argument_chats */
export type Argument_Chats_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "argument_chats" */
export enum Argument_Chats_Select_Column {
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Chat = 'chat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "argument_chats" */
export type Argument_Chats_Set_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "argument_chats" */
export type Argument_Chats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Argument_Chats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Argument_Chats_Stream_Cursor_Value_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "argument_chats" */
export enum Argument_Chats_Update_Column {
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Chat = 'chat',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Argument_Chats_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Argument_Chats_Set_Input>;
  /** filter the rows which have to be updated */
  where: Argument_Chats_Bool_Exp;
};

/** columns and relationships of "argument_resource_managers" */
export type Argument_Resource_Managers = {
  __typename?: 'argument_resource_managers';
  /** An object relationship */
  argument_resource: Argument_Resources;
  argument_resource_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "argument_resource_managers" */
export type Argument_Resource_Managers_Aggregate = {
  __typename?: 'argument_resource_managers_aggregate';
  aggregate?: Maybe<Argument_Resource_Managers_Aggregate_Fields>;
  nodes: Array<Argument_Resource_Managers>;
};

export type Argument_Resource_Managers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Argument_Resource_Managers_Aggregate_Bool_Exp_Count>;
};

export type Argument_Resource_Managers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "argument_resource_managers" */
export type Argument_Resource_Managers_Aggregate_Fields = {
  __typename?: 'argument_resource_managers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Argument_Resource_Managers_Max_Fields>;
  min?: Maybe<Argument_Resource_Managers_Min_Fields>;
};


/** aggregate fields of "argument_resource_managers" */
export type Argument_Resource_Managers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "argument_resource_managers" */
export type Argument_Resource_Managers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Argument_Resource_Managers_Max_Order_By>;
  min?: InputMaybe<Argument_Resource_Managers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "argument_resource_managers" */
export type Argument_Resource_Managers_Arr_Rel_Insert_Input = {
  data: Array<Argument_Resource_Managers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Resource_Managers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "argument_resource_managers". All fields are combined with a logical 'AND'. */
export type Argument_Resource_Managers_Bool_Exp = {
  _and?: InputMaybe<Array<Argument_Resource_Managers_Bool_Exp>>;
  _not?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
  _or?: InputMaybe<Array<Argument_Resource_Managers_Bool_Exp>>;
  argument_resource?: InputMaybe<Argument_Resources_Bool_Exp>;
  argument_resource_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "argument_resource_managers" */
export enum Argument_Resource_Managers_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArgumentResourceManagersPkey = 'argument_resource_managers_pkey'
}

/** input type for inserting data into table "argument_resource_managers" */
export type Argument_Resource_Managers_Insert_Input = {
  argument_resource?: InputMaybe<Argument_Resources_Obj_Rel_Insert_Input>;
  argument_resource_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Argument_Resource_Managers_Max_Fields = {
  __typename?: 'argument_resource_managers_max_fields';
  argument_resource_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "argument_resource_managers" */
export type Argument_Resource_Managers_Max_Order_By = {
  argument_resource_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Argument_Resource_Managers_Min_Fields = {
  __typename?: 'argument_resource_managers_min_fields';
  argument_resource_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "argument_resource_managers" */
export type Argument_Resource_Managers_Min_Order_By = {
  argument_resource_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "argument_resource_managers" */
export type Argument_Resource_Managers_Mutation_Response = {
  __typename?: 'argument_resource_managers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Argument_Resource_Managers>;
};

/** on_conflict condition type for table "argument_resource_managers" */
export type Argument_Resource_Managers_On_Conflict = {
  constraint: Argument_Resource_Managers_Constraint;
  update_columns?: Array<Argument_Resource_Managers_Update_Column>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};

/** Ordering options when selecting data from "argument_resource_managers". */
export type Argument_Resource_Managers_Order_By = {
  argument_resource?: InputMaybe<Argument_Resources_Order_By>;
  argument_resource_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: argument_resource_managers */
export type Argument_Resource_Managers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "argument_resource_managers" */
export enum Argument_Resource_Managers_Select_Column {
  /** column name */
  ArgumentResourceId = 'argument_resource_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "argument_resource_managers" */
export type Argument_Resource_Managers_Set_Input = {
  argument_resource_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "argument_resource_managers" */
export type Argument_Resource_Managers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Argument_Resource_Managers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Argument_Resource_Managers_Stream_Cursor_Value_Input = {
  argument_resource_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "argument_resource_managers" */
export enum Argument_Resource_Managers_Update_Column {
  /** column name */
  ArgumentResourceId = 'argument_resource_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type Argument_Resource_Managers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Argument_Resource_Managers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Argument_Resource_Managers_Bool_Exp;
};

/** columns and relationships of "argument_resources" */
export type Argument_Resources = {
  __typename?: 'argument_resources';
  /** An object relationship */
  argument?: Maybe<Arguments>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  argument_resource_managers: Array<Argument_Resource_Managers>;
  /** An aggregate relationship */
  argument_resource_managers_aggregate: Argument_Resource_Managers_Aggregate;
  author_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  markup_text: Scalars['String']['output'];
};


/** columns and relationships of "argument_resources" */
export type Argument_ResourcesArgument_Resource_ManagersArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


/** columns and relationships of "argument_resources" */
export type Argument_ResourcesArgument_Resource_Managers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};

/** aggregated selection of "argument_resources" */
export type Argument_Resources_Aggregate = {
  __typename?: 'argument_resources_aggregate';
  aggregate?: Maybe<Argument_Resources_Aggregate_Fields>;
  nodes: Array<Argument_Resources>;
};

export type Argument_Resources_Aggregate_Bool_Exp = {
  count?: InputMaybe<Argument_Resources_Aggregate_Bool_Exp_Count>;
};

export type Argument_Resources_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Argument_Resources_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "argument_resources" */
export type Argument_Resources_Aggregate_Fields = {
  __typename?: 'argument_resources_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Argument_Resources_Max_Fields>;
  min?: Maybe<Argument_Resources_Min_Fields>;
};


/** aggregate fields of "argument_resources" */
export type Argument_Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "argument_resources" */
export type Argument_Resources_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Argument_Resources_Max_Order_By>;
  min?: InputMaybe<Argument_Resources_Min_Order_By>;
};

/** input type for inserting array relation for remote table "argument_resources" */
export type Argument_Resources_Arr_Rel_Insert_Input = {
  data: Array<Argument_Resources_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Resources_On_Conflict>;
};

/** Boolean expression to filter rows from the table "argument_resources". All fields are combined with a logical 'AND'. */
export type Argument_Resources_Bool_Exp = {
  _and?: InputMaybe<Array<Argument_Resources_Bool_Exp>>;
  _not?: InputMaybe<Argument_Resources_Bool_Exp>;
  _or?: InputMaybe<Array<Argument_Resources_Bool_Exp>>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  argument_resource_managers?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
  argument_resource_managers_aggregate?: InputMaybe<Argument_Resource_Managers_Aggregate_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  markup_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "argument_resources" */
export enum Argument_Resources_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArgumentResourcesPkey = 'argument_resources_pkey'
}

/** input type for inserting data into table "argument_resources" */
export type Argument_Resources_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  argument_resource_managers?: InputMaybe<Argument_Resource_Managers_Arr_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Argument_Resources_Max_Fields = {
  __typename?: 'argument_resources_max_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "argument_resources" */
export type Argument_Resources_Max_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Argument_Resources_Min_Fields = {
  __typename?: 'argument_resources_min_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "argument_resources" */
export type Argument_Resources_Min_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "argument_resources" */
export type Argument_Resources_Mutation_Response = {
  __typename?: 'argument_resources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Argument_Resources>;
};

/** input type for inserting object relation for remote table "argument_resources" */
export type Argument_Resources_Obj_Rel_Insert_Input = {
  data: Argument_Resources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Resources_On_Conflict>;
};

/** on_conflict condition type for table "argument_resources" */
export type Argument_Resources_On_Conflict = {
  constraint: Argument_Resources_Constraint;
  update_columns?: Array<Argument_Resources_Update_Column>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "argument_resources". */
export type Argument_Resources_Order_By = {
  argument?: InputMaybe<Arguments_Order_By>;
  argument_id?: InputMaybe<Order_By>;
  argument_resource_managers_aggregate?: InputMaybe<Argument_Resource_Managers_Aggregate_Order_By>;
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: argument_resources */
export type Argument_Resources_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "argument_resources" */
export enum Argument_Resources_Select_Column {
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  MarkupText = 'markup_text'
}

/** input type for updating data in table "argument_resources" */
export type Argument_Resources_Set_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "argument_resources" */
export type Argument_Resources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Argument_Resources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Argument_Resources_Stream_Cursor_Value_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "argument_resources" */
export enum Argument_Resources_Update_Column {
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  MarkupText = 'markup_text'
}

export type Argument_Resources_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Argument_Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Argument_Resources_Bool_Exp;
};

/** columns and relationships of "arguments" */
export type Arguments = {
  __typename?: 'arguments';
  /** An array relationship */
  argument_chats: Array<Argument_Chats>;
  /** An aggregate relationship */
  argument_chats_aggregate: Argument_Chats_Aggregate;
  /** An array relationship */
  argument_resources: Array<Argument_Resources>;
  /** An aggregate relationship */
  argument_resources_aggregate: Argument_Resources_Aggregate;
  author_id: Scalars['uuid']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_ResourcesArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resources_Order_By>>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_Resources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resources_Order_By>>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "arguments" */
export type Arguments_Aggregate = {
  __typename?: 'arguments_aggregate';
  aggregate?: Maybe<Arguments_Aggregate_Fields>;
  nodes: Array<Arguments>;
};

export type Arguments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Arguments_Aggregate_Bool_Exp_Count>;
};

export type Arguments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Arguments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Arguments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "arguments" */
export type Arguments_Aggregate_Fields = {
  __typename?: 'arguments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Arguments_Max_Fields>;
  min?: Maybe<Arguments_Min_Fields>;
};


/** aggregate fields of "arguments" */
export type Arguments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Arguments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "arguments" */
export type Arguments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Arguments_Max_Order_By>;
  min?: InputMaybe<Arguments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "arguments" */
export type Arguments_Arr_Rel_Insert_Input = {
  data: Array<Arguments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Arguments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "arguments". All fields are combined with a logical 'AND'. */
export type Arguments_Bool_Exp = {
  _and?: InputMaybe<Array<Arguments_Bool_Exp>>;
  _not?: InputMaybe<Arguments_Bool_Exp>;
  _or?: InputMaybe<Array<Arguments_Bool_Exp>>;
  argument_chats?: InputMaybe<Argument_Chats_Bool_Exp>;
  argument_chats_aggregate?: InputMaybe<Argument_Chats_Aggregate_Bool_Exp>;
  argument_resources?: InputMaybe<Argument_Resources_Bool_Exp>;
  argument_resources_aggregate?: InputMaybe<Argument_Resources_Aggregate_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "arguments" */
export enum Arguments_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArgumentPkey = 'argument_pkey'
}

/** input type for inserting data into table "arguments" */
export type Arguments_Insert_Input = {
  argument_chats?: InputMaybe<Argument_Chats_Arr_Rel_Insert_Input>;
  argument_resources?: InputMaybe<Argument_Resources_Arr_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Arguments_Max_Fields = {
  __typename?: 'arguments_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "arguments" */
export type Arguments_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Arguments_Min_Fields = {
  __typename?: 'arguments_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "arguments" */
export type Arguments_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "arguments" */
export type Arguments_Mutation_Response = {
  __typename?: 'arguments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Arguments>;
};

/** input type for inserting object relation for remote table "arguments" */
export type Arguments_Obj_Rel_Insert_Input = {
  data: Arguments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Arguments_On_Conflict>;
};

/** on_conflict condition type for table "arguments" */
export type Arguments_On_Conflict = {
  constraint: Arguments_Constraint;
  update_columns?: Array<Arguments_Update_Column>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};

/** Ordering options when selecting data from "arguments". */
export type Arguments_Order_By = {
  argument_chats_aggregate?: InputMaybe<Argument_Chats_Aggregate_Order_By>;
  argument_resources_aggregate?: InputMaybe<Argument_Resources_Aggregate_Order_By>;
  author_id?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: arguments */
export type Arguments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "arguments" */
export enum Arguments_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "arguments" */
export type Arguments_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "arguments" */
export type Arguments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Arguments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Arguments_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "arguments" */
export enum Arguments_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Arguments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Arguments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Arguments_Bool_Exp;
};

/** columns and relationships of "cabinet_histories" */
export type Cabinet_Histories = {
  __typename?: 'cabinet_histories';
  /** An array relationship */
  cabinet_members: Array<Cabinet_Members>;
  /** An aggregate relationship */
  cabinet_members_aggregate: Cabinet_Members_Aggregate;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  prime_minister_history: Prime_Minister_Histories;
  prime_minister_id: Scalars['uuid']['output'];
};


/** columns and relationships of "cabinet_histories" */
export type Cabinet_HistoriesCabinet_MembersArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Members_Order_By>>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};


/** columns and relationships of "cabinet_histories" */
export type Cabinet_HistoriesCabinet_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Members_Order_By>>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};

/** aggregated selection of "cabinet_histories" */
export type Cabinet_Histories_Aggregate = {
  __typename?: 'cabinet_histories_aggregate';
  aggregate?: Maybe<Cabinet_Histories_Aggregate_Fields>;
  nodes: Array<Cabinet_Histories>;
};

export type Cabinet_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cabinet_Histories_Aggregate_Bool_Exp_Count>;
};

export type Cabinet_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cabinet_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cabinet_histories" */
export type Cabinet_Histories_Aggregate_Fields = {
  __typename?: 'cabinet_histories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Cabinet_Histories_Max_Fields>;
  min?: Maybe<Cabinet_Histories_Min_Fields>;
};


/** aggregate fields of "cabinet_histories" */
export type Cabinet_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cabinet_histories" */
export type Cabinet_Histories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cabinet_Histories_Max_Order_By>;
  min?: InputMaybe<Cabinet_Histories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cabinet_histories" */
export type Cabinet_Histories_Arr_Rel_Insert_Input = {
  data: Array<Cabinet_Histories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cabinet_Histories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cabinet_histories". All fields are combined with a logical 'AND'. */
export type Cabinet_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Cabinet_Histories_Bool_Exp>>;
  _not?: InputMaybe<Cabinet_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Cabinet_Histories_Bool_Exp>>;
  cabinet_members?: InputMaybe<Cabinet_Members_Bool_Exp>;
  cabinet_members_aggregate?: InputMaybe<Cabinet_Members_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  prime_minister_history?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
  prime_minister_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cabinet_histories" */
export enum Cabinet_Histories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CabinetHistoriesPkey = 'cabinet_histories_pkey'
}

/** input type for inserting data into table "cabinet_histories" */
export type Cabinet_Histories_Insert_Input = {
  cabinet_members?: InputMaybe<Cabinet_Members_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  prime_minister_history?: InputMaybe<Prime_Minister_Histories_Obj_Rel_Insert_Input>;
  prime_minister_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Cabinet_Histories_Max_Fields = {
  __typename?: 'cabinet_histories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  prime_minister_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "cabinet_histories" */
export type Cabinet_Histories_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  prime_minister_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cabinet_Histories_Min_Fields = {
  __typename?: 'cabinet_histories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  prime_minister_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "cabinet_histories" */
export type Cabinet_Histories_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  prime_minister_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cabinet_histories" */
export type Cabinet_Histories_Mutation_Response = {
  __typename?: 'cabinet_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cabinet_Histories>;
};

/** input type for inserting object relation for remote table "cabinet_histories" */
export type Cabinet_Histories_Obj_Rel_Insert_Input = {
  data: Cabinet_Histories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cabinet_Histories_On_Conflict>;
};

/** on_conflict condition type for table "cabinet_histories" */
export type Cabinet_Histories_On_Conflict = {
  constraint: Cabinet_Histories_Constraint;
  update_columns?: Array<Cabinet_Histories_Update_Column>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "cabinet_histories". */
export type Cabinet_Histories_Order_By = {
  cabinet_members_aggregate?: InputMaybe<Cabinet_Members_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  prime_minister_history?: InputMaybe<Prime_Minister_Histories_Order_By>;
  prime_minister_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cabinet_histories */
export type Cabinet_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "cabinet_histories" */
export enum Cabinet_Histories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PrimeMinisterId = 'prime_minister_id'
}

/** input type for updating data in table "cabinet_histories" */
export type Cabinet_Histories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  prime_minister_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "cabinet_histories" */
export type Cabinet_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cabinet_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cabinet_Histories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  prime_minister_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "cabinet_histories" */
export enum Cabinet_Histories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PrimeMinisterId = 'prime_minister_id'
}

export type Cabinet_Histories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cabinet_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cabinet_Histories_Bool_Exp;
};

/** columns and relationships of "cabinet_members" */
export type Cabinet_Members = {
  __typename?: 'cabinet_members';
  /** An object relationship */
  cabinet_history: Cabinet_Histories;
  cabinet_history_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "cabinet_members" */
export type Cabinet_Members_Aggregate = {
  __typename?: 'cabinet_members_aggregate';
  aggregate?: Maybe<Cabinet_Members_Aggregate_Fields>;
  nodes: Array<Cabinet_Members>;
};

export type Cabinet_Members_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cabinet_Members_Aggregate_Bool_Exp_Count>;
};

export type Cabinet_Members_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cabinet_Members_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cabinet_members" */
export type Cabinet_Members_Aggregate_Fields = {
  __typename?: 'cabinet_members_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Cabinet_Members_Max_Fields>;
  min?: Maybe<Cabinet_Members_Min_Fields>;
};


/** aggregate fields of "cabinet_members" */
export type Cabinet_Members_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cabinet_members" */
export type Cabinet_Members_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cabinet_Members_Max_Order_By>;
  min?: InputMaybe<Cabinet_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cabinet_members" */
export type Cabinet_Members_Arr_Rel_Insert_Input = {
  data: Array<Cabinet_Members_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cabinet_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cabinet_members". All fields are combined with a logical 'AND'. */
export type Cabinet_Members_Bool_Exp = {
  _and?: InputMaybe<Array<Cabinet_Members_Bool_Exp>>;
  _not?: InputMaybe<Cabinet_Members_Bool_Exp>;
  _or?: InputMaybe<Array<Cabinet_Members_Bool_Exp>>;
  cabinet_history?: InputMaybe<Cabinet_Histories_Bool_Exp>;
  cabinet_history_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cabinet_members" */
export enum Cabinet_Members_Constraint {
  /** unique or primary key constraint on columns "id" */
  CabinetMembersPkey = 'cabinet_members_pkey'
}

/** input type for inserting data into table "cabinet_members" */
export type Cabinet_Members_Insert_Input = {
  cabinet_history?: InputMaybe<Cabinet_Histories_Obj_Rel_Insert_Input>;
  cabinet_history_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Cabinet_Members_Max_Fields = {
  __typename?: 'cabinet_members_max_fields';
  cabinet_history_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "cabinet_members" */
export type Cabinet_Members_Max_Order_By = {
  cabinet_history_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cabinet_Members_Min_Fields = {
  __typename?: 'cabinet_members_min_fields';
  cabinet_history_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "cabinet_members" */
export type Cabinet_Members_Min_Order_By = {
  cabinet_history_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cabinet_members" */
export type Cabinet_Members_Mutation_Response = {
  __typename?: 'cabinet_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cabinet_Members>;
};

/** on_conflict condition type for table "cabinet_members" */
export type Cabinet_Members_On_Conflict = {
  constraint: Cabinet_Members_Constraint;
  update_columns?: Array<Cabinet_Members_Update_Column>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "cabinet_members". */
export type Cabinet_Members_Order_By = {
  cabinet_history?: InputMaybe<Cabinet_Histories_Order_By>;
  cabinet_history_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cabinet_members */
export type Cabinet_Members_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "cabinet_members" */
export enum Cabinet_Members_Select_Column {
  /** column name */
  CabinetHistoryId = 'cabinet_history_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "cabinet_members" */
export type Cabinet_Members_Set_Input = {
  cabinet_history_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "cabinet_members" */
export type Cabinet_Members_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cabinet_Members_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cabinet_Members_Stream_Cursor_Value_Input = {
  cabinet_history_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "cabinet_members" */
export enum Cabinet_Members_Update_Column {
  /** column name */
  CabinetHistoryId = 'cabinet_history_id',
  /** column name */
  Id = 'id'
}

export type Cabinet_Members_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cabinet_Members_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cabinet_Members_Bool_Exp;
};

/** columns and relationships of "comment_reactions" */
export type Comment_Reactions = {
  __typename?: 'comment_reactions';
  comment: Scalars['uuid']['output'];
  /** An object relationship */
  commentByComment: Comments;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "comment_reactions" */
export type Comment_Reactions_Aggregate = {
  __typename?: 'comment_reactions_aggregate';
  aggregate?: Maybe<Comment_Reactions_Aggregate_Fields>;
  nodes: Array<Comment_Reactions>;
};

export type Comment_Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comment_Reactions_Aggregate_Bool_Exp_Count>;
};

export type Comment_Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comment_Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comment_reactions" */
export type Comment_Reactions_Aggregate_Fields = {
  __typename?: 'comment_reactions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Comment_Reactions_Max_Fields>;
  min?: Maybe<Comment_Reactions_Min_Fields>;
};


/** aggregate fields of "comment_reactions" */
export type Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comment_reactions" */
export type Comment_Reactions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Reactions_Max_Order_By>;
  min?: InputMaybe<Comment_Reactions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comment_reactions" */
export type Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Comment_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_Reactions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comment_reactions". All fields are combined with a logical 'AND'. */
export type Comment_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Reactions_Bool_Exp>>;
  _not?: InputMaybe<Comment_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Reactions_Bool_Exp>>;
  comment?: InputMaybe<Uuid_Comparison_Exp>;
  commentByComment?: InputMaybe<Comments_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_reactions" */
export enum Comment_Reactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentReactionPkey = 'comment_reaction_pkey'
}

/** input type for inserting data into table "comment_reactions" */
export type Comment_Reactions_Insert_Input = {
  comment?: InputMaybe<Scalars['uuid']['input']>;
  commentByComment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Comment_Reactions_Max_Fields = {
  __typename?: 'comment_reactions_max_fields';
  comment?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "comment_reactions" */
export type Comment_Reactions_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Reactions_Min_Fields = {
  __typename?: 'comment_reactions_min_fields';
  comment?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "comment_reactions" */
export type Comment_Reactions_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comment_reactions" */
export type Comment_Reactions_Mutation_Response = {
  __typename?: 'comment_reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment_Reactions>;
};

/** on_conflict condition type for table "comment_reactions" */
export type Comment_Reactions_On_Conflict = {
  constraint: Comment_Reactions_Constraint;
  update_columns?: Array<Comment_Reactions_Update_Column>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "comment_reactions". */
export type Comment_Reactions_Order_By = {
  comment?: InputMaybe<Order_By>;
  commentByComment?: InputMaybe<Comments_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comment_reactions */
export type Comment_Reactions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comment_reactions" */
export enum Comment_Reactions_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comment_reactions" */
export type Comment_Reactions_Set_Input = {
  comment?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "comment_reactions" */
export type Comment_Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comment_Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comment_Reactions_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "comment_reactions" */
export enum Comment_Reactions_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Comment_Reactions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comment_Reactions_Bool_Exp;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** An object relationship */
  argument?: Maybe<Arguments>;
  /** An object relationship */
  argument_chat?: Maybe<Argument_Chats>;
  argument_chat_id?: Maybe<Scalars['uuid']['output']>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  comment_reactions: Array<Comment_Reactions>;
  /** An aggregate relationship */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  diet_member?: Maybe<Diet_Members>;
  diet_member_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law?: Maybe<Laws>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  law_revision_column?: Maybe<Law_Revision_Columns>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  official_gazette?: Maybe<Official_Gazettes>;
  official_gazette_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  party?: Maybe<Parties>;
  party_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "comments" */
export type CommentsComment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsComment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_chat?: InputMaybe<Argument_Chats_Bool_Exp>;
  argument_chat_id?: InputMaybe<Uuid_Comparison_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  comment_reactions?: InputMaybe<Comment_Reactions_Bool_Exp>;
  comment_reactions_aggregate?: InputMaybe<Comment_Reactions_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  diet_member?: InputMaybe<Diet_Members_Bool_Exp>;
  diet_member_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  law_revision_column_id?: InputMaybe<Uuid_Comparison_Exp>;
  official_gazette?: InputMaybe<Official_Gazettes_Bool_Exp>;
  official_gazette_id?: InputMaybe<Uuid_Comparison_Exp>;
  party?: InputMaybe<Parties_Bool_Exp>;
  party_id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentPkey = 'comment_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_chat?: InputMaybe<Argument_Chats_Obj_Rel_Insert_Input>;
  argument_chat_id?: InputMaybe<Scalars['uuid']['input']>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  comment_reactions?: InputMaybe<Comment_Reactions_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  diet_member?: InputMaybe<Diet_Members_Obj_Rel_Insert_Input>;
  diet_member_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Obj_Rel_Insert_Input>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette?: InputMaybe<Official_Gazettes_Obj_Rel_Insert_Input>;
  official_gazette_id?: InputMaybe<Scalars['uuid']['input']>;
  party?: InputMaybe<Parties_Obj_Rel_Insert_Input>;
  party_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  argument_chat_id?: Maybe<Scalars['uuid']['output']>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  diet_member_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  official_gazette_id?: Maybe<Scalars['uuid']['output']>;
  party_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  argument_chat_id?: InputMaybe<Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  diet_member_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  official_gazette_id?: InputMaybe<Order_By>;
  party_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  argument_chat_id?: Maybe<Scalars['uuid']['output']>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  diet_member_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  official_gazette_id?: Maybe<Scalars['uuid']['output']>;
  party_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  argument_chat_id?: InputMaybe<Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  diet_member_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  official_gazette_id?: InputMaybe<Order_By>;
  party_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  argument?: InputMaybe<Arguments_Order_By>;
  argument_chat?: InputMaybe<Argument_Chats_Order_By>;
  argument_chat_id?: InputMaybe<Order_By>;
  argument_id?: InputMaybe<Order_By>;
  comment_reactions_aggregate?: InputMaybe<Comment_Reactions_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  diet_member?: InputMaybe<Diet_Members_Order_By>;
  diet_member_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  official_gazette?: InputMaybe<Official_Gazettes_Order_By>;
  official_gazette_id?: InputMaybe<Order_By>;
  party?: InputMaybe<Parties_Order_By>;
  party_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  ArgumentChatId = 'argument_chat_id',
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DietMemberId = 'diet_member_id',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  OfficialGazetteId = 'official_gazette_id',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  argument_chat_id?: InputMaybe<Scalars['uuid']['input']>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  diet_member_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette_id?: InputMaybe<Scalars['uuid']['input']>;
  party_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "comments" */
export type Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comments_Stream_Cursor_Value_Input = {
  argument_chat_id?: InputMaybe<Scalars['uuid']['input']>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  diet_member_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette_id?: InputMaybe<Scalars['uuid']['input']>;
  party_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  ArgumentChatId = 'argument_chat_id',
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DietMemberId = 'diet_member_id',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  OfficialGazetteId = 'official_gazette_id',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comments_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "diet" */
export type Diet = {
  __typename?: 'diet';
  /** An array relationship */
  house_of_councilors_histories: Array<House_Of_Councilors_Histories>;
  /** An aggregate relationship */
  house_of_councilors_histories_aggregate: House_Of_Councilors_Histories_Aggregate;
  /** An array relationship */
  house_of_representatives_histories: Array<House_Of_Representatives_Histories>;
  /** An aggregate relationship */
  house_of_representatives_histories_aggregate: House_Of_Representatives_Histories_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "diet" */
export type DietHouse_Of_Councilors_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Councilors_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};


/** columns and relationships of "diet" */
export type DietHouse_Of_Councilors_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Councilors_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};


/** columns and relationships of "diet" */
export type DietHouse_Of_Representatives_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Representatives_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};


/** columns and relationships of "diet" */
export type DietHouse_Of_Representatives_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Representatives_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};

/** aggregated selection of "diet" */
export type Diet_Aggregate = {
  __typename?: 'diet_aggregate';
  aggregate?: Maybe<Diet_Aggregate_Fields>;
  nodes: Array<Diet>;
};

/** aggregate fields of "diet" */
export type Diet_Aggregate_Fields = {
  __typename?: 'diet_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Diet_Max_Fields>;
  min?: Maybe<Diet_Min_Fields>;
};


/** aggregate fields of "diet" */
export type Diet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Diet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "diet". All fields are combined with a logical 'AND'. */
export type Diet_Bool_Exp = {
  _and?: InputMaybe<Array<Diet_Bool_Exp>>;
  _not?: InputMaybe<Diet_Bool_Exp>;
  _or?: InputMaybe<Array<Diet_Bool_Exp>>;
  house_of_councilors_histories?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
  house_of_councilors_histories_aggregate?: InputMaybe<House_Of_Councilors_Histories_Aggregate_Bool_Exp>;
  house_of_representatives_histories?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
  house_of_representatives_histories_aggregate?: InputMaybe<House_Of_Representatives_Histories_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "diet" */
export enum Diet_Constraint {
  /** unique or primary key constraint on columns "id" */
  DietPkey = 'diet_pkey'
}

/** input type for inserting data into table "diet" */
export type Diet_Insert_Input = {
  house_of_councilors_histories?: InputMaybe<House_Of_Councilors_Histories_Arr_Rel_Insert_Input>;
  house_of_representatives_histories?: InputMaybe<House_Of_Representatives_Histories_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Diet_Max_Fields = {
  __typename?: 'diet_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "diet_members" */
export type Diet_Members = {
  __typename?: 'diet_members';
  assuption_date: Scalars['date']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  house: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  name_en?: Maybe<Scalars['String']['output']>;
  name_kana?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  parties: Array<Parties>;
  /** An aggregate relationship */
  parties_aggregate: Parties_Aggregate;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  retirement_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "diet_members" */
export type Diet_MembersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "diet_members" */
export type Diet_MembersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "diet_members" */
export type Diet_MembersPartiesArgs = {
  distinct_on?: InputMaybe<Array<Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Parties_Order_By>>;
  where?: InputMaybe<Parties_Bool_Exp>;
};


/** columns and relationships of "diet_members" */
export type Diet_MembersParties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Parties_Order_By>>;
  where?: InputMaybe<Parties_Bool_Exp>;
};


/** columns and relationships of "diet_members" */
export type Diet_MembersReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "diet_members" */
export type Diet_MembersReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "diet_members" */
export type Diet_Members_Aggregate = {
  __typename?: 'diet_members_aggregate';
  aggregate?: Maybe<Diet_Members_Aggregate_Fields>;
  nodes: Array<Diet_Members>;
};

/** aggregate fields of "diet_members" */
export type Diet_Members_Aggregate_Fields = {
  __typename?: 'diet_members_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Diet_Members_Max_Fields>;
  min?: Maybe<Diet_Members_Min_Fields>;
};


/** aggregate fields of "diet_members" */
export type Diet_Members_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Diet_Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "diet_members". All fields are combined with a logical 'AND'. */
export type Diet_Members_Bool_Exp = {
  _and?: InputMaybe<Array<Diet_Members_Bool_Exp>>;
  _not?: InputMaybe<Diet_Members_Bool_Exp>;
  _or?: InputMaybe<Array<Diet_Members_Bool_Exp>>;
  assuption_date?: InputMaybe<Date_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  house?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_kana?: InputMaybe<String_Comparison_Exp>;
  parties?: InputMaybe<Parties_Bool_Exp>;
  parties_aggregate?: InputMaybe<Parties_Aggregate_Bool_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  retirement_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "diet_members" */
export enum Diet_Members_Constraint {
  /** unique or primary key constraint on columns "id" */
  DietMemberPkey = 'diet_member_pkey'
}

/** input type for inserting data into table "diet_members" */
export type Diet_Members_Insert_Input = {
  assuption_date?: InputMaybe<Scalars['date']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  parties?: InputMaybe<Parties_Arr_Rel_Insert_Input>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  retirement_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Diet_Members_Max_Fields = {
  __typename?: 'diet_members_max_fields';
  assuption_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  house?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  name_kana?: Maybe<Scalars['String']['output']>;
  retirement_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Diet_Members_Min_Fields = {
  __typename?: 'diet_members_min_fields';
  assuption_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  house?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  name_kana?: Maybe<Scalars['String']['output']>;
  retirement_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "diet_members" */
export type Diet_Members_Mutation_Response = {
  __typename?: 'diet_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Diet_Members>;
};

/** input type for inserting object relation for remote table "diet_members" */
export type Diet_Members_Obj_Rel_Insert_Input = {
  data: Diet_Members_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Diet_Members_On_Conflict>;
};

/** on_conflict condition type for table "diet_members" */
export type Diet_Members_On_Conflict = {
  constraint: Diet_Members_Constraint;
  update_columns?: Array<Diet_Members_Update_Column>;
  where?: InputMaybe<Diet_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "diet_members". */
export type Diet_Members_Order_By = {
  assuption_date?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  house?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_kana?: InputMaybe<Order_By>;
  parties_aggregate?: InputMaybe<Parties_Aggregate_Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  retirement_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: diet_members */
export type Diet_Members_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "diet_members" */
export enum Diet_Members_Select_Column {
  /** column name */
  AssuptionDate = 'assuption_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  House = 'house',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameKana = 'name_kana',
  /** column name */
  RetirementDate = 'retirement_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "diet_members" */
export type Diet_Members_Set_Input = {
  assuption_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  retirement_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "diet_members" */
export type Diet_Members_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Diet_Members_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Diet_Members_Stream_Cursor_Value_Input = {
  assuption_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  retirement_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "diet_members" */
export enum Diet_Members_Update_Column {
  /** column name */
  AssuptionDate = 'assuption_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  House = 'house',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameKana = 'name_kana',
  /** column name */
  RetirementDate = 'retirement_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Diet_Members_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Diet_Members_Set_Input>;
  /** filter the rows which have to be updated */
  where: Diet_Members_Bool_Exp;
};

/** aggregate min on columns */
export type Diet_Min_Fields = {
  __typename?: 'diet_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "diet" */
export type Diet_Mutation_Response = {
  __typename?: 'diet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Diet>;
};

/** input type for inserting object relation for remote table "diet" */
export type Diet_Obj_Rel_Insert_Input = {
  data: Diet_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Diet_On_Conflict>;
};

/** on_conflict condition type for table "diet" */
export type Diet_On_Conflict = {
  constraint: Diet_Constraint;
  update_columns?: Array<Diet_Update_Column>;
  where?: InputMaybe<Diet_Bool_Exp>;
};

/** Ordering options when selecting data from "diet". */
export type Diet_Order_By = {
  house_of_councilors_histories_aggregate?: InputMaybe<House_Of_Councilors_Histories_Aggregate_Order_By>;
  house_of_representatives_histories_aggregate?: InputMaybe<House_Of_Representatives_Histories_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: diet */
export type Diet_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "diet" */
export enum Diet_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "diet" */
export type Diet_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "diet" */
export type Diet_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Diet_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Diet_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "diet" */
export enum Diet_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Diet_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Diet_Set_Input>;
  /** filter the rows which have to be updated */
  where: Diet_Bool_Exp;
};

/** columns and relationships of "house_of_councilors_histories" */
export type House_Of_Councilors_Histories = {
  __typename?: 'house_of_councilors_histories';
  /** An object relationship */
  diet: Diet;
  diet_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Aggregate = {
  __typename?: 'house_of_councilors_histories_aggregate';
  aggregate?: Maybe<House_Of_Councilors_Histories_Aggregate_Fields>;
  nodes: Array<House_Of_Councilors_Histories>;
};

export type House_Of_Councilors_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<House_Of_Councilors_Histories_Aggregate_Bool_Exp_Count>;
};

export type House_Of_Councilors_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Aggregate_Fields = {
  __typename?: 'house_of_councilors_histories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<House_Of_Councilors_Histories_Max_Fields>;
  min?: Maybe<House_Of_Councilors_Histories_Min_Fields>;
};


/** aggregate fields of "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<House_Of_Councilors_Histories_Max_Order_By>;
  min?: InputMaybe<House_Of_Councilors_Histories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Arr_Rel_Insert_Input = {
  data: Array<House_Of_Councilors_Histories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<House_Of_Councilors_Histories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "house_of_councilors_histories". All fields are combined with a logical 'AND'. */
export type House_Of_Councilors_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<House_Of_Councilors_Histories_Bool_Exp>>;
  _not?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<House_Of_Councilors_Histories_Bool_Exp>>;
  diet?: InputMaybe<Diet_Bool_Exp>;
  diet_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "house_of_councilors_histories" */
export enum House_Of_Councilors_Histories_Constraint {
  /** unique or primary key constraint on columns "id" */
  HouseOfCouncilorsPkey = 'house_of_councilors_pkey'
}

/** input type for inserting data into table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Insert_Input = {
  diet?: InputMaybe<Diet_Obj_Rel_Insert_Input>;
  diet_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type House_Of_Councilors_Histories_Max_Fields = {
  __typename?: 'house_of_councilors_histories_max_fields';
  diet_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Max_Order_By = {
  diet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type House_Of_Councilors_Histories_Min_Fields = {
  __typename?: 'house_of_councilors_histories_min_fields';
  diet_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Min_Order_By = {
  diet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Mutation_Response = {
  __typename?: 'house_of_councilors_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<House_Of_Councilors_Histories>;
};

/** on_conflict condition type for table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_On_Conflict = {
  constraint: House_Of_Councilors_Histories_Constraint;
  update_columns?: Array<House_Of_Councilors_Histories_Update_Column>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "house_of_councilors_histories". */
export type House_Of_Councilors_Histories_Order_By = {
  diet?: InputMaybe<Diet_Order_By>;
  diet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: house_of_councilors_histories */
export type House_Of_Councilors_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "house_of_councilors_histories" */
export enum House_Of_Councilors_Histories_Select_Column {
  /** column name */
  DietId = 'diet_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Set_Input = {
  diet_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "house_of_councilors_histories" */
export type House_Of_Councilors_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: House_Of_Councilors_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type House_Of_Councilors_Histories_Stream_Cursor_Value_Input = {
  diet_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "house_of_councilors_histories" */
export enum House_Of_Councilors_Histories_Update_Column {
  /** column name */
  DietId = 'diet_id',
  /** column name */
  Id = 'id'
}

export type House_Of_Councilors_Histories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<House_Of_Councilors_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: House_Of_Councilors_Histories_Bool_Exp;
};

/** columns and relationships of "house_of_representatives_histories" */
export type House_Of_Representatives_Histories = {
  __typename?: 'house_of_representatives_histories';
  /** An object relationship */
  diet: Diet;
  diet_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Aggregate = {
  __typename?: 'house_of_representatives_histories_aggregate';
  aggregate?: Maybe<House_Of_Representatives_Histories_Aggregate_Fields>;
  nodes: Array<House_Of_Representatives_Histories>;
};

export type House_Of_Representatives_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<House_Of_Representatives_Histories_Aggregate_Bool_Exp_Count>;
};

export type House_Of_Representatives_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Aggregate_Fields = {
  __typename?: 'house_of_representatives_histories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<House_Of_Representatives_Histories_Max_Fields>;
  min?: Maybe<House_Of_Representatives_Histories_Min_Fields>;
};


/** aggregate fields of "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<House_Of_Representatives_Histories_Max_Order_By>;
  min?: InputMaybe<House_Of_Representatives_Histories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Arr_Rel_Insert_Input = {
  data: Array<House_Of_Representatives_Histories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<House_Of_Representatives_Histories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "house_of_representatives_histories". All fields are combined with a logical 'AND'. */
export type House_Of_Representatives_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<House_Of_Representatives_Histories_Bool_Exp>>;
  _not?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<House_Of_Representatives_Histories_Bool_Exp>>;
  diet?: InputMaybe<Diet_Bool_Exp>;
  diet_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "house_of_representatives_histories" */
export enum House_Of_Representatives_Histories_Constraint {
  /** unique or primary key constraint on columns "id" */
  HouseOfRepresentativesHistoriesPkey = 'house_of_representatives_histories_pkey'
}

/** input type for inserting data into table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Insert_Input = {
  diet?: InputMaybe<Diet_Obj_Rel_Insert_Input>;
  diet_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type House_Of_Representatives_Histories_Max_Fields = {
  __typename?: 'house_of_representatives_histories_max_fields';
  diet_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Max_Order_By = {
  diet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type House_Of_Representatives_Histories_Min_Fields = {
  __typename?: 'house_of_representatives_histories_min_fields';
  diet_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Min_Order_By = {
  diet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Mutation_Response = {
  __typename?: 'house_of_representatives_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<House_Of_Representatives_Histories>;
};

/** on_conflict condition type for table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_On_Conflict = {
  constraint: House_Of_Representatives_Histories_Constraint;
  update_columns?: Array<House_Of_Representatives_Histories_Update_Column>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "house_of_representatives_histories". */
export type House_Of_Representatives_Histories_Order_By = {
  diet?: InputMaybe<Diet_Order_By>;
  diet_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: house_of_representatives_histories */
export type House_Of_Representatives_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "house_of_representatives_histories" */
export enum House_Of_Representatives_Histories_Select_Column {
  /** column name */
  DietId = 'diet_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Set_Input = {
  diet_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "house_of_representatives_histories" */
export type House_Of_Representatives_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: House_Of_Representatives_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type House_Of_Representatives_Histories_Stream_Cursor_Value_Input = {
  diet_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "house_of_representatives_histories" */
export enum House_Of_Representatives_Histories_Update_Column {
  /** column name */
  DietId = 'diet_id',
  /** column name */
  Id = 'id'
}

export type House_Of_Representatives_Histories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<House_Of_Representatives_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: House_Of_Representatives_Histories_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "law_categories" */
export type Law_Categories = {
  __typename?: 'law_categories';
  category_name: Scalars['String']['output'];
  category_number: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
};


/** columns and relationships of "law_categories" */
export type Law_CategoriesLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


/** columns and relationships of "law_categories" */
export type Law_CategoriesLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};

/** aggregated selection of "law_categories" */
export type Law_Categories_Aggregate = {
  __typename?: 'law_categories_aggregate';
  aggregate?: Maybe<Law_Categories_Aggregate_Fields>;
  nodes: Array<Law_Categories>;
};

/** aggregate fields of "law_categories" */
export type Law_Categories_Aggregate_Fields = {
  __typename?: 'law_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Categories_Max_Fields>;
  min?: Maybe<Law_Categories_Min_Fields>;
};


/** aggregate fields of "law_categories" */
export type Law_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "law_categories". All fields are combined with a logical 'AND'. */
export type Law_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Categories_Bool_Exp>>;
  _not?: InputMaybe<Law_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Categories_Bool_Exp>>;
  category_name?: InputMaybe<String_Comparison_Exp>;
  category_number?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "law_categories" */
export enum Law_Categories_Constraint {
  /** unique or primary key constraint on columns "category_name" */
  LawCategoriesCategoryNameKey = 'law_categories_category_name_key',
  /** unique or primary key constraint on columns "category_number" */
  LawCategoriesCategoryNumberKey = 'law_categories_category_number_key',
  /** unique or primary key constraint on columns "id" */
  LawCategoriesPkey = 'law_categories_pkey'
}

/** input type for inserting data into table "law_categories" */
export type Law_Categories_Insert_Input = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  category_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Law_Categories_Max_Fields = {
  __typename?: 'law_categories_max_fields';
  category_name?: Maybe<Scalars['String']['output']>;
  category_number?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Law_Categories_Min_Fields = {
  __typename?: 'law_categories_min_fields';
  category_name?: Maybe<Scalars['String']['output']>;
  category_number?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "law_categories" */
export type Law_Categories_Mutation_Response = {
  __typename?: 'law_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Categories>;
};

/** input type for inserting object relation for remote table "law_categories" */
export type Law_Categories_Obj_Rel_Insert_Input = {
  data: Law_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Categories_On_Conflict>;
};

/** on_conflict condition type for table "law_categories" */
export type Law_Categories_On_Conflict = {
  constraint: Law_Categories_Constraint;
  update_columns?: Array<Law_Categories_Update_Column>;
  where?: InputMaybe<Law_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "law_categories". */
export type Law_Categories_Order_By = {
  category_name?: InputMaybe<Order_By>;
  category_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
};

/** primary key columns input for table: law_categories */
export type Law_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_categories" */
export enum Law_Categories_Select_Column {
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  CategoryNumber = 'category_number',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "law_categories" */
export type Law_Categories_Set_Input = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  category_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "law_categories" */
export type Law_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Categories_Stream_Cursor_Value_Input = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  category_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "law_categories" */
export enum Law_Categories_Update_Column {
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  CategoryNumber = 'category_number',
  /** column name */
  Id = 'id'
}

export type Law_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Categories_Bool_Exp;
};

/** columns and relationships of "law_revision_columns" */
export type Law_Revision_Columns = {
  __typename?: 'law_revision_columns';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  lawRevisionByLawRevision: Law_Revisions;
  law_revision: Scalars['uuid']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
};


/** columns and relationships of "law_revision_columns" */
export type Law_Revision_ColumnsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "law_revision_columns" */
export type Law_Revision_ColumnsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "law_revision_columns" */
export type Law_Revision_ColumnsReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "law_revision_columns" */
export type Law_Revision_ColumnsReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "law_revision_columns" */
export type Law_Revision_Columns_Aggregate = {
  __typename?: 'law_revision_columns_aggregate';
  aggregate?: Maybe<Law_Revision_Columns_Aggregate_Fields>;
  nodes: Array<Law_Revision_Columns>;
};

export type Law_Revision_Columns_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Revision_Columns_Aggregate_Bool_Exp_Count>;
};

export type Law_Revision_Columns_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_revision_columns" */
export type Law_Revision_Columns_Aggregate_Fields = {
  __typename?: 'law_revision_columns_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Revision_Columns_Max_Fields>;
  min?: Maybe<Law_Revision_Columns_Min_Fields>;
};


/** aggregate fields of "law_revision_columns" */
export type Law_Revision_Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_revision_columns" */
export type Law_Revision_Columns_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Revision_Columns_Max_Order_By>;
  min?: InputMaybe<Law_Revision_Columns_Min_Order_By>;
};

/** input type for inserting array relation for remote table "law_revision_columns" */
export type Law_Revision_Columns_Arr_Rel_Insert_Input = {
  data: Array<Law_Revision_Columns_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Revision_Columns_On_Conflict>;
};

/** Boolean expression to filter rows from the table "law_revision_columns". All fields are combined with a logical 'AND'. */
export type Law_Revision_Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Revision_Columns_Bool_Exp>>;
  _not?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Revision_Columns_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lawRevisionByLawRevision?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revision?: InputMaybe<Uuid_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "law_revision_columns" */
export enum Law_Revision_Columns_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawRevisionColumnPkey = 'law_revision_column_pkey'
}

/** input type for inserting data into table "law_revision_columns" */
export type Law_Revision_Columns_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lawRevisionByLawRevision?: InputMaybe<Law_Revisions_Obj_Rel_Insert_Input>;
  law_revision?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Law_Revision_Columns_Max_Fields = {
  __typename?: 'law_revision_columns_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  law_revision?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_revision_columns" */
export type Law_Revision_Columns_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  law_revision?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Revision_Columns_Min_Fields = {
  __typename?: 'law_revision_columns_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  law_revision?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_revision_columns" */
export type Law_Revision_Columns_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  law_revision?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_revision_columns" */
export type Law_Revision_Columns_Mutation_Response = {
  __typename?: 'law_revision_columns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Revision_Columns>;
};

/** input type for inserting object relation for remote table "law_revision_columns" */
export type Law_Revision_Columns_Obj_Rel_Insert_Input = {
  data: Law_Revision_Columns_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Revision_Columns_On_Conflict>;
};

/** on_conflict condition type for table "law_revision_columns" */
export type Law_Revision_Columns_On_Conflict = {
  constraint: Law_Revision_Columns_Constraint;
  update_columns?: Array<Law_Revision_Columns_Update_Column>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};

/** Ordering options when selecting data from "law_revision_columns". */
export type Law_Revision_Columns_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lawRevisionByLawRevision?: InputMaybe<Law_Revisions_Order_By>;
  law_revision?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: law_revision_columns */
export type Law_Revision_Columns_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_revision_columns" */
export enum Law_Revision_Columns_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LawRevision = 'law_revision'
}

/** input type for updating data in table "law_revision_columns" */
export type Law_Revision_Columns_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "law_revision_columns" */
export type Law_Revision_Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Revision_Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Revision_Columns_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "law_revision_columns" */
export enum Law_Revision_Columns_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LawRevision = 'law_revision'
}

export type Law_Revision_Columns_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Revision_Columns_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Revision_Columns_Bool_Exp;
};

/** columns and relationships of "law_revisions" */
export type Law_Revisions = {
  __typename?: 'law_revisions';
  abbrev: Scalars['String']['output'];
  abbrev_kana: Scalars['String']['output'];
  abbrev_kana_seion: Scalars['String']['output'];
  ad_year: Scalars['String']['output'];
  api_law_data_info: Scalars['String']['output'];
  api_law_revision_id: Scalars['String']['output'];
  api_law_type_num: Scalars['String']['output'];
  category: Scalars['String']['output'];
  enforcement_comment: Scalars['String']['output'];
  enforcement_date: Scalars['date']['output'];
  era: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  lang: Scalars['String']['output'];
  /** An object relationship */
  law: Laws;
  /** An object relationship */
  law_category: Law_Categories;
  law_full_text: Scalars['jsonb']['output'];
  /** An array relationship */
  law_revision_columns: Array<Law_Revision_Columns>;
  /** An aggregate relationship */
  law_revision_columns_aggregate: Law_Revision_Columns_Aggregate;
  /** An object relationship */
  law_status: Law_Statuses;
  /** An object relationship */
  law_type: Law_Types;
  laws: Scalars['uuid']['output'];
  mission: Scalars['String']['output'];
  num: Scalars['String']['output'];
  num_kanji: Scalars['String']['output'];
  old_law_title: Scalars['String']['output'];
  old_law_title_kana: Scalars['String']['output'];
  old_law_title_kana_seion: Scalars['String']['output'];
  promulgate_day: Scalars['String']['output'];
  promulgate_month: Scalars['String']['output'];
  remain_in_force: Scalars['String']['output'];
  repeal_type: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  title_kana: Scalars['String']['output'];
  title_kana_seion: Scalars['String']['output'];
  type: Scalars['String']['output'];
  year: Scalars['String']['output'];
};


/** columns and relationships of "law_revisions" */
export type Law_RevisionsLaw_Full_TextArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "law_revisions" */
export type Law_RevisionsLaw_Revision_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revision_Columns_Order_By>>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};


/** columns and relationships of "law_revisions" */
export type Law_RevisionsLaw_Revision_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revision_Columns_Order_By>>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};

/** aggregated selection of "law_revisions" */
export type Law_Revisions_Aggregate = {
  __typename?: 'law_revisions_aggregate';
  aggregate?: Maybe<Law_Revisions_Aggregate_Fields>;
  nodes: Array<Law_Revisions>;
};

export type Law_Revisions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp_Count>;
};

export type Law_Revisions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Revisions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_revisions" */
export type Law_Revisions_Aggregate_Fields = {
  __typename?: 'law_revisions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Revisions_Max_Fields>;
  min?: Maybe<Law_Revisions_Min_Fields>;
};


/** aggregate fields of "law_revisions" */
export type Law_Revisions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_revisions" */
export type Law_Revisions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Revisions_Max_Order_By>;
  min?: InputMaybe<Law_Revisions_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Law_Revisions_Append_Input = {
  law_full_text?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "law_revisions" */
export type Law_Revisions_Arr_Rel_Insert_Input = {
  data: Array<Law_Revisions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Revisions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "law_revisions". All fields are combined with a logical 'AND'. */
export type Law_Revisions_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Revisions_Bool_Exp>>;
  _not?: InputMaybe<Law_Revisions_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Revisions_Bool_Exp>>;
  abbrev?: InputMaybe<String_Comparison_Exp>;
  abbrev_kana?: InputMaybe<String_Comparison_Exp>;
  abbrev_kana_seion?: InputMaybe<String_Comparison_Exp>;
  ad_year?: InputMaybe<String_Comparison_Exp>;
  api_law_data_info?: InputMaybe<String_Comparison_Exp>;
  api_law_revision_id?: InputMaybe<String_Comparison_Exp>;
  api_law_type_num?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  enforcement_comment?: InputMaybe<String_Comparison_Exp>;
  enforcement_date?: InputMaybe<Date_Comparison_Exp>;
  era?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lang?: InputMaybe<String_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_category?: InputMaybe<Law_Categories_Bool_Exp>;
  law_full_text?: InputMaybe<Jsonb_Comparison_Exp>;
  law_revision_columns?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  law_revision_columns_aggregate?: InputMaybe<Law_Revision_Columns_Aggregate_Bool_Exp>;
  law_status?: InputMaybe<Law_Statuses_Bool_Exp>;
  law_type?: InputMaybe<Law_Types_Bool_Exp>;
  laws?: InputMaybe<Uuid_Comparison_Exp>;
  mission?: InputMaybe<String_Comparison_Exp>;
  num?: InputMaybe<String_Comparison_Exp>;
  num_kanji?: InputMaybe<String_Comparison_Exp>;
  old_law_title?: InputMaybe<String_Comparison_Exp>;
  old_law_title_kana?: InputMaybe<String_Comparison_Exp>;
  old_law_title_kana_seion?: InputMaybe<String_Comparison_Exp>;
  promulgate_day?: InputMaybe<String_Comparison_Exp>;
  promulgate_month?: InputMaybe<String_Comparison_Exp>;
  remain_in_force?: InputMaybe<String_Comparison_Exp>;
  repeal_type?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  title_kana?: InputMaybe<String_Comparison_Exp>;
  title_kana_seion?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_revisions" */
export enum Law_Revisions_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawRevisionPkey = 'law_revision_pkey',
  /** unique or primary key constraint on columns "api_law_revision_id" */
  LawRevisionsApiLawRevisionIdKey = 'law_revisions_api_law_revision_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Law_Revisions_Delete_At_Path_Input = {
  law_full_text?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Law_Revisions_Delete_Elem_Input = {
  law_full_text?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Law_Revisions_Delete_Key_Input = {
  law_full_text?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "law_revisions" */
export type Law_Revisions_Insert_Input = {
  abbrev?: InputMaybe<Scalars['String']['input']>;
  abbrev_kana?: InputMaybe<Scalars['String']['input']>;
  abbrev_kana_seion?: InputMaybe<Scalars['String']['input']>;
  ad_year?: InputMaybe<Scalars['String']['input']>;
  api_law_data_info?: InputMaybe<Scalars['String']['input']>;
  api_law_revision_id?: InputMaybe<Scalars['String']['input']>;
  api_law_type_num?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  enforcement_comment?: InputMaybe<Scalars['String']['input']>;
  enforcement_date?: InputMaybe<Scalars['date']['input']>;
  era?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_category?: InputMaybe<Law_Categories_Obj_Rel_Insert_Input>;
  law_full_text?: InputMaybe<Scalars['jsonb']['input']>;
  law_revision_columns?: InputMaybe<Law_Revision_Columns_Arr_Rel_Insert_Input>;
  law_status?: InputMaybe<Law_Statuses_Obj_Rel_Insert_Input>;
  law_type?: InputMaybe<Law_Types_Obj_Rel_Insert_Input>;
  laws?: InputMaybe<Scalars['uuid']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  num?: InputMaybe<Scalars['String']['input']>;
  num_kanji?: InputMaybe<Scalars['String']['input']>;
  old_law_title?: InputMaybe<Scalars['String']['input']>;
  old_law_title_kana?: InputMaybe<Scalars['String']['input']>;
  old_law_title_kana_seion?: InputMaybe<Scalars['String']['input']>;
  promulgate_day?: InputMaybe<Scalars['String']['input']>;
  promulgate_month?: InputMaybe<Scalars['String']['input']>;
  remain_in_force?: InputMaybe<Scalars['String']['input']>;
  repeal_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_kana?: InputMaybe<Scalars['String']['input']>;
  title_kana_seion?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Law_Revisions_Max_Fields = {
  __typename?: 'law_revisions_max_fields';
  abbrev?: Maybe<Scalars['String']['output']>;
  abbrev_kana?: Maybe<Scalars['String']['output']>;
  abbrev_kana_seion?: Maybe<Scalars['String']['output']>;
  ad_year?: Maybe<Scalars['String']['output']>;
  api_law_data_info?: Maybe<Scalars['String']['output']>;
  api_law_revision_id?: Maybe<Scalars['String']['output']>;
  api_law_type_num?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  enforcement_comment?: Maybe<Scalars['String']['output']>;
  enforcement_date?: Maybe<Scalars['date']['output']>;
  era?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  laws?: Maybe<Scalars['uuid']['output']>;
  mission?: Maybe<Scalars['String']['output']>;
  num?: Maybe<Scalars['String']['output']>;
  num_kanji?: Maybe<Scalars['String']['output']>;
  old_law_title?: Maybe<Scalars['String']['output']>;
  old_law_title_kana?: Maybe<Scalars['String']['output']>;
  old_law_title_kana_seion?: Maybe<Scalars['String']['output']>;
  promulgate_day?: Maybe<Scalars['String']['output']>;
  promulgate_month?: Maybe<Scalars['String']['output']>;
  remain_in_force?: Maybe<Scalars['String']['output']>;
  repeal_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_kana?: Maybe<Scalars['String']['output']>;
  title_kana_seion?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "law_revisions" */
export type Law_Revisions_Max_Order_By = {
  abbrev?: InputMaybe<Order_By>;
  abbrev_kana?: InputMaybe<Order_By>;
  abbrev_kana_seion?: InputMaybe<Order_By>;
  ad_year?: InputMaybe<Order_By>;
  api_law_data_info?: InputMaybe<Order_By>;
  api_law_revision_id?: InputMaybe<Order_By>;
  api_law_type_num?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  enforcement_comment?: InputMaybe<Order_By>;
  enforcement_date?: InputMaybe<Order_By>;
  era?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lang?: InputMaybe<Order_By>;
  laws?: InputMaybe<Order_By>;
  mission?: InputMaybe<Order_By>;
  num?: InputMaybe<Order_By>;
  num_kanji?: InputMaybe<Order_By>;
  old_law_title?: InputMaybe<Order_By>;
  old_law_title_kana?: InputMaybe<Order_By>;
  old_law_title_kana_seion?: InputMaybe<Order_By>;
  promulgate_day?: InputMaybe<Order_By>;
  promulgate_month?: InputMaybe<Order_By>;
  remain_in_force?: InputMaybe<Order_By>;
  repeal_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  title_kana?: InputMaybe<Order_By>;
  title_kana_seion?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Revisions_Min_Fields = {
  __typename?: 'law_revisions_min_fields';
  abbrev?: Maybe<Scalars['String']['output']>;
  abbrev_kana?: Maybe<Scalars['String']['output']>;
  abbrev_kana_seion?: Maybe<Scalars['String']['output']>;
  ad_year?: Maybe<Scalars['String']['output']>;
  api_law_data_info?: Maybe<Scalars['String']['output']>;
  api_law_revision_id?: Maybe<Scalars['String']['output']>;
  api_law_type_num?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  enforcement_comment?: Maybe<Scalars['String']['output']>;
  enforcement_date?: Maybe<Scalars['date']['output']>;
  era?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  laws?: Maybe<Scalars['uuid']['output']>;
  mission?: Maybe<Scalars['String']['output']>;
  num?: Maybe<Scalars['String']['output']>;
  num_kanji?: Maybe<Scalars['String']['output']>;
  old_law_title?: Maybe<Scalars['String']['output']>;
  old_law_title_kana?: Maybe<Scalars['String']['output']>;
  old_law_title_kana_seion?: Maybe<Scalars['String']['output']>;
  promulgate_day?: Maybe<Scalars['String']['output']>;
  promulgate_month?: Maybe<Scalars['String']['output']>;
  remain_in_force?: Maybe<Scalars['String']['output']>;
  repeal_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_kana?: Maybe<Scalars['String']['output']>;
  title_kana_seion?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "law_revisions" */
export type Law_Revisions_Min_Order_By = {
  abbrev?: InputMaybe<Order_By>;
  abbrev_kana?: InputMaybe<Order_By>;
  abbrev_kana_seion?: InputMaybe<Order_By>;
  ad_year?: InputMaybe<Order_By>;
  api_law_data_info?: InputMaybe<Order_By>;
  api_law_revision_id?: InputMaybe<Order_By>;
  api_law_type_num?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  enforcement_comment?: InputMaybe<Order_By>;
  enforcement_date?: InputMaybe<Order_By>;
  era?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lang?: InputMaybe<Order_By>;
  laws?: InputMaybe<Order_By>;
  mission?: InputMaybe<Order_By>;
  num?: InputMaybe<Order_By>;
  num_kanji?: InputMaybe<Order_By>;
  old_law_title?: InputMaybe<Order_By>;
  old_law_title_kana?: InputMaybe<Order_By>;
  old_law_title_kana_seion?: InputMaybe<Order_By>;
  promulgate_day?: InputMaybe<Order_By>;
  promulgate_month?: InputMaybe<Order_By>;
  remain_in_force?: InputMaybe<Order_By>;
  repeal_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  title_kana?: InputMaybe<Order_By>;
  title_kana_seion?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_revisions" */
export type Law_Revisions_Mutation_Response = {
  __typename?: 'law_revisions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Revisions>;
};

/** input type for inserting object relation for remote table "law_revisions" */
export type Law_Revisions_Obj_Rel_Insert_Input = {
  data: Law_Revisions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Revisions_On_Conflict>;
};

/** on_conflict condition type for table "law_revisions" */
export type Law_Revisions_On_Conflict = {
  constraint: Law_Revisions_Constraint;
  update_columns?: Array<Law_Revisions_Update_Column>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};

/** Ordering options when selecting data from "law_revisions". */
export type Law_Revisions_Order_By = {
  abbrev?: InputMaybe<Order_By>;
  abbrev_kana?: InputMaybe<Order_By>;
  abbrev_kana_seion?: InputMaybe<Order_By>;
  ad_year?: InputMaybe<Order_By>;
  api_law_data_info?: InputMaybe<Order_By>;
  api_law_revision_id?: InputMaybe<Order_By>;
  api_law_type_num?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  enforcement_comment?: InputMaybe<Order_By>;
  enforcement_date?: InputMaybe<Order_By>;
  era?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lang?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_category?: InputMaybe<Law_Categories_Order_By>;
  law_full_text?: InputMaybe<Order_By>;
  law_revision_columns_aggregate?: InputMaybe<Law_Revision_Columns_Aggregate_Order_By>;
  law_status?: InputMaybe<Law_Statuses_Order_By>;
  law_type?: InputMaybe<Law_Types_Order_By>;
  laws?: InputMaybe<Order_By>;
  mission?: InputMaybe<Order_By>;
  num?: InputMaybe<Order_By>;
  num_kanji?: InputMaybe<Order_By>;
  old_law_title?: InputMaybe<Order_By>;
  old_law_title_kana?: InputMaybe<Order_By>;
  old_law_title_kana_seion?: InputMaybe<Order_By>;
  promulgate_day?: InputMaybe<Order_By>;
  promulgate_month?: InputMaybe<Order_By>;
  remain_in_force?: InputMaybe<Order_By>;
  repeal_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  title_kana?: InputMaybe<Order_By>;
  title_kana_seion?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_revisions */
export type Law_Revisions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Law_Revisions_Prepend_Input = {
  law_full_text?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "law_revisions" */
export enum Law_Revisions_Select_Column {
  /** column name */
  Abbrev = 'abbrev',
  /** column name */
  AbbrevKana = 'abbrev_kana',
  /** column name */
  AbbrevKanaSeion = 'abbrev_kana_seion',
  /** column name */
  AdYear = 'ad_year',
  /** column name */
  ApiLawDataInfo = 'api_law_data_info',
  /** column name */
  ApiLawRevisionId = 'api_law_revision_id',
  /** column name */
  ApiLawTypeNum = 'api_law_type_num',
  /** column name */
  Category = 'category',
  /** column name */
  EnforcementComment = 'enforcement_comment',
  /** column name */
  EnforcementDate = 'enforcement_date',
  /** column name */
  Era = 'era',
  /** column name */
  Id = 'id',
  /** column name */
  Lang = 'lang',
  /** column name */
  LawFullText = 'law_full_text',
  /** column name */
  Laws = 'laws',
  /** column name */
  Mission = 'mission',
  /** column name */
  Num = 'num',
  /** column name */
  NumKanji = 'num_kanji',
  /** column name */
  OldLawTitle = 'old_law_title',
  /** column name */
  OldLawTitleKana = 'old_law_title_kana',
  /** column name */
  OldLawTitleKanaSeion = 'old_law_title_kana_seion',
  /** column name */
  PromulgateDay = 'promulgate_day',
  /** column name */
  PromulgateMonth = 'promulgate_month',
  /** column name */
  RemainInForce = 'remain_in_force',
  /** column name */
  RepealType = 'repeal_type',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  TitleKana = 'title_kana',
  /** column name */
  TitleKanaSeion = 'title_kana_seion',
  /** column name */
  Type = 'type',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "law_revisions" */
export type Law_Revisions_Set_Input = {
  abbrev?: InputMaybe<Scalars['String']['input']>;
  abbrev_kana?: InputMaybe<Scalars['String']['input']>;
  abbrev_kana_seion?: InputMaybe<Scalars['String']['input']>;
  ad_year?: InputMaybe<Scalars['String']['input']>;
  api_law_data_info?: InputMaybe<Scalars['String']['input']>;
  api_law_revision_id?: InputMaybe<Scalars['String']['input']>;
  api_law_type_num?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  enforcement_comment?: InputMaybe<Scalars['String']['input']>;
  enforcement_date?: InputMaybe<Scalars['date']['input']>;
  era?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  law_full_text?: InputMaybe<Scalars['jsonb']['input']>;
  laws?: InputMaybe<Scalars['uuid']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  num?: InputMaybe<Scalars['String']['input']>;
  num_kanji?: InputMaybe<Scalars['String']['input']>;
  old_law_title?: InputMaybe<Scalars['String']['input']>;
  old_law_title_kana?: InputMaybe<Scalars['String']['input']>;
  old_law_title_kana_seion?: InputMaybe<Scalars['String']['input']>;
  promulgate_day?: InputMaybe<Scalars['String']['input']>;
  promulgate_month?: InputMaybe<Scalars['String']['input']>;
  remain_in_force?: InputMaybe<Scalars['String']['input']>;
  repeal_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_kana?: InputMaybe<Scalars['String']['input']>;
  title_kana_seion?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "law_revisions" */
export type Law_Revisions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Revisions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Revisions_Stream_Cursor_Value_Input = {
  abbrev?: InputMaybe<Scalars['String']['input']>;
  abbrev_kana?: InputMaybe<Scalars['String']['input']>;
  abbrev_kana_seion?: InputMaybe<Scalars['String']['input']>;
  ad_year?: InputMaybe<Scalars['String']['input']>;
  api_law_data_info?: InputMaybe<Scalars['String']['input']>;
  api_law_revision_id?: InputMaybe<Scalars['String']['input']>;
  api_law_type_num?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  enforcement_comment?: InputMaybe<Scalars['String']['input']>;
  enforcement_date?: InputMaybe<Scalars['date']['input']>;
  era?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  law_full_text?: InputMaybe<Scalars['jsonb']['input']>;
  laws?: InputMaybe<Scalars['uuid']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  num?: InputMaybe<Scalars['String']['input']>;
  num_kanji?: InputMaybe<Scalars['String']['input']>;
  old_law_title?: InputMaybe<Scalars['String']['input']>;
  old_law_title_kana?: InputMaybe<Scalars['String']['input']>;
  old_law_title_kana_seion?: InputMaybe<Scalars['String']['input']>;
  promulgate_day?: InputMaybe<Scalars['String']['input']>;
  promulgate_month?: InputMaybe<Scalars['String']['input']>;
  remain_in_force?: InputMaybe<Scalars['String']['input']>;
  repeal_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_kana?: InputMaybe<Scalars['String']['input']>;
  title_kana_seion?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "law_revisions" */
export enum Law_Revisions_Update_Column {
  /** column name */
  Abbrev = 'abbrev',
  /** column name */
  AbbrevKana = 'abbrev_kana',
  /** column name */
  AbbrevKanaSeion = 'abbrev_kana_seion',
  /** column name */
  AdYear = 'ad_year',
  /** column name */
  ApiLawDataInfo = 'api_law_data_info',
  /** column name */
  ApiLawRevisionId = 'api_law_revision_id',
  /** column name */
  ApiLawTypeNum = 'api_law_type_num',
  /** column name */
  Category = 'category',
  /** column name */
  EnforcementComment = 'enforcement_comment',
  /** column name */
  EnforcementDate = 'enforcement_date',
  /** column name */
  Era = 'era',
  /** column name */
  Id = 'id',
  /** column name */
  Lang = 'lang',
  /** column name */
  LawFullText = 'law_full_text',
  /** column name */
  Laws = 'laws',
  /** column name */
  Mission = 'mission',
  /** column name */
  Num = 'num',
  /** column name */
  NumKanji = 'num_kanji',
  /** column name */
  OldLawTitle = 'old_law_title',
  /** column name */
  OldLawTitleKana = 'old_law_title_kana',
  /** column name */
  OldLawTitleKanaSeion = 'old_law_title_kana_seion',
  /** column name */
  PromulgateDay = 'promulgate_day',
  /** column name */
  PromulgateMonth = 'promulgate_month',
  /** column name */
  RemainInForce = 'remain_in_force',
  /** column name */
  RepealType = 'repeal_type',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  TitleKana = 'title_kana',
  /** column name */
  TitleKanaSeion = 'title_kana_seion',
  /** column name */
  Type = 'type',
  /** column name */
  Year = 'year'
}

export type Law_Revisions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Law_Revisions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Law_Revisions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Law_Revisions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Law_Revisions_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Law_Revisions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Revisions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Revisions_Bool_Exp;
};

/** columns and relationships of "law_statuses" */
export type Law_Statuses = {
  __typename?: 'law_statuses';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  status: Scalars['String']['output'];
  status_text: Scalars['String']['output'];
};


/** columns and relationships of "law_statuses" */
export type Law_StatusesLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


/** columns and relationships of "law_statuses" */
export type Law_StatusesLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};

/** aggregated selection of "law_statuses" */
export type Law_Statuses_Aggregate = {
  __typename?: 'law_statuses_aggregate';
  aggregate?: Maybe<Law_Statuses_Aggregate_Fields>;
  nodes: Array<Law_Statuses>;
};

/** aggregate fields of "law_statuses" */
export type Law_Statuses_Aggregate_Fields = {
  __typename?: 'law_statuses_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Statuses_Max_Fields>;
  min?: Maybe<Law_Statuses_Min_Fields>;
};


/** aggregate fields of "law_statuses" */
export type Law_Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "law_statuses". All fields are combined with a logical 'AND'. */
export type Law_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Law_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Statuses_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  status_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_statuses" */
export enum Law_Statuses_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawStatusesPkey = 'law_statuses_pkey',
  /** unique or primary key constraint on columns "status" */
  LawStatusesStatusKey = 'law_statuses_status_key',
  /** unique or primary key constraint on columns "status_text" */
  LawStatusesStatusTextKey = 'law_statuses_status_text_key'
}

/** input type for inserting data into table "law_statuses" */
export type Law_Statuses_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Law_Statuses_Max_Fields = {
  __typename?: 'law_statuses_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_text?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Law_Statuses_Min_Fields = {
  __typename?: 'law_statuses_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_text?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "law_statuses" */
export type Law_Statuses_Mutation_Response = {
  __typename?: 'law_statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Statuses>;
};

/** input type for inserting object relation for remote table "law_statuses" */
export type Law_Statuses_Obj_Rel_Insert_Input = {
  data: Law_Statuses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Statuses_On_Conflict>;
};

/** on_conflict condition type for table "law_statuses" */
export type Law_Statuses_On_Conflict = {
  constraint: Law_Statuses_Constraint;
  update_columns?: Array<Law_Statuses_Update_Column>;
  where?: InputMaybe<Law_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "law_statuses". */
export type Law_Statuses_Order_By = {
  id?: InputMaybe<Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  status_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_statuses */
export type Law_Statuses_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_statuses" */
export enum Law_Statuses_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  StatusText = 'status_text'
}

/** input type for updating data in table "law_statuses" */
export type Law_Statuses_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_text?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "law_statuses" */
export type Law_Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Statuses_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_text?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "law_statuses" */
export enum Law_Statuses_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  StatusText = 'status_text'
}

export type Law_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Statuses_Bool_Exp;
};

/** columns and relationships of "law_summaries" */
export type Law_Summaries = {
  __typename?: 'law_summaries';
  author_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  summary_text: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "law_summaries" */
export type Law_SummariesReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "law_summaries" */
export type Law_SummariesReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "law_summaries" */
export type Law_Summaries_Aggregate = {
  __typename?: 'law_summaries_aggregate';
  aggregate?: Maybe<Law_Summaries_Aggregate_Fields>;
  nodes: Array<Law_Summaries>;
};

export type Law_Summaries_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Summaries_Aggregate_Bool_Exp_Count>;
};

export type Law_Summaries_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Summaries_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_summaries" */
export type Law_Summaries_Aggregate_Fields = {
  __typename?: 'law_summaries_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Summaries_Max_Fields>;
  min?: Maybe<Law_Summaries_Min_Fields>;
};


/** aggregate fields of "law_summaries" */
export type Law_Summaries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_summaries" */
export type Law_Summaries_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Summaries_Max_Order_By>;
  min?: InputMaybe<Law_Summaries_Min_Order_By>;
};

/** input type for inserting array relation for remote table "law_summaries" */
export type Law_Summaries_Arr_Rel_Insert_Input = {
  data: Array<Law_Summaries_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Summaries_On_Conflict>;
};

/** Boolean expression to filter rows from the table "law_summaries". All fields are combined with a logical 'AND'. */
export type Law_Summaries_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Summaries_Bool_Exp>>;
  _not?: InputMaybe<Law_Summaries_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Summaries_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  summary_text?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "law_summaries" */
export enum Law_Summaries_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawSummariesPkey = 'law_summaries_pkey'
}

/** input type for inserting data into table "law_summaries" */
export type Law_Summaries_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  summary_text?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Law_Summaries_Max_Fields = {
  __typename?: 'law_summaries_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  summary_text?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "law_summaries" */
export type Law_Summaries_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  summary_text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Summaries_Min_Fields = {
  __typename?: 'law_summaries_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  summary_text?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "law_summaries" */
export type Law_Summaries_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  summary_text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_summaries" */
export type Law_Summaries_Mutation_Response = {
  __typename?: 'law_summaries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Summaries>;
};

/** input type for inserting object relation for remote table "law_summaries" */
export type Law_Summaries_Obj_Rel_Insert_Input = {
  data: Law_Summaries_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Summaries_On_Conflict>;
};

/** on_conflict condition type for table "law_summaries" */
export type Law_Summaries_On_Conflict = {
  constraint: Law_Summaries_Constraint;
  update_columns?: Array<Law_Summaries_Update_Column>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};

/** Ordering options when selecting data from "law_summaries". */
export type Law_Summaries_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  summary_text?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: law_summaries */
export type Law_Summaries_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_summaries" */
export enum Law_Summaries_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  SummaryText = 'summary_text'
}

/** input type for updating data in table "law_summaries" */
export type Law_Summaries_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  summary_text?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "law_summaries" */
export type Law_Summaries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Summaries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Summaries_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  summary_text?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "law_summaries" */
export enum Law_Summaries_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  SummaryText = 'summary_text'
}

export type Law_Summaries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Summaries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Summaries_Bool_Exp;
};

/** columns and relationships of "law_types" */
export type Law_Types = {
  __typename?: 'law_types';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  type: Scalars['String']['output'];
  type_name: Scalars['String']['output'];
};


/** columns and relationships of "law_types" */
export type Law_TypesLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


/** columns and relationships of "law_types" */
export type Law_TypesLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};

/** aggregated selection of "law_types" */
export type Law_Types_Aggregate = {
  __typename?: 'law_types_aggregate';
  aggregate?: Maybe<Law_Types_Aggregate_Fields>;
  nodes: Array<Law_Types>;
};

/** aggregate fields of "law_types" */
export type Law_Types_Aggregate_Fields = {
  __typename?: 'law_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Types_Max_Fields>;
  min?: Maybe<Law_Types_Min_Fields>;
};


/** aggregate fields of "law_types" */
export type Law_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "law_types". All fields are combined with a logical 'AND'. */
export type Law_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Types_Bool_Exp>>;
  _not?: InputMaybe<Law_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Types_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  type_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_types" */
export enum Law_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawTypesPkey = 'law_types_pkey',
  /** unique or primary key constraint on columns "type" */
  LawTypesTypeKey = 'law_types_type_key',
  /** unique or primary key constraint on columns "type_name" */
  LawTypesTypeNameKey = 'law_types_type_name_key'
}

/** input type for inserting data into table "law_types" */
export type Law_Types_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Law_Types_Max_Fields = {
  __typename?: 'law_types_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  type_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Law_Types_Min_Fields = {
  __typename?: 'law_types_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  type_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "law_types" */
export type Law_Types_Mutation_Response = {
  __typename?: 'law_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Types>;
};

/** input type for inserting object relation for remote table "law_types" */
export type Law_Types_Obj_Rel_Insert_Input = {
  data: Law_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Types_On_Conflict>;
};

/** on_conflict condition type for table "law_types" */
export type Law_Types_On_Conflict = {
  constraint: Law_Types_Constraint;
  update_columns?: Array<Law_Types_Update_Column>;
  where?: InputMaybe<Law_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "law_types". */
export type Law_Types_Order_By = {
  id?: InputMaybe<Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  type_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_types */
export type Law_Types_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_types" */
export enum Law_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  TypeName = 'type_name'
}

/** input type for updating data in table "law_types" */
export type Law_Types_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "law_types" */
export type Law_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Types_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "law_types" */
export enum Law_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  TypeName = 'type_name'
}

export type Law_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Types_Bool_Exp;
};

/** columns and relationships of "laws" */
export type Laws = {
  __typename?: 'laws';
  api_law_id: Scalars['String']['output'];
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  /** An array relationship */
  law_summaries: Array<Law_Summaries>;
  /** An aggregate relationship */
  law_summaries_aggregate: Law_Summaries_Aggregate;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  /** An array relationship */
  views: Array<Views>;
  /** An aggregate relationship */
  views_aggregate: Views_Aggregate;
};


/** columns and relationships of "laws" */
export type LawsArgumentsArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsArguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_SummariesArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Summaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsViewsArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsViews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};

/** aggregated selection of "laws" */
export type Laws_Aggregate = {
  __typename?: 'laws_aggregate';
  aggregate?: Maybe<Laws_Aggregate_Fields>;
  nodes: Array<Laws>;
};

/** aggregate fields of "laws" */
export type Laws_Aggregate_Fields = {
  __typename?: 'laws_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Laws_Max_Fields>;
  min?: Maybe<Laws_Min_Fields>;
};


/** aggregate fields of "laws" */
export type Laws_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "laws". All fields are combined with a logical 'AND'. */
export type Laws_Bool_Exp = {
  _and?: InputMaybe<Array<Laws_Bool_Exp>>;
  _not?: InputMaybe<Laws_Bool_Exp>;
  _or?: InputMaybe<Array<Laws_Bool_Exp>>;
  api_law_id?: InputMaybe<String_Comparison_Exp>;
  arguments?: InputMaybe<Arguments_Bool_Exp>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  law_summaries?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Bool_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  views?: InputMaybe<Views_Bool_Exp>;
  views_aggregate?: InputMaybe<Views_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "laws" */
export enum Laws_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawPkey = 'law_pkey'
}

/** input type for inserting data into table "laws" */
export type Laws_Insert_Input = {
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  arguments?: InputMaybe<Arguments_Arr_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  law_summaries?: InputMaybe<Law_Summaries_Arr_Rel_Insert_Input>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  views?: InputMaybe<Views_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Laws_Max_Fields = {
  __typename?: 'laws_max_fields';
  api_law_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Laws_Min_Fields = {
  __typename?: 'laws_min_fields';
  api_law_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "laws" */
export type Laws_Mutation_Response = {
  __typename?: 'laws_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Laws>;
};

/** input type for inserting object relation for remote table "laws" */
export type Laws_Obj_Rel_Insert_Input = {
  data: Laws_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};

/** on_conflict condition type for table "laws" */
export type Laws_On_Conflict = {
  constraint: Laws_Constraint;
  update_columns?: Array<Laws_Update_Column>;
  where?: InputMaybe<Laws_Bool_Exp>;
};

/** Ordering options when selecting data from "laws". */
export type Laws_Order_By = {
  api_law_id?: InputMaybe<Order_By>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  views_aggregate?: InputMaybe<Views_Aggregate_Order_By>;
};

/** primary key columns input for table: laws */
export type Laws_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "laws" */
export enum Laws_Select_Column {
  /** column name */
  ApiLawId = 'api_law_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "laws" */
export type Laws_Set_Input = {
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "laws" */
export type Laws_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laws_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laws_Stream_Cursor_Value_Input = {
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "laws" */
export enum Laws_Update_Column {
  /** column name */
  ApiLawId = 'api_law_id',
  /** column name */
  Id = 'id'
}

export type Laws_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laws_Set_Input>;
  /** filter the rows which have to be updated */
  where: Laws_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "argument_chats" */
  delete_argument_chats?: Maybe<Argument_Chats_Mutation_Response>;
  /** delete single row from the table: "argument_chats" */
  delete_argument_chats_by_pk?: Maybe<Argument_Chats>;
  /** delete data from the table: "argument_resource_managers" */
  delete_argument_resource_managers?: Maybe<Argument_Resource_Managers_Mutation_Response>;
  /** delete single row from the table: "argument_resource_managers" */
  delete_argument_resource_managers_by_pk?: Maybe<Argument_Resource_Managers>;
  /** delete data from the table: "argument_resources" */
  delete_argument_resources?: Maybe<Argument_Resources_Mutation_Response>;
  /** delete single row from the table: "argument_resources" */
  delete_argument_resources_by_pk?: Maybe<Argument_Resources>;
  /** delete data from the table: "arguments" */
  delete_arguments?: Maybe<Arguments_Mutation_Response>;
  /** delete single row from the table: "arguments" */
  delete_arguments_by_pk?: Maybe<Arguments>;
  /** delete data from the table: "cabinet_histories" */
  delete_cabinet_histories?: Maybe<Cabinet_Histories_Mutation_Response>;
  /** delete single row from the table: "cabinet_histories" */
  delete_cabinet_histories_by_pk?: Maybe<Cabinet_Histories>;
  /** delete data from the table: "cabinet_members" */
  delete_cabinet_members?: Maybe<Cabinet_Members_Mutation_Response>;
  /** delete single row from the table: "cabinet_members" */
  delete_cabinet_members_by_pk?: Maybe<Cabinet_Members>;
  /** delete data from the table: "comment_reactions" */
  delete_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** delete single row from the table: "comment_reactions" */
  delete_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "diet" */
  delete_diet?: Maybe<Diet_Mutation_Response>;
  /** delete single row from the table: "diet" */
  delete_diet_by_pk?: Maybe<Diet>;
  /** delete data from the table: "diet_members" */
  delete_diet_members?: Maybe<Diet_Members_Mutation_Response>;
  /** delete single row from the table: "diet_members" */
  delete_diet_members_by_pk?: Maybe<Diet_Members>;
  /** delete data from the table: "house_of_councilors_histories" */
  delete_house_of_councilors_histories?: Maybe<House_Of_Councilors_Histories_Mutation_Response>;
  /** delete single row from the table: "house_of_councilors_histories" */
  delete_house_of_councilors_histories_by_pk?: Maybe<House_Of_Councilors_Histories>;
  /** delete data from the table: "house_of_representatives_histories" */
  delete_house_of_representatives_histories?: Maybe<House_Of_Representatives_Histories_Mutation_Response>;
  /** delete single row from the table: "house_of_representatives_histories" */
  delete_house_of_representatives_histories_by_pk?: Maybe<House_Of_Representatives_Histories>;
  /** delete data from the table: "law_categories" */
  delete_law_categories?: Maybe<Law_Categories_Mutation_Response>;
  /** delete single row from the table: "law_categories" */
  delete_law_categories_by_pk?: Maybe<Law_Categories>;
  /** delete data from the table: "law_revision_columns" */
  delete_law_revision_columns?: Maybe<Law_Revision_Columns_Mutation_Response>;
  /** delete single row from the table: "law_revision_columns" */
  delete_law_revision_columns_by_pk?: Maybe<Law_Revision_Columns>;
  /** delete data from the table: "law_revisions" */
  delete_law_revisions?: Maybe<Law_Revisions_Mutation_Response>;
  /** delete single row from the table: "law_revisions" */
  delete_law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** delete data from the table: "law_statuses" */
  delete_law_statuses?: Maybe<Law_Statuses_Mutation_Response>;
  /** delete single row from the table: "law_statuses" */
  delete_law_statuses_by_pk?: Maybe<Law_Statuses>;
  /** delete data from the table: "law_summaries" */
  delete_law_summaries?: Maybe<Law_Summaries_Mutation_Response>;
  /** delete single row from the table: "law_summaries" */
  delete_law_summaries_by_pk?: Maybe<Law_Summaries>;
  /** delete data from the table: "law_types" */
  delete_law_types?: Maybe<Law_Types_Mutation_Response>;
  /** delete single row from the table: "law_types" */
  delete_law_types_by_pk?: Maybe<Law_Types>;
  /** delete data from the table: "laws" */
  delete_laws?: Maybe<Laws_Mutation_Response>;
  /** delete single row from the table: "laws" */
  delete_laws_by_pk?: Maybe<Laws>;
  /** delete data from the table: "official_gazette_columns" */
  delete_official_gazette_columns?: Maybe<Official_Gazette_Columns_Mutation_Response>;
  /** delete single row from the table: "official_gazette_columns" */
  delete_official_gazette_columns_by_pk?: Maybe<Official_Gazette_Columns>;
  /** delete data from the table: "official_gazettes" */
  delete_official_gazettes?: Maybe<Official_Gazettes_Mutation_Response>;
  /** delete single row from the table: "official_gazettes" */
  delete_official_gazettes_by_pk?: Maybe<Official_Gazettes>;
  /** delete data from the table: "parties" */
  delete_parties?: Maybe<Parties_Mutation_Response>;
  /** delete single row from the table: "parties" */
  delete_parties_by_pk?: Maybe<Parties>;
  /** delete data from the table: "prime_minister_histories" */
  delete_prime_minister_histories?: Maybe<Prime_Minister_Histories_Mutation_Response>;
  /** delete single row from the table: "prime_minister_histories" */
  delete_prime_minister_histories_by_pk?: Maybe<Prime_Minister_Histories>;
  /** delete data from the table: "reactions" */
  delete_reactions?: Maybe<Reactions_Mutation_Response>;
  /** delete single row from the table: "reactions" */
  delete_reactions_by_pk?: Maybe<Reactions>;
  /** delete data from the table: "resources" */
  delete_resources?: Maybe<Resources_Mutation_Response>;
  /** delete single row from the table: "resources" */
  delete_resources_by_pk?: Maybe<Resources>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "views" */
  delete_views?: Maybe<Views_Mutation_Response>;
  /** delete single row from the table: "views" */
  delete_views_by_pk?: Maybe<Views>;
  /** insert data into the table: "argument_chats" */
  insert_argument_chats?: Maybe<Argument_Chats_Mutation_Response>;
  /** insert a single row into the table: "argument_chats" */
  insert_argument_chats_one?: Maybe<Argument_Chats>;
  /** insert data into the table: "argument_resource_managers" */
  insert_argument_resource_managers?: Maybe<Argument_Resource_Managers_Mutation_Response>;
  /** insert a single row into the table: "argument_resource_managers" */
  insert_argument_resource_managers_one?: Maybe<Argument_Resource_Managers>;
  /** insert data into the table: "argument_resources" */
  insert_argument_resources?: Maybe<Argument_Resources_Mutation_Response>;
  /** insert a single row into the table: "argument_resources" */
  insert_argument_resources_one?: Maybe<Argument_Resources>;
  /** insert data into the table: "arguments" */
  insert_arguments?: Maybe<Arguments_Mutation_Response>;
  /** insert a single row into the table: "arguments" */
  insert_arguments_one?: Maybe<Arguments>;
  /** insert data into the table: "cabinet_histories" */
  insert_cabinet_histories?: Maybe<Cabinet_Histories_Mutation_Response>;
  /** insert a single row into the table: "cabinet_histories" */
  insert_cabinet_histories_one?: Maybe<Cabinet_Histories>;
  /** insert data into the table: "cabinet_members" */
  insert_cabinet_members?: Maybe<Cabinet_Members_Mutation_Response>;
  /** insert a single row into the table: "cabinet_members" */
  insert_cabinet_members_one?: Maybe<Cabinet_Members>;
  /** insert data into the table: "comment_reactions" */
  insert_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** insert a single row into the table: "comment_reactions" */
  insert_comment_reactions_one?: Maybe<Comment_Reactions>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "diet" */
  insert_diet?: Maybe<Diet_Mutation_Response>;
  /** insert data into the table: "diet_members" */
  insert_diet_members?: Maybe<Diet_Members_Mutation_Response>;
  /** insert a single row into the table: "diet_members" */
  insert_diet_members_one?: Maybe<Diet_Members>;
  /** insert a single row into the table: "diet" */
  insert_diet_one?: Maybe<Diet>;
  /** insert data into the table: "house_of_councilors_histories" */
  insert_house_of_councilors_histories?: Maybe<House_Of_Councilors_Histories_Mutation_Response>;
  /** insert a single row into the table: "house_of_councilors_histories" */
  insert_house_of_councilors_histories_one?: Maybe<House_Of_Councilors_Histories>;
  /** insert data into the table: "house_of_representatives_histories" */
  insert_house_of_representatives_histories?: Maybe<House_Of_Representatives_Histories_Mutation_Response>;
  /** insert a single row into the table: "house_of_representatives_histories" */
  insert_house_of_representatives_histories_one?: Maybe<House_Of_Representatives_Histories>;
  /** insert data into the table: "law_categories" */
  insert_law_categories?: Maybe<Law_Categories_Mutation_Response>;
  /** insert a single row into the table: "law_categories" */
  insert_law_categories_one?: Maybe<Law_Categories>;
  /** insert data into the table: "law_revision_columns" */
  insert_law_revision_columns?: Maybe<Law_Revision_Columns_Mutation_Response>;
  /** insert a single row into the table: "law_revision_columns" */
  insert_law_revision_columns_one?: Maybe<Law_Revision_Columns>;
  /** insert data into the table: "law_revisions" */
  insert_law_revisions?: Maybe<Law_Revisions_Mutation_Response>;
  /** insert a single row into the table: "law_revisions" */
  insert_law_revisions_one?: Maybe<Law_Revisions>;
  /** insert data into the table: "law_statuses" */
  insert_law_statuses?: Maybe<Law_Statuses_Mutation_Response>;
  /** insert a single row into the table: "law_statuses" */
  insert_law_statuses_one?: Maybe<Law_Statuses>;
  /** insert data into the table: "law_summaries" */
  insert_law_summaries?: Maybe<Law_Summaries_Mutation_Response>;
  /** insert a single row into the table: "law_summaries" */
  insert_law_summaries_one?: Maybe<Law_Summaries>;
  /** insert data into the table: "law_types" */
  insert_law_types?: Maybe<Law_Types_Mutation_Response>;
  /** insert a single row into the table: "law_types" */
  insert_law_types_one?: Maybe<Law_Types>;
  /** insert data into the table: "laws" */
  insert_laws?: Maybe<Laws_Mutation_Response>;
  /** insert a single row into the table: "laws" */
  insert_laws_one?: Maybe<Laws>;
  /** insert data into the table: "official_gazette_columns" */
  insert_official_gazette_columns?: Maybe<Official_Gazette_Columns_Mutation_Response>;
  /** insert a single row into the table: "official_gazette_columns" */
  insert_official_gazette_columns_one?: Maybe<Official_Gazette_Columns>;
  /** insert data into the table: "official_gazettes" */
  insert_official_gazettes?: Maybe<Official_Gazettes_Mutation_Response>;
  /** insert a single row into the table: "official_gazettes" */
  insert_official_gazettes_one?: Maybe<Official_Gazettes>;
  /** insert data into the table: "parties" */
  insert_parties?: Maybe<Parties_Mutation_Response>;
  /** insert a single row into the table: "parties" */
  insert_parties_one?: Maybe<Parties>;
  /** insert data into the table: "prime_minister_histories" */
  insert_prime_minister_histories?: Maybe<Prime_Minister_Histories_Mutation_Response>;
  /** insert a single row into the table: "prime_minister_histories" */
  insert_prime_minister_histories_one?: Maybe<Prime_Minister_Histories>;
  /** insert data into the table: "reactions" */
  insert_reactions?: Maybe<Reactions_Mutation_Response>;
  /** insert a single row into the table: "reactions" */
  insert_reactions_one?: Maybe<Reactions>;
  /** insert data into the table: "resources" */
  insert_resources?: Maybe<Resources_Mutation_Response>;
  /** insert a single row into the table: "resources" */
  insert_resources_one?: Maybe<Resources>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "views" */
  insert_views?: Maybe<Views_Mutation_Response>;
  /** insert a single row into the table: "views" */
  insert_views_one?: Maybe<Views>;
  /** update data of the table: "argument_chats" */
  update_argument_chats?: Maybe<Argument_Chats_Mutation_Response>;
  /** update single row of the table: "argument_chats" */
  update_argument_chats_by_pk?: Maybe<Argument_Chats>;
  /** update multiples rows of table: "argument_chats" */
  update_argument_chats_many?: Maybe<Array<Maybe<Argument_Chats_Mutation_Response>>>;
  /** update data of the table: "argument_resource_managers" */
  update_argument_resource_managers?: Maybe<Argument_Resource_Managers_Mutation_Response>;
  /** update single row of the table: "argument_resource_managers" */
  update_argument_resource_managers_by_pk?: Maybe<Argument_Resource_Managers>;
  /** update multiples rows of table: "argument_resource_managers" */
  update_argument_resource_managers_many?: Maybe<Array<Maybe<Argument_Resource_Managers_Mutation_Response>>>;
  /** update data of the table: "argument_resources" */
  update_argument_resources?: Maybe<Argument_Resources_Mutation_Response>;
  /** update single row of the table: "argument_resources" */
  update_argument_resources_by_pk?: Maybe<Argument_Resources>;
  /** update multiples rows of table: "argument_resources" */
  update_argument_resources_many?: Maybe<Array<Maybe<Argument_Resources_Mutation_Response>>>;
  /** update data of the table: "arguments" */
  update_arguments?: Maybe<Arguments_Mutation_Response>;
  /** update single row of the table: "arguments" */
  update_arguments_by_pk?: Maybe<Arguments>;
  /** update multiples rows of table: "arguments" */
  update_arguments_many?: Maybe<Array<Maybe<Arguments_Mutation_Response>>>;
  /** update data of the table: "cabinet_histories" */
  update_cabinet_histories?: Maybe<Cabinet_Histories_Mutation_Response>;
  /** update single row of the table: "cabinet_histories" */
  update_cabinet_histories_by_pk?: Maybe<Cabinet_Histories>;
  /** update multiples rows of table: "cabinet_histories" */
  update_cabinet_histories_many?: Maybe<Array<Maybe<Cabinet_Histories_Mutation_Response>>>;
  /** update data of the table: "cabinet_members" */
  update_cabinet_members?: Maybe<Cabinet_Members_Mutation_Response>;
  /** update single row of the table: "cabinet_members" */
  update_cabinet_members_by_pk?: Maybe<Cabinet_Members>;
  /** update multiples rows of table: "cabinet_members" */
  update_cabinet_members_many?: Maybe<Array<Maybe<Cabinet_Members_Mutation_Response>>>;
  /** update data of the table: "comment_reactions" */
  update_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** update single row of the table: "comment_reactions" */
  update_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** update multiples rows of table: "comment_reactions" */
  update_comment_reactions_many?: Maybe<Array<Maybe<Comment_Reactions_Mutation_Response>>>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "diet" */
  update_diet?: Maybe<Diet_Mutation_Response>;
  /** update single row of the table: "diet" */
  update_diet_by_pk?: Maybe<Diet>;
  /** update multiples rows of table: "diet" */
  update_diet_many?: Maybe<Array<Maybe<Diet_Mutation_Response>>>;
  /** update data of the table: "diet_members" */
  update_diet_members?: Maybe<Diet_Members_Mutation_Response>;
  /** update single row of the table: "diet_members" */
  update_diet_members_by_pk?: Maybe<Diet_Members>;
  /** update multiples rows of table: "diet_members" */
  update_diet_members_many?: Maybe<Array<Maybe<Diet_Members_Mutation_Response>>>;
  /** update data of the table: "house_of_councilors_histories" */
  update_house_of_councilors_histories?: Maybe<House_Of_Councilors_Histories_Mutation_Response>;
  /** update single row of the table: "house_of_councilors_histories" */
  update_house_of_councilors_histories_by_pk?: Maybe<House_Of_Councilors_Histories>;
  /** update multiples rows of table: "house_of_councilors_histories" */
  update_house_of_councilors_histories_many?: Maybe<Array<Maybe<House_Of_Councilors_Histories_Mutation_Response>>>;
  /** update data of the table: "house_of_representatives_histories" */
  update_house_of_representatives_histories?: Maybe<House_Of_Representatives_Histories_Mutation_Response>;
  /** update single row of the table: "house_of_representatives_histories" */
  update_house_of_representatives_histories_by_pk?: Maybe<House_Of_Representatives_Histories>;
  /** update multiples rows of table: "house_of_representatives_histories" */
  update_house_of_representatives_histories_many?: Maybe<Array<Maybe<House_Of_Representatives_Histories_Mutation_Response>>>;
  /** update data of the table: "law_categories" */
  update_law_categories?: Maybe<Law_Categories_Mutation_Response>;
  /** update single row of the table: "law_categories" */
  update_law_categories_by_pk?: Maybe<Law_Categories>;
  /** update multiples rows of table: "law_categories" */
  update_law_categories_many?: Maybe<Array<Maybe<Law_Categories_Mutation_Response>>>;
  /** update data of the table: "law_revision_columns" */
  update_law_revision_columns?: Maybe<Law_Revision_Columns_Mutation_Response>;
  /** update single row of the table: "law_revision_columns" */
  update_law_revision_columns_by_pk?: Maybe<Law_Revision_Columns>;
  /** update multiples rows of table: "law_revision_columns" */
  update_law_revision_columns_many?: Maybe<Array<Maybe<Law_Revision_Columns_Mutation_Response>>>;
  /** update data of the table: "law_revisions" */
  update_law_revisions?: Maybe<Law_Revisions_Mutation_Response>;
  /** update single row of the table: "law_revisions" */
  update_law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** update multiples rows of table: "law_revisions" */
  update_law_revisions_many?: Maybe<Array<Maybe<Law_Revisions_Mutation_Response>>>;
  /** update data of the table: "law_statuses" */
  update_law_statuses?: Maybe<Law_Statuses_Mutation_Response>;
  /** update single row of the table: "law_statuses" */
  update_law_statuses_by_pk?: Maybe<Law_Statuses>;
  /** update multiples rows of table: "law_statuses" */
  update_law_statuses_many?: Maybe<Array<Maybe<Law_Statuses_Mutation_Response>>>;
  /** update data of the table: "law_summaries" */
  update_law_summaries?: Maybe<Law_Summaries_Mutation_Response>;
  /** update single row of the table: "law_summaries" */
  update_law_summaries_by_pk?: Maybe<Law_Summaries>;
  /** update multiples rows of table: "law_summaries" */
  update_law_summaries_many?: Maybe<Array<Maybe<Law_Summaries_Mutation_Response>>>;
  /** update data of the table: "law_types" */
  update_law_types?: Maybe<Law_Types_Mutation_Response>;
  /** update single row of the table: "law_types" */
  update_law_types_by_pk?: Maybe<Law_Types>;
  /** update multiples rows of table: "law_types" */
  update_law_types_many?: Maybe<Array<Maybe<Law_Types_Mutation_Response>>>;
  /** update data of the table: "laws" */
  update_laws?: Maybe<Laws_Mutation_Response>;
  /** update single row of the table: "laws" */
  update_laws_by_pk?: Maybe<Laws>;
  /** update multiples rows of table: "laws" */
  update_laws_many?: Maybe<Array<Maybe<Laws_Mutation_Response>>>;
  /** update data of the table: "official_gazette_columns" */
  update_official_gazette_columns?: Maybe<Official_Gazette_Columns_Mutation_Response>;
  /** update single row of the table: "official_gazette_columns" */
  update_official_gazette_columns_by_pk?: Maybe<Official_Gazette_Columns>;
  /** update multiples rows of table: "official_gazette_columns" */
  update_official_gazette_columns_many?: Maybe<Array<Maybe<Official_Gazette_Columns_Mutation_Response>>>;
  /** update data of the table: "official_gazettes" */
  update_official_gazettes?: Maybe<Official_Gazettes_Mutation_Response>;
  /** update single row of the table: "official_gazettes" */
  update_official_gazettes_by_pk?: Maybe<Official_Gazettes>;
  /** update multiples rows of table: "official_gazettes" */
  update_official_gazettes_many?: Maybe<Array<Maybe<Official_Gazettes_Mutation_Response>>>;
  /** update data of the table: "parties" */
  update_parties?: Maybe<Parties_Mutation_Response>;
  /** update single row of the table: "parties" */
  update_parties_by_pk?: Maybe<Parties>;
  /** update multiples rows of table: "parties" */
  update_parties_many?: Maybe<Array<Maybe<Parties_Mutation_Response>>>;
  /** update data of the table: "prime_minister_histories" */
  update_prime_minister_histories?: Maybe<Prime_Minister_Histories_Mutation_Response>;
  /** update single row of the table: "prime_minister_histories" */
  update_prime_minister_histories_by_pk?: Maybe<Prime_Minister_Histories>;
  /** update multiples rows of table: "prime_minister_histories" */
  update_prime_minister_histories_many?: Maybe<Array<Maybe<Prime_Minister_Histories_Mutation_Response>>>;
  /** update data of the table: "reactions" */
  update_reactions?: Maybe<Reactions_Mutation_Response>;
  /** update single row of the table: "reactions" */
  update_reactions_by_pk?: Maybe<Reactions>;
  /** update multiples rows of table: "reactions" */
  update_reactions_many?: Maybe<Array<Maybe<Reactions_Mutation_Response>>>;
  /** update data of the table: "resources" */
  update_resources?: Maybe<Resources_Mutation_Response>;
  /** update single row of the table: "resources" */
  update_resources_by_pk?: Maybe<Resources>;
  /** update multiples rows of table: "resources" */
  update_resources_many?: Maybe<Array<Maybe<Resources_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "views" */
  update_views?: Maybe<Views_Mutation_Response>;
  /** update single row of the table: "views" */
  update_views_by_pk?: Maybe<Views>;
  /** update multiples rows of table: "views" */
  update_views_many?: Maybe<Array<Maybe<Views_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Argument_ChatsArgs = {
  where: Argument_Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Argument_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Argument_Resource_ManagersArgs = {
  where: Argument_Resource_Managers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Argument_Resource_Managers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Argument_ResourcesArgs = {
  where: Argument_Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Argument_Resources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ArgumentsArgs = {
  where: Arguments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Arguments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Cabinet_HistoriesArgs = {
  where: Cabinet_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cabinet_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Cabinet_MembersArgs = {
  where: Cabinet_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cabinet_Members_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Comment_ReactionsArgs = {
  where: Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_Reactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DietArgs = {
  where: Diet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Diet_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Diet_MembersArgs = {
  where: Diet_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Diet_Members_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_House_Of_Councilors_HistoriesArgs = {
  where: House_Of_Councilors_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_House_Of_Councilors_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_House_Of_Representatives_HistoriesArgs = {
  where: House_Of_Representatives_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_House_Of_Representatives_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_CategoriesArgs = {
  where: Law_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_Revision_ColumnsArgs = {
  where: Law_Revision_Columns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Revision_Columns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_RevisionsArgs = {
  where: Law_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Revisions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_StatusesArgs = {
  where: Law_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Statuses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_SummariesArgs = {
  where: Law_Summaries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Summaries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_TypesArgs = {
  where: Law_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Types_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LawsArgs = {
  where: Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laws_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Official_Gazette_ColumnsArgs = {
  where: Official_Gazette_Columns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Official_Gazette_Columns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Official_GazettesArgs = {
  where: Official_Gazettes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Official_Gazettes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PartiesArgs = {
  where: Parties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parties_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Prime_Minister_HistoriesArgs = {
  where: Prime_Minister_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prime_Minister_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ReactionsArgs = {
  where: Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ResourcesArgs = {
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ViewsArgs = {
  where: Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Views_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Argument_ChatsArgs = {
  objects: Array<Argument_Chats_Insert_Input>;
  on_conflict?: InputMaybe<Argument_Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_Chats_OneArgs = {
  object: Argument_Chats_Insert_Input;
  on_conflict?: InputMaybe<Argument_Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_Resource_ManagersArgs = {
  objects: Array<Argument_Resource_Managers_Insert_Input>;
  on_conflict?: InputMaybe<Argument_Resource_Managers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_Resource_Managers_OneArgs = {
  object: Argument_Resource_Managers_Insert_Input;
  on_conflict?: InputMaybe<Argument_Resource_Managers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_ResourcesArgs = {
  objects: Array<Argument_Resources_Insert_Input>;
  on_conflict?: InputMaybe<Argument_Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_Resources_OneArgs = {
  object: Argument_Resources_Insert_Input;
  on_conflict?: InputMaybe<Argument_Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ArgumentsArgs = {
  objects: Array<Arguments_Insert_Input>;
  on_conflict?: InputMaybe<Arguments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Arguments_OneArgs = {
  object: Arguments_Insert_Input;
  on_conflict?: InputMaybe<Arguments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cabinet_HistoriesArgs = {
  objects: Array<Cabinet_Histories_Insert_Input>;
  on_conflict?: InputMaybe<Cabinet_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cabinet_Histories_OneArgs = {
  object: Cabinet_Histories_Insert_Input;
  on_conflict?: InputMaybe<Cabinet_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cabinet_MembersArgs = {
  objects: Array<Cabinet_Members_Insert_Input>;
  on_conflict?: InputMaybe<Cabinet_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cabinet_Members_OneArgs = {
  object: Cabinet_Members_Insert_Input;
  on_conflict?: InputMaybe<Cabinet_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_ReactionsArgs = {
  objects: Array<Comment_Reactions_Insert_Input>;
  on_conflict?: InputMaybe<Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_Reactions_OneArgs = {
  object: Comment_Reactions_Insert_Input;
  on_conflict?: InputMaybe<Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DietArgs = {
  objects: Array<Diet_Insert_Input>;
  on_conflict?: InputMaybe<Diet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Diet_MembersArgs = {
  objects: Array<Diet_Members_Insert_Input>;
  on_conflict?: InputMaybe<Diet_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Diet_Members_OneArgs = {
  object: Diet_Members_Insert_Input;
  on_conflict?: InputMaybe<Diet_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Diet_OneArgs = {
  object: Diet_Insert_Input;
  on_conflict?: InputMaybe<Diet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_House_Of_Councilors_HistoriesArgs = {
  objects: Array<House_Of_Councilors_Histories_Insert_Input>;
  on_conflict?: InputMaybe<House_Of_Councilors_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_House_Of_Councilors_Histories_OneArgs = {
  object: House_Of_Councilors_Histories_Insert_Input;
  on_conflict?: InputMaybe<House_Of_Councilors_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_House_Of_Representatives_HistoriesArgs = {
  objects: Array<House_Of_Representatives_Histories_Insert_Input>;
  on_conflict?: InputMaybe<House_Of_Representatives_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_House_Of_Representatives_Histories_OneArgs = {
  object: House_Of_Representatives_Histories_Insert_Input;
  on_conflict?: InputMaybe<House_Of_Representatives_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_CategoriesArgs = {
  objects: Array<Law_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Law_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Categories_OneArgs = {
  object: Law_Categories_Insert_Input;
  on_conflict?: InputMaybe<Law_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Revision_ColumnsArgs = {
  objects: Array<Law_Revision_Columns_Insert_Input>;
  on_conflict?: InputMaybe<Law_Revision_Columns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Revision_Columns_OneArgs = {
  object: Law_Revision_Columns_Insert_Input;
  on_conflict?: InputMaybe<Law_Revision_Columns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_RevisionsArgs = {
  objects: Array<Law_Revisions_Insert_Input>;
  on_conflict?: InputMaybe<Law_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Revisions_OneArgs = {
  object: Law_Revisions_Insert_Input;
  on_conflict?: InputMaybe<Law_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_StatusesArgs = {
  objects: Array<Law_Statuses_Insert_Input>;
  on_conflict?: InputMaybe<Law_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Statuses_OneArgs = {
  object: Law_Statuses_Insert_Input;
  on_conflict?: InputMaybe<Law_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_SummariesArgs = {
  objects: Array<Law_Summaries_Insert_Input>;
  on_conflict?: InputMaybe<Law_Summaries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Summaries_OneArgs = {
  object: Law_Summaries_Insert_Input;
  on_conflict?: InputMaybe<Law_Summaries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_TypesArgs = {
  objects: Array<Law_Types_Insert_Input>;
  on_conflict?: InputMaybe<Law_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Types_OneArgs = {
  object: Law_Types_Insert_Input;
  on_conflict?: InputMaybe<Law_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LawsArgs = {
  objects: Array<Laws_Insert_Input>;
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laws_OneArgs = {
  object: Laws_Insert_Input;
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Official_Gazette_ColumnsArgs = {
  objects: Array<Official_Gazette_Columns_Insert_Input>;
  on_conflict?: InputMaybe<Official_Gazette_Columns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Official_Gazette_Columns_OneArgs = {
  object: Official_Gazette_Columns_Insert_Input;
  on_conflict?: InputMaybe<Official_Gazette_Columns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Official_GazettesArgs = {
  objects: Array<Official_Gazettes_Insert_Input>;
  on_conflict?: InputMaybe<Official_Gazettes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Official_Gazettes_OneArgs = {
  object: Official_Gazettes_Insert_Input;
  on_conflict?: InputMaybe<Official_Gazettes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PartiesArgs = {
  objects: Array<Parties_Insert_Input>;
  on_conflict?: InputMaybe<Parties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parties_OneArgs = {
  object: Parties_Insert_Input;
  on_conflict?: InputMaybe<Parties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prime_Minister_HistoriesArgs = {
  objects: Array<Prime_Minister_Histories_Insert_Input>;
  on_conflict?: InputMaybe<Prime_Minister_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prime_Minister_Histories_OneArgs = {
  object: Prime_Minister_Histories_Insert_Input;
  on_conflict?: InputMaybe<Prime_Minister_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReactionsArgs = {
  objects: Array<Reactions_Insert_Input>;
  on_conflict?: InputMaybe<Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reactions_OneArgs = {
  object: Reactions_Insert_Input;
  on_conflict?: InputMaybe<Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResourcesArgs = {
  objects: Array<Resources_Insert_Input>;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resources_OneArgs = {
  object: Resources_Insert_Input;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ViewsArgs = {
  objects: Array<Views_Insert_Input>;
  on_conflict?: InputMaybe<Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Views_OneArgs = {
  object: Views_Insert_Input;
  on_conflict?: InputMaybe<Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_ChatsArgs = {
  _set?: InputMaybe<Argument_Chats_Set_Input>;
  where: Argument_Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Chats_By_PkArgs = {
  _set?: InputMaybe<Argument_Chats_Set_Input>;
  pk_columns: Argument_Chats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Chats_ManyArgs = {
  updates: Array<Argument_Chats_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Resource_ManagersArgs = {
  _set?: InputMaybe<Argument_Resource_Managers_Set_Input>;
  where: Argument_Resource_Managers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Resource_Managers_By_PkArgs = {
  _set?: InputMaybe<Argument_Resource_Managers_Set_Input>;
  pk_columns: Argument_Resource_Managers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Resource_Managers_ManyArgs = {
  updates: Array<Argument_Resource_Managers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_ResourcesArgs = {
  _set?: InputMaybe<Argument_Resources_Set_Input>;
  where: Argument_Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Resources_By_PkArgs = {
  _set?: InputMaybe<Argument_Resources_Set_Input>;
  pk_columns: Argument_Resources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Resources_ManyArgs = {
  updates: Array<Argument_Resources_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ArgumentsArgs = {
  _set?: InputMaybe<Arguments_Set_Input>;
  where: Arguments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Arguments_By_PkArgs = {
  _set?: InputMaybe<Arguments_Set_Input>;
  pk_columns: Arguments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Arguments_ManyArgs = {
  updates: Array<Arguments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cabinet_HistoriesArgs = {
  _set?: InputMaybe<Cabinet_Histories_Set_Input>;
  where: Cabinet_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cabinet_Histories_By_PkArgs = {
  _set?: InputMaybe<Cabinet_Histories_Set_Input>;
  pk_columns: Cabinet_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cabinet_Histories_ManyArgs = {
  updates: Array<Cabinet_Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cabinet_MembersArgs = {
  _set?: InputMaybe<Cabinet_Members_Set_Input>;
  where: Cabinet_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cabinet_Members_By_PkArgs = {
  _set?: InputMaybe<Cabinet_Members_Set_Input>;
  pk_columns: Cabinet_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cabinet_Members_ManyArgs = {
  updates: Array<Cabinet_Members_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_ReactionsArgs = {
  _set?: InputMaybe<Comment_Reactions_Set_Input>;
  where: Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Reactions_By_PkArgs = {
  _set?: InputMaybe<Comment_Reactions_Set_Input>;
  pk_columns: Comment_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Reactions_ManyArgs = {
  updates: Array<Comment_Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DietArgs = {
  _set?: InputMaybe<Diet_Set_Input>;
  where: Diet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Diet_By_PkArgs = {
  _set?: InputMaybe<Diet_Set_Input>;
  pk_columns: Diet_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Diet_ManyArgs = {
  updates: Array<Diet_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Diet_MembersArgs = {
  _set?: InputMaybe<Diet_Members_Set_Input>;
  where: Diet_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Diet_Members_By_PkArgs = {
  _set?: InputMaybe<Diet_Members_Set_Input>;
  pk_columns: Diet_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Diet_Members_ManyArgs = {
  updates: Array<Diet_Members_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_House_Of_Councilors_HistoriesArgs = {
  _set?: InputMaybe<House_Of_Councilors_Histories_Set_Input>;
  where: House_Of_Councilors_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_House_Of_Councilors_Histories_By_PkArgs = {
  _set?: InputMaybe<House_Of_Councilors_Histories_Set_Input>;
  pk_columns: House_Of_Councilors_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_House_Of_Councilors_Histories_ManyArgs = {
  updates: Array<House_Of_Councilors_Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_House_Of_Representatives_HistoriesArgs = {
  _set?: InputMaybe<House_Of_Representatives_Histories_Set_Input>;
  where: House_Of_Representatives_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_House_Of_Representatives_Histories_By_PkArgs = {
  _set?: InputMaybe<House_Of_Representatives_Histories_Set_Input>;
  pk_columns: House_Of_Representatives_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_House_Of_Representatives_Histories_ManyArgs = {
  updates: Array<House_Of_Representatives_Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_CategoriesArgs = {
  _set?: InputMaybe<Law_Categories_Set_Input>;
  where: Law_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Categories_By_PkArgs = {
  _set?: InputMaybe<Law_Categories_Set_Input>;
  pk_columns: Law_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Categories_ManyArgs = {
  updates: Array<Law_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Revision_ColumnsArgs = {
  _set?: InputMaybe<Law_Revision_Columns_Set_Input>;
  where: Law_Revision_Columns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Revision_Columns_By_PkArgs = {
  _set?: InputMaybe<Law_Revision_Columns_Set_Input>;
  pk_columns: Law_Revision_Columns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Revision_Columns_ManyArgs = {
  updates: Array<Law_Revision_Columns_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_RevisionsArgs = {
  _append?: InputMaybe<Law_Revisions_Append_Input>;
  _delete_at_path?: InputMaybe<Law_Revisions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Law_Revisions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Law_Revisions_Delete_Key_Input>;
  _prepend?: InputMaybe<Law_Revisions_Prepend_Input>;
  _set?: InputMaybe<Law_Revisions_Set_Input>;
  where: Law_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Revisions_By_PkArgs = {
  _append?: InputMaybe<Law_Revisions_Append_Input>;
  _delete_at_path?: InputMaybe<Law_Revisions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Law_Revisions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Law_Revisions_Delete_Key_Input>;
  _prepend?: InputMaybe<Law_Revisions_Prepend_Input>;
  _set?: InputMaybe<Law_Revisions_Set_Input>;
  pk_columns: Law_Revisions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Revisions_ManyArgs = {
  updates: Array<Law_Revisions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_StatusesArgs = {
  _set?: InputMaybe<Law_Statuses_Set_Input>;
  where: Law_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Statuses_By_PkArgs = {
  _set?: InputMaybe<Law_Statuses_Set_Input>;
  pk_columns: Law_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Statuses_ManyArgs = {
  updates: Array<Law_Statuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_SummariesArgs = {
  _set?: InputMaybe<Law_Summaries_Set_Input>;
  where: Law_Summaries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Summaries_By_PkArgs = {
  _set?: InputMaybe<Law_Summaries_Set_Input>;
  pk_columns: Law_Summaries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Summaries_ManyArgs = {
  updates: Array<Law_Summaries_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_TypesArgs = {
  _set?: InputMaybe<Law_Types_Set_Input>;
  where: Law_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Types_By_PkArgs = {
  _set?: InputMaybe<Law_Types_Set_Input>;
  pk_columns: Law_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Types_ManyArgs = {
  updates: Array<Law_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LawsArgs = {
  _set?: InputMaybe<Laws_Set_Input>;
  where: Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laws_By_PkArgs = {
  _set?: InputMaybe<Laws_Set_Input>;
  pk_columns: Laws_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laws_ManyArgs = {
  updates: Array<Laws_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Official_Gazette_ColumnsArgs = {
  _set?: InputMaybe<Official_Gazette_Columns_Set_Input>;
  where: Official_Gazette_Columns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Official_Gazette_Columns_By_PkArgs = {
  _set?: InputMaybe<Official_Gazette_Columns_Set_Input>;
  pk_columns: Official_Gazette_Columns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Official_Gazette_Columns_ManyArgs = {
  updates: Array<Official_Gazette_Columns_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Official_GazettesArgs = {
  _set?: InputMaybe<Official_Gazettes_Set_Input>;
  where: Official_Gazettes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Official_Gazettes_By_PkArgs = {
  _set?: InputMaybe<Official_Gazettes_Set_Input>;
  pk_columns: Official_Gazettes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Official_Gazettes_ManyArgs = {
  updates: Array<Official_Gazettes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PartiesArgs = {
  _set?: InputMaybe<Parties_Set_Input>;
  where: Parties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parties_By_PkArgs = {
  _set?: InputMaybe<Parties_Set_Input>;
  pk_columns: Parties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parties_ManyArgs = {
  updates: Array<Parties_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Prime_Minister_HistoriesArgs = {
  _set?: InputMaybe<Prime_Minister_Histories_Set_Input>;
  where: Prime_Minister_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prime_Minister_Histories_By_PkArgs = {
  _set?: InputMaybe<Prime_Minister_Histories_Set_Input>;
  pk_columns: Prime_Minister_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Prime_Minister_Histories_ManyArgs = {
  updates: Array<Prime_Minister_Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReactionsArgs = {
  _set?: InputMaybe<Reactions_Set_Input>;
  where: Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reactions_By_PkArgs = {
  _set?: InputMaybe<Reactions_Set_Input>;
  pk_columns: Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reactions_ManyArgs = {
  updates: Array<Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResourcesArgs = {
  _set?: InputMaybe<Resources_Set_Input>;
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_By_PkArgs = {
  _set?: InputMaybe<Resources_Set_Input>;
  pk_columns: Resources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_ManyArgs = {
  updates: Array<Resources_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ViewsArgs = {
  _set?: InputMaybe<Views_Set_Input>;
  where: Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Views_By_PkArgs = {
  _set?: InputMaybe<Views_Set_Input>;
  pk_columns: Views_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Views_ManyArgs = {
  updates: Array<Views_Updates>;
};

/** columns and relationships of "official_gazette_columns" */
export type Official_Gazette_Columns = {
  __typename?: 'official_gazette_columns';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  official_gazette: Official_Gazettes;
  official_gazette_id: Scalars['uuid']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
};


/** columns and relationships of "official_gazette_columns" */
export type Official_Gazette_ColumnsReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "official_gazette_columns" */
export type Official_Gazette_ColumnsReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "official_gazette_columns" */
export type Official_Gazette_Columns_Aggregate = {
  __typename?: 'official_gazette_columns_aggregate';
  aggregate?: Maybe<Official_Gazette_Columns_Aggregate_Fields>;
  nodes: Array<Official_Gazette_Columns>;
};

export type Official_Gazette_Columns_Aggregate_Bool_Exp = {
  count?: InputMaybe<Official_Gazette_Columns_Aggregate_Bool_Exp_Count>;
};

export type Official_Gazette_Columns_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "official_gazette_columns" */
export type Official_Gazette_Columns_Aggregate_Fields = {
  __typename?: 'official_gazette_columns_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Official_Gazette_Columns_Max_Fields>;
  min?: Maybe<Official_Gazette_Columns_Min_Fields>;
};


/** aggregate fields of "official_gazette_columns" */
export type Official_Gazette_Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "official_gazette_columns" */
export type Official_Gazette_Columns_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Official_Gazette_Columns_Max_Order_By>;
  min?: InputMaybe<Official_Gazette_Columns_Min_Order_By>;
};

/** input type for inserting array relation for remote table "official_gazette_columns" */
export type Official_Gazette_Columns_Arr_Rel_Insert_Input = {
  data: Array<Official_Gazette_Columns_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Official_Gazette_Columns_On_Conflict>;
};

/** Boolean expression to filter rows from the table "official_gazette_columns". All fields are combined with a logical 'AND'. */
export type Official_Gazette_Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Official_Gazette_Columns_Bool_Exp>>;
  _not?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Official_Gazette_Columns_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  official_gazette?: InputMaybe<Official_Gazettes_Bool_Exp>;
  official_gazette_id?: InputMaybe<Uuid_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "official_gazette_columns" */
export enum Official_Gazette_Columns_Constraint {
  /** unique or primary key constraint on columns "id" */
  OfficialGazettaColumnPkey = 'official_gazetta_column_pkey'
}

/** input type for inserting data into table "official_gazette_columns" */
export type Official_Gazette_Columns_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette?: InputMaybe<Official_Gazettes_Obj_Rel_Insert_Input>;
  official_gazette_id?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Official_Gazette_Columns_Max_Fields = {
  __typename?: 'official_gazette_columns_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  official_gazette_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "official_gazette_columns" */
export type Official_Gazette_Columns_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  official_gazette_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Official_Gazette_Columns_Min_Fields = {
  __typename?: 'official_gazette_columns_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  official_gazette_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "official_gazette_columns" */
export type Official_Gazette_Columns_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  official_gazette_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "official_gazette_columns" */
export type Official_Gazette_Columns_Mutation_Response = {
  __typename?: 'official_gazette_columns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Official_Gazette_Columns>;
};

/** input type for inserting object relation for remote table "official_gazette_columns" */
export type Official_Gazette_Columns_Obj_Rel_Insert_Input = {
  data: Official_Gazette_Columns_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Official_Gazette_Columns_On_Conflict>;
};

/** on_conflict condition type for table "official_gazette_columns" */
export type Official_Gazette_Columns_On_Conflict = {
  constraint: Official_Gazette_Columns_Constraint;
  update_columns?: Array<Official_Gazette_Columns_Update_Column>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};

/** Ordering options when selecting data from "official_gazette_columns". */
export type Official_Gazette_Columns_Order_By = {
  id?: InputMaybe<Order_By>;
  official_gazette?: InputMaybe<Official_Gazettes_Order_By>;
  official_gazette_id?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: official_gazette_columns */
export type Official_Gazette_Columns_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "official_gazette_columns" */
export enum Official_Gazette_Columns_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OfficialGazetteId = 'official_gazette_id'
}

/** input type for updating data in table "official_gazette_columns" */
export type Official_Gazette_Columns_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "official_gazette_columns" */
export type Official_Gazette_Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Official_Gazette_Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Official_Gazette_Columns_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "official_gazette_columns" */
export enum Official_Gazette_Columns_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OfficialGazetteId = 'official_gazette_id'
}

export type Official_Gazette_Columns_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Official_Gazette_Columns_Set_Input>;
  /** filter the rows which have to be updated */
  where: Official_Gazette_Columns_Bool_Exp;
};

/** columns and relationships of "official_gazettes" */
export type Official_Gazettes = {
  __typename?: 'official_gazettes';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  official_gazette_columns: Array<Official_Gazette_Columns>;
  /** An aggregate relationship */
  official_gazette_columns_aggregate: Official_Gazette_Columns_Aggregate;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
};


/** columns and relationships of "official_gazettes" */
export type Official_GazettesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "official_gazettes" */
export type Official_GazettesComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "official_gazettes" */
export type Official_GazettesOfficial_Gazette_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazette_Columns_Order_By>>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};


/** columns and relationships of "official_gazettes" */
export type Official_GazettesOfficial_Gazette_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazette_Columns_Order_By>>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};


/** columns and relationships of "official_gazettes" */
export type Official_GazettesReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "official_gazettes" */
export type Official_GazettesReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "official_gazettes" */
export type Official_Gazettes_Aggregate = {
  __typename?: 'official_gazettes_aggregate';
  aggregate?: Maybe<Official_Gazettes_Aggregate_Fields>;
  nodes: Array<Official_Gazettes>;
};

/** aggregate fields of "official_gazettes" */
export type Official_Gazettes_Aggregate_Fields = {
  __typename?: 'official_gazettes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Official_Gazettes_Max_Fields>;
  min?: Maybe<Official_Gazettes_Min_Fields>;
};


/** aggregate fields of "official_gazettes" */
export type Official_Gazettes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Official_Gazettes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "official_gazettes". All fields are combined with a logical 'AND'. */
export type Official_Gazettes_Bool_Exp = {
  _and?: InputMaybe<Array<Official_Gazettes_Bool_Exp>>;
  _not?: InputMaybe<Official_Gazettes_Bool_Exp>;
  _or?: InputMaybe<Array<Official_Gazettes_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  official_gazette_columns?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
  official_gazette_columns_aggregate?: InputMaybe<Official_Gazette_Columns_Aggregate_Bool_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "official_gazettes" */
export enum Official_Gazettes_Constraint {
  /** unique or primary key constraint on columns "id" */
  OfficialGazettePkey = 'official_gazette_pkey'
}

/** input type for inserting data into table "official_gazettes" */
export type Official_Gazettes_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette_columns?: InputMaybe<Official_Gazette_Columns_Arr_Rel_Insert_Input>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Official_Gazettes_Max_Fields = {
  __typename?: 'official_gazettes_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Official_Gazettes_Min_Fields = {
  __typename?: 'official_gazettes_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "official_gazettes" */
export type Official_Gazettes_Mutation_Response = {
  __typename?: 'official_gazettes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Official_Gazettes>;
};

/** input type for inserting object relation for remote table "official_gazettes" */
export type Official_Gazettes_Obj_Rel_Insert_Input = {
  data: Official_Gazettes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Official_Gazettes_On_Conflict>;
};

/** on_conflict condition type for table "official_gazettes" */
export type Official_Gazettes_On_Conflict = {
  constraint: Official_Gazettes_Constraint;
  update_columns?: Array<Official_Gazettes_Update_Column>;
  where?: InputMaybe<Official_Gazettes_Bool_Exp>;
};

/** Ordering options when selecting data from "official_gazettes". */
export type Official_Gazettes_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  official_gazette_columns_aggregate?: InputMaybe<Official_Gazette_Columns_Aggregate_Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: official_gazettes */
export type Official_Gazettes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "official_gazettes" */
export enum Official_Gazettes_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "official_gazettes" */
export type Official_Gazettes_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "official_gazettes" */
export type Official_Gazettes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Official_Gazettes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Official_Gazettes_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "official_gazettes" */
export enum Official_Gazettes_Update_Column {
  /** column name */
  Id = 'id'
}

export type Official_Gazettes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Official_Gazettes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Official_Gazettes_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "parties" */
export type Parties = {
  __typename?: 'parties';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** An object relationship */
  dietMemberByDietMember?: Maybe<Diet_Members>;
  diet_member?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  name_en?: Maybe<Scalars['String']['output']>;
  name_kana?: Maybe<Scalars['String']['output']>;
  party_name: Scalars['String']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
};


/** columns and relationships of "parties" */
export type PartiesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "parties" */
export type PartiesComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "parties" */
export type PartiesReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "parties" */
export type PartiesReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "parties" */
export type Parties_Aggregate = {
  __typename?: 'parties_aggregate';
  aggregate?: Maybe<Parties_Aggregate_Fields>;
  nodes: Array<Parties>;
};

export type Parties_Aggregate_Bool_Exp = {
  count?: InputMaybe<Parties_Aggregate_Bool_Exp_Count>;
};

export type Parties_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Parties_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Parties_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "parties" */
export type Parties_Aggregate_Fields = {
  __typename?: 'parties_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Parties_Max_Fields>;
  min?: Maybe<Parties_Min_Fields>;
};


/** aggregate fields of "parties" */
export type Parties_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Parties_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "parties" */
export type Parties_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Parties_Max_Order_By>;
  min?: InputMaybe<Parties_Min_Order_By>;
};

/** input type for inserting array relation for remote table "parties" */
export type Parties_Arr_Rel_Insert_Input = {
  data: Array<Parties_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Parties_On_Conflict>;
};

/** Boolean expression to filter rows from the table "parties". All fields are combined with a logical 'AND'. */
export type Parties_Bool_Exp = {
  _and?: InputMaybe<Array<Parties_Bool_Exp>>;
  _not?: InputMaybe<Parties_Bool_Exp>;
  _or?: InputMaybe<Array<Parties_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  dietMemberByDietMember?: InputMaybe<Diet_Members_Bool_Exp>;
  diet_member?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_kana?: InputMaybe<String_Comparison_Exp>;
  party_name?: InputMaybe<String_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "parties" */
export enum Parties_Constraint {
  /** unique or primary key constraint on columns "id" */
  PartyPkey = 'party_pkey'
}

/** input type for inserting data into table "parties" */
export type Parties_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  dietMemberByDietMember?: InputMaybe<Diet_Members_Obj_Rel_Insert_Input>;
  diet_member?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  party_name?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Parties_Max_Fields = {
  __typename?: 'parties_max_fields';
  diet_member?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  name_kana?: Maybe<Scalars['String']['output']>;
  party_name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "parties" */
export type Parties_Max_Order_By = {
  diet_member?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_kana?: InputMaybe<Order_By>;
  party_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Parties_Min_Fields = {
  __typename?: 'parties_min_fields';
  diet_member?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  name_kana?: Maybe<Scalars['String']['output']>;
  party_name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "parties" */
export type Parties_Min_Order_By = {
  diet_member?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_kana?: InputMaybe<Order_By>;
  party_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "parties" */
export type Parties_Mutation_Response = {
  __typename?: 'parties_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Parties>;
};

/** input type for inserting object relation for remote table "parties" */
export type Parties_Obj_Rel_Insert_Input = {
  data: Parties_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Parties_On_Conflict>;
};

/** on_conflict condition type for table "parties" */
export type Parties_On_Conflict = {
  constraint: Parties_Constraint;
  update_columns?: Array<Parties_Update_Column>;
  where?: InputMaybe<Parties_Bool_Exp>;
};

/** Ordering options when selecting data from "parties". */
export type Parties_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  dietMemberByDietMember?: InputMaybe<Diet_Members_Order_By>;
  diet_member?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_kana?: InputMaybe<Order_By>;
  party_name?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: parties */
export type Parties_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "parties" */
export enum Parties_Select_Column {
  /** column name */
  DietMember = 'diet_member',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameKana = 'name_kana',
  /** column name */
  PartyName = 'party_name'
}

/** input type for updating data in table "parties" */
export type Parties_Set_Input = {
  diet_member?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  party_name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "parties" */
export type Parties_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Parties_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Parties_Stream_Cursor_Value_Input = {
  diet_member?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  party_name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "parties" */
export enum Parties_Update_Column {
  /** column name */
  DietMember = 'diet_member',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameKana = 'name_kana',
  /** column name */
  PartyName = 'party_name'
}

export type Parties_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Parties_Set_Input>;
  /** filter the rows which have to be updated */
  where: Parties_Bool_Exp;
};

/** columns and relationships of "prime_minister_histories" */
export type Prime_Minister_Histories = {
  __typename?: 'prime_minister_histories';
  /** An array relationship */
  cabinet_histories: Array<Cabinet_Histories>;
  /** An aggregate relationship */
  cabinet_histories_aggregate: Cabinet_Histories_Aggregate;
  first_name: Scalars['String']['output'];
  first_name_kana: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  last_name: Scalars['String']['output'];
  last_name_kana: Scalars['String']['output'];
};


/** columns and relationships of "prime_minister_histories" */
export type Prime_Minister_HistoriesCabinet_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Histories_Order_By>>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};


/** columns and relationships of "prime_minister_histories" */
export type Prime_Minister_HistoriesCabinet_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Histories_Order_By>>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};

/** aggregated selection of "prime_minister_histories" */
export type Prime_Minister_Histories_Aggregate = {
  __typename?: 'prime_minister_histories_aggregate';
  aggregate?: Maybe<Prime_Minister_Histories_Aggregate_Fields>;
  nodes: Array<Prime_Minister_Histories>;
};

/** aggregate fields of "prime_minister_histories" */
export type Prime_Minister_Histories_Aggregate_Fields = {
  __typename?: 'prime_minister_histories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Prime_Minister_Histories_Max_Fields>;
  min?: Maybe<Prime_Minister_Histories_Min_Fields>;
};


/** aggregate fields of "prime_minister_histories" */
export type Prime_Minister_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prime_Minister_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "prime_minister_histories". All fields are combined with a logical 'AND'. */
export type Prime_Minister_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Prime_Minister_Histories_Bool_Exp>>;
  _not?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Prime_Minister_Histories_Bool_Exp>>;
  cabinet_histories?: InputMaybe<Cabinet_Histories_Bool_Exp>;
  cabinet_histories_aggregate?: InputMaybe<Cabinet_Histories_Aggregate_Bool_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  first_name_kana?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_name_kana?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "prime_minister_histories" */
export enum Prime_Minister_Histories_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrimeMinistersPkey = 'prime_ministers_pkey'
}

/** input type for inserting data into table "prime_minister_histories" */
export type Prime_Minister_Histories_Insert_Input = {
  cabinet_histories?: InputMaybe<Cabinet_Histories_Arr_Rel_Insert_Input>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Prime_Minister_Histories_Max_Fields = {
  __typename?: 'prime_minister_histories_max_fields';
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Prime_Minister_Histories_Min_Fields = {
  __typename?: 'prime_minister_histories_min_fields';
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "prime_minister_histories" */
export type Prime_Minister_Histories_Mutation_Response = {
  __typename?: 'prime_minister_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Prime_Minister_Histories>;
};

/** input type for inserting object relation for remote table "prime_minister_histories" */
export type Prime_Minister_Histories_Obj_Rel_Insert_Input = {
  data: Prime_Minister_Histories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Prime_Minister_Histories_On_Conflict>;
};

/** on_conflict condition type for table "prime_minister_histories" */
export type Prime_Minister_Histories_On_Conflict = {
  constraint: Prime_Minister_Histories_Constraint;
  update_columns?: Array<Prime_Minister_Histories_Update_Column>;
  where?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "prime_minister_histories". */
export type Prime_Minister_Histories_Order_By = {
  cabinet_histories_aggregate?: InputMaybe<Cabinet_Histories_Aggregate_Order_By>;
  first_name?: InputMaybe<Order_By>;
  first_name_kana?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_name_kana?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prime_minister_histories */
export type Prime_Minister_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "prime_minister_histories" */
export enum Prime_Minister_Histories_Select_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FirstNameKana = 'first_name_kana',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastNameKana = 'last_name_kana'
}

/** input type for updating data in table "prime_minister_histories" */
export type Prime_Minister_Histories_Set_Input = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "prime_minister_histories" */
export type Prime_Minister_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Prime_Minister_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Prime_Minister_Histories_Stream_Cursor_Value_Input = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "prime_minister_histories" */
export enum Prime_Minister_Histories_Update_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FirstNameKana = 'first_name_kana',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastNameKana = 'last_name_kana'
}

export type Prime_Minister_Histories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Prime_Minister_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Prime_Minister_Histories_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  argument_chats: Array<Argument_Chats>;
  /** An aggregate relationship */
  argument_chats_aggregate: Argument_Chats_Aggregate;
  /** fetch data from the table: "argument_chats" using primary key columns */
  argument_chats_by_pk?: Maybe<Argument_Chats>;
  /** An array relationship */
  argument_resource_managers: Array<Argument_Resource_Managers>;
  /** An aggregate relationship */
  argument_resource_managers_aggregate: Argument_Resource_Managers_Aggregate;
  /** fetch data from the table: "argument_resource_managers" using primary key columns */
  argument_resource_managers_by_pk?: Maybe<Argument_Resource_Managers>;
  /** An array relationship */
  argument_resources: Array<Argument_Resources>;
  /** An aggregate relationship */
  argument_resources_aggregate: Argument_Resources_Aggregate;
  /** fetch data from the table: "argument_resources" using primary key columns */
  argument_resources_by_pk?: Maybe<Argument_Resources>;
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  /** fetch data from the table: "arguments" using primary key columns */
  arguments_by_pk?: Maybe<Arguments>;
  /** An array relationship */
  cabinet_histories: Array<Cabinet_Histories>;
  /** An aggregate relationship */
  cabinet_histories_aggregate: Cabinet_Histories_Aggregate;
  /** fetch data from the table: "cabinet_histories" using primary key columns */
  cabinet_histories_by_pk?: Maybe<Cabinet_Histories>;
  /** An array relationship */
  cabinet_members: Array<Cabinet_Members>;
  /** An aggregate relationship */
  cabinet_members_aggregate: Cabinet_Members_Aggregate;
  /** fetch data from the table: "cabinet_members" using primary key columns */
  cabinet_members_by_pk?: Maybe<Cabinet_Members>;
  /** An array relationship */
  comment_reactions: Array<Comment_Reactions>;
  /** An aggregate relationship */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "diet" */
  diet: Array<Diet>;
  /** fetch aggregated fields from the table: "diet" */
  diet_aggregate: Diet_Aggregate;
  /** fetch data from the table: "diet" using primary key columns */
  diet_by_pk?: Maybe<Diet>;
  /** fetch data from the table: "diet_members" */
  diet_members: Array<Diet_Members>;
  /** fetch aggregated fields from the table: "diet_members" */
  diet_members_aggregate: Diet_Members_Aggregate;
  /** fetch data from the table: "diet_members" using primary key columns */
  diet_members_by_pk?: Maybe<Diet_Members>;
  /** An array relationship */
  house_of_councilors_histories: Array<House_Of_Councilors_Histories>;
  /** An aggregate relationship */
  house_of_councilors_histories_aggregate: House_Of_Councilors_Histories_Aggregate;
  /** fetch data from the table: "house_of_councilors_histories" using primary key columns */
  house_of_councilors_histories_by_pk?: Maybe<House_Of_Councilors_Histories>;
  /** An array relationship */
  house_of_representatives_histories: Array<House_Of_Representatives_Histories>;
  /** An aggregate relationship */
  house_of_representatives_histories_aggregate: House_Of_Representatives_Histories_Aggregate;
  /** fetch data from the table: "house_of_representatives_histories" using primary key columns */
  house_of_representatives_histories_by_pk?: Maybe<House_Of_Representatives_Histories>;
  /** fetch data from the table: "law_categories" */
  law_categories: Array<Law_Categories>;
  /** fetch aggregated fields from the table: "law_categories" */
  law_categories_aggregate: Law_Categories_Aggregate;
  /** fetch data from the table: "law_categories" using primary key columns */
  law_categories_by_pk?: Maybe<Law_Categories>;
  /** An array relationship */
  law_revision_columns: Array<Law_Revision_Columns>;
  /** An aggregate relationship */
  law_revision_columns_aggregate: Law_Revision_Columns_Aggregate;
  /** fetch data from the table: "law_revision_columns" using primary key columns */
  law_revision_columns_by_pk?: Maybe<Law_Revision_Columns>;
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  /** fetch data from the table: "law_revisions" using primary key columns */
  law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** fetch data from the table: "law_statuses" */
  law_statuses: Array<Law_Statuses>;
  /** fetch aggregated fields from the table: "law_statuses" */
  law_statuses_aggregate: Law_Statuses_Aggregate;
  /** fetch data from the table: "law_statuses" using primary key columns */
  law_statuses_by_pk?: Maybe<Law_Statuses>;
  /** An array relationship */
  law_summaries: Array<Law_Summaries>;
  /** An aggregate relationship */
  law_summaries_aggregate: Law_Summaries_Aggregate;
  /** fetch data from the table: "law_summaries" using primary key columns */
  law_summaries_by_pk?: Maybe<Law_Summaries>;
  /** fetch data from the table: "law_types" */
  law_types: Array<Law_Types>;
  /** fetch aggregated fields from the table: "law_types" */
  law_types_aggregate: Law_Types_Aggregate;
  /** fetch data from the table: "law_types" using primary key columns */
  law_types_by_pk?: Maybe<Law_Types>;
  /** fetch data from the table: "laws" */
  laws: Array<Laws>;
  /** fetch aggregated fields from the table: "laws" */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** An array relationship */
  official_gazette_columns: Array<Official_Gazette_Columns>;
  /** An aggregate relationship */
  official_gazette_columns_aggregate: Official_Gazette_Columns_Aggregate;
  /** fetch data from the table: "official_gazette_columns" using primary key columns */
  official_gazette_columns_by_pk?: Maybe<Official_Gazette_Columns>;
  /** fetch data from the table: "official_gazettes" */
  official_gazettes: Array<Official_Gazettes>;
  /** fetch aggregated fields from the table: "official_gazettes" */
  official_gazettes_aggregate: Official_Gazettes_Aggregate;
  /** fetch data from the table: "official_gazettes" using primary key columns */
  official_gazettes_by_pk?: Maybe<Official_Gazettes>;
  /** An array relationship */
  parties: Array<Parties>;
  /** An aggregate relationship */
  parties_aggregate: Parties_Aggregate;
  /** fetch data from the table: "parties" using primary key columns */
  parties_by_pk?: Maybe<Parties>;
  /** fetch data from the table: "prime_minister_histories" */
  prime_minister_histories: Array<Prime_Minister_Histories>;
  /** fetch aggregated fields from the table: "prime_minister_histories" */
  prime_minister_histories_aggregate: Prime_Minister_Histories_Aggregate;
  /** fetch data from the table: "prime_minister_histories" using primary key columns */
  prime_minister_histories_by_pk?: Maybe<Prime_Minister_Histories>;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  /** fetch data from the table: "reactions" using primary key columns */
  reactions_by_pk?: Maybe<Reactions>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  views: Array<Views>;
  /** An aggregate relationship */
  views_aggregate: Views_Aggregate;
  /** fetch data from the table: "views" using primary key columns */
  views_by_pk?: Maybe<Views>;
};


export type Query_RootArgument_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


export type Query_RootArgument_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


export type Query_RootArgument_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootArgument_Resource_ManagersArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


export type Query_RootArgument_Resource_Managers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


export type Query_RootArgument_Resource_Managers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootArgument_ResourcesArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resources_Order_By>>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};


export type Query_RootArgument_Resources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resources_Order_By>>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};


export type Query_RootArgument_Resources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootArgumentsArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


export type Query_RootArguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


export type Query_RootArguments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCabinet_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Histories_Order_By>>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};


export type Query_RootCabinet_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Histories_Order_By>>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};


export type Query_RootCabinet_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCabinet_MembersArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Members_Order_By>>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};


export type Query_RootCabinet_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Members_Order_By>>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};


export type Query_RootCabinet_Members_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootComment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};


export type Query_RootComment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};


export type Query_RootComment_Reactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDietArgs = {
  distinct_on?: InputMaybe<Array<Diet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Order_By>>;
  where?: InputMaybe<Diet_Bool_Exp>;
};


export type Query_RootDiet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Diet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Order_By>>;
  where?: InputMaybe<Diet_Bool_Exp>;
};


export type Query_RootDiet_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDiet_MembersArgs = {
  distinct_on?: InputMaybe<Array<Diet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Members_Order_By>>;
  where?: InputMaybe<Diet_Members_Bool_Exp>;
};


export type Query_RootDiet_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Diet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Members_Order_By>>;
  where?: InputMaybe<Diet_Members_Bool_Exp>;
};


export type Query_RootDiet_Members_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHouse_Of_Councilors_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Councilors_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};


export type Query_RootHouse_Of_Councilors_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Councilors_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};


export type Query_RootHouse_Of_Councilors_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHouse_Of_Representatives_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Representatives_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};


export type Query_RootHouse_Of_Representatives_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Representatives_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};


export type Query_RootHouse_Of_Representatives_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Law_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Categories_Order_By>>;
  where?: InputMaybe<Law_Categories_Bool_Exp>;
};


export type Query_RootLaw_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Categories_Order_By>>;
  where?: InputMaybe<Law_Categories_Bool_Exp>;
};


export type Query_RootLaw_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_Revision_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revision_Columns_Order_By>>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};


export type Query_RootLaw_Revision_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revision_Columns_Order_By>>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};


export type Query_RootLaw_Revision_Columns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Query_RootLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Query_RootLaw_Revisions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Law_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Statuses_Order_By>>;
  where?: InputMaybe<Law_Statuses_Bool_Exp>;
};


export type Query_RootLaw_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Statuses_Order_By>>;
  where?: InputMaybe<Law_Statuses_Bool_Exp>;
};


export type Query_RootLaw_Statuses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_SummariesArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


export type Query_RootLaw_Summaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


export type Query_RootLaw_Summaries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_TypesArgs = {
  distinct_on?: InputMaybe<Array<Law_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Types_Order_By>>;
  where?: InputMaybe<Law_Types_Bool_Exp>;
};


export type Query_RootLaw_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Types_Order_By>>;
  where?: InputMaybe<Law_Types_Bool_Exp>;
};


export type Query_RootLaw_Types_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLawsArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Query_RootLaws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Query_RootLaws_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOfficial_Gazette_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazette_Columns_Order_By>>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};


export type Query_RootOfficial_Gazette_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazette_Columns_Order_By>>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};


export type Query_RootOfficial_Gazette_Columns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOfficial_GazettesArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazettes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazettes_Order_By>>;
  where?: InputMaybe<Official_Gazettes_Bool_Exp>;
};


export type Query_RootOfficial_Gazettes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazettes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazettes_Order_By>>;
  where?: InputMaybe<Official_Gazettes_Bool_Exp>;
};


export type Query_RootOfficial_Gazettes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPartiesArgs = {
  distinct_on?: InputMaybe<Array<Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Parties_Order_By>>;
  where?: InputMaybe<Parties_Bool_Exp>;
};


export type Query_RootParties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Parties_Order_By>>;
  where?: InputMaybe<Parties_Bool_Exp>;
};


export type Query_RootParties_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrime_Minister_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Prime_Minister_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prime_Minister_Histories_Order_By>>;
  where?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
};


export type Query_RootPrime_Minister_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prime_Minister_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prime_Minister_Histories_Order_By>>;
  where?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
};


export type Query_RootPrime_Minister_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type Query_RootReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type Query_RootReactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootViewsArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Query_RootViews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Query_RootViews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "reactions" */
export type Reactions = {
  __typename?: 'reactions';
  /** An object relationship */
  argument?: Maybe<Arguments>;
  /** An object relationship */
  argument_chat?: Maybe<Argument_Chats>;
  argument_chat_id?: Maybe<Scalars['uuid']['output']>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  diet_member?: Maybe<Diet_Members>;
  diet_member_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law?: Maybe<Laws>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  law_revision_column?: Maybe<Law_Revision_Columns>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  law_summary?: Maybe<Law_Summaries>;
  law_summary_id?: Maybe<Scalars['uuid']['output']>;
  official_gazetta_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  official_gazette?: Maybe<Official_Gazettes>;
  /** An object relationship */
  official_gazette_column?: Maybe<Official_Gazette_Columns>;
  official_gazette_column_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  party?: Maybe<Parties>;
  party_id?: Maybe<Scalars['uuid']['output']>;
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "reactions" */
export type Reactions_Aggregate = {
  __typename?: 'reactions_aggregate';
  aggregate?: Maybe<Reactions_Aggregate_Fields>;
  nodes: Array<Reactions>;
};

export type Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Reactions_Aggregate_Bool_Exp_Count>;
};

export type Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "reactions" */
export type Reactions_Aggregate_Fields = {
  __typename?: 'reactions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Reactions_Max_Fields>;
  min?: Maybe<Reactions_Min_Fields>;
};


/** aggregate fields of "reactions" */
export type Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "reactions" */
export type Reactions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reactions_Max_Order_By>;
  min?: InputMaybe<Reactions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "reactions" */
export type Reactions_Arr_Rel_Insert_Input = {
  data: Array<Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reactions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reactions". All fields are combined with a logical 'AND'. */
export type Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<Reactions_Bool_Exp>>;
  _not?: InputMaybe<Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Reactions_Bool_Exp>>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_chat?: InputMaybe<Argument_Chats_Bool_Exp>;
  argument_chat_id?: InputMaybe<Uuid_Comparison_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  diet_member?: InputMaybe<Diet_Members_Bool_Exp>;
  diet_member_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  law_revision_column_id?: InputMaybe<Uuid_Comparison_Exp>;
  law_summary?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summary_id?: InputMaybe<Uuid_Comparison_Exp>;
  official_gazetta_id?: InputMaybe<Uuid_Comparison_Exp>;
  official_gazette?: InputMaybe<Official_Gazettes_Bool_Exp>;
  official_gazette_column?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
  official_gazette_column_id?: InputMaybe<Uuid_Comparison_Exp>;
  party?: InputMaybe<Parties_Bool_Exp>;
  party_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "reactions" */
export enum Reactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReactionPkey = 'reaction_pkey'
}

/** input type for inserting data into table "reactions" */
export type Reactions_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_chat?: InputMaybe<Argument_Chats_Obj_Rel_Insert_Input>;
  argument_chat_id?: InputMaybe<Scalars['uuid']['input']>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  diet_member?: InputMaybe<Diet_Members_Obj_Rel_Insert_Input>;
  diet_member_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Obj_Rel_Insert_Input>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  law_summary?: InputMaybe<Law_Summaries_Obj_Rel_Insert_Input>;
  law_summary_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazetta_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette?: InputMaybe<Official_Gazettes_Obj_Rel_Insert_Input>;
  official_gazette_column?: InputMaybe<Official_Gazette_Columns_Obj_Rel_Insert_Input>;
  official_gazette_column_id?: InputMaybe<Scalars['uuid']['input']>;
  party?: InputMaybe<Parties_Obj_Rel_Insert_Input>;
  party_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Reactions_Max_Fields = {
  __typename?: 'reactions_max_fields';
  argument_chat_id?: Maybe<Scalars['uuid']['output']>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  diet_member_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  law_summary_id?: Maybe<Scalars['uuid']['output']>;
  official_gazetta_id?: Maybe<Scalars['uuid']['output']>;
  official_gazette_column_id?: Maybe<Scalars['uuid']['output']>;
  party_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "reactions" */
export type Reactions_Max_Order_By = {
  argument_chat_id?: InputMaybe<Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  diet_member_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  law_summary_id?: InputMaybe<Order_By>;
  official_gazetta_id?: InputMaybe<Order_By>;
  official_gazette_column_id?: InputMaybe<Order_By>;
  party_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reactions_Min_Fields = {
  __typename?: 'reactions_min_fields';
  argument_chat_id?: Maybe<Scalars['uuid']['output']>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  diet_member_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  law_summary_id?: Maybe<Scalars['uuid']['output']>;
  official_gazetta_id?: Maybe<Scalars['uuid']['output']>;
  official_gazette_column_id?: Maybe<Scalars['uuid']['output']>;
  party_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "reactions" */
export type Reactions_Min_Order_By = {
  argument_chat_id?: InputMaybe<Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  diet_member_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  law_summary_id?: InputMaybe<Order_By>;
  official_gazetta_id?: InputMaybe<Order_By>;
  official_gazette_column_id?: InputMaybe<Order_By>;
  party_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reactions" */
export type Reactions_Mutation_Response = {
  __typename?: 'reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Reactions>;
};

/** on_conflict condition type for table "reactions" */
export type Reactions_On_Conflict = {
  constraint: Reactions_Constraint;
  update_columns?: Array<Reactions_Update_Column>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "reactions". */
export type Reactions_Order_By = {
  argument?: InputMaybe<Arguments_Order_By>;
  argument_chat?: InputMaybe<Argument_Chats_Order_By>;
  argument_chat_id?: InputMaybe<Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  diet_member?: InputMaybe<Diet_Members_Order_By>;
  diet_member_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  law_summary?: InputMaybe<Law_Summaries_Order_By>;
  law_summary_id?: InputMaybe<Order_By>;
  official_gazetta_id?: InputMaybe<Order_By>;
  official_gazette?: InputMaybe<Official_Gazettes_Order_By>;
  official_gazette_column?: InputMaybe<Official_Gazette_Columns_Order_By>;
  official_gazette_column_id?: InputMaybe<Order_By>;
  party?: InputMaybe<Parties_Order_By>;
  party_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reactions */
export type Reactions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "reactions" */
export enum Reactions_Select_Column {
  /** column name */
  ArgumentChatId = 'argument_chat_id',
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DietMemberId = 'diet_member_id',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  LawSummaryId = 'law_summary_id',
  /** column name */
  OfficialGazettaId = 'official_gazetta_id',
  /** column name */
  OfficialGazetteColumnId = 'official_gazette_column_id',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reactions" */
export type Reactions_Set_Input = {
  argument_chat_id?: InputMaybe<Scalars['uuid']['input']>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  diet_member_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  law_summary_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazetta_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette_column_id?: InputMaybe<Scalars['uuid']['input']>;
  party_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "reactions" */
export type Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reactions_Stream_Cursor_Value_Input = {
  argument_chat_id?: InputMaybe<Scalars['uuid']['input']>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  diet_member_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  law_summary_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazetta_id?: InputMaybe<Scalars['uuid']['input']>;
  official_gazette_column_id?: InputMaybe<Scalars['uuid']['input']>;
  party_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "reactions" */
export enum Reactions_Update_Column {
  /** column name */
  ArgumentChatId = 'argument_chat_id',
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DietMemberId = 'diet_member_id',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  LawSummaryId = 'law_summary_id',
  /** column name */
  OfficialGazettaId = 'official_gazetta_id',
  /** column name */
  OfficialGazetteColumnId = 'official_gazette_column_id',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Reactions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reactions_Bool_Exp;
};

/** columns and relationships of "resources" */
export type Resources = {
  __typename?: 'resources';
  id: Scalars['uuid']['output'];
  markup_text: Scalars['String']['output'];
};

/** aggregated selection of "resources" */
export type Resources_Aggregate = {
  __typename?: 'resources_aggregate';
  aggregate?: Maybe<Resources_Aggregate_Fields>;
  nodes: Array<Resources>;
};

/** aggregate fields of "resources" */
export type Resources_Aggregate_Fields = {
  __typename?: 'resources_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Resources_Max_Fields>;
  min?: Maybe<Resources_Min_Fields>;
};


/** aggregate fields of "resources" */
export type Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "resources". All fields are combined with a logical 'AND'. */
export type Resources_Bool_Exp = {
  _and?: InputMaybe<Array<Resources_Bool_Exp>>;
  _not?: InputMaybe<Resources_Bool_Exp>;
  _or?: InputMaybe<Array<Resources_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  markup_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "resources" */
export enum Resources_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResourcesPkey = 'resources_pkey'
}

/** input type for inserting data into table "resources" */
export type Resources_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Resources_Max_Fields = {
  __typename?: 'resources_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Resources_Min_Fields = {
  __typename?: 'resources_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "resources" */
export type Resources_Mutation_Response = {
  __typename?: 'resources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resources>;
};

/** on_conflict condition type for table "resources" */
export type Resources_On_Conflict = {
  constraint: Resources_Constraint;
  update_columns?: Array<Resources_Update_Column>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resources */
export type Resources_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "resources" */
export enum Resources_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarkupText = 'markup_text'
}

/** input type for updating data in table "resources" */
export type Resources_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "resources" */
export type Resources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resources_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "resources" */
export enum Resources_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarkupText = 'markup_text'
}

export type Resources_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resources_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  argument_chats: Array<Argument_Chats>;
  /** An aggregate relationship */
  argument_chats_aggregate: Argument_Chats_Aggregate;
  /** fetch data from the table: "argument_chats" using primary key columns */
  argument_chats_by_pk?: Maybe<Argument_Chats>;
  /** fetch data from the table in a streaming manner: "argument_chats" */
  argument_chats_stream: Array<Argument_Chats>;
  /** An array relationship */
  argument_resource_managers: Array<Argument_Resource_Managers>;
  /** An aggregate relationship */
  argument_resource_managers_aggregate: Argument_Resource_Managers_Aggregate;
  /** fetch data from the table: "argument_resource_managers" using primary key columns */
  argument_resource_managers_by_pk?: Maybe<Argument_Resource_Managers>;
  /** fetch data from the table in a streaming manner: "argument_resource_managers" */
  argument_resource_managers_stream: Array<Argument_Resource_Managers>;
  /** An array relationship */
  argument_resources: Array<Argument_Resources>;
  /** An aggregate relationship */
  argument_resources_aggregate: Argument_Resources_Aggregate;
  /** fetch data from the table: "argument_resources" using primary key columns */
  argument_resources_by_pk?: Maybe<Argument_Resources>;
  /** fetch data from the table in a streaming manner: "argument_resources" */
  argument_resources_stream: Array<Argument_Resources>;
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  /** fetch data from the table: "arguments" using primary key columns */
  arguments_by_pk?: Maybe<Arguments>;
  /** fetch data from the table in a streaming manner: "arguments" */
  arguments_stream: Array<Arguments>;
  /** An array relationship */
  cabinet_histories: Array<Cabinet_Histories>;
  /** An aggregate relationship */
  cabinet_histories_aggregate: Cabinet_Histories_Aggregate;
  /** fetch data from the table: "cabinet_histories" using primary key columns */
  cabinet_histories_by_pk?: Maybe<Cabinet_Histories>;
  /** fetch data from the table in a streaming manner: "cabinet_histories" */
  cabinet_histories_stream: Array<Cabinet_Histories>;
  /** An array relationship */
  cabinet_members: Array<Cabinet_Members>;
  /** An aggregate relationship */
  cabinet_members_aggregate: Cabinet_Members_Aggregate;
  /** fetch data from the table: "cabinet_members" using primary key columns */
  cabinet_members_by_pk?: Maybe<Cabinet_Members>;
  /** fetch data from the table in a streaming manner: "cabinet_members" */
  cabinet_members_stream: Array<Cabinet_Members>;
  /** An array relationship */
  comment_reactions: Array<Comment_Reactions>;
  /** An aggregate relationship */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** fetch data from the table in a streaming manner: "comment_reactions" */
  comment_reactions_stream: Array<Comment_Reactions>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** fetch data from the table: "diet" */
  diet: Array<Diet>;
  /** fetch aggregated fields from the table: "diet" */
  diet_aggregate: Diet_Aggregate;
  /** fetch data from the table: "diet" using primary key columns */
  diet_by_pk?: Maybe<Diet>;
  /** fetch data from the table: "diet_members" */
  diet_members: Array<Diet_Members>;
  /** fetch aggregated fields from the table: "diet_members" */
  diet_members_aggregate: Diet_Members_Aggregate;
  /** fetch data from the table: "diet_members" using primary key columns */
  diet_members_by_pk?: Maybe<Diet_Members>;
  /** fetch data from the table in a streaming manner: "diet_members" */
  diet_members_stream: Array<Diet_Members>;
  /** fetch data from the table in a streaming manner: "diet" */
  diet_stream: Array<Diet>;
  /** An array relationship */
  house_of_councilors_histories: Array<House_Of_Councilors_Histories>;
  /** An aggregate relationship */
  house_of_councilors_histories_aggregate: House_Of_Councilors_Histories_Aggregate;
  /** fetch data from the table: "house_of_councilors_histories" using primary key columns */
  house_of_councilors_histories_by_pk?: Maybe<House_Of_Councilors_Histories>;
  /** fetch data from the table in a streaming manner: "house_of_councilors_histories" */
  house_of_councilors_histories_stream: Array<House_Of_Councilors_Histories>;
  /** An array relationship */
  house_of_representatives_histories: Array<House_Of_Representatives_Histories>;
  /** An aggregate relationship */
  house_of_representatives_histories_aggregate: House_Of_Representatives_Histories_Aggregate;
  /** fetch data from the table: "house_of_representatives_histories" using primary key columns */
  house_of_representatives_histories_by_pk?: Maybe<House_Of_Representatives_Histories>;
  /** fetch data from the table in a streaming manner: "house_of_representatives_histories" */
  house_of_representatives_histories_stream: Array<House_Of_Representatives_Histories>;
  /** fetch data from the table: "law_categories" */
  law_categories: Array<Law_Categories>;
  /** fetch aggregated fields from the table: "law_categories" */
  law_categories_aggregate: Law_Categories_Aggregate;
  /** fetch data from the table: "law_categories" using primary key columns */
  law_categories_by_pk?: Maybe<Law_Categories>;
  /** fetch data from the table in a streaming manner: "law_categories" */
  law_categories_stream: Array<Law_Categories>;
  /** An array relationship */
  law_revision_columns: Array<Law_Revision_Columns>;
  /** An aggregate relationship */
  law_revision_columns_aggregate: Law_Revision_Columns_Aggregate;
  /** fetch data from the table: "law_revision_columns" using primary key columns */
  law_revision_columns_by_pk?: Maybe<Law_Revision_Columns>;
  /** fetch data from the table in a streaming manner: "law_revision_columns" */
  law_revision_columns_stream: Array<Law_Revision_Columns>;
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  /** fetch data from the table: "law_revisions" using primary key columns */
  law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** fetch data from the table in a streaming manner: "law_revisions" */
  law_revisions_stream: Array<Law_Revisions>;
  /** fetch data from the table: "law_statuses" */
  law_statuses: Array<Law_Statuses>;
  /** fetch aggregated fields from the table: "law_statuses" */
  law_statuses_aggregate: Law_Statuses_Aggregate;
  /** fetch data from the table: "law_statuses" using primary key columns */
  law_statuses_by_pk?: Maybe<Law_Statuses>;
  /** fetch data from the table in a streaming manner: "law_statuses" */
  law_statuses_stream: Array<Law_Statuses>;
  /** An array relationship */
  law_summaries: Array<Law_Summaries>;
  /** An aggregate relationship */
  law_summaries_aggregate: Law_Summaries_Aggregate;
  /** fetch data from the table: "law_summaries" using primary key columns */
  law_summaries_by_pk?: Maybe<Law_Summaries>;
  /** fetch data from the table in a streaming manner: "law_summaries" */
  law_summaries_stream: Array<Law_Summaries>;
  /** fetch data from the table: "law_types" */
  law_types: Array<Law_Types>;
  /** fetch aggregated fields from the table: "law_types" */
  law_types_aggregate: Law_Types_Aggregate;
  /** fetch data from the table: "law_types" using primary key columns */
  law_types_by_pk?: Maybe<Law_Types>;
  /** fetch data from the table in a streaming manner: "law_types" */
  law_types_stream: Array<Law_Types>;
  /** fetch data from the table: "laws" */
  laws: Array<Laws>;
  /** fetch aggregated fields from the table: "laws" */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** fetch data from the table in a streaming manner: "laws" */
  laws_stream: Array<Laws>;
  /** An array relationship */
  official_gazette_columns: Array<Official_Gazette_Columns>;
  /** An aggregate relationship */
  official_gazette_columns_aggregate: Official_Gazette_Columns_Aggregate;
  /** fetch data from the table: "official_gazette_columns" using primary key columns */
  official_gazette_columns_by_pk?: Maybe<Official_Gazette_Columns>;
  /** fetch data from the table in a streaming manner: "official_gazette_columns" */
  official_gazette_columns_stream: Array<Official_Gazette_Columns>;
  /** fetch data from the table: "official_gazettes" */
  official_gazettes: Array<Official_Gazettes>;
  /** fetch aggregated fields from the table: "official_gazettes" */
  official_gazettes_aggregate: Official_Gazettes_Aggregate;
  /** fetch data from the table: "official_gazettes" using primary key columns */
  official_gazettes_by_pk?: Maybe<Official_Gazettes>;
  /** fetch data from the table in a streaming manner: "official_gazettes" */
  official_gazettes_stream: Array<Official_Gazettes>;
  /** An array relationship */
  parties: Array<Parties>;
  /** An aggregate relationship */
  parties_aggregate: Parties_Aggregate;
  /** fetch data from the table: "parties" using primary key columns */
  parties_by_pk?: Maybe<Parties>;
  /** fetch data from the table in a streaming manner: "parties" */
  parties_stream: Array<Parties>;
  /** fetch data from the table: "prime_minister_histories" */
  prime_minister_histories: Array<Prime_Minister_Histories>;
  /** fetch aggregated fields from the table: "prime_minister_histories" */
  prime_minister_histories_aggregate: Prime_Minister_Histories_Aggregate;
  /** fetch data from the table: "prime_minister_histories" using primary key columns */
  prime_minister_histories_by_pk?: Maybe<Prime_Minister_Histories>;
  /** fetch data from the table in a streaming manner: "prime_minister_histories" */
  prime_minister_histories_stream: Array<Prime_Minister_Histories>;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  /** fetch data from the table: "reactions" using primary key columns */
  reactions_by_pk?: Maybe<Reactions>;
  /** fetch data from the table in a streaming manner: "reactions" */
  reactions_stream: Array<Reactions>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table in a streaming manner: "resources" */
  resources_stream: Array<Resources>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  views: Array<Views>;
  /** An aggregate relationship */
  views_aggregate: Views_Aggregate;
  /** fetch data from the table: "views" using primary key columns */
  views_by_pk?: Maybe<Views>;
  /** fetch data from the table in a streaming manner: "views" */
  views_stream: Array<Views>;
};


export type Subscription_RootArgument_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


export type Subscription_RootArgument_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


export type Subscription_RootArgument_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootArgument_Chats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Argument_Chats_Stream_Cursor_Input>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


export type Subscription_RootArgument_Resource_ManagersArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


export type Subscription_RootArgument_Resource_Managers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


export type Subscription_RootArgument_Resource_Managers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootArgument_Resource_Managers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Argument_Resource_Managers_Stream_Cursor_Input>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


export type Subscription_RootArgument_ResourcesArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resources_Order_By>>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};


export type Subscription_RootArgument_Resources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resources_Order_By>>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};


export type Subscription_RootArgument_Resources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootArgument_Resources_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Argument_Resources_Stream_Cursor_Input>>;
  where?: InputMaybe<Argument_Resources_Bool_Exp>;
};


export type Subscription_RootArgumentsArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


export type Subscription_RootArguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


export type Subscription_RootArguments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootArguments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Arguments_Stream_Cursor_Input>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


export type Subscription_RootCabinet_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Histories_Order_By>>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};


export type Subscription_RootCabinet_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Histories_Order_By>>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};


export type Subscription_RootCabinet_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCabinet_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cabinet_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Cabinet_Histories_Bool_Exp>;
};


export type Subscription_RootCabinet_MembersArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Members_Order_By>>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};


export type Subscription_RootCabinet_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cabinet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cabinet_Members_Order_By>>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};


export type Subscription_RootCabinet_Members_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCabinet_Members_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cabinet_Members_Stream_Cursor_Input>>;
  where?: InputMaybe<Cabinet_Members_Bool_Exp>;
};


export type Subscription_RootComment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootComment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootComment_Reactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootComment_Reactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Comment_Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootDietArgs = {
  distinct_on?: InputMaybe<Array<Diet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Order_By>>;
  where?: InputMaybe<Diet_Bool_Exp>;
};


export type Subscription_RootDiet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Diet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Order_By>>;
  where?: InputMaybe<Diet_Bool_Exp>;
};


export type Subscription_RootDiet_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDiet_MembersArgs = {
  distinct_on?: InputMaybe<Array<Diet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Members_Order_By>>;
  where?: InputMaybe<Diet_Members_Bool_Exp>;
};


export type Subscription_RootDiet_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Diet_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diet_Members_Order_By>>;
  where?: InputMaybe<Diet_Members_Bool_Exp>;
};


export type Subscription_RootDiet_Members_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDiet_Members_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Diet_Members_Stream_Cursor_Input>>;
  where?: InputMaybe<Diet_Members_Bool_Exp>;
};


export type Subscription_RootDiet_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Diet_Stream_Cursor_Input>>;
  where?: InputMaybe<Diet_Bool_Exp>;
};


export type Subscription_RootHouse_Of_Councilors_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Councilors_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};


export type Subscription_RootHouse_Of_Councilors_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Councilors_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Councilors_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};


export type Subscription_RootHouse_Of_Councilors_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHouse_Of_Councilors_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<House_Of_Councilors_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<House_Of_Councilors_Histories_Bool_Exp>;
};


export type Subscription_RootHouse_Of_Representatives_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Representatives_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};


export type Subscription_RootHouse_Of_Representatives_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<House_Of_Representatives_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<House_Of_Representatives_Histories_Order_By>>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};


export type Subscription_RootHouse_Of_Representatives_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHouse_Of_Representatives_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<House_Of_Representatives_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<House_Of_Representatives_Histories_Bool_Exp>;
};


export type Subscription_RootLaw_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Law_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Categories_Order_By>>;
  where?: InputMaybe<Law_Categories_Bool_Exp>;
};


export type Subscription_RootLaw_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Categories_Order_By>>;
  where?: InputMaybe<Law_Categories_Bool_Exp>;
};


export type Subscription_RootLaw_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Categories_Bool_Exp>;
};


export type Subscription_RootLaw_Revision_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revision_Columns_Order_By>>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};


export type Subscription_RootLaw_Revision_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revision_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revision_Columns_Order_By>>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};


export type Subscription_RootLaw_Revision_Columns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Revision_Columns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Revision_Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
};


export type Subscription_RootLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Subscription_RootLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Subscription_RootLaw_Revisions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Revisions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Revisions_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Subscription_RootLaw_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Law_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Statuses_Order_By>>;
  where?: InputMaybe<Law_Statuses_Bool_Exp>;
};


export type Subscription_RootLaw_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Statuses_Order_By>>;
  where?: InputMaybe<Law_Statuses_Bool_Exp>;
};


export type Subscription_RootLaw_Statuses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Statuses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Statuses_Bool_Exp>;
};


export type Subscription_RootLaw_SummariesArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


export type Subscription_RootLaw_Summaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


export type Subscription_RootLaw_Summaries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Summaries_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Summaries_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


export type Subscription_RootLaw_TypesArgs = {
  distinct_on?: InputMaybe<Array<Law_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Types_Order_By>>;
  where?: InputMaybe<Law_Types_Bool_Exp>;
};


export type Subscription_RootLaw_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Types_Order_By>>;
  where?: InputMaybe<Law_Types_Bool_Exp>;
};


export type Subscription_RootLaw_Types_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Types_Bool_Exp>;
};


export type Subscription_RootLawsArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Subscription_RootLaws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Subscription_RootLaws_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaws_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Laws_Stream_Cursor_Input>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Subscription_RootOfficial_Gazette_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazette_Columns_Order_By>>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};


export type Subscription_RootOfficial_Gazette_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazette_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazette_Columns_Order_By>>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};


export type Subscription_RootOfficial_Gazette_Columns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOfficial_Gazette_Columns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Official_Gazette_Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Official_Gazette_Columns_Bool_Exp>;
};


export type Subscription_RootOfficial_GazettesArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazettes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazettes_Order_By>>;
  where?: InputMaybe<Official_Gazettes_Bool_Exp>;
};


export type Subscription_RootOfficial_Gazettes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Official_Gazettes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Official_Gazettes_Order_By>>;
  where?: InputMaybe<Official_Gazettes_Bool_Exp>;
};


export type Subscription_RootOfficial_Gazettes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOfficial_Gazettes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Official_Gazettes_Stream_Cursor_Input>>;
  where?: InputMaybe<Official_Gazettes_Bool_Exp>;
};


export type Subscription_RootPartiesArgs = {
  distinct_on?: InputMaybe<Array<Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Parties_Order_By>>;
  where?: InputMaybe<Parties_Bool_Exp>;
};


export type Subscription_RootParties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Parties_Order_By>>;
  where?: InputMaybe<Parties_Bool_Exp>;
};


export type Subscription_RootParties_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootParties_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Parties_Stream_Cursor_Input>>;
  where?: InputMaybe<Parties_Bool_Exp>;
};


export type Subscription_RootPrime_Minister_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Prime_Minister_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prime_Minister_Histories_Order_By>>;
  where?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
};


export type Subscription_RootPrime_Minister_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prime_Minister_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prime_Minister_Histories_Order_By>>;
  where?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
};


export type Subscription_RootPrime_Minister_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrime_Minister_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Prime_Minister_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Prime_Minister_Histories_Bool_Exp>;
};


export type Subscription_RootReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type Subscription_RootReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type Subscription_RootReactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type Subscription_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootResources_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resources_Stream_Cursor_Input>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootViewsArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Subscription_RootViews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Subscription_RootViews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootViews_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Views_Stream_Cursor_Input>>;
  where?: InputMaybe<Views_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  argument_chats: Array<Argument_Chats>;
  /** An aggregate relationship */
  argument_chats_aggregate: Argument_Chats_Aggregate;
  /** An array relationship */
  argument_resource_managers: Array<Argument_Resource_Managers>;
  /** An aggregate relationship */
  argument_resource_managers_aggregate: Argument_Resource_Managers_Aggregate;
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  authentication_id: Scalars['String']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  law_summaries: Array<Law_Summaries>;
  /** An aggregate relationship */
  law_summaries_aggregate: Law_Summaries_Aggregate;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  views: Array<Views>;
  /** An aggregate relationship */
  views_aggregate: Views_Aggregate;
};


/** columns and relationships of "users" */
export type UsersArgument_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersArgument_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chats_Order_By>>;
  where?: InputMaybe<Argument_Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersArgument_Resource_ManagersArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersArgument_Resource_Managers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Resource_Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Resource_Managers_Order_By>>;
  where?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersArgumentsArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersArguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By>>;
  where?: InputMaybe<Arguments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_SummariesArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Summaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Summaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Summaries_Order_By>>;
  where?: InputMaybe<Law_Summaries_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersViewsArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersViews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  argument_chats?: InputMaybe<Argument_Chats_Bool_Exp>;
  argument_chats_aggregate?: InputMaybe<Argument_Chats_Aggregate_Bool_Exp>;
  argument_resource_managers?: InputMaybe<Argument_Resource_Managers_Bool_Exp>;
  argument_resource_managers_aggregate?: InputMaybe<Argument_Resource_Managers_Aggregate_Bool_Exp>;
  arguments?: InputMaybe<Arguments_Bool_Exp>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Bool_Exp>;
  authentication_id?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_summaries?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  views?: InputMaybe<Views_Bool_Exp>;
  views_aggregate?: InputMaybe<Views_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "authentication_id" */
  UserAuthenticationIdKey = 'user_authentication_id_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  argument_chats?: InputMaybe<Argument_Chats_Arr_Rel_Insert_Input>;
  argument_resource_managers?: InputMaybe<Argument_Resource_Managers_Arr_Rel_Insert_Input>;
  arguments?: InputMaybe<Arguments_Arr_Rel_Insert_Input>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_summaries?: InputMaybe<Law_Summaries_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  views?: InputMaybe<Views_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  authentication_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  authentication_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  argument_chats_aggregate?: InputMaybe<Argument_Chats_Aggregate_Order_By>;
  argument_resource_managers_aggregate?: InputMaybe<Argument_Resource_Managers_Aggregate_Order_By>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Order_By>;
  authentication_id?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  views_aggregate?: InputMaybe<Views_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AuthenticationId = 'authentication_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AuthenticationId = 'authentication_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "views" */
export type Views = {
  __typename?: 'views';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "views" */
export type Views_Aggregate = {
  __typename?: 'views_aggregate';
  aggregate?: Maybe<Views_Aggregate_Fields>;
  nodes: Array<Views>;
};

export type Views_Aggregate_Bool_Exp = {
  count?: InputMaybe<Views_Aggregate_Bool_Exp_Count>;
};

export type Views_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Views_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "views" */
export type Views_Aggregate_Fields = {
  __typename?: 'views_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Views_Max_Fields>;
  min?: Maybe<Views_Min_Fields>;
};


/** aggregate fields of "views" */
export type Views_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "views" */
export type Views_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Views_Max_Order_By>;
  min?: InputMaybe<Views_Min_Order_By>;
};

/** input type for inserting array relation for remote table "views" */
export type Views_Arr_Rel_Insert_Input = {
  data: Array<Views_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Views_On_Conflict>;
};

/** Boolean expression to filter rows from the table "views". All fields are combined with a logical 'AND'. */
export type Views_Bool_Exp = {
  _and?: InputMaybe<Array<Views_Bool_Exp>>;
  _not?: InputMaybe<Views_Bool_Exp>;
  _or?: InputMaybe<Array<Views_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "views" */
export enum Views_Constraint {
  /** unique or primary key constraint on columns "id" */
  ViewsPkey = 'views_pkey'
}

/** input type for inserting data into table "views" */
export type Views_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Views_Max_Fields = {
  __typename?: 'views_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "views" */
export type Views_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Views_Min_Fields = {
  __typename?: 'views_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "views" */
export type Views_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "views" */
export type Views_Mutation_Response = {
  __typename?: 'views_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Views>;
};

/** on_conflict condition type for table "views" */
export type Views_On_Conflict = {
  constraint: Views_Constraint;
  update_columns?: Array<Views_Update_Column>;
  where?: InputMaybe<Views_Bool_Exp>;
};

/** Ordering options when selecting data from "views". */
export type Views_Order_By = {
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: views */
export type Views_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "views" */
export enum Views_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "views" */
export type Views_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "views" */
export type Views_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Views_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Views_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "views" */
export enum Views_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  UserId = 'user_id'
}

export type Views_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Views_Set_Input>;
  /** filter the rows which have to be updated */
  where: Views_Bool_Exp;
};

export type MyMutationMutationVariables = Exact<{
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
}>;


export type MyMutationMutation = { __typename?: 'mutation_root', insert_laws_one?: { __typename?: 'laws', id: string, api_law_id: string } | null };

export type FindLawsQueryVariables = Exact<{
  _eq1?: InputMaybe<Scalars['String']['input']>;
  _eq2?: InputMaybe<Scalars['String']['input']>;
  _eq3?: InputMaybe<Scalars['String']['input']>;
  _eq4?: InputMaybe<Scalars['uuid']['input']>;
  _eq5?: InputMaybe<Scalars['String']['input']>;
  _eq6?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindLawsQuery = { __typename?: 'query_root', laws: Array<{ __typename?: 'laws', id: string, api_law_id: string, arguments_aggregate: { __typename?: 'arguments_aggregate', aggregate?: { __typename?: 'arguments_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'arguments', title: string, description: string, created_at?: string | null, user: { __typename?: 'users', name?: string | null, id: string }, reactions_aggregate_1: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null } }> }, law_revisions: Array<{ __typename?: 'law_revisions', abbrev: string, abbrev_kana: string, abbrev_kana_seion: string, ad_year: string, enforcement_comment: string, enforcement_date: string, era: string, id: string, lang: string, year: string, title_kana_seion: string, title_kana: string, title: string, repeal_type: string, remain_in_force: string, promulgate_month: string, promulgate_day: string, old_law_title_kana_seion: string, old_law_title_kana: string, old_law_title: string, num_kanji: string, num: string, mission: string, api_law_data_info: string, api_law_revision_id: string, api_law_type_num: string, law_type: { __typename?: 'law_types', type: string, type_name: string }, law_category: { __typename?: 'law_categories', category_name: string, category_number: string }, law_status: { __typename?: 'law_statuses', status: string, status_text: string } }>, star: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null }, like: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null }, views: Array<{ __typename?: 'views', id: string }>, law_revisions_aggregate: { __typename?: 'law_revisions_aggregate', aggregate?: { __typename?: 'law_revisions_aggregate_fields', count: number } | null }, law_summaries_aggregate: { __typename?: 'law_summaries_aggregate', aggregate?: { __typename?: 'law_summaries_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'law_summaries', summary_text: string, user: { __typename?: 'users', id: string, name?: string | null }, reactions_aggregate: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null } }> }, comments_aggregate: { __typename?: 'comments_aggregate', aggregate?: { __typename?: 'comments_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'comments', text?: string | null, comment_reactions_aggregate: { __typename?: 'comment_reactions_aggregate', aggregate?: { __typename?: 'comment_reactions_aggregate_fields', count: number } | null }, user: { __typename?: 'users', id: string, name?: string | null } }> } }> };

export type FindLawQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
  _eq?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindLawQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', law_revisions: Array<{ __typename?: 'law_revisions', law_full_text: any, law_status: { __typename?: 'law_statuses', status: string, status_text: string }, law_type: { __typename?: 'law_types', type: string, type_name: string }, law_category: { __typename?: 'law_categories', category_number: string, category_name: string } }>, comments: Array<{ __typename?: 'comments', text?: string | null, created_at?: string | null, user: { __typename?: 'users', name?: string | null, id: string }, comment_reactions_aggregate: { __typename?: 'comment_reactions_aggregate', aggregate?: { __typename?: 'comment_reactions_aggregate_fields', count: number } | null }, comment_reactions: Array<{ __typename?: 'comment_reactions', user_id: string }> }> } | null };

export type FindCommentsByLawIdQueryVariables = Exact<{
  lawId: Scalars['uuid']['input'];
  _eq?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindCommentsByLawIdQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', comments: Array<{ __typename?: 'comments', text?: string | null, created_at?: string | null, user: { __typename?: 'users', name?: string | null, id: string }, comment_reactions_aggregate: { __typename?: 'comment_reactions_aggregate', aggregate?: { __typename?: 'comment_reactions_aggregate_fields', count: number } | null }, comment_reactions: Array<{ __typename?: 'comment_reactions', user_id: string }> }> } | null };


export const MyMutationDocument = gql`
    mutation MyMutation($api_law_id: String = "", $law_revisions: law_revisions_arr_rel_insert_input = {data: {}}) {
  insert_laws_one(
    object: {api_law_id: $api_law_id, law_revisions: $law_revisions}
  ) {
    id
    api_law_id
  }
}
    `;
export type MyMutationMutationFn = Apollo.MutationFunction<MyMutationMutation, MyMutationMutationVariables>;

/**
 * __useMyMutationMutation__
 *
 * To run a mutation, you first call `useMyMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMyMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [myMutationMutation, { data, loading, error }] = useMyMutationMutation({
 *   variables: {
 *      api_law_id: // value for 'api_law_id'
 *      law_revisions: // value for 'law_revisions'
 *   },
 * });
 */
export function useMyMutationMutation(baseOptions?: Apollo.MutationHookOptions<MyMutationMutation, MyMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MyMutationMutation, MyMutationMutationVariables>(MyMutationDocument, options);
      }
export type MyMutationMutationHookResult = ReturnType<typeof useMyMutationMutation>;
export type MyMutationMutationResult = Apollo.MutationResult<MyMutationMutation>;
export type MyMutationMutationOptions = Apollo.BaseMutationOptions<MyMutationMutation, MyMutationMutationVariables>;
export const FindLawsDocument = gql`
    query findLaws($_eq1: String = "0", $_eq2: String = "", $_eq3: String = "", $_eq4: uuid = "00000000-0000-0000-0000-000000000000", $_eq5: String = "", $_eq6: String = "") {
  laws(
    order_by: {law_revisions_aggregate: {max: {enforcement_date: asc}}, reactions_aggregate: {count: asc}}
  ) {
    id
    api_law_id
    arguments_aggregate(limit: 1) {
      aggregate {
        count
      }
      nodes {
        user {
          name
          id
        }
        title
        description
        created_at
        reactions_aggregate_1: reactions_aggregate(where: {type: {_eq: $_eq1}}) {
          aggregate {
            count
          }
        }
      }
    }
    law_revisions(limit: 1) {
      abbrev
      abbrev_kana
      abbrev_kana_seion
      ad_year
      enforcement_comment
      enforcement_date
      era
      id
      lang
      year
      title_kana_seion
      title_kana
      title
      repeal_type
      remain_in_force
      promulgate_month
      promulgate_day
      old_law_title_kana_seion
      old_law_title_kana
      old_law_title
      num_kanji
      num
      mission
      law_type {
        type
        type_name
      }
      law_category {
        category_name
        category_number
      }
      law_status {
        status
        status_text
      }
      api_law_data_info
      api_law_revision_id
      api_law_type_num
    }
    star: reactions_aggregate(where: {type: {_eq: $_eq2}}) {
      aggregate {
        count
      }
    }
    like: reactions_aggregate(where: {type: {_eq: $_eq3}}) {
      aggregate {
        count
      }
    }
    views(where: {user_id: {_eq: $_eq4}}) {
      id
    }
    law_revisions_aggregate {
      aggregate {
        count
      }
    }
    law_summaries_aggregate(limit: 1) {
      aggregate {
        count
      }
      nodes {
        summary_text
        user {
          id
          name
        }
        reactions_aggregate(where: {type: {_eq: $_eq5}}) {
          aggregate {
            count
          }
        }
      }
    }
    comments_aggregate {
      aggregate {
        count
      }
      nodes {
        comment_reactions_aggregate(where: {type: {_eq: $_eq6}}, limit: 1) {
          aggregate {
            count
          }
        }
        text
        user {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useFindLawsQuery__
 *
 * To run a query within a React component, call `useFindLawsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawsQuery({
 *   variables: {
 *      _eq1: // value for '_eq1'
 *      _eq2: // value for '_eq2'
 *      _eq3: // value for '_eq3'
 *      _eq4: // value for '_eq4'
 *      _eq5: // value for '_eq5'
 *      _eq6: // value for '_eq6'
 *   },
 * });
 */
export function useFindLawsQuery(baseOptions?: Apollo.QueryHookOptions<FindLawsQuery, FindLawsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawsQuery, FindLawsQueryVariables>(FindLawsDocument, options);
      }
export function useFindLawsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawsQuery, FindLawsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawsQuery, FindLawsQueryVariables>(FindLawsDocument, options);
        }
export function useFindLawsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawsQuery, FindLawsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawsQuery, FindLawsQueryVariables>(FindLawsDocument, options);
        }
export type FindLawsQueryHookResult = ReturnType<typeof useFindLawsQuery>;
export type FindLawsLazyQueryHookResult = ReturnType<typeof useFindLawsLazyQuery>;
export type FindLawsSuspenseQueryHookResult = ReturnType<typeof useFindLawsSuspenseQuery>;
export type FindLawsQueryResult = Apollo.QueryResult<FindLawsQuery, FindLawsQueryVariables>;
export const FindLawDocument = gql`
    query findLaw($id: uuid = "00000000-0000-0000-0000-000000000000", $_eq: uuid = "00000000-0000-0000-0000-000000000000") {
  laws_by_pk(id: $id) {
    law_revisions {
      law_full_text
      law_status {
        status
        status_text
      }
      law_type {
        type
        type_name
      }
      law_category {
        category_number
        category_name
      }
    }
    comments {
      text
      user {
        name
        id
      }
      created_at
      comment_reactions_aggregate {
        aggregate {
          count
        }
      }
      comment_reactions(where: {user_id: {_eq: $_eq}}) {
        user_id
      }
    }
  }
}
    `;

/**
 * __useFindLawQuery__
 *
 * To run a query within a React component, call `useFindLawQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawQuery({
 *   variables: {
 *      id: // value for 'id'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useFindLawQuery(baseOptions?: Apollo.QueryHookOptions<FindLawQuery, FindLawQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawQuery, FindLawQueryVariables>(FindLawDocument, options);
      }
export function useFindLawLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawQuery, FindLawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawQuery, FindLawQueryVariables>(FindLawDocument, options);
        }
export function useFindLawSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawQuery, FindLawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawQuery, FindLawQueryVariables>(FindLawDocument, options);
        }
export type FindLawQueryHookResult = ReturnType<typeof useFindLawQuery>;
export type FindLawLazyQueryHookResult = ReturnType<typeof useFindLawLazyQuery>;
export type FindLawSuspenseQueryHookResult = ReturnType<typeof useFindLawSuspenseQuery>;
export type FindLawQueryResult = Apollo.QueryResult<FindLawQuery, FindLawQueryVariables>;
export const FindCommentsByLawIdDocument = gql`
    query findCommentsByLawId($lawId: uuid!, $_eq: uuid = "00000000-0000-0000-0000-000000000000") {
  laws_by_pk(id: $lawId) {
    comments {
      text
      user {
        name
        id
      }
      created_at
      comment_reactions_aggregate {
        aggregate {
          count
        }
      }
      comment_reactions(where: {user_id: {_eq: $_eq}}) {
        user_id
      }
    }
  }
}
    `;

/**
 * __useFindCommentsByLawIdQuery__
 *
 * To run a query within a React component, call `useFindCommentsByLawIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCommentsByLawIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCommentsByLawIdQuery({
 *   variables: {
 *      lawId: // value for 'lawId'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useFindCommentsByLawIdQuery(baseOptions: Apollo.QueryHookOptions<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>(FindCommentsByLawIdDocument, options);
      }
export function useFindCommentsByLawIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>(FindCommentsByLawIdDocument, options);
        }
export function useFindCommentsByLawIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>(FindCommentsByLawIdDocument, options);
        }
export type FindCommentsByLawIdQueryHookResult = ReturnType<typeof useFindCommentsByLawIdQuery>;
export type FindCommentsByLawIdLazyQueryHookResult = ReturnType<typeof useFindCommentsByLawIdLazyQuery>;
export type FindCommentsByLawIdSuspenseQueryHookResult = ReturnType<typeof useFindCommentsByLawIdSuspenseQuery>;
export type FindCommentsByLawIdQueryResult = Apollo.QueryResult<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>;