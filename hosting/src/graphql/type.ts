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

/** columns and relationships of "arguments" */
export type Arguments = {
  __typename?: 'arguments';
  author_id: Scalars['uuid']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
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
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "arguments" */
export enum Arguments_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArgumentsPkey = 'arguments_pkey'
}

/** input type for inserting data into table "arguments" */
export type Arguments_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
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
  author_id?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
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

/** columns and relationships of "comment_reactions" */
export type Comment_Reactions = {
  __typename?: 'comment_reactions';
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  type: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
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
  avg?: Maybe<Comment_Reactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Comment_Reactions_Max_Fields>;
  min?: Maybe<Comment_Reactions_Min_Fields>;
  stddev?: Maybe<Comment_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Reactions_Sum_Fields>;
  var_pop?: Maybe<Comment_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Comment_Reactions_Variance_Fields>;
};


/** aggregate fields of "comment_reactions" */
export type Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comment_reactions" */
export type Comment_Reactions_Aggregate_Order_By = {
  avg?: InputMaybe<Comment_Reactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Reactions_Max_Order_By>;
  min?: InputMaybe<Comment_Reactions_Min_Order_By>;
  stddev?: InputMaybe<Comment_Reactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Reactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Reactions_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Reactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Reactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment_reactions" */
export type Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Comment_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Reactions_Avg_Fields = {
  __typename?: 'comment_reactions_avg_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "comment_reactions" */
export type Comment_Reactions_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment_reactions". All fields are combined with a logical 'AND'. */
export type Comment_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Reactions_Bool_Exp>>;
  _not?: InputMaybe<Comment_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Reactions_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_reactions" */
export enum Comment_Reactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentReactionsPkey = 'comment_reactions_pkey'
}

/** input type for incrementing numeric columns in table "comment_reactions" */
export type Comment_Reactions_Inc_Input = {
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "comment_reactions" */
export type Comment_Reactions_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Comment_Reactions_Max_Fields = {
  __typename?: 'comment_reactions_max_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "comment_reactions" */
export type Comment_Reactions_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Reactions_Min_Fields = {
  __typename?: 'comment_reactions_min_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "comment_reactions" */
export type Comment_Reactions_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
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
  comment?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comment_reactions */
export type Comment_Reactions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comment_reactions" */
export enum Comment_Reactions_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comment_reactions" */
export type Comment_Reactions_Set_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Comment_Reactions_Stddev_Fields = {
  __typename?: 'comment_reactions_stddev_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Reactions_Stddev_Pop_Fields = {
  __typename?: 'comment_reactions_stddev_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Reactions_Stddev_Samp_Fields = {
  __typename?: 'comment_reactions_stddev_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "comment_reactions" */
export type Comment_Reactions_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
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
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Comment_Reactions_Sum_Fields = {
  __typename?: 'comment_reactions_sum_fields';
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "comment_reactions" */
export type Comment_Reactions_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "comment_reactions" */
export enum Comment_Reactions_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

export type Comment_Reactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Comment_Reactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comment_Reactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Comment_Reactions_Var_Pop_Fields = {
  __typename?: 'comment_reactions_var_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "comment_reactions" */
export type Comment_Reactions_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Reactions_Var_Samp_Fields = {
  __typename?: 'comment_reactions_var_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "comment_reactions" */
export type Comment_Reactions_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Reactions_Variance_Fields = {
  __typename?: 'comment_reactions_variance_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "comment_reactions" */
export type Comment_Reactions_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** An object relationship */
  argument?: Maybe<Arguments>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  author_id: Scalars['uuid']['output'];
  /** An array relationship */
  comment_reactions: Array<Comment_Reactions>;
  /** An aggregate relationship */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law_revision_column?: Maybe<Law_Revision_Columns>;
  law_revision_column_column_id?: Maybe<Scalars['String']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
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
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  comment_reactions?: InputMaybe<Comment_Reactions_Bool_Exp>;
  comment_reactions_aggregate?: InputMaybe<Comment_Reactions_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  law_revision_column_column_id?: InputMaybe<String_Comparison_Exp>;
  law_revision_column_id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  comment_reactions?: InputMaybe<Comment_Reactions_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Obj_Rel_Insert_Input>;
  law_revision_column_column_id?: InputMaybe<Scalars['String']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_column_id?: Maybe<Scalars['String']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revision_column_column_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_column_id?: Maybe<Scalars['String']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revision_column_column_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  argument_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  comment_reactions_aggregate?: InputMaybe<Comment_Reactions_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Order_By>;
  law_revision_column_column_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LawRevisionColumnColumnId = 'law_revision_column_column_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_column_id?: InputMaybe<Scalars['String']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_column_id?: InputMaybe<Scalars['String']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LawRevisionColumnColumnId = 'law_revision_column_column_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
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
  category_ja: Scalars['String']['output'];
  category_number: Scalars['String']['output'];
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
  category_ja?: InputMaybe<String_Comparison_Exp>;
  category_number?: InputMaybe<String_Comparison_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "law_categories" */
export enum Law_Categories_Constraint {
  /** unique or primary key constraint on columns "category_ja" */
  LawCategoriesPkey = 'law_categories_pkey'
}

/** input type for inserting data into table "law_categories" */
export type Law_Categories_Insert_Input = {
  category_ja?: InputMaybe<Scalars['String']['input']>;
  category_number?: InputMaybe<Scalars['String']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Law_Categories_Max_Fields = {
  __typename?: 'law_categories_max_fields';
  category_ja?: Maybe<Scalars['String']['output']>;
  category_number?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Law_Categories_Min_Fields = {
  __typename?: 'law_categories_min_fields';
  category_ja?: Maybe<Scalars['String']['output']>;
  category_number?: Maybe<Scalars['String']['output']>;
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
  category_ja?: InputMaybe<Order_By>;
  category_number?: InputMaybe<Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
};

/** primary key columns input for table: law_categories */
export type Law_Categories_Pk_Columns_Input = {
  category_ja: Scalars['String']['input'];
};

/** select columns of table "law_categories" */
export enum Law_Categories_Select_Column {
  /** column name */
  CategoryJa = 'category_ja',
  /** column name */
  CategoryNumber = 'category_number'
}

/** input type for updating data in table "law_categories" */
export type Law_Categories_Set_Input = {
  category_ja?: InputMaybe<Scalars['String']['input']>;
  category_number?: InputMaybe<Scalars['String']['input']>;
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
  category_ja?: InputMaybe<Scalars['String']['input']>;
  category_number?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "law_categories" */
export enum Law_Categories_Update_Column {
  /** column name */
  CategoryJa = 'category_ja',
  /** column name */
  CategoryNumber = 'category_number'
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
  column_id: Scalars['String']['output'];
  column_text?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law_revision: Law_Revisions;
  law_revision_id: Scalars['uuid']['output'];
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
  column_id?: InputMaybe<String_Comparison_Exp>;
  column_text?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revision?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revision_id?: InputMaybe<Uuid_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "law_revision_columns" */
export enum Law_Revision_Columns_Constraint {
  /** unique or primary key constraint on columns "id", "column_id" */
  LawRevisionColumnPkey = 'law_revision_column_pkey'
}

/** input type for inserting data into table "law_revision_columns" */
export type Law_Revision_Columns_Insert_Input = {
  column_id?: InputMaybe<Scalars['String']['input']>;
  column_text?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision?: InputMaybe<Law_Revisions_Obj_Rel_Insert_Input>;
  law_revision_id?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Law_Revision_Columns_Max_Fields = {
  __typename?: 'law_revision_columns_max_fields';
  column_id?: Maybe<Scalars['String']['output']>;
  column_text?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_revision_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_revision_columns" */
export type Law_Revision_Columns_Max_Order_By = {
  column_id?: InputMaybe<Order_By>;
  column_text?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revision_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Revision_Columns_Min_Fields = {
  __typename?: 'law_revision_columns_min_fields';
  column_id?: Maybe<Scalars['String']['output']>;
  column_text?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_revision_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_revision_columns" */
export type Law_Revision_Columns_Min_Order_By = {
  column_id?: InputMaybe<Order_By>;
  column_text?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revision_id?: InputMaybe<Order_By>;
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
  column_id?: InputMaybe<Order_By>;
  column_text?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  law_revision?: InputMaybe<Law_Revisions_Order_By>;
  law_revision_id?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: law_revision_columns */
export type Law_Revision_Columns_Pk_Columns_Input = {
  column_id: Scalars['String']['input'];
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_revision_columns" */
export enum Law_Revision_Columns_Select_Column {
  /** column name */
  ColumnId = 'column_id',
  /** column name */
  ColumnText = 'column_text',
  /** column name */
  Id = 'id',
  /** column name */
  LawRevisionId = 'law_revision_id'
}

/** input type for updating data in table "law_revision_columns" */
export type Law_Revision_Columns_Set_Input = {
  column_id?: InputMaybe<Scalars['String']['input']>;
  column_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_id?: InputMaybe<Scalars['uuid']['input']>;
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
  column_id?: InputMaybe<Scalars['String']['input']>;
  column_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "law_revision_columns" */
export enum Law_Revision_Columns_Update_Column {
  /** column name */
  ColumnId = 'column_id',
  /** column name */
  ColumnText = 'column_text',
  /** column name */
  Id = 'id',
  /** column name */
  LawRevisionId = 'law_revision_id'
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
  law_id: Scalars['uuid']['output'];
  /** An array relationship */
  law_revision_columns: Array<Law_Revision_Columns>;
  /** An aggregate relationship */
  law_revision_columns_aggregate: Law_Revision_Columns_Aggregate;
  /** An object relationship */
  law_status: Law_Statuses;
  /** An object relationship */
  law_type: Law_Types;
  mission: Scalars['String']['output'];
  num?: Maybe<Scalars['String']['output']>;
  num_kanji?: Maybe<Scalars['String']['output']>;
  old_law_title?: Maybe<Scalars['String']['output']>;
  old_law_title_kana?: Maybe<Scalars['String']['output']>;
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
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revision_columns?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  law_revision_columns_aggregate?: InputMaybe<Law_Revision_Columns_Aggregate_Bool_Exp>;
  law_status?: InputMaybe<Law_Statuses_Bool_Exp>;
  law_type?: InputMaybe<Law_Types_Bool_Exp>;
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
  LawRevisionsPkey = 'law_revisions_pkey'
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
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_columns?: InputMaybe<Law_Revision_Columns_Arr_Rel_Insert_Input>;
  law_status?: InputMaybe<Law_Statuses_Obj_Rel_Insert_Input>;
  law_type?: InputMaybe<Law_Types_Obj_Rel_Insert_Input>;
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
  law_id?: Maybe<Scalars['uuid']['output']>;
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
  law_id?: InputMaybe<Order_By>;
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
  law_id?: Maybe<Scalars['uuid']['output']>;
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
  law_id?: InputMaybe<Order_By>;
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
  law_id?: InputMaybe<Order_By>;
  law_revision_columns_aggregate?: InputMaybe<Law_Revision_Columns_Aggregate_Order_By>;
  law_status?: InputMaybe<Law_Statuses_Order_By>;
  law_type?: InputMaybe<Law_Types_Order_By>;
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
  LawId = 'law_id',
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
  law_id?: InputMaybe<Scalars['uuid']['input']>;
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
  law_id?: InputMaybe<Scalars['uuid']['input']>;
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
  LawId = 'law_id',
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
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  status_en: Scalars['String']['output'];
  status_ja: Scalars['String']['output'];
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
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  status_en?: InputMaybe<String_Comparison_Exp>;
  status_ja?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_statuses" */
export enum Law_Statuses_Constraint {
  /** unique or primary key constraint on columns "status_en" */
  LawStatusPkey = 'law_status_pkey'
}

/** input type for inserting data into table "law_statuses" */
export type Law_Statuses_Insert_Input = {
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  status_en?: InputMaybe<Scalars['String']['input']>;
  status_ja?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Law_Statuses_Max_Fields = {
  __typename?: 'law_statuses_max_fields';
  status_en?: Maybe<Scalars['String']['output']>;
  status_ja?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Law_Statuses_Min_Fields = {
  __typename?: 'law_statuses_min_fields';
  status_en?: Maybe<Scalars['String']['output']>;
  status_ja?: Maybe<Scalars['String']['output']>;
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
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  status_en?: InputMaybe<Order_By>;
  status_ja?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_statuses */
export type Law_Statuses_Pk_Columns_Input = {
  status_en: Scalars['String']['input'];
};

/** select columns of table "law_statuses" */
export enum Law_Statuses_Select_Column {
  /** column name */
  StatusEn = 'status_en',
  /** column name */
  StatusJa = 'status_ja'
}

/** input type for updating data in table "law_statuses" */
export type Law_Statuses_Set_Input = {
  status_en?: InputMaybe<Scalars['String']['input']>;
  status_ja?: InputMaybe<Scalars['String']['input']>;
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
  status_en?: InputMaybe<Scalars['String']['input']>;
  status_ja?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "law_statuses" */
export enum Law_Statuses_Update_Column {
  /** column name */
  StatusEn = 'status_en',
  /** column name */
  StatusJa = 'status_ja'
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
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  text: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
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
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_summaries" */
export enum Law_Summaries_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawSummariesPkey = 'law_summaries_pkey'
}

/** input type for inserting data into table "law_summaries" */
export type Law_Summaries_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Law_Summaries_Max_Fields = {
  __typename?: 'law_summaries_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_summaries" */
export type Law_Summaries_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Summaries_Min_Fields = {
  __typename?: 'law_summaries_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_summaries" */
export type Law_Summaries_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  text?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_summaries */
export type Law_Summaries_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_summaries" */
export enum Law_Summaries_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "law_summaries" */
export type Law_Summaries_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "law_summaries" */
export enum Law_Summaries_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
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
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  type_en: Scalars['String']['output'];
  type_ja: Scalars['String']['output'];
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
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  type_en?: InputMaybe<String_Comparison_Exp>;
  type_ja?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_types" */
export enum Law_Types_Constraint {
  /** unique or primary key constraint on columns "type_en" */
  LawTypesPkey = 'law_types_pkey'
}

/** input type for inserting data into table "law_types" */
export type Law_Types_Insert_Input = {
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  type_en?: InputMaybe<Scalars['String']['input']>;
  type_ja?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Law_Types_Max_Fields = {
  __typename?: 'law_types_max_fields';
  type_en?: Maybe<Scalars['String']['output']>;
  type_ja?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Law_Types_Min_Fields = {
  __typename?: 'law_types_min_fields';
  type_en?: Maybe<Scalars['String']['output']>;
  type_ja?: Maybe<Scalars['String']['output']>;
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
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  type_en?: InputMaybe<Order_By>;
  type_ja?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_types */
export type Law_Types_Pk_Columns_Input = {
  type_en: Scalars['String']['input'];
};

/** select columns of table "law_types" */
export enum Law_Types_Select_Column {
  /** column name */
  TypeEn = 'type_en',
  /** column name */
  TypeJa = 'type_ja'
}

/** input type for updating data in table "law_types" */
export type Law_Types_Set_Input = {
  type_en?: InputMaybe<Scalars['String']['input']>;
  type_ja?: InputMaybe<Scalars['String']['input']>;
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
  type_en?: InputMaybe<Scalars['String']['input']>;
  type_ja?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "law_types" */
export enum Law_Types_Update_Column {
  /** column name */
  TypeEn = 'type_en',
  /** column name */
  TypeJa = 'type_ja'
}

export type Law_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Types_Bool_Exp;
};

/** columns and relationships of "law_views" */
export type Law_Views = {
  __typename?: 'law_views';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "law_views" */
export type Law_Views_Aggregate = {
  __typename?: 'law_views_aggregate';
  aggregate?: Maybe<Law_Views_Aggregate_Fields>;
  nodes: Array<Law_Views>;
};

export type Law_Views_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Views_Aggregate_Bool_Exp_Count>;
};

export type Law_Views_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Views_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_views" */
export type Law_Views_Aggregate_Fields = {
  __typename?: 'law_views_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Views_Max_Fields>;
  min?: Maybe<Law_Views_Min_Fields>;
};


/** aggregate fields of "law_views" */
export type Law_Views_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_views" */
export type Law_Views_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Views_Max_Order_By>;
  min?: InputMaybe<Law_Views_Min_Order_By>;
};

/** input type for inserting array relation for remote table "law_views" */
export type Law_Views_Arr_Rel_Insert_Input = {
  data: Array<Law_Views_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Views_On_Conflict>;
};

/** Boolean expression to filter rows from the table "law_views". All fields are combined with a logical 'AND'. */
export type Law_Views_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Views_Bool_Exp>>;
  _not?: InputMaybe<Law_Views_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Views_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_views" */
export enum Law_Views_Constraint {
  /** unique or primary key constraint on columns "id" */
  ViewsPkey = 'views_pkey'
}

/** input type for inserting data into table "law_views" */
export type Law_Views_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Law_Views_Max_Fields = {
  __typename?: 'law_views_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_views" */
export type Law_Views_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Views_Min_Fields = {
  __typename?: 'law_views_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_views" */
export type Law_Views_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_views" */
export type Law_Views_Mutation_Response = {
  __typename?: 'law_views_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Views>;
};

/** on_conflict condition type for table "law_views" */
export type Law_Views_On_Conflict = {
  constraint: Law_Views_Constraint;
  update_columns?: Array<Law_Views_Update_Column>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
};

/** Ordering options when selecting data from "law_views". */
export type Law_Views_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_views */
export type Law_Views_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_views" */
export enum Law_Views_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "law_views" */
export type Law_Views_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "law_views" */
export type Law_Views_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Views_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Views_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "law_views" */
export enum Law_Views_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Law_Views_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Views_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Views_Bool_Exp;
};

/** columns and relationships of "laws" */
export type Laws = {
  __typename?: 'laws';
  api_law_id: Scalars['String']['output'];
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
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
  law_views: Array<Law_Views>;
  /** An aggregate relationship */
  law_views_aggregate: Law_Views_Aggregate;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
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
export type LawsLaw_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
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
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  law_summaries?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Bool_Exp>;
  law_views?: InputMaybe<Law_Views_Bool_Exp>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Bool_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "laws" */
export enum Laws_Constraint {
  /** unique or primary key constraint on columns "id" */
  LawsPkey = 'laws_pkey'
}

/** input type for inserting data into table "laws" */
export type Laws_Insert_Input = {
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  arguments?: InputMaybe<Arguments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  law_summaries?: InputMaybe<Law_Summaries_Arr_Rel_Insert_Input>;
  law_views?: InputMaybe<Law_Views_Arr_Rel_Insert_Input>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Laws_Max_Fields = {
  __typename?: 'laws_max_fields';
  api_law_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Laws_Min_Fields = {
  __typename?: 'laws_min_fields';
  api_law_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
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
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Order_By>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "laws" */
export type Laws_Set_Input = {
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "laws" */
export enum Laws_Update_Column {
  /** column name */
  ApiLawId = 'api_law_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
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
  /** delete data from the table: "arguments" */
  delete_arguments?: Maybe<Arguments_Mutation_Response>;
  /** delete single row from the table: "arguments" */
  delete_arguments_by_pk?: Maybe<Arguments>;
  /** delete data from the table: "comment_reactions" */
  delete_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** delete single row from the table: "comment_reactions" */
  delete_comment_reactions_by_pk?: Maybe<Comment_Reactions>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
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
  /** delete data from the table: "law_views" */
  delete_law_views?: Maybe<Law_Views_Mutation_Response>;
  /** delete single row from the table: "law_views" */
  delete_law_views_by_pk?: Maybe<Law_Views>;
  /** delete data from the table: "laws" */
  delete_laws?: Maybe<Laws_Mutation_Response>;
  /** delete single row from the table: "laws" */
  delete_laws_by_pk?: Maybe<Laws>;
  /** delete data from the table: "reactions" */
  delete_reactions?: Maybe<Reactions_Mutation_Response>;
  /** delete single row from the table: "reactions" */
  delete_reactions_by_pk?: Maybe<Reactions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "arguments" */
  insert_arguments?: Maybe<Arguments_Mutation_Response>;
  /** insert a single row into the table: "arguments" */
  insert_arguments_one?: Maybe<Arguments>;
  /** insert data into the table: "comment_reactions" */
  insert_comment_reactions?: Maybe<Comment_Reactions_Mutation_Response>;
  /** insert a single row into the table: "comment_reactions" */
  insert_comment_reactions_one?: Maybe<Comment_Reactions>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
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
  /** insert data into the table: "law_views" */
  insert_law_views?: Maybe<Law_Views_Mutation_Response>;
  /** insert a single row into the table: "law_views" */
  insert_law_views_one?: Maybe<Law_Views>;
  /** insert data into the table: "laws" */
  insert_laws?: Maybe<Laws_Mutation_Response>;
  /** insert a single row into the table: "laws" */
  insert_laws_one?: Maybe<Laws>;
  /** insert data into the table: "reactions" */
  insert_reactions?: Maybe<Reactions_Mutation_Response>;
  /** insert a single row into the table: "reactions" */
  insert_reactions_one?: Maybe<Reactions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "arguments" */
  update_arguments?: Maybe<Arguments_Mutation_Response>;
  /** update single row of the table: "arguments" */
  update_arguments_by_pk?: Maybe<Arguments>;
  /** update multiples rows of table: "arguments" */
  update_arguments_many?: Maybe<Array<Maybe<Arguments_Mutation_Response>>>;
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
  /** update data of the table: "law_views" */
  update_law_views?: Maybe<Law_Views_Mutation_Response>;
  /** update single row of the table: "law_views" */
  update_law_views_by_pk?: Maybe<Law_Views>;
  /** update multiples rows of table: "law_views" */
  update_law_views_many?: Maybe<Array<Maybe<Law_Views_Mutation_Response>>>;
  /** update data of the table: "laws" */
  update_laws?: Maybe<Laws_Mutation_Response>;
  /** update single row of the table: "laws" */
  update_laws_by_pk?: Maybe<Laws>;
  /** update multiples rows of table: "laws" */
  update_laws_many?: Maybe<Array<Maybe<Laws_Mutation_Response>>>;
  /** update data of the table: "reactions" */
  update_reactions?: Maybe<Reactions_Mutation_Response>;
  /** update single row of the table: "reactions" */
  update_reactions_by_pk?: Maybe<Reactions>;
  /** update multiples rows of table: "reactions" */
  update_reactions_many?: Maybe<Array<Maybe<Reactions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
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
export type Mutation_RootDelete_Law_CategoriesArgs = {
  where: Law_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Categories_By_PkArgs = {
  category_ja: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_Revision_ColumnsArgs = {
  where: Law_Revision_Columns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Revision_Columns_By_PkArgs = {
  column_id: Scalars['String']['input'];
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
  status_en: Scalars['String']['input'];
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
  type_en: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_ViewsArgs = {
  where: Law_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Views_By_PkArgs = {
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
export type Mutation_RootDelete_ReactionsArgs = {
  where: Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reactions_By_PkArgs = {
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
export type Mutation_RootInsert_Law_ViewsArgs = {
  objects: Array<Law_Views_Insert_Input>;
  on_conflict?: InputMaybe<Law_Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Views_OneArgs = {
  object: Law_Views_Insert_Input;
  on_conflict?: InputMaybe<Law_Views_On_Conflict>;
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
export type Mutation_RootUpdate_Comment_ReactionsArgs = {
  _inc?: InputMaybe<Comment_Reactions_Inc_Input>;
  _set?: InputMaybe<Comment_Reactions_Set_Input>;
  where: Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Reactions_By_PkArgs = {
  _inc?: InputMaybe<Comment_Reactions_Inc_Input>;
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
export type Mutation_RootUpdate_Law_ViewsArgs = {
  _set?: InputMaybe<Law_Views_Set_Input>;
  where: Law_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Views_By_PkArgs = {
  _set?: InputMaybe<Law_Views_Set_Input>;
  pk_columns: Law_Views_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Views_ManyArgs = {
  updates: Array<Law_Views_Updates>;
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
export type Mutation_RootUpdate_ReactionsArgs = {
  _inc?: InputMaybe<Reactions_Inc_Input>;
  _set?: InputMaybe<Reactions_Set_Input>;
  where: Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reactions_By_PkArgs = {
  _inc?: InputMaybe<Reactions_Inc_Input>;
  _set?: InputMaybe<Reactions_Set_Input>;
  pk_columns: Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reactions_ManyArgs = {
  updates: Array<Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  /** fetch data from the table: "arguments" using primary key columns */
  arguments_by_pk?: Maybe<Arguments>;
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
  /** An array relationship */
  law_views: Array<Law_Views>;
  /** An aggregate relationship */
  law_views_aggregate: Law_Views_Aggregate;
  /** fetch data from the table: "law_views" using primary key columns */
  law_views_by_pk?: Maybe<Law_Views>;
  /** fetch data from the table: "laws" */
  laws: Array<Laws>;
  /** fetch aggregated fields from the table: "laws" */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  /** fetch data from the table: "reactions" using primary key columns */
  reactions_by_pk?: Maybe<Reactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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
  category_ja: Scalars['String']['input'];
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
  column_id: Scalars['String']['input'];
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
  status_en: Scalars['String']['input'];
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
  type_en: Scalars['String']['input'];
};


export type Query_RootLaw_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
};


export type Query_RootLaw_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
};


export type Query_RootLaw_Views_By_PkArgs = {
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

/** columns and relationships of "reactions" */
export type Reactions = {
  __typename?: 'reactions';
  /** An object relationship */
  argument?: Maybe<Arguments>;
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law?: Maybe<Laws>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  law_revision_column?: Maybe<Law_Revision_Columns>;
  law_revision_column_column_id?: Maybe<Scalars['String']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  law_summary?: Maybe<Law_Summaries>;
  law_summary_id?: Maybe<Scalars['uuid']['output']>;
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
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
  avg?: Maybe<Reactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Reactions_Max_Fields>;
  min?: Maybe<Reactions_Min_Fields>;
  stddev?: Maybe<Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Reactions_Sum_Fields>;
  var_pop?: Maybe<Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Reactions_Var_Samp_Fields>;
  variance?: Maybe<Reactions_Variance_Fields>;
};


/** aggregate fields of "reactions" */
export type Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "reactions" */
export type Reactions_Aggregate_Order_By = {
  avg?: InputMaybe<Reactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reactions_Max_Order_By>;
  min?: InputMaybe<Reactions_Min_Order_By>;
  stddev?: InputMaybe<Reactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reactions_Sum_Order_By>;
  var_pop?: InputMaybe<Reactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reactions" */
export type Reactions_Arr_Rel_Insert_Input = {
  data: Array<Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Reactions_Avg_Fields = {
  __typename?: 'reactions_avg_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "reactions" */
export type Reactions_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reactions". All fields are combined with a logical 'AND'. */
export type Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<Reactions_Bool_Exp>>;
  _not?: InputMaybe<Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Reactions_Bool_Exp>>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  law_revision_column_column_id?: InputMaybe<String_Comparison_Exp>;
  law_revision_column_id?: InputMaybe<Uuid_Comparison_Exp>;
  law_summary?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summary_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "reactions" */
export enum Reactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReactionPkey = 'reaction_pkey'
}

/** input type for incrementing numeric columns in table "reactions" */
export type Reactions_Inc_Input = {
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "reactions" */
export type Reactions_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Obj_Rel_Insert_Input>;
  law_revision_column_column_id?: InputMaybe<Scalars['String']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  law_summary?: InputMaybe<Law_Summaries_Obj_Rel_Insert_Input>;
  law_summary_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Reactions_Max_Fields = {
  __typename?: 'reactions_max_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_column_id?: Maybe<Scalars['String']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  law_summary_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "reactions" */
export type Reactions_Max_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column_column_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  law_summary_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reactions_Min_Fields = {
  __typename?: 'reactions_min_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_revision_column_column_id?: Maybe<Scalars['String']['output']>;
  law_revision_column_id?: Maybe<Scalars['uuid']['output']>;
  law_summary_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "reactions" */
export type Reactions_Min_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column_column_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  law_summary_id?: InputMaybe<Order_By>;
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
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_revision_column?: InputMaybe<Law_Revision_Columns_Order_By>;
  law_revision_column_column_id?: InputMaybe<Order_By>;
  law_revision_column_id?: InputMaybe<Order_By>;
  law_summary?: InputMaybe<Law_Summaries_Order_By>;
  law_summary_id?: InputMaybe<Order_By>;
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
  ArgumentId = 'argument_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  LawRevisionColumnColumnId = 'law_revision_column_column_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  LawSummaryId = 'law_summary_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reactions" */
export type Reactions_Set_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_column_id?: InputMaybe<Scalars['String']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  law_summary_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Reactions_Stddev_Fields = {
  __typename?: 'reactions_stddev_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "reactions" */
export type Reactions_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reactions_Stddev_Pop_Fields = {
  __typename?: 'reactions_stddev_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "reactions" */
export type Reactions_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reactions_Stddev_Samp_Fields = {
  __typename?: 'reactions_stddev_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "reactions" */
export type Reactions_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
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
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision_column_column_id?: InputMaybe<Scalars['String']['input']>;
  law_revision_column_id?: InputMaybe<Scalars['uuid']['input']>;
  law_summary_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Reactions_Sum_Fields = {
  __typename?: 'reactions_sum_fields';
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "reactions" */
export type Reactions_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "reactions" */
export enum Reactions_Update_Column {
  /** column name */
  ArgumentId = 'argument_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LawId = 'law_id',
  /** column name */
  LawRevisionColumnColumnId = 'law_revision_column_column_id',
  /** column name */
  LawRevisionColumnId = 'law_revision_column_id',
  /** column name */
  LawSummaryId = 'law_summary_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Reactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Reactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Reactions_Var_Pop_Fields = {
  __typename?: 'reactions_var_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "reactions" */
export type Reactions_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reactions_Var_Samp_Fields = {
  __typename?: 'reactions_var_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "reactions" */
export type Reactions_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reactions_Variance_Fields = {
  __typename?: 'reactions_variance_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "reactions" */
export type Reactions_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  /** fetch data from the table: "arguments" using primary key columns */
  arguments_by_pk?: Maybe<Arguments>;
  /** fetch data from the table in a streaming manner: "arguments" */
  arguments_stream: Array<Arguments>;
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
  /** An array relationship */
  law_views: Array<Law_Views>;
  /** An aggregate relationship */
  law_views_aggregate: Law_Views_Aggregate;
  /** fetch data from the table: "law_views" using primary key columns */
  law_views_by_pk?: Maybe<Law_Views>;
  /** fetch data from the table in a streaming manner: "law_views" */
  law_views_stream: Array<Law_Views>;
  /** fetch data from the table: "laws" */
  laws: Array<Laws>;
  /** fetch aggregated fields from the table: "laws" */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** fetch data from the table in a streaming manner: "laws" */
  laws_stream: Array<Laws>;
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  /** fetch data from the table: "reactions" using primary key columns */
  reactions_by_pk?: Maybe<Reactions>;
  /** fetch data from the table in a streaming manner: "reactions" */
  reactions_stream: Array<Reactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
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
  category_ja: Scalars['String']['input'];
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
  column_id: Scalars['String']['input'];
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
  status_en: Scalars['String']['input'];
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
  type_en: Scalars['String']['input'];
};


export type Subscription_RootLaw_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Types_Bool_Exp>;
};


export type Subscription_RootLaw_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
};


export type Subscription_RootLaw_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
};


export type Subscription_RootLaw_Views_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Views_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Views_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
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
  age?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  authentication_id: Scalars['String']['output'];
  /** An array relationship */
  comment_reactions: Array<Comment_Reactions>;
  /** An aggregate relationship */
  comment_reactions_aggregate: Comment_Reactions_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  icon_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  law_summaries: Array<Law_Summaries>;
  /** An aggregate relationship */
  law_summaries_aggregate: Law_Summaries_Aggregate;
  /** An array relationship */
  law_views: Array<Law_Views>;
  /** An aggregate relationship */
  law_views_aggregate: Law_Views_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  reactions: Array<Reactions>;
  /** An aggregate relationship */
  reactions_aggregate: Reactions_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
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
export type UsersComment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Reactions_Order_By>>;
  where?: InputMaybe<Comment_Reactions_Bool_Exp>;
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
export type UsersLaw_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Views_Order_By>>;
  where?: InputMaybe<Law_Views_Bool_Exp>;
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

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  arguments?: InputMaybe<Arguments_Bool_Exp>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Bool_Exp>;
  authentication_id?: InputMaybe<String_Comparison_Exp>;
  comment_reactions?: InputMaybe<Comment_Reactions_Bool_Exp>;
  comment_reactions_aggregate?: InputMaybe<Comment_Reactions_Aggregate_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  icon_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_summaries?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Bool_Exp>;
  law_views?: InputMaybe<Law_Views_Bool_Exp>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reactions?: InputMaybe<Reactions_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  arguments?: InputMaybe<Arguments_Arr_Rel_Insert_Input>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  comment_reactions?: InputMaybe<Comment_Reactions_Arr_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_summaries?: InputMaybe<Law_Summaries_Arr_Rel_Insert_Input>;
  law_views?: InputMaybe<Law_Views_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  reactions?: InputMaybe<Reactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  age?: Maybe<Scalars['Int']['output']>;
  authentication_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  icon_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  age?: Maybe<Scalars['Int']['output']>;
  authentication_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  icon_url?: Maybe<Scalars['String']['output']>;
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
  age?: InputMaybe<Order_By>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Order_By>;
  authentication_id?: InputMaybe<Order_By>;
  comment_reactions_aggregate?: InputMaybe<Comment_Reactions_Aggregate_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  icon_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Order_By>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  AuthenticationId = 'authentication_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
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
  age?: InputMaybe<Scalars['Int']['input']>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  AuthenticationId = 'authentication_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
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

export type MyMutationMutationVariables = Exact<{
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
}>;


export type MyMutationMutation = { __typename?: 'mutation_root', insert_laws_one?: { __typename?: 'laws', id: string } | null };

export type FindLawsQueryVariables = Exact<{
  type?: InputMaybe<Scalars['Int']['input']>;
  star?: InputMaybe<Scalars['Int']['input']>;
  like?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  type3?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindLawsQuery = { __typename?: 'query_root', laws: Array<{ __typename?: 'laws', id: string, api_law_id: string, arguments_aggregate: { __typename?: 'arguments_aggregate', aggregate?: { __typename?: 'arguments_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'arguments', title?: string | null, description?: string | null, created_at?: string | null, user: { __typename?: 'users', name: string, id: string }, reactions_aggregate_1: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null } }> }, law_revisions: Array<{ __typename?: 'law_revisions', abbrev: string, abbrev_kana: string, abbrev_kana_seion: string, ad_year: string, enforcement_comment: string, enforcement_date: string, era: string, id: string, lang: string, year: string, title_kana_seion: string, title_kana: string, title: string, repeal_type: string, remain_in_force: string, promulgate_month: string, promulgate_day: string, old_law_title_kana_seion: string, old_law_title_kana?: string | null, old_law_title?: string | null, num_kanji?: string | null, num?: string | null, mission: string, api_law_data_info: string, api_law_revision_id: string, api_law_type_num: string, law_type: { __typename?: 'law_types', type_en: string, type_ja: string }, law_category: { __typename?: 'law_categories', category_number: string, category_ja: string }, law_status: { __typename?: 'law_statuses', status_en: string, status_ja: string } }>, star: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null }, like: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null }, law_views: Array<{ __typename?: 'law_views', id: string }>, law_revisions_aggregate: { __typename?: 'law_revisions_aggregate', aggregate?: { __typename?: 'law_revisions_aggregate_fields', count: number } | null }, law_summaries_aggregate: { __typename?: 'law_summaries_aggregate', aggregate?: { __typename?: 'law_summaries_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'law_summaries', text: string, user: { __typename?: 'users', id: string, name: string } }> } }> };

export type FindLawQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _eq1?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindLawQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', id: string, law_views: Array<{ __typename?: 'law_views', id: string }>, like: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null }, bookmark: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null }, isPushedLike: Array<{ __typename?: 'reactions', id: string }>, isPushedBookmark: Array<{ __typename?: 'reactions', id: string }>, law_revisions: Array<{ __typename?: 'law_revisions', title: string, id: string, law_full_text: any, law_status: { __typename?: 'law_statuses', status_en: string, status_ja: string }, law_type: { __typename?: 'law_types', type_en: string, type_ja: string }, law_category: { __typename?: 'law_categories', category_number: string, category_ja: string }, law_revision_columns: Array<{ __typename?: 'law_revision_columns', column_id: string, id: string, comments_aggregate: { __typename?: 'comments_aggregate', aggregate?: { __typename?: 'comments_aggregate_fields', count: number } | null }, reactions_aggregate: { __typename?: 'reactions_aggregate', aggregate?: { __typename?: 'reactions_aggregate_fields', count: number } | null } }> }> } | null };

export type FindCommentsByLawIdQueryVariables = Exact<{
  law_revision_column?: InputMaybe<Law_Revision_Columns_Bool_Exp>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindCommentsByLawIdQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', id: string, text: string, created_at: string, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string }, law_revision_column?: { __typename?: 'law_revision_columns', column_id: string } | null, comment_reactions_aggregate: { __typename?: 'comment_reactions_aggregate', aggregate?: { __typename?: 'comment_reactions_aggregate_fields', count: number } | null }, comment_reactions: Array<{ __typename?: 'comment_reactions', id: string }> }> };

export type FindCommentsOnLawRevisionQueryVariables = Exact<{
  columnId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  revisionId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindCommentsOnLawRevisionQuery = { __typename?: 'query_root', law_revision_columns: Array<{ __typename?: 'law_revision_columns', comments_aggregate: { __typename?: 'comments_aggregate', aggregate?: { __typename?: 'comments_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'comments', id: string, text: string, created_at: string, user: { __typename?: 'users', name: string, id: string, icon_url?: string | null }, comment_reactions_aggregate: { __typename?: 'comment_reactions_aggregate', aggregate?: { __typename?: 'comment_reactions_aggregate_fields', count: number } | null }, isLiked: Array<{ __typename?: 'comment_reactions', id: string }> }> } }> };

export type FindUserQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string }> };

export type CreateLawRevisionColumnCommentMutationVariables = Exact<{
  text?: InputMaybe<Scalars['String']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  column_id?: InputMaybe<Scalars['String']['input']>;
  column_text?: InputMaybe<Scalars['String']['input']>;
  law_revision_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateLawRevisionColumnCommentMutation = { __typename?: 'mutation_root', insert_law_revision_columns_one?: { __typename?: 'law_revision_columns', id: string } | null };

export type CreateUserMutationVariables = Exact<{
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: string }> } | null };

export type CreateCommentReactionMutationVariables = Exact<{
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateCommentReactionMutation = { __typename?: 'mutation_root', insert_comment_reactions_one?: { __typename?: 'comment_reactions', id: string } | null };

export type DeleteCommentReactionMutationVariables = Exact<{
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type DeleteCommentReactionMutation = { __typename?: 'mutation_root', delete_comment_reactions?: { __typename?: 'comment_reactions_mutation_response', returning: Array<{ __typename?: 'comment_reactions', id: string }> } | null };

export type CreateWatchedLawMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateWatchedLawMutation = { __typename?: 'mutation_root', insert_law_views_one?: { __typename?: 'law_views', id: string } | null };


export const MyMutationDocument = gql`
    mutation MyMutation($api_law_id: String = "", $law_revisions: law_revisions_arr_rel_insert_input = {data: {}}) {
  insert_laws_one(
    object: {api_law_id: $api_law_id, law_revisions: $law_revisions}
  ) {
    id
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
    query findLaws($type: Int = 0, $star: Int = 0, $like: Int = 0, $userId: uuid = "00000000-0000-0000-0000-000000000000", $type3: Int = 0) {
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
        reactions_aggregate_1: reactions_aggregate(where: {type: {_eq: $type}}) {
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
        type_en
        type_ja
      }
      law_category {
        category_number
        category_ja
      }
      law_status {
        status_en
        status_ja
      }
      api_law_data_info
      api_law_revision_id
      api_law_type_num
    }
    star: reactions_aggregate(where: {type: {_eq: $star}}) {
      aggregate {
        count
      }
    }
    like: reactions_aggregate(where: {type: {_eq: $like}}) {
      aggregate {
        count
      }
    }
    law_views(where: {user_id: {_eq: $userId}}) {
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
 *      type: // value for 'type'
 *      star: // value for 'star'
 *      like: // value for 'like'
 *      userId: // value for 'userId'
 *      type3: // value for 'type3'
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
    query findLaw($id: uuid = "00000000-0000-0000-0000-000000000000", $userId: uuid = "00000000-0000-0000-0000-000000000000", $_eq: Int = 1, $_eq1: uuid = "00000000-0000-0000-0000-000000000000") {
  laws_by_pk(id: $id) {
    id
    law_views(where: {user_id: {_eq: $userId}}) {
      id
    }
    like: reactions_aggregate(where: {type: {_eq: 0}}) {
      aggregate {
        count
      }
    }
    bookmark: reactions_aggregate(where: {type: {_eq: 1}}) {
      aggregate {
        count
      }
    }
    isPushedLike: reactions(where: {type: {_eq: 0}, user_id: {_eq: $userId}}) {
      id
    }
    isPushedBookmark: reactions(where: {type: {_eq: 1}, user_id: {_eq: $userId}}) {
      id
    }
    law_revisions {
      title
      id
      law_full_text
      law_status {
        status_en
        status_ja
      }
      law_type {
        type_en
        type_ja
      }
      law_category {
        category_number
        category_ja
      }
      law_revision_columns {
        comments_aggregate {
          aggregate {
            count
          }
        }
        reactions_aggregate(where: {type: {_eq: $_eq}, law_id: {_eq: $_eq1}}) {
          aggregate {
            count
          }
        }
        column_id
        id
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
 *      userId: // value for 'userId'
 *      _eq: // value for '_eq'
 *      _eq1: // value for '_eq1'
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
    query FindCommentsByLawId($law_revision_column: law_revision_columns_bool_exp = {}, $user_id: uuid = "00000000-0000-0000-0000-000000000000", $type: Int = 0) {
  comments(where: {law_revision_column: $law_revision_column}) {
    id
    text
    created_at
    user {
      icon_url
      id
      name
    }
    law_revision_column {
      column_id
    }
    comment_reactions_aggregate {
      aggregate {
        count
      }
    }
    comment_reactions(where: {user_id: {_eq: $user_id}, type: {_eq: $type}}) {
      id
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
 *      law_revision_column: // value for 'law_revision_column'
 *      user_id: // value for 'user_id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useFindCommentsByLawIdQuery(baseOptions?: Apollo.QueryHookOptions<FindCommentsByLawIdQuery, FindCommentsByLawIdQueryVariables>) {
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
export const FindCommentsOnLawRevisionDocument = gql`
    query findCommentsOnLawRevision($columnId: String, $type: Int = 0, $userId: uuid = "00000000-0000-0000-0000-000000000000", $revisionId: uuid = "00000000-0000-0000-0000-000000000000") {
  law_revision_columns(
    where: {column_id: {_eq: $columnId}, law_revision: {id: {_eq: $revisionId}}}
  ) {
    comments_aggregate(order_by: {created_at: desc}) {
      aggregate {
        count
      }
      nodes {
        id
        text
        created_at
        user {
          name
          id
          icon_url
        }
        id
        comment_reactions_aggregate(where: {type: {_eq: $type}}) {
          aggregate {
            count
          }
        }
        isLiked: comment_reactions(where: {user_id: {_eq: $userId}, type: {_eq: $type}}) {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useFindCommentsOnLawRevisionQuery__
 *
 * To run a query within a React component, call `useFindCommentsOnLawRevisionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCommentsOnLawRevisionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCommentsOnLawRevisionQuery({
 *   variables: {
 *      columnId: // value for 'columnId'
 *      type: // value for 'type'
 *      userId: // value for 'userId'
 *      revisionId: // value for 'revisionId'
 *   },
 * });
 */
export function useFindCommentsOnLawRevisionQuery(baseOptions?: Apollo.QueryHookOptions<FindCommentsOnLawRevisionQuery, FindCommentsOnLawRevisionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCommentsOnLawRevisionQuery, FindCommentsOnLawRevisionQueryVariables>(FindCommentsOnLawRevisionDocument, options);
      }
export function useFindCommentsOnLawRevisionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCommentsOnLawRevisionQuery, FindCommentsOnLawRevisionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCommentsOnLawRevisionQuery, FindCommentsOnLawRevisionQueryVariables>(FindCommentsOnLawRevisionDocument, options);
        }
export function useFindCommentsOnLawRevisionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCommentsOnLawRevisionQuery, FindCommentsOnLawRevisionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCommentsOnLawRevisionQuery, FindCommentsOnLawRevisionQueryVariables>(FindCommentsOnLawRevisionDocument, options);
        }
export type FindCommentsOnLawRevisionQueryHookResult = ReturnType<typeof useFindCommentsOnLawRevisionQuery>;
export type FindCommentsOnLawRevisionLazyQueryHookResult = ReturnType<typeof useFindCommentsOnLawRevisionLazyQuery>;
export type FindCommentsOnLawRevisionSuspenseQueryHookResult = ReturnType<typeof useFindCommentsOnLawRevisionSuspenseQuery>;
export type FindCommentsOnLawRevisionQueryResult = Apollo.QueryResult<FindCommentsOnLawRevisionQuery, FindCommentsOnLawRevisionQueryVariables>;
export const FindUserDocument = gql`
    query findUser($_eq: String = "") {
  users(where: {authentication_id: {_eq: $_eq}}) {
    id
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions?: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export function useFindUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserSuspenseQueryHookResult = ReturnType<typeof useFindUserSuspenseQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const CreateLawRevisionColumnCommentDocument = gql`
    mutation createLawRevisionColumnComment($text: String, $author_id: uuid = "00000000-0000-0000-0000-000000000000", $column_id: String, $column_text: String, $law_revision_id: uuid = "00000000-0000-0000-0000-000000000000") {
  insert_law_revision_columns_one(
    object: {column_id: $column_id, law_revision_id: $law_revision_id, comments: {data: {text: $text, author_id: $author_id}}, column_text: $column_text}
    on_conflict: {constraint: law_revision_column_pkey, update_columns: column_id}
  ) {
    id
  }
}
    `;
export type CreateLawRevisionColumnCommentMutationFn = Apollo.MutationFunction<CreateLawRevisionColumnCommentMutation, CreateLawRevisionColumnCommentMutationVariables>;

/**
 * __useCreateLawRevisionColumnCommentMutation__
 *
 * To run a mutation, you first call `useCreateLawRevisionColumnCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLawRevisionColumnCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLawRevisionColumnCommentMutation, { data, loading, error }] = useCreateLawRevisionColumnCommentMutation({
 *   variables: {
 *      text: // value for 'text'
 *      author_id: // value for 'author_id'
 *      column_id: // value for 'column_id'
 *      column_text: // value for 'column_text'
 *      law_revision_id: // value for 'law_revision_id'
 *   },
 * });
 */
export function useCreateLawRevisionColumnCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateLawRevisionColumnCommentMutation, CreateLawRevisionColumnCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLawRevisionColumnCommentMutation, CreateLawRevisionColumnCommentMutationVariables>(CreateLawRevisionColumnCommentDocument, options);
      }
export type CreateLawRevisionColumnCommentMutationHookResult = ReturnType<typeof useCreateLawRevisionColumnCommentMutation>;
export type CreateLawRevisionColumnCommentMutationResult = Apollo.MutationResult<CreateLawRevisionColumnCommentMutation>;
export type CreateLawRevisionColumnCommentMutationOptions = Apollo.BaseMutationOptions<CreateLawRevisionColumnCommentMutation, CreateLawRevisionColumnCommentMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($authentication_id: String, $name: String, $icon_url: String) {
  insert_users(
    objects: {authentication_id: $authentication_id, name: $name, icon_url: $icon_url}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      authentication_id: // value for 'authentication_id'
 *      name: // value for 'name'
 *      icon_url: // value for 'icon_url'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateCommentReactionDocument = gql`
    mutation createCommentReaction($comment_id: uuid = "00000000-0000-0000-0000-000000000000", $user_id: uuid = "00000000-0000-0000-0000-000000000000", $type: Int) {
  insert_comment_reactions_one(
    object: {comment_id: $comment_id, user_id: $user_id, type: $type}
  ) {
    id
  }
}
    `;
export type CreateCommentReactionMutationFn = Apollo.MutationFunction<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>;

/**
 * __useCreateCommentReactionMutation__
 *
 * To run a mutation, you first call `useCreateCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentReactionMutation, { data, loading, error }] = useCreateCommentReactionMutation({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *      user_id: // value for 'user_id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>(CreateCommentReactionDocument, options);
      }
export type CreateCommentReactionMutationHookResult = ReturnType<typeof useCreateCommentReactionMutation>;
export type CreateCommentReactionMutationResult = Apollo.MutationResult<CreateCommentReactionMutation>;
export type CreateCommentReactionMutationOptions = Apollo.BaseMutationOptions<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>;
export const DeleteCommentReactionDocument = gql`
    mutation deleteCommentReaction($comment_id: uuid = "00000000-0000-0000-0000-000000000000", $user_id: uuid = "00000000-0000-0000-0000-000000000000") {
  delete_comment_reactions(
    where: {comment_id: {_eq: $comment_id}, user_id: {_eq: $user_id}}
  ) {
    returning {
      id
    }
  }
}
    `;
export type DeleteCommentReactionMutationFn = Apollo.MutationFunction<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;

/**
 * __useDeleteCommentReactionMutation__
 *
 * To run a mutation, you first call `useDeleteCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentReactionMutation, { data, loading, error }] = useDeleteCommentReactionMutation({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useDeleteCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>(DeleteCommentReactionDocument, options);
      }
export type DeleteCommentReactionMutationHookResult = ReturnType<typeof useDeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationResult = Apollo.MutationResult<DeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationOptions = Apollo.BaseMutationOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;
export const CreateWatchedLawDocument = gql`
    mutation createWatchedLaw($user_id: uuid = "00000000-0000-0000-0000-000000000000", $law_id: uuid = "00000000-0000-0000-0000-000000000000") {
  insert_law_views_one(object: {user_id: $user_id, law_id: $law_id}) {
    id
  }
}
    `;
export type CreateWatchedLawMutationFn = Apollo.MutationFunction<CreateWatchedLawMutation, CreateWatchedLawMutationVariables>;

/**
 * __useCreateWatchedLawMutation__
 *
 * To run a mutation, you first call `useCreateWatchedLawMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWatchedLawMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWatchedLawMutation, { data, loading, error }] = useCreateWatchedLawMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      law_id: // value for 'law_id'
 *   },
 * });
 */
export function useCreateWatchedLawMutation(baseOptions?: Apollo.MutationHookOptions<CreateWatchedLawMutation, CreateWatchedLawMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWatchedLawMutation, CreateWatchedLawMutationVariables>(CreateWatchedLawDocument, options);
      }
export type CreateWatchedLawMutationHookResult = ReturnType<typeof useCreateWatchedLawMutation>;
export type CreateWatchedLawMutationResult = Apollo.MutationResult<CreateWatchedLawMutation>;
export type CreateWatchedLawMutationOptions = Apollo.BaseMutationOptions<CreateWatchedLawMutation, CreateWatchedLawMutationVariables>;