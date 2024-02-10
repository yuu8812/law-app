import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  numeric: { input: any; output: any; }
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

export type _Service = {
  __typename?: '_Service';
  /** SDL representation of schema */
  sdl: Scalars['String']['output'];
};

/** columns and relationships of "argumen_chats" */
export type Argumen_Chats = {
  __typename?: 'argumen_chats';
  /** An object relationship */
  argument_chat_box: Argument_Chat_Boxes;
  author_id: Scalars['uuid']['output'];
  chat_box_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  status: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "argumen_chats" */
export type Argumen_Chats_Aggregate = {
  __typename?: 'argumen_chats_aggregate';
  aggregate?: Maybe<Argumen_Chats_Aggregate_Fields>;
  nodes: Array<Argumen_Chats>;
};

export type Argumen_Chats_Aggregate_Bool_Exp = {
  count?: InputMaybe<Argumen_Chats_Aggregate_Bool_Exp_Count>;
};

export type Argumen_Chats_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Argumen_Chats_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "argumen_chats" */
export type Argumen_Chats_Aggregate_Fields = {
  __typename?: 'argumen_chats_aggregate_fields';
  avg?: Maybe<Argumen_Chats_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Argumen_Chats_Max_Fields>;
  min?: Maybe<Argumen_Chats_Min_Fields>;
  stddev?: Maybe<Argumen_Chats_Stddev_Fields>;
  stddev_pop?: Maybe<Argumen_Chats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Argumen_Chats_Stddev_Samp_Fields>;
  sum?: Maybe<Argumen_Chats_Sum_Fields>;
  var_pop?: Maybe<Argumen_Chats_Var_Pop_Fields>;
  var_samp?: Maybe<Argumen_Chats_Var_Samp_Fields>;
  variance?: Maybe<Argumen_Chats_Variance_Fields>;
};


/** aggregate fields of "argumen_chats" */
export type Argumen_Chats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "argumen_chats" */
export type Argumen_Chats_Aggregate_Order_By = {
  avg?: InputMaybe<Argumen_Chats_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Argumen_Chats_Max_Order_By>;
  min?: InputMaybe<Argumen_Chats_Min_Order_By>;
  stddev?: InputMaybe<Argumen_Chats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Argumen_Chats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Argumen_Chats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Argumen_Chats_Sum_Order_By>;
  var_pop?: InputMaybe<Argumen_Chats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Argumen_Chats_Var_Samp_Order_By>;
  variance?: InputMaybe<Argumen_Chats_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "argumen_chats" */
export type Argumen_Chats_Arr_Rel_Insert_Input = {
  data: Array<Argumen_Chats_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Argumen_Chats_On_Conflict>;
};

/** aggregate avg on columns */
export type Argumen_Chats_Avg_Fields = {
  __typename?: 'argumen_chats_avg_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "argumen_chats" */
export type Argumen_Chats_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "argumen_chats". All fields are combined with a logical 'AND'. */
export type Argumen_Chats_Bool_Exp = {
  _and?: InputMaybe<Array<Argumen_Chats_Bool_Exp>>;
  _not?: InputMaybe<Argumen_Chats_Bool_Exp>;
  _or?: InputMaybe<Array<Argumen_Chats_Bool_Exp>>;
  argument_chat_box?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  chat_box_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "argumen_chats" */
export const Argumen_Chats_Constraint = {
  /** unique or primary key constraint on columns "id" */
  ArgumenChatsPkey: 'argumen_chats_pkey'
} as const;

export type Argumen_Chats_Constraint = typeof Argumen_Chats_Constraint[keyof typeof Argumen_Chats_Constraint];
/** input type for incrementing numeric columns in table "argumen_chats" */
export type Argumen_Chats_Inc_Input = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "argumen_chats" */
export type Argumen_Chats_Insert_Input = {
  argument_chat_box?: InputMaybe<Argument_Chat_Boxes_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat_box_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Argumen_Chats_Max_Fields = {
  __typename?: 'argumen_chats_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  chat_box_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "argumen_chats" */
export type Argumen_Chats_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_box_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Argumen_Chats_Min_Fields = {
  __typename?: 'argumen_chats_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  chat_box_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "argumen_chats" */
export type Argumen_Chats_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_box_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "argumen_chats" */
export type Argumen_Chats_Mutation_Response = {
  __typename?: 'argumen_chats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Argumen_Chats>;
};

/** on_conflict condition type for table "argumen_chats" */
export type Argumen_Chats_On_Conflict = {
  constraint: Argumen_Chats_Constraint;
  update_columns?: Array<Argumen_Chats_Update_Column>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};

/** Ordering options when selecting data from "argumen_chats". */
export type Argumen_Chats_Order_By = {
  argument_chat_box?: InputMaybe<Argument_Chat_Boxes_Order_By>;
  author_id?: InputMaybe<Order_By>;
  chat_box_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: argumen_chats */
export type Argumen_Chats_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "argumen_chats" */
export const Argumen_Chats_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  ChatBoxId: 'chat_box_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Argumen_Chats_Select_Column = typeof Argumen_Chats_Select_Column[keyof typeof Argumen_Chats_Select_Column];
/** input type for updating data in table "argumen_chats" */
export type Argumen_Chats_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat_box_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Argumen_Chats_Stddev_Fields = {
  __typename?: 'argumen_chats_stddev_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "argumen_chats" */
export type Argumen_Chats_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Argumen_Chats_Stddev_Pop_Fields = {
  __typename?: 'argumen_chats_stddev_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "argumen_chats" */
export type Argumen_Chats_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Argumen_Chats_Stddev_Samp_Fields = {
  __typename?: 'argumen_chats_stddev_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "argumen_chats" */
export type Argumen_Chats_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "argumen_chats" */
export type Argumen_Chats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Argumen_Chats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Argumen_Chats_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat_box_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Argumen_Chats_Sum_Fields = {
  __typename?: 'argumen_chats_sum_fields';
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "argumen_chats" */
export type Argumen_Chats_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** update columns of table "argumen_chats" */
export const Argumen_Chats_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  ChatBoxId: 'chat_box_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Argumen_Chats_Update_Column = typeof Argumen_Chats_Update_Column[keyof typeof Argumen_Chats_Update_Column];
export type Argumen_Chats_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Argumen_Chats_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Argumen_Chats_Set_Input>;
  /** filter the rows which have to be updated */
  where: Argumen_Chats_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Argumen_Chats_Var_Pop_Fields = {
  __typename?: 'argumen_chats_var_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "argumen_chats" */
export type Argumen_Chats_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Argumen_Chats_Var_Samp_Fields = {
  __typename?: 'argumen_chats_var_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "argumen_chats" */
export type Argumen_Chats_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Argumen_Chats_Variance_Fields = {
  __typename?: 'argumen_chats_variance_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "argumen_chats" */
export type Argumen_Chats_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "argument_chat_boxes" */
export type Argument_Chat_Boxes = {
  __typename?: 'argument_chat_boxes';
  /** An array relationship */
  argumen_chats: Array<Argumen_Chats>;
  /** An aggregate relationship */
  argumen_chats_aggregate: Argumen_Chats_Aggregate;
  /** An object relationship */
  argument: Arguments;
  argument_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  desctiption: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "argument_chat_boxes" */
export type Argument_Chat_BoxesArgumen_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argumen_Chats_Order_By>>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};


/** columns and relationships of "argument_chat_boxes" */
export type Argument_Chat_BoxesArgumen_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argumen_Chats_Order_By>>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};

/** aggregated selection of "argument_chat_boxes" */
export type Argument_Chat_Boxes_Aggregate = {
  __typename?: 'argument_chat_boxes_aggregate';
  aggregate?: Maybe<Argument_Chat_Boxes_Aggregate_Fields>;
  nodes: Array<Argument_Chat_Boxes>;
};

export type Argument_Chat_Boxes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Argument_Chat_Boxes_Aggregate_Bool_Exp_Count>;
};

export type Argument_Chat_Boxes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "argument_chat_boxes" */
export type Argument_Chat_Boxes_Aggregate_Fields = {
  __typename?: 'argument_chat_boxes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Argument_Chat_Boxes_Max_Fields>;
  min?: Maybe<Argument_Chat_Boxes_Min_Fields>;
};


/** aggregate fields of "argument_chat_boxes" */
export type Argument_Chat_Boxes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Argument_Chat_Boxes_Max_Order_By>;
  min?: InputMaybe<Argument_Chat_Boxes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Arr_Rel_Insert_Input = {
  data: Array<Argument_Chat_Boxes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Chat_Boxes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "argument_chat_boxes". All fields are combined with a logical 'AND'. */
export type Argument_Chat_Boxes_Bool_Exp = {
  _and?: InputMaybe<Array<Argument_Chat_Boxes_Bool_Exp>>;
  _not?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
  _or?: InputMaybe<Array<Argument_Chat_Boxes_Bool_Exp>>;
  argumen_chats?: InputMaybe<Argumen_Chats_Bool_Exp>;
  argumen_chats_aggregate?: InputMaybe<Argumen_Chats_Aggregate_Bool_Exp>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  desctiption?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "argument_chat_boxes" */
export const Argument_Chat_Boxes_Constraint = {
  /** unique or primary key constraint on columns "id" */
  ArgumentChatBoxPkey: 'argument_chat_box_pkey'
} as const;

export type Argument_Chat_Boxes_Constraint = typeof Argument_Chat_Boxes_Constraint[keyof typeof Argument_Chat_Boxes_Constraint];
/** input type for inserting data into table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Insert_Input = {
  argumen_chats?: InputMaybe<Argumen_Chats_Arr_Rel_Insert_Input>;
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  desctiption?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Argument_Chat_Boxes_Max_Fields = {
  __typename?: 'argument_chat_boxes_max_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  desctiption?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Max_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  desctiption?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Argument_Chat_Boxes_Min_Fields = {
  __typename?: 'argument_chat_boxes_min_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  desctiption?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Min_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  desctiption?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Mutation_Response = {
  __typename?: 'argument_chat_boxes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Argument_Chat_Boxes>;
};

/** input type for inserting object relation for remote table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Obj_Rel_Insert_Input = {
  data: Argument_Chat_Boxes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Chat_Boxes_On_Conflict>;
};

/** on_conflict condition type for table "argument_chat_boxes" */
export type Argument_Chat_Boxes_On_Conflict = {
  constraint: Argument_Chat_Boxes_Constraint;
  update_columns?: Array<Argument_Chat_Boxes_Update_Column>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};

/** Ordering options when selecting data from "argument_chat_boxes". */
export type Argument_Chat_Boxes_Order_By = {
  argumen_chats_aggregate?: InputMaybe<Argumen_Chats_Aggregate_Order_By>;
  argument?: InputMaybe<Arguments_Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  desctiption?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: argument_chat_boxes */
export type Argument_Chat_Boxes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "argument_chat_boxes" */
export const Argument_Chat_Boxes_Select_Column = {
  /** column name */
  ArgumentId: 'argument_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Desctiption: 'desctiption',
  /** column name */
  Id: 'id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Argument_Chat_Boxes_Select_Column = typeof Argument_Chat_Boxes_Select_Column[keyof typeof Argument_Chat_Boxes_Select_Column];
/** input type for updating data in table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Set_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  desctiption?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "argument_chat_boxes" */
export type Argument_Chat_Boxes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Argument_Chat_Boxes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Argument_Chat_Boxes_Stream_Cursor_Value_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  desctiption?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "argument_chat_boxes" */
export const Argument_Chat_Boxes_Update_Column = {
  /** column name */
  ArgumentId: 'argument_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Desctiption: 'desctiption',
  /** column name */
  Id: 'id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Argument_Chat_Boxes_Update_Column = typeof Argument_Chat_Boxes_Update_Column[keyof typeof Argument_Chat_Boxes_Update_Column];
export type Argument_Chat_Boxes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Argument_Chat_Boxes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Argument_Chat_Boxes_Bool_Exp;
};

/** columns and relationships of "argument_views" */
export type Argument_Views = {
  __typename?: 'argument_views';
  /** An object relationship */
  argument: Arguments;
  argument_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "argument_views" */
export type Argument_Views_Aggregate = {
  __typename?: 'argument_views_aggregate';
  aggregate?: Maybe<Argument_Views_Aggregate_Fields>;
  nodes: Array<Argument_Views>;
};

export type Argument_Views_Aggregate_Bool_Exp = {
  count?: InputMaybe<Argument_Views_Aggregate_Bool_Exp_Count>;
};

export type Argument_Views_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Argument_Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Argument_Views_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "argument_views" */
export type Argument_Views_Aggregate_Fields = {
  __typename?: 'argument_views_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Argument_Views_Max_Fields>;
  min?: Maybe<Argument_Views_Min_Fields>;
};


/** aggregate fields of "argument_views" */
export type Argument_Views_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Argument_Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "argument_views" */
export type Argument_Views_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Argument_Views_Max_Order_By>;
  min?: InputMaybe<Argument_Views_Min_Order_By>;
};

/** input type for inserting array relation for remote table "argument_views" */
export type Argument_Views_Arr_Rel_Insert_Input = {
  data: Array<Argument_Views_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Argument_Views_On_Conflict>;
};

/** Boolean expression to filter rows from the table "argument_views". All fields are combined with a logical 'AND'. */
export type Argument_Views_Bool_Exp = {
  _and?: InputMaybe<Array<Argument_Views_Bool_Exp>>;
  _not?: InputMaybe<Argument_Views_Bool_Exp>;
  _or?: InputMaybe<Array<Argument_Views_Bool_Exp>>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "argument_views" */
export const Argument_Views_Constraint = {
  /** unique or primary key constraint on columns "user_id", "argument_id" */
  ArgumentViewsPkey: 'argument_views_pkey'
} as const;

export type Argument_Views_Constraint = typeof Argument_Views_Constraint[keyof typeof Argument_Views_Constraint];
/** input type for inserting data into table "argument_views" */
export type Argument_Views_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Argument_Views_Max_Fields = {
  __typename?: 'argument_views_max_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "argument_views" */
export type Argument_Views_Max_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Argument_Views_Min_Fields = {
  __typename?: 'argument_views_min_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "argument_views" */
export type Argument_Views_Min_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "argument_views" */
export type Argument_Views_Mutation_Response = {
  __typename?: 'argument_views_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Argument_Views>;
};

/** on_conflict condition type for table "argument_views" */
export type Argument_Views_On_Conflict = {
  constraint: Argument_Views_Constraint;
  update_columns?: Array<Argument_Views_Update_Column>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};

/** Ordering options when selecting data from "argument_views". */
export type Argument_Views_Order_By = {
  argument?: InputMaybe<Arguments_Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: argument_views */
export type Argument_Views_Pk_Columns_Input = {
  argument_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "argument_views" */
export const Argument_Views_Select_Column = {
  /** column name */
  ArgumentId: 'argument_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Argument_Views_Select_Column = typeof Argument_Views_Select_Column[keyof typeof Argument_Views_Select_Column];
/** input type for updating data in table "argument_views" */
export type Argument_Views_Set_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "argument_views" */
export type Argument_Views_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Argument_Views_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Argument_Views_Stream_Cursor_Value_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "argument_views" */
export const Argument_Views_Update_Column = {
  /** column name */
  ArgumentId: 'argument_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Argument_Views_Update_Column = typeof Argument_Views_Update_Column[keyof typeof Argument_Views_Update_Column];
export type Argument_Views_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Argument_Views_Set_Input>;
  /** filter the rows which have to be updated */
  where: Argument_Views_Bool_Exp;
};

/** columns and relationships of "arguments" */
export type Arguments = {
  __typename?: 'arguments';
  /** An array relationship */
  argument_chat_boxes: Array<Argument_Chat_Boxes>;
  /** An aggregate relationship */
  argument_chat_boxes_aggregate: Argument_Chat_Boxes_Aggregate;
  /** An array relationship */
  argument_views: Array<Argument_Views>;
  /** An aggregate relationship */
  argument_views_aggregate: Argument_Views_Aggregate;
  author_id: Scalars['uuid']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law?: Maybe<Laws>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  /** An array relationship */
  world_arguments: Array<World_Arguments>;
  /** An aggregate relationship */
  world_arguments_aggregate: World_Arguments_Aggregate;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_Chat_BoxesArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chat_Boxes_Order_By>>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_Chat_Boxes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chat_Boxes_Order_By>>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsArgument_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsWorld_ArgumentsArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


/** columns and relationships of "arguments" */
export type ArgumentsWorld_Arguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
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
  argument_chat_boxes?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
  argument_chat_boxes_aggregate?: InputMaybe<Argument_Chat_Boxes_Aggregate_Bool_Exp>;
  argument_views?: InputMaybe<Argument_Views_Bool_Exp>;
  argument_views_aggregate?: InputMaybe<Argument_Views_Aggregate_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world_arguments?: InputMaybe<World_Arguments_Bool_Exp>;
  world_arguments_aggregate?: InputMaybe<World_Arguments_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "arguments" */
export const Arguments_Constraint = {
  /** unique or primary key constraint on columns "id" */
  ArgumentsPkey: 'arguments_pkey'
} as const;

export type Arguments_Constraint = typeof Arguments_Constraint[keyof typeof Arguments_Constraint];
/** input type for inserting data into table "arguments" */
export type Arguments_Insert_Input = {
  argument_chat_boxes?: InputMaybe<Argument_Chat_Boxes_Arr_Rel_Insert_Input>;
  argument_views?: InputMaybe<Argument_Views_Arr_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world_arguments?: InputMaybe<World_Arguments_Arr_Rel_Insert_Input>;
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
  argument_chat_boxes_aggregate?: InputMaybe<Argument_Chat_Boxes_Aggregate_Order_By>;
  argument_views_aggregate?: InputMaybe<Argument_Views_Aggregate_Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world_arguments_aggregate?: InputMaybe<World_Arguments_Aggregate_Order_By>;
};

/** primary key columns input for table: arguments */
export type Arguments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "arguments" */
export const Arguments_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Arguments_Select_Column = typeof Arguments_Select_Column[keyof typeof Arguments_Select_Column];
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
export const Arguments_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Arguments_Update_Column = typeof Arguments_Update_Column[keyof typeof Arguments_Update_Column];
export type Arguments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Arguments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Arguments_Bool_Exp;
};

/** columns and relationships of "citizen_histories" */
export type Citizen_Histories = {
  __typename?: 'citizen_histories';
  /** An object relationship */
  citizen: Citizens;
  citizen_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "citizen_histories" */
export type Citizen_Histories_Aggregate = {
  __typename?: 'citizen_histories_aggregate';
  aggregate?: Maybe<Citizen_Histories_Aggregate_Fields>;
  nodes: Array<Citizen_Histories>;
};

export type Citizen_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Citizen_Histories_Aggregate_Bool_Exp_Count>;
};

export type Citizen_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Citizen_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "citizen_histories" */
export type Citizen_Histories_Aggregate_Fields = {
  __typename?: 'citizen_histories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Citizen_Histories_Max_Fields>;
  min?: Maybe<Citizen_Histories_Min_Fields>;
};


/** aggregate fields of "citizen_histories" */
export type Citizen_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "citizen_histories" */
export type Citizen_Histories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Citizen_Histories_Max_Order_By>;
  min?: InputMaybe<Citizen_Histories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "citizen_histories" */
export type Citizen_Histories_Arr_Rel_Insert_Input = {
  data: Array<Citizen_Histories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Citizen_Histories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "citizen_histories". All fields are combined with a logical 'AND'. */
export type Citizen_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Citizen_Histories_Bool_Exp>>;
  _not?: InputMaybe<Citizen_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Citizen_Histories_Bool_Exp>>;
  citizen?: InputMaybe<Citizens_Bool_Exp>;
  citizen_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "citizen_histories" */
export const Citizen_Histories_Constraint = {
  /** unique or primary key constraint on columns "id" */
  CitizenHistoriesPkey: 'citizen_histories_pkey'
} as const;

export type Citizen_Histories_Constraint = typeof Citizen_Histories_Constraint[keyof typeof Citizen_Histories_Constraint];
/** input type for inserting data into table "citizen_histories" */
export type Citizen_Histories_Insert_Input = {
  citizen?: InputMaybe<Citizens_Obj_Rel_Insert_Input>;
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Citizen_Histories_Max_Fields = {
  __typename?: 'citizen_histories_max_fields';
  citizen_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "citizen_histories" */
export type Citizen_Histories_Max_Order_By = {
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Citizen_Histories_Min_Fields = {
  __typename?: 'citizen_histories_min_fields';
  citizen_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "citizen_histories" */
export type Citizen_Histories_Min_Order_By = {
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "citizen_histories" */
export type Citizen_Histories_Mutation_Response = {
  __typename?: 'citizen_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Citizen_Histories>;
};

/** on_conflict condition type for table "citizen_histories" */
export type Citizen_Histories_On_Conflict = {
  constraint: Citizen_Histories_Constraint;
  update_columns?: Array<Citizen_Histories_Update_Column>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "citizen_histories". */
export type Citizen_Histories_Order_By = {
  citizen?: InputMaybe<Citizens_Order_By>;
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: citizen_histories */
export type Citizen_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "citizen_histories" */
export const Citizen_Histories_Select_Column = {
  /** column name */
  CitizenId: 'citizen_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type Citizen_Histories_Select_Column = typeof Citizen_Histories_Select_Column[keyof typeof Citizen_Histories_Select_Column];
/** input type for updating data in table "citizen_histories" */
export type Citizen_Histories_Set_Input = {
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "citizen_histories" */
export type Citizen_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Citizen_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Citizen_Histories_Stream_Cursor_Value_Input = {
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "citizen_histories" */
export const Citizen_Histories_Update_Column = {
  /** column name */
  CitizenId: 'citizen_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type Citizen_Histories_Update_Column = typeof Citizen_Histories_Update_Column[keyof typeof Citizen_Histories_Update_Column];
export type Citizen_Histories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Citizen_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Citizen_Histories_Bool_Exp;
};

/** columns and relationships of "citizens" */
export type Citizens = {
  __typename?: 'citizens';
  body_setting: Scalars['jsonb']['output'];
  /** An array relationship */
  citizen_histories: Array<Citizen_Histories>;
  /** An aggregate relationship */
  citizen_histories_aggregate: Citizen_Histories_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  species_asset: Species_Assets;
  species_asset_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
};


/** columns and relationships of "citizens" */
export type CitizensBody_SettingArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "citizens" */
export type CitizensCitizen_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


/** columns and relationships of "citizens" */
export type CitizensCitizen_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


/** columns and relationships of "citizens" */
export type CitizensWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


/** columns and relationships of "citizens" */
export type CitizensWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};

/** aggregated selection of "citizens" */
export type Citizens_Aggregate = {
  __typename?: 'citizens_aggregate';
  aggregate?: Maybe<Citizens_Aggregate_Fields>;
  nodes: Array<Citizens>;
};

export type Citizens_Aggregate_Bool_Exp = {
  count?: InputMaybe<Citizens_Aggregate_Bool_Exp_Count>;
};

export type Citizens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Citizens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "citizens" */
export type Citizens_Aggregate_Fields = {
  __typename?: 'citizens_aggregate_fields';
  avg?: Maybe<Citizens_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Citizens_Max_Fields>;
  min?: Maybe<Citizens_Min_Fields>;
  stddev?: Maybe<Citizens_Stddev_Fields>;
  stddev_pop?: Maybe<Citizens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Citizens_Stddev_Samp_Fields>;
  sum?: Maybe<Citizens_Sum_Fields>;
  var_pop?: Maybe<Citizens_Var_Pop_Fields>;
  var_samp?: Maybe<Citizens_Var_Samp_Fields>;
  variance?: Maybe<Citizens_Variance_Fields>;
};


/** aggregate fields of "citizens" */
export type Citizens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "citizens" */
export type Citizens_Aggregate_Order_By = {
  avg?: InputMaybe<Citizens_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Citizens_Max_Order_By>;
  min?: InputMaybe<Citizens_Min_Order_By>;
  stddev?: InputMaybe<Citizens_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Citizens_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Citizens_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Citizens_Sum_Order_By>;
  var_pop?: InputMaybe<Citizens_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Citizens_Var_Samp_Order_By>;
  variance?: InputMaybe<Citizens_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Citizens_Append_Input = {
  body_setting?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "citizens" */
export type Citizens_Arr_Rel_Insert_Input = {
  data: Array<Citizens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
};

/** aggregate avg on columns */
export type Citizens_Avg_Fields = {
  __typename?: 'citizens_avg_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "citizens" */
export type Citizens_Avg_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "citizens". All fields are combined with a logical 'AND'. */
export type Citizens_Bool_Exp = {
  _and?: InputMaybe<Array<Citizens_Bool_Exp>>;
  _not?: InputMaybe<Citizens_Bool_Exp>;
  _or?: InputMaybe<Array<Citizens_Bool_Exp>>;
  body_setting?: InputMaybe<Jsonb_Comparison_Exp>;
  citizen_histories?: InputMaybe<Citizen_Histories_Bool_Exp>;
  citizen_histories_aggregate?: InputMaybe<Citizen_Histories_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  gender?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  species_asset?: InputMaybe<Species_Assets_Bool_Exp>;
  species_asset_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  world_citizens?: InputMaybe<World_Citizens_Bool_Exp>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "citizens" */
export const Citizens_Constraint = {
  /** unique or primary key constraint on columns "id" */
  CitizenesPkey: 'citizenes_pkey'
} as const;

export type Citizens_Constraint = typeof Citizens_Constraint[keyof typeof Citizens_Constraint];
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Citizens_Delete_At_Path_Input = {
  body_setting?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Citizens_Delete_Elem_Input = {
  body_setting?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Citizens_Delete_Key_Input = {
  body_setting?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "citizens" */
export type Citizens_Inc_Input = {
  gender?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "citizens" */
export type Citizens_Insert_Input = {
  body_setting?: InputMaybe<Scalars['jsonb']['input']>;
  citizen_histories?: InputMaybe<Citizen_Histories_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species_asset?: InputMaybe<Species_Assets_Obj_Rel_Insert_Input>;
  species_asset_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_citizens?: InputMaybe<World_Citizens_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Citizens_Max_Fields = {
  __typename?: 'citizens_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  species_asset_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "citizens" */
export type Citizens_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  species_asset_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Citizens_Min_Fields = {
  __typename?: 'citizens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  species_asset_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "citizens" */
export type Citizens_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  species_asset_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "citizens" */
export type Citizens_Mutation_Response = {
  __typename?: 'citizens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Citizens>;
};

/** input type for inserting object relation for remote table "citizens" */
export type Citizens_Obj_Rel_Insert_Input = {
  data: Citizens_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
};

/** on_conflict condition type for table "citizens" */
export type Citizens_On_Conflict = {
  constraint: Citizens_Constraint;
  update_columns?: Array<Citizens_Update_Column>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};

/** Ordering options when selecting data from "citizens". */
export type Citizens_Order_By = {
  body_setting?: InputMaybe<Order_By>;
  citizen_histories_aggregate?: InputMaybe<Citizen_Histories_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  species_asset?: InputMaybe<Species_Assets_Order_By>;
  species_asset_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Order_By>;
};

/** primary key columns input for table: citizens */
export type Citizens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Citizens_Prepend_Input = {
  body_setting?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "citizens" */
export const Citizens_Select_Column = {
  /** column name */
  BodySetting: 'body_setting',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Gender: 'gender',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  SpeciesAssetId: 'species_asset_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Citizens_Select_Column = typeof Citizens_Select_Column[keyof typeof Citizens_Select_Column];
/** input type for updating data in table "citizens" */
export type Citizens_Set_Input = {
  body_setting?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species_asset_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Citizens_Stddev_Fields = {
  __typename?: 'citizens_stddev_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "citizens" */
export type Citizens_Stddev_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Citizens_Stddev_Pop_Fields = {
  __typename?: 'citizens_stddev_pop_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "citizens" */
export type Citizens_Stddev_Pop_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Citizens_Stddev_Samp_Fields = {
  __typename?: 'citizens_stddev_samp_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "citizens" */
export type Citizens_Stddev_Samp_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "citizens" */
export type Citizens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Citizens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Citizens_Stream_Cursor_Value_Input = {
  body_setting?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species_asset_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Citizens_Sum_Fields = {
  __typename?: 'citizens_sum_fields';
  gender?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "citizens" */
export type Citizens_Sum_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** update columns of table "citizens" */
export const Citizens_Update_Column = {
  /** column name */
  BodySetting: 'body_setting',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Gender: 'gender',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  SpeciesAssetId: 'species_asset_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Citizens_Update_Column = typeof Citizens_Update_Column[keyof typeof Citizens_Update_Column];
export type Citizens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Citizens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Citizens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Citizens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Citizens_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Citizens_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Citizens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Citizens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Citizens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Citizens_Var_Pop_Fields = {
  __typename?: 'citizens_var_pop_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "citizens" */
export type Citizens_Var_Pop_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Citizens_Var_Samp_Fields = {
  __typename?: 'citizens_var_samp_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "citizens" */
export type Citizens_Var_Samp_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Citizens_Variance_Fields = {
  __typename?: 'citizens_variance_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "citizens" */
export type Citizens_Variance_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export const Cursor_Ordering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC'
} as const;

export type Cursor_Ordering = typeof Cursor_Ordering[keyof typeof Cursor_Ordering];
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
  /** An array relationship */
  world_categories: Array<World_Categories>;
  /** An aggregate relationship */
  world_categories_aggregate: World_Categories_Aggregate;
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


/** columns and relationships of "law_categories" */
export type Law_CategoriesWorld_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


/** columns and relationships of "law_categories" */
export type Law_CategoriesWorld_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
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
  world_categories?: InputMaybe<World_Categories_Bool_Exp>;
  world_categories_aggregate?: InputMaybe<World_Categories_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "law_categories" */
export const Law_Categories_Constraint = {
  /** unique or primary key constraint on columns "category_ja" */
  LawCategoriesPkey: 'law_categories_pkey'
} as const;

export type Law_Categories_Constraint = typeof Law_Categories_Constraint[keyof typeof Law_Categories_Constraint];
/** input type for inserting data into table "law_categories" */
export type Law_Categories_Insert_Input = {
  category_ja?: InputMaybe<Scalars['String']['input']>;
  category_number?: InputMaybe<Scalars['String']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  world_categories?: InputMaybe<World_Categories_Arr_Rel_Insert_Input>;
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
  world_categories_aggregate?: InputMaybe<World_Categories_Aggregate_Order_By>;
};

/** primary key columns input for table: law_categories */
export type Law_Categories_Pk_Columns_Input = {
  category_ja: Scalars['String']['input'];
};

/** select columns of table "law_categories" */
export const Law_Categories_Select_Column = {
  /** column name */
  CategoryJa: 'category_ja',
  /** column name */
  CategoryNumber: 'category_number'
} as const;

export type Law_Categories_Select_Column = typeof Law_Categories_Select_Column[keyof typeof Law_Categories_Select_Column];
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
export const Law_Categories_Update_Column = {
  /** column name */
  CategoryJa: 'category_ja',
  /** column name */
  CategoryNumber: 'category_number'
} as const;

export type Law_Categories_Update_Column = typeof Law_Categories_Update_Column[keyof typeof Law_Categories_Update_Column];
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
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law_revision: Law_Revisions;
  law_revision_id: Scalars['uuid']['output'];
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
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revision?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revision_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_revision_columns" */
export const Law_Revision_Columns_Constraint = {
  /** unique or primary key constraint on columns "law_revision_id", "column_id" */
  LawRevisionColumnPkey: 'law_revision_column_pkey'
} as const;

export type Law_Revision_Columns_Constraint = typeof Law_Revision_Columns_Constraint[keyof typeof Law_Revision_Columns_Constraint];
/** input type for inserting data into table "law_revision_columns" */
export type Law_Revision_Columns_Insert_Input = {
  column_id?: InputMaybe<Scalars['String']['input']>;
  column_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revision?: InputMaybe<Law_Revisions_Obj_Rel_Insert_Input>;
  law_revision_id?: InputMaybe<Scalars['uuid']['input']>;
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
  id?: InputMaybe<Order_By>;
  law_revision?: InputMaybe<Law_Revisions_Order_By>;
  law_revision_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_revision_columns */
export type Law_Revision_Columns_Pk_Columns_Input = {
  column_id: Scalars['String']['input'];
  law_revision_id: Scalars['uuid']['input'];
};

/** select columns of table "law_revision_columns" */
export const Law_Revision_Columns_Select_Column = {
  /** column name */
  ColumnId: 'column_id',
  /** column name */
  ColumnText: 'column_text',
  /** column name */
  Id: 'id',
  /** column name */
  LawRevisionId: 'law_revision_id'
} as const;

export type Law_Revision_Columns_Select_Column = typeof Law_Revision_Columns_Select_Column[keyof typeof Law_Revision_Columns_Select_Column];
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
export const Law_Revision_Columns_Update_Column = {
  /** column name */
  ColumnId: 'column_id',
  /** column name */
  ColumnText: 'column_text',
  /** column name */
  Id: 'id',
  /** column name */
  LawRevisionId: 'law_revision_id'
} as const;

export type Law_Revision_Columns_Update_Column = typeof Law_Revision_Columns_Update_Column[keyof typeof Law_Revision_Columns_Update_Column];
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
export const Law_Revisions_Constraint = {
  /** unique or primary key constraint on columns "id" */
  LawRevisionsPkey: 'law_revisions_pkey'
} as const;

export type Law_Revisions_Constraint = typeof Law_Revisions_Constraint[keyof typeof Law_Revisions_Constraint];
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
export const Law_Revisions_Select_Column = {
  /** column name */
  Abbrev: 'abbrev',
  /** column name */
  AbbrevKana: 'abbrev_kana',
  /** column name */
  AbbrevKanaSeion: 'abbrev_kana_seion',
  /** column name */
  AdYear: 'ad_year',
  /** column name */
  ApiLawDataInfo: 'api_law_data_info',
  /** column name */
  ApiLawRevisionId: 'api_law_revision_id',
  /** column name */
  ApiLawTypeNum: 'api_law_type_num',
  /** column name */
  Category: 'category',
  /** column name */
  EnforcementComment: 'enforcement_comment',
  /** column name */
  EnforcementDate: 'enforcement_date',
  /** column name */
  Era: 'era',
  /** column name */
  Id: 'id',
  /** column name */
  Lang: 'lang',
  /** column name */
  LawFullText: 'law_full_text',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Mission: 'mission',
  /** column name */
  Num: 'num',
  /** column name */
  NumKanji: 'num_kanji',
  /** column name */
  OldLawTitle: 'old_law_title',
  /** column name */
  OldLawTitleKana: 'old_law_title_kana',
  /** column name */
  OldLawTitleKanaSeion: 'old_law_title_kana_seion',
  /** column name */
  PromulgateDay: 'promulgate_day',
  /** column name */
  PromulgateMonth: 'promulgate_month',
  /** column name */
  RemainInForce: 'remain_in_force',
  /** column name */
  RepealType: 'repeal_type',
  /** column name */
  Status: 'status',
  /** column name */
  Title: 'title',
  /** column name */
  TitleKana: 'title_kana',
  /** column name */
  TitleKanaSeion: 'title_kana_seion',
  /** column name */
  Type: 'type',
  /** column name */
  Year: 'year'
} as const;

export type Law_Revisions_Select_Column = typeof Law_Revisions_Select_Column[keyof typeof Law_Revisions_Select_Column];
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
export const Law_Revisions_Update_Column = {
  /** column name */
  Abbrev: 'abbrev',
  /** column name */
  AbbrevKana: 'abbrev_kana',
  /** column name */
  AbbrevKanaSeion: 'abbrev_kana_seion',
  /** column name */
  AdYear: 'ad_year',
  /** column name */
  ApiLawDataInfo: 'api_law_data_info',
  /** column name */
  ApiLawRevisionId: 'api_law_revision_id',
  /** column name */
  ApiLawTypeNum: 'api_law_type_num',
  /** column name */
  Category: 'category',
  /** column name */
  EnforcementComment: 'enforcement_comment',
  /** column name */
  EnforcementDate: 'enforcement_date',
  /** column name */
  Era: 'era',
  /** column name */
  Id: 'id',
  /** column name */
  Lang: 'lang',
  /** column name */
  LawFullText: 'law_full_text',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Mission: 'mission',
  /** column name */
  Num: 'num',
  /** column name */
  NumKanji: 'num_kanji',
  /** column name */
  OldLawTitle: 'old_law_title',
  /** column name */
  OldLawTitleKana: 'old_law_title_kana',
  /** column name */
  OldLawTitleKanaSeion: 'old_law_title_kana_seion',
  /** column name */
  PromulgateDay: 'promulgate_day',
  /** column name */
  PromulgateMonth: 'promulgate_month',
  /** column name */
  RemainInForce: 'remain_in_force',
  /** column name */
  RepealType: 'repeal_type',
  /** column name */
  Status: 'status',
  /** column name */
  Title: 'title',
  /** column name */
  TitleKana: 'title_kana',
  /** column name */
  TitleKanaSeion: 'title_kana_seion',
  /** column name */
  Type: 'type',
  /** column name */
  Year: 'year'
} as const;

export type Law_Revisions_Update_Column = typeof Law_Revisions_Update_Column[keyof typeof Law_Revisions_Update_Column];
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
export const Law_Statuses_Constraint = {
  /** unique or primary key constraint on columns "status_en" */
  LawStatusPkey: 'law_status_pkey'
} as const;

export type Law_Statuses_Constraint = typeof Law_Statuses_Constraint[keyof typeof Law_Statuses_Constraint];
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
export const Law_Statuses_Select_Column = {
  /** column name */
  StatusEn: 'status_en',
  /** column name */
  StatusJa: 'status_ja'
} as const;

export type Law_Statuses_Select_Column = typeof Law_Statuses_Select_Column[keyof typeof Law_Statuses_Select_Column];
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
export const Law_Statuses_Update_Column = {
  /** column name */
  StatusEn: 'status_en',
  /** column name */
  StatusJa: 'status_ja'
} as const;

export type Law_Statuses_Update_Column = typeof Law_Statuses_Update_Column[keyof typeof Law_Statuses_Update_Column];
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
  text: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
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
  text?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_summaries" */
export const Law_Summaries_Constraint = {
  /** unique or primary key constraint on columns "id" */
  LawSummariesPkey: 'law_summaries_pkey'
} as const;

export type Law_Summaries_Constraint = typeof Law_Summaries_Constraint[keyof typeof Law_Summaries_Constraint];
/** input type for inserting data into table "law_summaries" */
export type Law_Summaries_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
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
  text?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_summaries */
export type Law_Summaries_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_summaries" */
export const Law_Summaries_Select_Column = {
  /** column name */
  Id: 'id',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Text: 'text',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Summaries_Select_Column = typeof Law_Summaries_Select_Column[keyof typeof Law_Summaries_Select_Column];
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
export const Law_Summaries_Update_Column = {
  /** column name */
  Id: 'id',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Text: 'text',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Summaries_Update_Column = typeof Law_Summaries_Update_Column[keyof typeof Law_Summaries_Update_Column];
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
export const Law_Types_Constraint = {
  /** unique or primary key constraint on columns "type_en" */
  LawTypesPkey: 'law_types_pkey'
} as const;

export type Law_Types_Constraint = typeof Law_Types_Constraint[keyof typeof Law_Types_Constraint];
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
export const Law_Types_Select_Column = {
  /** column name */
  TypeEn: 'type_en',
  /** column name */
  TypeJa: 'type_ja'
} as const;

export type Law_Types_Select_Column = typeof Law_Types_Select_Column[keyof typeof Law_Types_Select_Column];
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
export const Law_Types_Update_Column = {
  /** column name */
  TypeEn: 'type_en',
  /** column name */
  TypeJa: 'type_ja'
} as const;

export type Law_Types_Update_Column = typeof Law_Types_Update_Column[keyof typeof Law_Types_Update_Column];
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
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_views" */
export const Law_Views_Constraint = {
  /** unique or primary key constraint on columns "user_id", "law_id" */
  ViewsPkey: 'views_pkey'
} as const;

export type Law_Views_Constraint = typeof Law_Views_Constraint[keyof typeof Law_Views_Constraint];
/** input type for inserting data into table "law_views" */
export type Law_Views_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_views" */
export type Law_Views_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Views_Min_Fields = {
  __typename?: 'law_views_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_views" */
export type Law_Views_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
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
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_views */
export type Law_Views_Pk_Columns_Input = {
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "law_views" */
export const Law_Views_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Views_Select_Column = typeof Law_Views_Select_Column[keyof typeof Law_Views_Select_Column];
/** input type for updating data in table "law_views" */
export type Law_Views_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "law_views" */
export const Law_Views_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Views_Update_Column = typeof Law_Views_Update_Column[keyof typeof Law_Views_Update_Column];
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
  author?: Maybe<Scalars['String']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
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
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
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
export type LawsWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};

/** aggregated selection of "laws" */
export type Laws_Aggregate = {
  __typename?: 'laws_aggregate';
  aggregate?: Maybe<Laws_Aggregate_Fields>;
  nodes: Array<Laws>;
};

export type Laws_Aggregate_Bool_Exp = {
  count?: InputMaybe<Laws_Aggregate_Bool_Exp_Count>;
};

export type Laws_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laws_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "laws" */
export type Laws_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laws_Max_Order_By>;
  min?: InputMaybe<Laws_Min_Order_By>;
};

/** input type for inserting array relation for remote table "laws" */
export type Laws_Arr_Rel_Insert_Input = {
  data: Array<Laws_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};

/** Boolean expression to filter rows from the table "laws". All fields are combined with a logical 'AND'. */
export type Laws_Bool_Exp = {
  _and?: InputMaybe<Array<Laws_Bool_Exp>>;
  _not?: InputMaybe<Laws_Bool_Exp>;
  _or?: InputMaybe<Array<Laws_Bool_Exp>>;
  api_law_id?: InputMaybe<String_Comparison_Exp>;
  arguments?: InputMaybe<Arguments_Bool_Exp>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Bool_Exp>;
  author?: InputMaybe<String_Comparison_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  law_summaries?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Bool_Exp>;
  law_views?: InputMaybe<Law_Views_Bool_Exp>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world_laws?: InputMaybe<World_Laws_Bool_Exp>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "laws" */
export const Laws_Constraint = {
  /** unique or primary key constraint on columns "id" */
  LawsPkey: 'laws_pkey'
} as const;

export type Laws_Constraint = typeof Laws_Constraint[keyof typeof Laws_Constraint];
/** input type for inserting data into table "laws" */
export type Laws_Insert_Input = {
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  arguments?: InputMaybe<Arguments_Arr_Rel_Insert_Input>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  law_summaries?: InputMaybe<Law_Summaries_Arr_Rel_Insert_Input>;
  law_views?: InputMaybe<Law_Views_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world_laws?: InputMaybe<World_Laws_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Laws_Max_Fields = {
  __typename?: 'laws_max_fields';
  api_law_id?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "laws" */
export type Laws_Max_Order_By = {
  api_law_id?: InputMaybe<Order_By>;
  author?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laws_Min_Fields = {
  __typename?: 'laws_min_fields';
  api_law_id?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "laws" */
export type Laws_Min_Order_By = {
  api_law_id?: InputMaybe<Order_By>;
  author?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  author?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Order_By>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Order_By>;
};

/** primary key columns input for table: laws */
export type Laws_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "laws" */
export const Laws_Select_Column = {
  /** column name */
  ApiLawId: 'api_law_id',
  /** column name */
  Author: 'author',
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Laws_Select_Column = typeof Laws_Select_Column[keyof typeof Laws_Select_Column];
/** input type for updating data in table "laws" */
export type Laws_Set_Input = {
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
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
  author?: InputMaybe<Scalars['String']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "laws" */
export const Laws_Update_Column = {
  /** column name */
  ApiLawId: 'api_law_id',
  /** column name */
  Author: 'author',
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Laws_Update_Column = typeof Laws_Update_Column[keyof typeof Laws_Update_Column];
export type Laws_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laws_Set_Input>;
  /** filter the rows which have to be updated */
  where: Laws_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "argumen_chats" */
  delete_argumen_chats?: Maybe<Argumen_Chats_Mutation_Response>;
  /** delete single row from the table: "argumen_chats" */
  delete_argumen_chats_by_pk?: Maybe<Argumen_Chats>;
  /** delete data from the table: "argument_chat_boxes" */
  delete_argument_chat_boxes?: Maybe<Argument_Chat_Boxes_Mutation_Response>;
  /** delete single row from the table: "argument_chat_boxes" */
  delete_argument_chat_boxes_by_pk?: Maybe<Argument_Chat_Boxes>;
  /** delete data from the table: "argument_views" */
  delete_argument_views?: Maybe<Argument_Views_Mutation_Response>;
  /** delete single row from the table: "argument_views" */
  delete_argument_views_by_pk?: Maybe<Argument_Views>;
  /** delete data from the table: "arguments" */
  delete_arguments?: Maybe<Arguments_Mutation_Response>;
  /** delete single row from the table: "arguments" */
  delete_arguments_by_pk?: Maybe<Arguments>;
  /** delete data from the table: "citizen_histories" */
  delete_citizen_histories?: Maybe<Citizen_Histories_Mutation_Response>;
  /** delete single row from the table: "citizen_histories" */
  delete_citizen_histories_by_pk?: Maybe<Citizen_Histories>;
  /** delete data from the table: "citizens" */
  delete_citizens?: Maybe<Citizens_Mutation_Response>;
  /** delete single row from the table: "citizens" */
  delete_citizens_by_pk?: Maybe<Citizens>;
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
  /** delete data from the table: "resource_editable_users" */
  delete_resource_editable_users?: Maybe<Resource_Editable_Users_Mutation_Response>;
  /** delete single row from the table: "resource_editable_users" */
  delete_resource_editable_users_by_pk?: Maybe<Resource_Editable_Users>;
  /** delete data from the table: "resource_histories" */
  delete_resource_histories?: Maybe<Resource_Histories_Mutation_Response>;
  /** delete single row from the table: "resource_histories" */
  delete_resource_histories_by_pk?: Maybe<Resource_Histories>;
  /** delete data from the table: "resources" */
  delete_resources?: Maybe<Resources_Mutation_Response>;
  /** delete single row from the table: "resources" */
  delete_resources_by_pk?: Maybe<Resources>;
  /** delete data from the table: "species" */
  delete_species?: Maybe<Species_Mutation_Response>;
  /** delete data from the table: "species_assets" */
  delete_species_assets?: Maybe<Species_Assets_Mutation_Response>;
  /** delete single row from the table: "species_assets" */
  delete_species_assets_by_pk?: Maybe<Species_Assets>;
  /** delete single row from the table: "species" */
  delete_species_by_pk?: Maybe<Species>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "world_arguments" */
  delete_world_arguments?: Maybe<World_Arguments_Mutation_Response>;
  /** delete single row from the table: "world_arguments" */
  delete_world_arguments_by_pk?: Maybe<World_Arguments>;
  /** delete data from the table: "world_categories" */
  delete_world_categories?: Maybe<World_Categories_Mutation_Response>;
  /** delete single row from the table: "world_categories" */
  delete_world_categories_by_pk?: Maybe<World_Categories>;
  /** delete data from the table: "world_chat_boxes" */
  delete_world_chat_boxes?: Maybe<World_Chat_Boxes_Mutation_Response>;
  /** delete single row from the table: "world_chat_boxes" */
  delete_world_chat_boxes_by_pk?: Maybe<World_Chat_Boxes>;
  /** delete data from the table: "world_chats" */
  delete_world_chats?: Maybe<World_Chats_Mutation_Response>;
  /** delete single row from the table: "world_chats" */
  delete_world_chats_by_pk?: Maybe<World_Chats>;
  /** delete data from the table: "world_citizens" */
  delete_world_citizens?: Maybe<World_Citizens_Mutation_Response>;
  /** delete single row from the table: "world_citizens" */
  delete_world_citizens_by_pk?: Maybe<World_Citizens>;
  /** delete data from the table: "world_comments" */
  delete_world_comments?: Maybe<World_Comments_Mutation_Response>;
  /** delete single row from the table: "world_comments" */
  delete_world_comments_by_pk?: Maybe<World_Comments>;
  /** delete data from the table: "world_editable_users" */
  delete_world_editable_users?: Maybe<World_Editable_Users_Mutation_Response>;
  /** delete single row from the table: "world_editable_users" */
  delete_world_editable_users_by_pk?: Maybe<World_Editable_Users>;
  /** delete data from the table: "world_histories" */
  delete_world_histories?: Maybe<World_Histories_Mutation_Response>;
  /** delete single row from the table: "world_histories" */
  delete_world_histories_by_pk?: Maybe<World_Histories>;
  /** delete data from the table: "world_laws" */
  delete_world_laws?: Maybe<World_Laws_Mutation_Response>;
  /** delete single row from the table: "world_laws" */
  delete_world_laws_by_pk?: Maybe<World_Laws>;
  /** delete data from the table: "world_reactions" */
  delete_world_reactions?: Maybe<World_Reactions_Mutation_Response>;
  /** delete single row from the table: "world_reactions" */
  delete_world_reactions_by_pk?: Maybe<World_Reactions>;
  /** delete data from the table: "worlds" */
  delete_worlds?: Maybe<Worlds_Mutation_Response>;
  /** delete single row from the table: "worlds" */
  delete_worlds_by_pk?: Maybe<Worlds>;
  /** insert data into the table: "argumen_chats" */
  insert_argumen_chats?: Maybe<Argumen_Chats_Mutation_Response>;
  /** insert a single row into the table: "argumen_chats" */
  insert_argumen_chats_one?: Maybe<Argumen_Chats>;
  /** insert data into the table: "argument_chat_boxes" */
  insert_argument_chat_boxes?: Maybe<Argument_Chat_Boxes_Mutation_Response>;
  /** insert a single row into the table: "argument_chat_boxes" */
  insert_argument_chat_boxes_one?: Maybe<Argument_Chat_Boxes>;
  /** insert data into the table: "argument_views" */
  insert_argument_views?: Maybe<Argument_Views_Mutation_Response>;
  /** insert a single row into the table: "argument_views" */
  insert_argument_views_one?: Maybe<Argument_Views>;
  /** insert data into the table: "arguments" */
  insert_arguments?: Maybe<Arguments_Mutation_Response>;
  /** insert a single row into the table: "arguments" */
  insert_arguments_one?: Maybe<Arguments>;
  /** insert data into the table: "citizen_histories" */
  insert_citizen_histories?: Maybe<Citizen_Histories_Mutation_Response>;
  /** insert a single row into the table: "citizen_histories" */
  insert_citizen_histories_one?: Maybe<Citizen_Histories>;
  /** insert data into the table: "citizens" */
  insert_citizens?: Maybe<Citizens_Mutation_Response>;
  /** insert a single row into the table: "citizens" */
  insert_citizens_one?: Maybe<Citizens>;
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
  /** insert data into the table: "resource_editable_users" */
  insert_resource_editable_users?: Maybe<Resource_Editable_Users_Mutation_Response>;
  /** insert a single row into the table: "resource_editable_users" */
  insert_resource_editable_users_one?: Maybe<Resource_Editable_Users>;
  /** insert data into the table: "resource_histories" */
  insert_resource_histories?: Maybe<Resource_Histories_Mutation_Response>;
  /** insert a single row into the table: "resource_histories" */
  insert_resource_histories_one?: Maybe<Resource_Histories>;
  /** insert data into the table: "resources" */
  insert_resources?: Maybe<Resources_Mutation_Response>;
  /** insert a single row into the table: "resources" */
  insert_resources_one?: Maybe<Resources>;
  /** insert data into the table: "species" */
  insert_species?: Maybe<Species_Mutation_Response>;
  /** insert data into the table: "species_assets" */
  insert_species_assets?: Maybe<Species_Assets_Mutation_Response>;
  /** insert a single row into the table: "species_assets" */
  insert_species_assets_one?: Maybe<Species_Assets>;
  /** insert a single row into the table: "species" */
  insert_species_one?: Maybe<Species>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "world_arguments" */
  insert_world_arguments?: Maybe<World_Arguments_Mutation_Response>;
  /** insert a single row into the table: "world_arguments" */
  insert_world_arguments_one?: Maybe<World_Arguments>;
  /** insert data into the table: "world_categories" */
  insert_world_categories?: Maybe<World_Categories_Mutation_Response>;
  /** insert a single row into the table: "world_categories" */
  insert_world_categories_one?: Maybe<World_Categories>;
  /** insert data into the table: "world_chat_boxes" */
  insert_world_chat_boxes?: Maybe<World_Chat_Boxes_Mutation_Response>;
  /** insert a single row into the table: "world_chat_boxes" */
  insert_world_chat_boxes_one?: Maybe<World_Chat_Boxes>;
  /** insert data into the table: "world_chats" */
  insert_world_chats?: Maybe<World_Chats_Mutation_Response>;
  /** insert a single row into the table: "world_chats" */
  insert_world_chats_one?: Maybe<World_Chats>;
  /** insert data into the table: "world_citizens" */
  insert_world_citizens?: Maybe<World_Citizens_Mutation_Response>;
  /** insert a single row into the table: "world_citizens" */
  insert_world_citizens_one?: Maybe<World_Citizens>;
  /** insert data into the table: "world_comments" */
  insert_world_comments?: Maybe<World_Comments_Mutation_Response>;
  /** insert a single row into the table: "world_comments" */
  insert_world_comments_one?: Maybe<World_Comments>;
  /** insert data into the table: "world_editable_users" */
  insert_world_editable_users?: Maybe<World_Editable_Users_Mutation_Response>;
  /** insert a single row into the table: "world_editable_users" */
  insert_world_editable_users_one?: Maybe<World_Editable_Users>;
  /** insert data into the table: "world_histories" */
  insert_world_histories?: Maybe<World_Histories_Mutation_Response>;
  /** insert a single row into the table: "world_histories" */
  insert_world_histories_one?: Maybe<World_Histories>;
  /** insert data into the table: "world_laws" */
  insert_world_laws?: Maybe<World_Laws_Mutation_Response>;
  /** insert a single row into the table: "world_laws" */
  insert_world_laws_one?: Maybe<World_Laws>;
  /** insert data into the table: "world_reactions" */
  insert_world_reactions?: Maybe<World_Reactions_Mutation_Response>;
  /** insert a single row into the table: "world_reactions" */
  insert_world_reactions_one?: Maybe<World_Reactions>;
  /** insert data into the table: "worlds" */
  insert_worlds?: Maybe<Worlds_Mutation_Response>;
  /** insert a single row into the table: "worlds" */
  insert_worlds_one?: Maybe<Worlds>;
  /** update data of the table: "argumen_chats" */
  update_argumen_chats?: Maybe<Argumen_Chats_Mutation_Response>;
  /** update single row of the table: "argumen_chats" */
  update_argumen_chats_by_pk?: Maybe<Argumen_Chats>;
  /** update multiples rows of table: "argumen_chats" */
  update_argumen_chats_many?: Maybe<Array<Maybe<Argumen_Chats_Mutation_Response>>>;
  /** update data of the table: "argument_chat_boxes" */
  update_argument_chat_boxes?: Maybe<Argument_Chat_Boxes_Mutation_Response>;
  /** update single row of the table: "argument_chat_boxes" */
  update_argument_chat_boxes_by_pk?: Maybe<Argument_Chat_Boxes>;
  /** update multiples rows of table: "argument_chat_boxes" */
  update_argument_chat_boxes_many?: Maybe<Array<Maybe<Argument_Chat_Boxes_Mutation_Response>>>;
  /** update data of the table: "argument_views" */
  update_argument_views?: Maybe<Argument_Views_Mutation_Response>;
  /** update single row of the table: "argument_views" */
  update_argument_views_by_pk?: Maybe<Argument_Views>;
  /** update multiples rows of table: "argument_views" */
  update_argument_views_many?: Maybe<Array<Maybe<Argument_Views_Mutation_Response>>>;
  /** update data of the table: "arguments" */
  update_arguments?: Maybe<Arguments_Mutation_Response>;
  /** update single row of the table: "arguments" */
  update_arguments_by_pk?: Maybe<Arguments>;
  /** update multiples rows of table: "arguments" */
  update_arguments_many?: Maybe<Array<Maybe<Arguments_Mutation_Response>>>;
  /** update data of the table: "citizen_histories" */
  update_citizen_histories?: Maybe<Citizen_Histories_Mutation_Response>;
  /** update single row of the table: "citizen_histories" */
  update_citizen_histories_by_pk?: Maybe<Citizen_Histories>;
  /** update multiples rows of table: "citizen_histories" */
  update_citizen_histories_many?: Maybe<Array<Maybe<Citizen_Histories_Mutation_Response>>>;
  /** update data of the table: "citizens" */
  update_citizens?: Maybe<Citizens_Mutation_Response>;
  /** update single row of the table: "citizens" */
  update_citizens_by_pk?: Maybe<Citizens>;
  /** update multiples rows of table: "citizens" */
  update_citizens_many?: Maybe<Array<Maybe<Citizens_Mutation_Response>>>;
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
  /** update data of the table: "resource_editable_users" */
  update_resource_editable_users?: Maybe<Resource_Editable_Users_Mutation_Response>;
  /** update single row of the table: "resource_editable_users" */
  update_resource_editable_users_by_pk?: Maybe<Resource_Editable_Users>;
  /** update multiples rows of table: "resource_editable_users" */
  update_resource_editable_users_many?: Maybe<Array<Maybe<Resource_Editable_Users_Mutation_Response>>>;
  /** update data of the table: "resource_histories" */
  update_resource_histories?: Maybe<Resource_Histories_Mutation_Response>;
  /** update single row of the table: "resource_histories" */
  update_resource_histories_by_pk?: Maybe<Resource_Histories>;
  /** update multiples rows of table: "resource_histories" */
  update_resource_histories_many?: Maybe<Array<Maybe<Resource_Histories_Mutation_Response>>>;
  /** update data of the table: "resources" */
  update_resources?: Maybe<Resources_Mutation_Response>;
  /** update single row of the table: "resources" */
  update_resources_by_pk?: Maybe<Resources>;
  /** update multiples rows of table: "resources" */
  update_resources_many?: Maybe<Array<Maybe<Resources_Mutation_Response>>>;
  /** update data of the table: "species" */
  update_species?: Maybe<Species_Mutation_Response>;
  /** update data of the table: "species_assets" */
  update_species_assets?: Maybe<Species_Assets_Mutation_Response>;
  /** update single row of the table: "species_assets" */
  update_species_assets_by_pk?: Maybe<Species_Assets>;
  /** update multiples rows of table: "species_assets" */
  update_species_assets_many?: Maybe<Array<Maybe<Species_Assets_Mutation_Response>>>;
  /** update single row of the table: "species" */
  update_species_by_pk?: Maybe<Species>;
  /** update multiples rows of table: "species" */
  update_species_many?: Maybe<Array<Maybe<Species_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "world_arguments" */
  update_world_arguments?: Maybe<World_Arguments_Mutation_Response>;
  /** update single row of the table: "world_arguments" */
  update_world_arguments_by_pk?: Maybe<World_Arguments>;
  /** update multiples rows of table: "world_arguments" */
  update_world_arguments_many?: Maybe<Array<Maybe<World_Arguments_Mutation_Response>>>;
  /** update data of the table: "world_categories" */
  update_world_categories?: Maybe<World_Categories_Mutation_Response>;
  /** update single row of the table: "world_categories" */
  update_world_categories_by_pk?: Maybe<World_Categories>;
  /** update multiples rows of table: "world_categories" */
  update_world_categories_many?: Maybe<Array<Maybe<World_Categories_Mutation_Response>>>;
  /** update data of the table: "world_chat_boxes" */
  update_world_chat_boxes?: Maybe<World_Chat_Boxes_Mutation_Response>;
  /** update single row of the table: "world_chat_boxes" */
  update_world_chat_boxes_by_pk?: Maybe<World_Chat_Boxes>;
  /** update multiples rows of table: "world_chat_boxes" */
  update_world_chat_boxes_many?: Maybe<Array<Maybe<World_Chat_Boxes_Mutation_Response>>>;
  /** update data of the table: "world_chats" */
  update_world_chats?: Maybe<World_Chats_Mutation_Response>;
  /** update single row of the table: "world_chats" */
  update_world_chats_by_pk?: Maybe<World_Chats>;
  /** update multiples rows of table: "world_chats" */
  update_world_chats_many?: Maybe<Array<Maybe<World_Chats_Mutation_Response>>>;
  /** update data of the table: "world_citizens" */
  update_world_citizens?: Maybe<World_Citizens_Mutation_Response>;
  /** update single row of the table: "world_citizens" */
  update_world_citizens_by_pk?: Maybe<World_Citizens>;
  /** update multiples rows of table: "world_citizens" */
  update_world_citizens_many?: Maybe<Array<Maybe<World_Citizens_Mutation_Response>>>;
  /** update data of the table: "world_comments" */
  update_world_comments?: Maybe<World_Comments_Mutation_Response>;
  /** update single row of the table: "world_comments" */
  update_world_comments_by_pk?: Maybe<World_Comments>;
  /** update multiples rows of table: "world_comments" */
  update_world_comments_many?: Maybe<Array<Maybe<World_Comments_Mutation_Response>>>;
  /** update data of the table: "world_editable_users" */
  update_world_editable_users?: Maybe<World_Editable_Users_Mutation_Response>;
  /** update single row of the table: "world_editable_users" */
  update_world_editable_users_by_pk?: Maybe<World_Editable_Users>;
  /** update multiples rows of table: "world_editable_users" */
  update_world_editable_users_many?: Maybe<Array<Maybe<World_Editable_Users_Mutation_Response>>>;
  /** update data of the table: "world_histories" */
  update_world_histories?: Maybe<World_Histories_Mutation_Response>;
  /** update single row of the table: "world_histories" */
  update_world_histories_by_pk?: Maybe<World_Histories>;
  /** update multiples rows of table: "world_histories" */
  update_world_histories_many?: Maybe<Array<Maybe<World_Histories_Mutation_Response>>>;
  /** update data of the table: "world_laws" */
  update_world_laws?: Maybe<World_Laws_Mutation_Response>;
  /** update single row of the table: "world_laws" */
  update_world_laws_by_pk?: Maybe<World_Laws>;
  /** update multiples rows of table: "world_laws" */
  update_world_laws_many?: Maybe<Array<Maybe<World_Laws_Mutation_Response>>>;
  /** update data of the table: "world_reactions" */
  update_world_reactions?: Maybe<World_Reactions_Mutation_Response>;
  /** update single row of the table: "world_reactions" */
  update_world_reactions_by_pk?: Maybe<World_Reactions>;
  /** update multiples rows of table: "world_reactions" */
  update_world_reactions_many?: Maybe<Array<Maybe<World_Reactions_Mutation_Response>>>;
  /** update data of the table: "worlds" */
  update_worlds?: Maybe<Worlds_Mutation_Response>;
  /** update single row of the table: "worlds" */
  update_worlds_by_pk?: Maybe<Worlds>;
  /** update multiples rows of table: "worlds" */
  update_worlds_many?: Maybe<Array<Maybe<Worlds_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Argumen_ChatsArgs = {
  where: Argumen_Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Argumen_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Argument_Chat_BoxesArgs = {
  where: Argument_Chat_Boxes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Argument_Chat_Boxes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Argument_ViewsArgs = {
  where: Argument_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Argument_Views_By_PkArgs = {
  argument_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
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
export type Mutation_RootDelete_Citizen_HistoriesArgs = {
  where: Citizen_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Citizen_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CitizensArgs = {
  where: Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Citizens_By_PkArgs = {
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
  law_revision_id: Scalars['uuid']['input'];
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
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
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
export type Mutation_RootDelete_Resource_Editable_UsersArgs = {
  where: Resource_Editable_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resource_Editable_Users_By_PkArgs = {
  resource_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Resource_HistoriesArgs = {
  where: Resource_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resource_Histories_By_PkArgs = {
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
export type Mutation_RootDelete_SpeciesArgs = {
  where: Species_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Species_AssetsArgs = {
  where: Species_Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Species_Assets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Species_By_PkArgs = {
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
export type Mutation_RootDelete_World_ArgumentsArgs = {
  where: World_Arguments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Arguments_By_PkArgs = {
  argument_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_CategoriesArgs = {
  where: World_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Categories_By_PkArgs = {
  law_category_ja: Scalars['String']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_Chat_BoxesArgs = {
  where: World_Chat_Boxes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Chat_Boxes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_ChatsArgs = {
  where: World_Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_CitizensArgs = {
  where: World_Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Citizens_By_PkArgs = {
  citizen_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_CommentsArgs = {
  where: World_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_Editable_UsersArgs = {
  where: World_Editable_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Editable_Users_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_HistoriesArgs = {
  where: World_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_LawsArgs = {
  where: World_Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Laws_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_ReactionsArgs = {
  where: World_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Reactions_By_PkArgs = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WorldsArgs = {
  where: Worlds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Worlds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Argumen_ChatsArgs = {
  objects: Array<Argumen_Chats_Insert_Input>;
  on_conflict?: InputMaybe<Argumen_Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argumen_Chats_OneArgs = {
  object: Argumen_Chats_Insert_Input;
  on_conflict?: InputMaybe<Argumen_Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_Chat_BoxesArgs = {
  objects: Array<Argument_Chat_Boxes_Insert_Input>;
  on_conflict?: InputMaybe<Argument_Chat_Boxes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_Chat_Boxes_OneArgs = {
  object: Argument_Chat_Boxes_Insert_Input;
  on_conflict?: InputMaybe<Argument_Chat_Boxes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_ViewsArgs = {
  objects: Array<Argument_Views_Insert_Input>;
  on_conflict?: InputMaybe<Argument_Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Argument_Views_OneArgs = {
  object: Argument_Views_Insert_Input;
  on_conflict?: InputMaybe<Argument_Views_On_Conflict>;
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
export type Mutation_RootInsert_Citizen_HistoriesArgs = {
  objects: Array<Citizen_Histories_Insert_Input>;
  on_conflict?: InputMaybe<Citizen_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Citizen_Histories_OneArgs = {
  object: Citizen_Histories_Insert_Input;
  on_conflict?: InputMaybe<Citizen_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CitizensArgs = {
  objects: Array<Citizens_Insert_Input>;
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Citizens_OneArgs = {
  object: Citizens_Insert_Input;
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
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
export type Mutation_RootInsert_Resource_Editable_UsersArgs = {
  objects: Array<Resource_Editable_Users_Insert_Input>;
  on_conflict?: InputMaybe<Resource_Editable_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resource_Editable_Users_OneArgs = {
  object: Resource_Editable_Users_Insert_Input;
  on_conflict?: InputMaybe<Resource_Editable_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resource_HistoriesArgs = {
  objects: Array<Resource_Histories_Insert_Input>;
  on_conflict?: InputMaybe<Resource_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resource_Histories_OneArgs = {
  object: Resource_Histories_Insert_Input;
  on_conflict?: InputMaybe<Resource_Histories_On_Conflict>;
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
export type Mutation_RootInsert_SpeciesArgs = {
  objects: Array<Species_Insert_Input>;
  on_conflict?: InputMaybe<Species_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Species_AssetsArgs = {
  objects: Array<Species_Assets_Insert_Input>;
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Species_Assets_OneArgs = {
  object: Species_Assets_Insert_Input;
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Species_OneArgs = {
  object: Species_Insert_Input;
  on_conflict?: InputMaybe<Species_On_Conflict>;
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
export type Mutation_RootInsert_World_ArgumentsArgs = {
  objects: Array<World_Arguments_Insert_Input>;
  on_conflict?: InputMaybe<World_Arguments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Arguments_OneArgs = {
  object: World_Arguments_Insert_Input;
  on_conflict?: InputMaybe<World_Arguments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_CategoriesArgs = {
  objects: Array<World_Categories_Insert_Input>;
  on_conflict?: InputMaybe<World_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Categories_OneArgs = {
  object: World_Categories_Insert_Input;
  on_conflict?: InputMaybe<World_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Chat_BoxesArgs = {
  objects: Array<World_Chat_Boxes_Insert_Input>;
  on_conflict?: InputMaybe<World_Chat_Boxes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Chat_Boxes_OneArgs = {
  object: World_Chat_Boxes_Insert_Input;
  on_conflict?: InputMaybe<World_Chat_Boxes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_ChatsArgs = {
  objects: Array<World_Chats_Insert_Input>;
  on_conflict?: InputMaybe<World_Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Chats_OneArgs = {
  object: World_Chats_Insert_Input;
  on_conflict?: InputMaybe<World_Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_CitizensArgs = {
  objects: Array<World_Citizens_Insert_Input>;
  on_conflict?: InputMaybe<World_Citizens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Citizens_OneArgs = {
  object: World_Citizens_Insert_Input;
  on_conflict?: InputMaybe<World_Citizens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_CommentsArgs = {
  objects: Array<World_Comments_Insert_Input>;
  on_conflict?: InputMaybe<World_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Comments_OneArgs = {
  object: World_Comments_Insert_Input;
  on_conflict?: InputMaybe<World_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Editable_UsersArgs = {
  objects: Array<World_Editable_Users_Insert_Input>;
  on_conflict?: InputMaybe<World_Editable_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Editable_Users_OneArgs = {
  object: World_Editable_Users_Insert_Input;
  on_conflict?: InputMaybe<World_Editable_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_HistoriesArgs = {
  objects: Array<World_Histories_Insert_Input>;
  on_conflict?: InputMaybe<World_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Histories_OneArgs = {
  object: World_Histories_Insert_Input;
  on_conflict?: InputMaybe<World_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_LawsArgs = {
  objects: Array<World_Laws_Insert_Input>;
  on_conflict?: InputMaybe<World_Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Laws_OneArgs = {
  object: World_Laws_Insert_Input;
  on_conflict?: InputMaybe<World_Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_ReactionsArgs = {
  objects: Array<World_Reactions_Insert_Input>;
  on_conflict?: InputMaybe<World_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Reactions_OneArgs = {
  object: World_Reactions_Insert_Input;
  on_conflict?: InputMaybe<World_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorldsArgs = {
  objects: Array<Worlds_Insert_Input>;
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Worlds_OneArgs = {
  object: Worlds_Insert_Input;
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Argumen_ChatsArgs = {
  _inc?: InputMaybe<Argumen_Chats_Inc_Input>;
  _set?: InputMaybe<Argumen_Chats_Set_Input>;
  where: Argumen_Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Argumen_Chats_By_PkArgs = {
  _inc?: InputMaybe<Argumen_Chats_Inc_Input>;
  _set?: InputMaybe<Argumen_Chats_Set_Input>;
  pk_columns: Argumen_Chats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Argumen_Chats_ManyArgs = {
  updates: Array<Argumen_Chats_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Chat_BoxesArgs = {
  _set?: InputMaybe<Argument_Chat_Boxes_Set_Input>;
  where: Argument_Chat_Boxes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Chat_Boxes_By_PkArgs = {
  _set?: InputMaybe<Argument_Chat_Boxes_Set_Input>;
  pk_columns: Argument_Chat_Boxes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Chat_Boxes_ManyArgs = {
  updates: Array<Argument_Chat_Boxes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_ViewsArgs = {
  _set?: InputMaybe<Argument_Views_Set_Input>;
  where: Argument_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Views_By_PkArgs = {
  _set?: InputMaybe<Argument_Views_Set_Input>;
  pk_columns: Argument_Views_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Argument_Views_ManyArgs = {
  updates: Array<Argument_Views_Updates>;
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
export type Mutation_RootUpdate_Citizen_HistoriesArgs = {
  _set?: InputMaybe<Citizen_Histories_Set_Input>;
  where: Citizen_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Citizen_Histories_By_PkArgs = {
  _set?: InputMaybe<Citizen_Histories_Set_Input>;
  pk_columns: Citizen_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Citizen_Histories_ManyArgs = {
  updates: Array<Citizen_Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CitizensArgs = {
  _append?: InputMaybe<Citizens_Append_Input>;
  _delete_at_path?: InputMaybe<Citizens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Citizens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Citizens_Delete_Key_Input>;
  _inc?: InputMaybe<Citizens_Inc_Input>;
  _prepend?: InputMaybe<Citizens_Prepend_Input>;
  _set?: InputMaybe<Citizens_Set_Input>;
  where: Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Citizens_By_PkArgs = {
  _append?: InputMaybe<Citizens_Append_Input>;
  _delete_at_path?: InputMaybe<Citizens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Citizens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Citizens_Delete_Key_Input>;
  _inc?: InputMaybe<Citizens_Inc_Input>;
  _prepend?: InputMaybe<Citizens_Prepend_Input>;
  _set?: InputMaybe<Citizens_Set_Input>;
  pk_columns: Citizens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Citizens_ManyArgs = {
  updates: Array<Citizens_Updates>;
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
export type Mutation_RootUpdate_Resource_Editable_UsersArgs = {
  _set?: InputMaybe<Resource_Editable_Users_Set_Input>;
  where: Resource_Editable_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Editable_Users_By_PkArgs = {
  _set?: InputMaybe<Resource_Editable_Users_Set_Input>;
  pk_columns: Resource_Editable_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Editable_Users_ManyArgs = {
  updates: Array<Resource_Editable_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_HistoriesArgs = {
  _set?: InputMaybe<Resource_Histories_Set_Input>;
  where: Resource_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Histories_By_PkArgs = {
  _set?: InputMaybe<Resource_Histories_Set_Input>;
  pk_columns: Resource_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Histories_ManyArgs = {
  updates: Array<Resource_Histories_Updates>;
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
export type Mutation_RootUpdate_SpeciesArgs = {
  _set?: InputMaybe<Species_Set_Input>;
  where: Species_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Species_AssetsArgs = {
  _set?: InputMaybe<Species_Assets_Set_Input>;
  where: Species_Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Species_Assets_By_PkArgs = {
  _set?: InputMaybe<Species_Assets_Set_Input>;
  pk_columns: Species_Assets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Species_Assets_ManyArgs = {
  updates: Array<Species_Assets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Species_By_PkArgs = {
  _set?: InputMaybe<Species_Set_Input>;
  pk_columns: Species_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Species_ManyArgs = {
  updates: Array<Species_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_World_ArgumentsArgs = {
  _set?: InputMaybe<World_Arguments_Set_Input>;
  where: World_Arguments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Arguments_By_PkArgs = {
  _set?: InputMaybe<World_Arguments_Set_Input>;
  pk_columns: World_Arguments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Arguments_ManyArgs = {
  updates: Array<World_Arguments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_CategoriesArgs = {
  _set?: InputMaybe<World_Categories_Set_Input>;
  where: World_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Categories_By_PkArgs = {
  _set?: InputMaybe<World_Categories_Set_Input>;
  pk_columns: World_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Categories_ManyArgs = {
  updates: Array<World_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_Chat_BoxesArgs = {
  _inc?: InputMaybe<World_Chat_Boxes_Inc_Input>;
  _set?: InputMaybe<World_Chat_Boxes_Set_Input>;
  where: World_Chat_Boxes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Chat_Boxes_By_PkArgs = {
  _inc?: InputMaybe<World_Chat_Boxes_Inc_Input>;
  _set?: InputMaybe<World_Chat_Boxes_Set_Input>;
  pk_columns: World_Chat_Boxes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Chat_Boxes_ManyArgs = {
  updates: Array<World_Chat_Boxes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_ChatsArgs = {
  _inc?: InputMaybe<World_Chats_Inc_Input>;
  _set?: InputMaybe<World_Chats_Set_Input>;
  where: World_Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Chats_By_PkArgs = {
  _inc?: InputMaybe<World_Chats_Inc_Input>;
  _set?: InputMaybe<World_Chats_Set_Input>;
  pk_columns: World_Chats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Chats_ManyArgs = {
  updates: Array<World_Chats_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_CitizensArgs = {
  _set?: InputMaybe<World_Citizens_Set_Input>;
  where: World_Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Citizens_By_PkArgs = {
  _set?: InputMaybe<World_Citizens_Set_Input>;
  pk_columns: World_Citizens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Citizens_ManyArgs = {
  updates: Array<World_Citizens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_CommentsArgs = {
  _inc?: InputMaybe<World_Comments_Inc_Input>;
  _set?: InputMaybe<World_Comments_Set_Input>;
  where: World_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Comments_By_PkArgs = {
  _inc?: InputMaybe<World_Comments_Inc_Input>;
  _set?: InputMaybe<World_Comments_Set_Input>;
  pk_columns: World_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Comments_ManyArgs = {
  updates: Array<World_Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_Editable_UsersArgs = {
  _inc?: InputMaybe<World_Editable_Users_Inc_Input>;
  _set?: InputMaybe<World_Editable_Users_Set_Input>;
  where: World_Editable_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Editable_Users_By_PkArgs = {
  _inc?: InputMaybe<World_Editable_Users_Inc_Input>;
  _set?: InputMaybe<World_Editable_Users_Set_Input>;
  pk_columns: World_Editable_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Editable_Users_ManyArgs = {
  updates: Array<World_Editable_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_HistoriesArgs = {
  _inc?: InputMaybe<World_Histories_Inc_Input>;
  _set?: InputMaybe<World_Histories_Set_Input>;
  where: World_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Histories_By_PkArgs = {
  _inc?: InputMaybe<World_Histories_Inc_Input>;
  _set?: InputMaybe<World_Histories_Set_Input>;
  pk_columns: World_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Histories_ManyArgs = {
  updates: Array<World_Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_LawsArgs = {
  _set?: InputMaybe<World_Laws_Set_Input>;
  where: World_Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Laws_By_PkArgs = {
  _set?: InputMaybe<World_Laws_Set_Input>;
  pk_columns: World_Laws_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Laws_ManyArgs = {
  updates: Array<World_Laws_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_ReactionsArgs = {
  _inc?: InputMaybe<World_Reactions_Inc_Input>;
  _set?: InputMaybe<World_Reactions_Set_Input>;
  where: World_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Reactions_By_PkArgs = {
  _inc?: InputMaybe<World_Reactions_Inc_Input>;
  _set?: InputMaybe<World_Reactions_Set_Input>;
  pk_columns: World_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Reactions_ManyArgs = {
  updates: Array<World_Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorldsArgs = {
  _inc?: InputMaybe<Worlds_Inc_Input>;
  _set?: InputMaybe<Worlds_Set_Input>;
  where: Worlds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Worlds_By_PkArgs = {
  _inc?: InputMaybe<Worlds_Inc_Input>;
  _set?: InputMaybe<Worlds_Set_Input>;
  pk_columns: Worlds_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Worlds_ManyArgs = {
  updates: Array<Worlds_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export const Order_By = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last'
} as const;

export type Order_By = typeof Order_By[keyof typeof Order_By];
export type Query_Root = {
  __typename?: 'query_root';
  _service: _Service;
  /** An array relationship */
  argumen_chats: Array<Argumen_Chats>;
  /** An aggregate relationship */
  argumen_chats_aggregate: Argumen_Chats_Aggregate;
  /** fetch data from the table: "argumen_chats" using primary key columns */
  argumen_chats_by_pk?: Maybe<Argumen_Chats>;
  /** An array relationship */
  argument_chat_boxes: Array<Argument_Chat_Boxes>;
  /** An aggregate relationship */
  argument_chat_boxes_aggregate: Argument_Chat_Boxes_Aggregate;
  /** fetch data from the table: "argument_chat_boxes" using primary key columns */
  argument_chat_boxes_by_pk?: Maybe<Argument_Chat_Boxes>;
  /** An array relationship */
  argument_views: Array<Argument_Views>;
  /** An aggregate relationship */
  argument_views_aggregate: Argument_Views_Aggregate;
  /** fetch data from the table: "argument_views" using primary key columns */
  argument_views_by_pk?: Maybe<Argument_Views>;
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  /** fetch data from the table: "arguments" using primary key columns */
  arguments_by_pk?: Maybe<Arguments>;
  /** An array relationship */
  citizen_histories: Array<Citizen_Histories>;
  /** An aggregate relationship */
  citizen_histories_aggregate: Citizen_Histories_Aggregate;
  /** fetch data from the table: "citizen_histories" using primary key columns */
  citizen_histories_by_pk?: Maybe<Citizen_Histories>;
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
  /** fetch data from the table: "citizens" using primary key columns */
  citizens_by_pk?: Maybe<Citizens>;
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
  /** An array relationship */
  laws: Array<Laws>;
  /** An aggregate relationship */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** An array relationship */
  resource_editable_users: Array<Resource_Editable_Users>;
  /** An aggregate relationship */
  resource_editable_users_aggregate: Resource_Editable_Users_Aggregate;
  /** fetch data from the table: "resource_editable_users" using primary key columns */
  resource_editable_users_by_pk?: Maybe<Resource_Editable_Users>;
  /** An array relationship */
  resource_histories: Array<Resource_Histories>;
  /** An aggregate relationship */
  resource_histories_aggregate: Resource_Histories_Aggregate;
  /** fetch data from the table: "resource_histories" using primary key columns */
  resource_histories_by_pk?: Maybe<Resource_Histories>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** An array relationship */
  species: Array<Species>;
  /** An aggregate relationship */
  species_aggregate: Species_Aggregate;
  /** An array relationship */
  species_assets: Array<Species_Assets>;
  /** An aggregate relationship */
  species_assets_aggregate: Species_Assets_Aggregate;
  /** fetch data from the table: "species_assets" using primary key columns */
  species_assets_by_pk?: Maybe<Species_Assets>;
  /** fetch data from the table: "species" using primary key columns */
  species_by_pk?: Maybe<Species>;
  /** fetch data from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id: Array<Species_Percentage_View_With_World_Id>;
  /** fetch aggregated fields from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  world_arguments: Array<World_Arguments>;
  /** An aggregate relationship */
  world_arguments_aggregate: World_Arguments_Aggregate;
  /** fetch data from the table: "world_arguments" using primary key columns */
  world_arguments_by_pk?: Maybe<World_Arguments>;
  /** An array relationship */
  world_categories: Array<World_Categories>;
  /** An aggregate relationship */
  world_categories_aggregate: World_Categories_Aggregate;
  /** fetch data from the table: "world_categories" using primary key columns */
  world_categories_by_pk?: Maybe<World_Categories>;
  /** An array relationship */
  world_chat_boxes: Array<World_Chat_Boxes>;
  /** An aggregate relationship */
  world_chat_boxes_aggregate: World_Chat_Boxes_Aggregate;
  /** fetch data from the table: "world_chat_boxes" using primary key columns */
  world_chat_boxes_by_pk?: Maybe<World_Chat_Boxes>;
  /** An array relationship */
  world_chats: Array<World_Chats>;
  /** An aggregate relationship */
  world_chats_aggregate: World_Chats_Aggregate;
  /** fetch data from the table: "world_chats" using primary key columns */
  world_chats_by_pk?: Maybe<World_Chats>;
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
  /** fetch data from the table: "world_citizens" using primary key columns */
  world_citizens_by_pk?: Maybe<World_Citizens>;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** fetch data from the table: "world_comments" using primary key columns */
  world_comments_by_pk?: Maybe<World_Comments>;
  /** An array relationship */
  world_editable_users: Array<World_Editable_Users>;
  /** An aggregate relationship */
  world_editable_users_aggregate: World_Editable_Users_Aggregate;
  /** fetch data from the table: "world_editable_users" using primary key columns */
  world_editable_users_by_pk?: Maybe<World_Editable_Users>;
  /** An array relationship */
  world_histories: Array<World_Histories>;
  /** An aggregate relationship */
  world_histories_aggregate: World_Histories_Aggregate;
  /** fetch data from the table: "world_histories" using primary key columns */
  world_histories_by_pk?: Maybe<World_Histories>;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
  /** fetch data from the table: "world_laws" using primary key columns */
  world_laws_by_pk?: Maybe<World_Laws>;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
  /** fetch data from the table: "world_reactions" using primary key columns */
  world_reactions_by_pk?: Maybe<World_Reactions>;
  /** An array relationship */
  worlds: Array<Worlds>;
  /** An aggregate relationship */
  worlds_aggregate: Worlds_Aggregate;
  /** fetch data from the table: "worlds" using primary key columns */
  worlds_by_pk?: Maybe<Worlds>;
};


export type Query_RootArgumen_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argumen_Chats_Order_By>>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};


export type Query_RootArgumen_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argumen_Chats_Order_By>>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};


export type Query_RootArgumen_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootArgument_Chat_BoxesArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chat_Boxes_Order_By>>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};


export type Query_RootArgument_Chat_Boxes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chat_Boxes_Order_By>>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};


export type Query_RootArgument_Chat_Boxes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootArgument_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};


export type Query_RootArgument_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};


export type Query_RootArgument_Views_By_PkArgs = {
  argument_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
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


export type Query_RootCitizen_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


export type Query_RootCitizen_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


export type Query_RootCitizen_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Query_RootCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Query_RootCitizens_By_PkArgs = {
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
  law_revision_id: Scalars['uuid']['input'];
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
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
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


export type Query_RootResource_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


export type Query_RootResource_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


export type Query_RootResource_Editable_Users_By_PkArgs = {
  resource_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootResource_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};


export type Query_RootResource_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};


export type Query_RootResource_Histories_By_PkArgs = {
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


export type Query_RootSpeciesArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Query_RootSpecies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Query_RootSpecies_AssetsArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Query_RootSpecies_Assets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Query_RootSpecies_Assets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSpecies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSpecies_Percentage_View_With_World_IdArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Query_RootSpecies_Percentage_View_With_World_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
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


export type Query_RootWorld_ArgumentsArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


export type Query_RootWorld_Arguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


export type Query_RootWorld_Arguments_By_PkArgs = {
  argument_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


export type Query_RootWorld_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


export type Query_RootWorld_Categories_By_PkArgs = {
  law_category_ja: Scalars['String']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_Chat_BoxesArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


export type Query_RootWorld_Chat_Boxes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


export type Query_RootWorld_Chat_Boxes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorld_ChatsArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


export type Query_RootWorld_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


export type Query_RootWorld_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Query_RootWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Query_RootWorld_Citizens_By_PkArgs = {
  citizen_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Query_RootWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Query_RootWorld_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorld_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


export type Query_RootWorld_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


export type Query_RootWorld_Editable_Users_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Query_RootWorld_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Query_RootWorld_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Query_RootWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Query_RootWorld_Laws_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Query_RootWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Query_RootWorld_Reactions_By_PkArgs = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorldsArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Query_RootWorlds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Query_RootWorlds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "resource_editable_users" */
export type Resource_Editable_Users = {
  __typename?: 'resource_editable_users';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  resource: Resources;
  resource_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "resource_editable_users" */
export type Resource_Editable_Users_Aggregate = {
  __typename?: 'resource_editable_users_aggregate';
  aggregate?: Maybe<Resource_Editable_Users_Aggregate_Fields>;
  nodes: Array<Resource_Editable_Users>;
};

export type Resource_Editable_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Resource_Editable_Users_Aggregate_Bool_Exp_Count>;
};

export type Resource_Editable_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "resource_editable_users" */
export type Resource_Editable_Users_Aggregate_Fields = {
  __typename?: 'resource_editable_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Resource_Editable_Users_Max_Fields>;
  min?: Maybe<Resource_Editable_Users_Min_Fields>;
};


/** aggregate fields of "resource_editable_users" */
export type Resource_Editable_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "resource_editable_users" */
export type Resource_Editable_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resource_Editable_Users_Max_Order_By>;
  min?: InputMaybe<Resource_Editable_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "resource_editable_users" */
export type Resource_Editable_Users_Arr_Rel_Insert_Input = {
  data: Array<Resource_Editable_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resource_Editable_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "resource_editable_users". All fields are combined with a logical 'AND'. */
export type Resource_Editable_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Resource_Editable_Users_Bool_Exp>>;
  _not?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Resource_Editable_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  resource?: InputMaybe<Resources_Bool_Exp>;
  resource_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "resource_editable_users" */
export const Resource_Editable_Users_Constraint = {
  /** unique or primary key constraint on columns "resource_id", "user_id" */
  ResourceEditableUsersPkey: 'resource_editable_users_pkey'
} as const;

export type Resource_Editable_Users_Constraint = typeof Resource_Editable_Users_Constraint[keyof typeof Resource_Editable_Users_Constraint];
/** input type for inserting data into table "resource_editable_users" */
export type Resource_Editable_Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  resource?: InputMaybe<Resources_Obj_Rel_Insert_Input>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Resource_Editable_Users_Max_Fields = {
  __typename?: 'resource_editable_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "resource_editable_users" */
export type Resource_Editable_Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resource_Editable_Users_Min_Fields = {
  __typename?: 'resource_editable_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "resource_editable_users" */
export type Resource_Editable_Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "resource_editable_users" */
export type Resource_Editable_Users_Mutation_Response = {
  __typename?: 'resource_editable_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resource_Editable_Users>;
};

/** on_conflict condition type for table "resource_editable_users" */
export type Resource_Editable_Users_On_Conflict = {
  constraint: Resource_Editable_Users_Constraint;
  update_columns?: Array<Resource_Editable_Users_Update_Column>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "resource_editable_users". */
export type Resource_Editable_Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  resource?: InputMaybe<Resources_Order_By>;
  resource_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resource_editable_users */
export type Resource_Editable_Users_Pk_Columns_Input = {
  resource_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "resource_editable_users" */
export const Resource_Editable_Users_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  ResourceId: 'resource_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Resource_Editable_Users_Select_Column = typeof Resource_Editable_Users_Select_Column[keyof typeof Resource_Editable_Users_Select_Column];
/** input type for updating data in table "resource_editable_users" */
export type Resource_Editable_Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "resource_editable_users" */
export type Resource_Editable_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resource_Editable_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resource_Editable_Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "resource_editable_users" */
export const Resource_Editable_Users_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  ResourceId: 'resource_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Resource_Editable_Users_Update_Column = typeof Resource_Editable_Users_Update_Column[keyof typeof Resource_Editable_Users_Update_Column];
export type Resource_Editable_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resource_Editable_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resource_Editable_Users_Bool_Exp;
};

/** columns and relationships of "resource_histories" */
export type Resource_Histories = {
  __typename?: 'resource_histories';
  created_at: Scalars['timestamptz']['output'];
  edited_user_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  markup_text: Scalars['String']['output'];
  /** An object relationship */
  resource: Resources;
  resource_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "resource_histories" */
export type Resource_Histories_Aggregate = {
  __typename?: 'resource_histories_aggregate';
  aggregate?: Maybe<Resource_Histories_Aggregate_Fields>;
  nodes: Array<Resource_Histories>;
};

export type Resource_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Resource_Histories_Aggregate_Bool_Exp_Count>;
};

export type Resource_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Resource_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "resource_histories" */
export type Resource_Histories_Aggregate_Fields = {
  __typename?: 'resource_histories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Resource_Histories_Max_Fields>;
  min?: Maybe<Resource_Histories_Min_Fields>;
};


/** aggregate fields of "resource_histories" */
export type Resource_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "resource_histories" */
export type Resource_Histories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resource_Histories_Max_Order_By>;
  min?: InputMaybe<Resource_Histories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "resource_histories" */
export type Resource_Histories_Arr_Rel_Insert_Input = {
  data: Array<Resource_Histories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resource_Histories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "resource_histories". All fields are combined with a logical 'AND'. */
export type Resource_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Resource_Histories_Bool_Exp>>;
  _not?: InputMaybe<Resource_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Resource_Histories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  edited_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  markup_text?: InputMaybe<String_Comparison_Exp>;
  resource?: InputMaybe<Resources_Bool_Exp>;
  resource_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "resource_histories" */
export const Resource_Histories_Constraint = {
  /** unique or primary key constraint on columns "id" */
  ResourceHistoriesPkey: 'resource_histories_pkey'
} as const;

export type Resource_Histories_Constraint = typeof Resource_Histories_Constraint[keyof typeof Resource_Histories_Constraint];
/** input type for inserting data into table "resource_histories" */
export type Resource_Histories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_user_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Resources_Obj_Rel_Insert_Input>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Resource_Histories_Max_Fields = {
  __typename?: 'resource_histories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  edited_user_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "resource_histories" */
export type Resource_Histories_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  edited_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resource_Histories_Min_Fields = {
  __typename?: 'resource_histories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  edited_user_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "resource_histories" */
export type Resource_Histories_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  edited_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "resource_histories" */
export type Resource_Histories_Mutation_Response = {
  __typename?: 'resource_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resource_Histories>;
};

/** on_conflict condition type for table "resource_histories" */
export type Resource_Histories_On_Conflict = {
  constraint: Resource_Histories_Constraint;
  update_columns?: Array<Resource_Histories_Update_Column>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "resource_histories". */
export type Resource_Histories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  edited_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
  resource?: InputMaybe<Resources_Order_By>;
  resource_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: resource_histories */
export type Resource_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "resource_histories" */
export const Resource_Histories_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  EditedUserId: 'edited_user_id',
  /** column name */
  Id: 'id',
  /** column name */
  MarkupText: 'markup_text',
  /** column name */
  ResourceId: 'resource_id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Resource_Histories_Select_Column = typeof Resource_Histories_Select_Column[keyof typeof Resource_Histories_Select_Column];
/** input type for updating data in table "resource_histories" */
export type Resource_Histories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_user_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "resource_histories" */
export type Resource_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resource_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resource_Histories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edited_user_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "resource_histories" */
export const Resource_Histories_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  EditedUserId: 'edited_user_id',
  /** column name */
  Id: 'id',
  /** column name */
  MarkupText: 'markup_text',
  /** column name */
  ResourceId: 'resource_id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Resource_Histories_Update_Column = typeof Resource_Histories_Update_Column[keyof typeof Resource_Histories_Update_Column];
export type Resource_Histories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resource_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resource_Histories_Bool_Exp;
};

/** columns and relationships of "resources" */
export type Resources = {
  __typename?: 'resources';
  author_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  resource_editable_users: Array<Resource_Editable_Users>;
  /** An aggregate relationship */
  resource_editable_users_aggregate: Resource_Editable_Users_Aggregate;
  /** An array relationship */
  resource_histories: Array<Resource_Histories>;
  /** An aggregate relationship */
  resource_histories_aggregate: Resource_Histories_Aggregate;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "resources" */
export type ResourcesResource_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "resources" */
export type ResourcesResource_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "resources" */
export type ResourcesResource_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};


/** columns and relationships of "resources" */
export type ResourcesResource_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
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
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  resource_editable_users?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
  resource_editable_users_aggregate?: InputMaybe<Resource_Editable_Users_Aggregate_Bool_Exp>;
  resource_histories?: InputMaybe<Resource_Histories_Bool_Exp>;
  resource_histories_aggregate?: InputMaybe<Resource_Histories_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "resources" */
export const Resources_Constraint = {
  /** unique or primary key constraint on columns "id" */
  ResourcesPkey: 'resources_pkey'
} as const;

export type Resources_Constraint = typeof Resources_Constraint[keyof typeof Resources_Constraint];
/** input type for inserting data into table "resources" */
export type Resources_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  resource_editable_users?: InputMaybe<Resource_Editable_Users_Arr_Rel_Insert_Input>;
  resource_histories?: InputMaybe<Resource_Histories_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Resources_Max_Fields = {
  __typename?: 'resources_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Resources_Min_Fields = {
  __typename?: 'resources_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "resources" */
export type Resources_Mutation_Response = {
  __typename?: 'resources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resources>;
};

/** input type for inserting object relation for remote table "resources" */
export type Resources_Obj_Rel_Insert_Input = {
  data: Resources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};

/** on_conflict condition type for table "resources" */
export type Resources_On_Conflict = {
  constraint: Resources_Constraint;
  update_columns?: Array<Resources_Update_Column>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resource_editable_users_aggregate?: InputMaybe<Resource_Editable_Users_Aggregate_Order_By>;
  resource_histories_aggregate?: InputMaybe<Resource_Histories_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resources */
export type Resources_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "resources" */
export const Resources_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Resources_Select_Column = typeof Resources_Select_Column[keyof typeof Resources_Select_Column];
/** input type for updating data in table "resources" */
export type Resources_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "resources" */
export const Resources_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Resources_Update_Column = typeof Resources_Update_Column[keyof typeof Resources_Update_Column];
export type Resources_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resources_Bool_Exp;
};

/** columns and relationships of "species" */
export type Species = {
  __typename?: 'species';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  species_assets: Array<Species_Assets>;
  /** An aggregate relationship */
  species_assets_aggregate: Species_Assets_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
};


/** columns and relationships of "species" */
export type SpeciesSpecies_AssetsArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


/** columns and relationships of "species" */
export type SpeciesSpecies_Assets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};

/** aggregated selection of "species" */
export type Species_Aggregate = {
  __typename?: 'species_aggregate';
  aggregate?: Maybe<Species_Aggregate_Fields>;
  nodes: Array<Species>;
};

export type Species_Aggregate_Bool_Exp = {
  count?: InputMaybe<Species_Aggregate_Bool_Exp_Count>;
};

export type Species_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Species_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Species_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "species" */
export type Species_Aggregate_Fields = {
  __typename?: 'species_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Species_Max_Fields>;
  min?: Maybe<Species_Min_Fields>;
};


/** aggregate fields of "species" */
export type Species_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Species_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "species" */
export type Species_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Species_Max_Order_By>;
  min?: InputMaybe<Species_Min_Order_By>;
};

/** input type for inserting array relation for remote table "species" */
export type Species_Arr_Rel_Insert_Input = {
  data: Array<Species_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Species_On_Conflict>;
};

/** columns and relationships of "species_assets" */
export type Species_Assets = {
  __typename?: 'species_assets';
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image_url: Scalars['String']['output'];
  personality: Scalars['String']['output'];
  /** An object relationship */
  species: Species;
  species_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "species_assets" */
export type Species_AssetsCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


/** columns and relationships of "species_assets" */
export type Species_AssetsCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};

/** aggregated selection of "species_assets" */
export type Species_Assets_Aggregate = {
  __typename?: 'species_assets_aggregate';
  aggregate?: Maybe<Species_Assets_Aggregate_Fields>;
  nodes: Array<Species_Assets>;
};

export type Species_Assets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Species_Assets_Aggregate_Bool_Exp_Count>;
};

export type Species_Assets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Species_Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Species_Assets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "species_assets" */
export type Species_Assets_Aggregate_Fields = {
  __typename?: 'species_assets_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Species_Assets_Max_Fields>;
  min?: Maybe<Species_Assets_Min_Fields>;
};


/** aggregate fields of "species_assets" */
export type Species_Assets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Species_Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "species_assets" */
export type Species_Assets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Species_Assets_Max_Order_By>;
  min?: InputMaybe<Species_Assets_Min_Order_By>;
};

/** input type for inserting array relation for remote table "species_assets" */
export type Species_Assets_Arr_Rel_Insert_Input = {
  data: Array<Species_Assets_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};

/** Boolean expression to filter rows from the table "species_assets". All fields are combined with a logical 'AND'. */
export type Species_Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Species_Assets_Bool_Exp>>;
  _not?: InputMaybe<Species_Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Species_Assets_Bool_Exp>>;
  citizens?: InputMaybe<Citizens_Bool_Exp>;
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  personality?: InputMaybe<String_Comparison_Exp>;
  species?: InputMaybe<Species_Bool_Exp>;
  species_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "species_assets" */
export const Species_Assets_Constraint = {
  /** unique or primary key constraint on columns "id" */
  SpeciesAssetsPkey: 'species_assets_pkey'
} as const;

export type Species_Assets_Constraint = typeof Species_Assets_Constraint[keyof typeof Species_Assets_Constraint];
/** input type for inserting data into table "species_assets" */
export type Species_Assets_Insert_Input = {
  citizens?: InputMaybe<Citizens_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  personality?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Species_Obj_Rel_Insert_Input>;
  species_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Species_Assets_Max_Fields = {
  __typename?: 'species_assets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  personality?: Maybe<Scalars['String']['output']>;
  species_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "species_assets" */
export type Species_Assets_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  personality?: InputMaybe<Order_By>;
  species_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Species_Assets_Min_Fields = {
  __typename?: 'species_assets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  personality?: Maybe<Scalars['String']['output']>;
  species_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "species_assets" */
export type Species_Assets_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  personality?: InputMaybe<Order_By>;
  species_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "species_assets" */
export type Species_Assets_Mutation_Response = {
  __typename?: 'species_assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Species_Assets>;
};

/** input type for inserting object relation for remote table "species_assets" */
export type Species_Assets_Obj_Rel_Insert_Input = {
  data: Species_Assets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};

/** on_conflict condition type for table "species_assets" */
export type Species_Assets_On_Conflict = {
  constraint: Species_Assets_Constraint;
  update_columns?: Array<Species_Assets_Update_Column>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};

/** Ordering options when selecting data from "species_assets". */
export type Species_Assets_Order_By = {
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  personality?: InputMaybe<Order_By>;
  species?: InputMaybe<Species_Order_By>;
  species_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: species_assets */
export type Species_Assets_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "species_assets" */
export const Species_Assets_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  ImageUrl: 'image_url',
  /** column name */
  Personality: 'personality',
  /** column name */
  SpeciesId: 'species_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Assets_Select_Column = typeof Species_Assets_Select_Column[keyof typeof Species_Assets_Select_Column];
/** input type for updating data in table "species_assets" */
export type Species_Assets_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  personality?: InputMaybe<Scalars['String']['input']>;
  species_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "species_assets" */
export type Species_Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Species_Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Species_Assets_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  personality?: InputMaybe<Scalars['String']['input']>;
  species_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "species_assets" */
export const Species_Assets_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  ImageUrl: 'image_url',
  /** column name */
  Personality: 'personality',
  /** column name */
  SpeciesId: 'species_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Assets_Update_Column = typeof Species_Assets_Update_Column[keyof typeof Species_Assets_Update_Column];
export type Species_Assets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Species_Assets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Species_Assets_Bool_Exp;
};

/** Boolean expression to filter rows from the table "species". All fields are combined with a logical 'AND'. */
export type Species_Bool_Exp = {
  _and?: InputMaybe<Array<Species_Bool_Exp>>;
  _not?: InputMaybe<Species_Bool_Exp>;
  _or?: InputMaybe<Array<Species_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  species_assets?: InputMaybe<Species_Assets_Bool_Exp>;
  species_assets_aggregate?: InputMaybe<Species_Assets_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "species" */
export const Species_Constraint = {
  /** unique or primary key constraint on columns "name" */
  SpeciesNameKey: 'species_name_key',
  /** unique or primary key constraint on columns "id" */
  SpeciesPkey: 'species_pkey'
} as const;

export type Species_Constraint = typeof Species_Constraint[keyof typeof Species_Constraint];
/** input type for inserting data into table "species" */
export type Species_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species_assets?: InputMaybe<Species_Assets_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Species_Max_Fields = {
  __typename?: 'species_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "species" */
export type Species_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Species_Min_Fields = {
  __typename?: 'species_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "species" */
export type Species_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "species" */
export type Species_Mutation_Response = {
  __typename?: 'species_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Species>;
};

/** input type for inserting object relation for remote table "species" */
export type Species_Obj_Rel_Insert_Input = {
  data: Species_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Species_On_Conflict>;
};

/** on_conflict condition type for table "species" */
export type Species_On_Conflict = {
  constraint: Species_Constraint;
  update_columns?: Array<Species_Update_Column>;
  where?: InputMaybe<Species_Bool_Exp>;
};

/** Ordering options when selecting data from "species". */
export type Species_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  species_assets_aggregate?: InputMaybe<Species_Assets_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** columns and relationships of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id = {
  __typename?: 'species_percentage_view_with_world_id';
  percentage?: Maybe<Scalars['numeric']['output']>;
  species_name?: Maybe<Scalars['String']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  worlds: Array<Worlds>;
  /** An aggregate relationship */
  worlds_aggregate: Worlds_Aggregate;
};


/** columns and relationships of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_IdWorldsArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


/** columns and relationships of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_IdWorlds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};

/** aggregated selection of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate = {
  __typename?: 'species_percentage_view_with_world_id_aggregate';
  aggregate?: Maybe<Species_Percentage_View_With_World_Id_Aggregate_Fields>;
  nodes: Array<Species_Percentage_View_With_World_Id>;
};

export type Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp = {
  count?: InputMaybe<Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count>;
};

export type Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate_Fields = {
  __typename?: 'species_percentage_view_with_world_id_aggregate_fields';
  avg?: Maybe<Species_Percentage_View_With_World_Id_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Species_Percentage_View_With_World_Id_Max_Fields>;
  min?: Maybe<Species_Percentage_View_With_World_Id_Min_Fields>;
  stddev?: Maybe<Species_Percentage_View_With_World_Id_Stddev_Fields>;
  stddev_pop?: Maybe<Species_Percentage_View_With_World_Id_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Species_Percentage_View_With_World_Id_Stddev_Samp_Fields>;
  sum?: Maybe<Species_Percentage_View_With_World_Id_Sum_Fields>;
  var_pop?: Maybe<Species_Percentage_View_With_World_Id_Var_Pop_Fields>;
  var_samp?: Maybe<Species_Percentage_View_With_World_Id_Var_Samp_Fields>;
  variance?: Maybe<Species_Percentage_View_With_World_Id_Variance_Fields>;
};


/** aggregate fields of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate_Order_By = {
  avg?: InputMaybe<Species_Percentage_View_With_World_Id_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Species_Percentage_View_With_World_Id_Max_Order_By>;
  min?: InputMaybe<Species_Percentage_View_With_World_Id_Min_Order_By>;
  stddev?: InputMaybe<Species_Percentage_View_With_World_Id_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Species_Percentage_View_With_World_Id_Sum_Order_By>;
  var_pop?: InputMaybe<Species_Percentage_View_With_World_Id_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Species_Percentage_View_With_World_Id_Var_Samp_Order_By>;
  variance?: InputMaybe<Species_Percentage_View_With_World_Id_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input = {
  data: Array<Species_Percentage_View_With_World_Id_Insert_Input>;
};

/** aggregate avg on columns */
export type Species_Percentage_View_With_World_Id_Avg_Fields = {
  __typename?: 'species_percentage_view_with_world_id_avg_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Avg_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "species_percentage_view_with_world_id". All fields are combined with a logical 'AND'. */
export type Species_Percentage_View_With_World_Id_Bool_Exp = {
  _and?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Bool_Exp>>;
  _not?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
  _or?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Bool_Exp>>;
  percentage?: InputMaybe<Numeric_Comparison_Exp>;
  species_name?: InputMaybe<String_Comparison_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
  worlds?: InputMaybe<Worlds_Bool_Exp>;
  worlds_aggregate?: InputMaybe<Worlds_Aggregate_Bool_Exp>;
};

/** input type for inserting data into table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Insert_Input = {
  percentage?: InputMaybe<Scalars['numeric']['input']>;
  species_name?: InputMaybe<Scalars['String']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  worlds?: InputMaybe<Worlds_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Species_Percentage_View_With_World_Id_Max_Fields = {
  __typename?: 'species_percentage_view_with_world_id_max_fields';
  percentage?: Maybe<Scalars['numeric']['output']>;
  species_name?: Maybe<Scalars['String']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Max_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_name?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Species_Percentage_View_With_World_Id_Min_Fields = {
  __typename?: 'species_percentage_view_with_world_id_min_fields';
  percentage?: Maybe<Scalars['numeric']['output']>;
  species_name?: Maybe<Scalars['String']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Min_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_name?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "species_percentage_view_with_world_id". */
export type Species_Percentage_View_With_World_Id_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_name?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
  worlds_aggregate?: InputMaybe<Worlds_Aggregate_Order_By>;
};

/** select columns of table "species_percentage_view_with_world_id" */
export const Species_Percentage_View_With_World_Id_Select_Column = {
  /** column name */
  Percentage: 'percentage',
  /** column name */
  SpeciesName: 'species_name',
  /** column name */
  WorldId: 'world_id'
} as const;

export type Species_Percentage_View_With_World_Id_Select_Column = typeof Species_Percentage_View_With_World_Id_Select_Column[keyof typeof Species_Percentage_View_With_World_Id_Select_Column];
/** aggregate stddev on columns */
export type Species_Percentage_View_With_World_Id_Stddev_Fields = {
  __typename?: 'species_percentage_view_with_world_id_stddev_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stddev_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Species_Percentage_View_With_World_Id_Stddev_Pop_Fields = {
  __typename?: 'species_percentage_view_with_world_id_stddev_pop_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Species_Percentage_View_With_World_Id_Stddev_Samp_Fields = {
  __typename?: 'species_percentage_view_with_world_id_stddev_samp_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input = {
  percentage?: InputMaybe<Scalars['numeric']['input']>;
  species_name?: InputMaybe<Scalars['String']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Species_Percentage_View_With_World_Id_Sum_Fields = {
  __typename?: 'species_percentage_view_with_world_id_sum_fields';
  percentage?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Sum_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Species_Percentage_View_With_World_Id_Var_Pop_Fields = {
  __typename?: 'species_percentage_view_with_world_id_var_pop_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Var_Pop_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Species_Percentage_View_With_World_Id_Var_Samp_Fields = {
  __typename?: 'species_percentage_view_with_world_id_var_samp_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Var_Samp_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Species_Percentage_View_With_World_Id_Variance_Fields = {
  __typename?: 'species_percentage_view_with_world_id_variance_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Variance_Order_By = {
  percentage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: species */
export type Species_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "species" */
export const Species_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Select_Column = typeof Species_Select_Column[keyof typeof Species_Select_Column];
/** input type for updating data in table "species" */
export type Species_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "species" */
export type Species_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Species_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Species_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "species" */
export const Species_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Update_Column = typeof Species_Update_Column[keyof typeof Species_Update_Column];
export type Species_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Species_Set_Input>;
  /** filter the rows which have to be updated */
  where: Species_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  argumen_chats: Array<Argumen_Chats>;
  /** An aggregate relationship */
  argumen_chats_aggregate: Argumen_Chats_Aggregate;
  /** fetch data from the table: "argumen_chats" using primary key columns */
  argumen_chats_by_pk?: Maybe<Argumen_Chats>;
  /** fetch data from the table in a streaming manner: "argumen_chats" */
  argumen_chats_stream: Array<Argumen_Chats>;
  /** An array relationship */
  argument_chat_boxes: Array<Argument_Chat_Boxes>;
  /** An aggregate relationship */
  argument_chat_boxes_aggregate: Argument_Chat_Boxes_Aggregate;
  /** fetch data from the table: "argument_chat_boxes" using primary key columns */
  argument_chat_boxes_by_pk?: Maybe<Argument_Chat_Boxes>;
  /** fetch data from the table in a streaming manner: "argument_chat_boxes" */
  argument_chat_boxes_stream: Array<Argument_Chat_Boxes>;
  /** An array relationship */
  argument_views: Array<Argument_Views>;
  /** An aggregate relationship */
  argument_views_aggregate: Argument_Views_Aggregate;
  /** fetch data from the table: "argument_views" using primary key columns */
  argument_views_by_pk?: Maybe<Argument_Views>;
  /** fetch data from the table in a streaming manner: "argument_views" */
  argument_views_stream: Array<Argument_Views>;
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  /** fetch data from the table: "arguments" using primary key columns */
  arguments_by_pk?: Maybe<Arguments>;
  /** fetch data from the table in a streaming manner: "arguments" */
  arguments_stream: Array<Arguments>;
  /** An array relationship */
  citizen_histories: Array<Citizen_Histories>;
  /** An aggregate relationship */
  citizen_histories_aggregate: Citizen_Histories_Aggregate;
  /** fetch data from the table: "citizen_histories" using primary key columns */
  citizen_histories_by_pk?: Maybe<Citizen_Histories>;
  /** fetch data from the table in a streaming manner: "citizen_histories" */
  citizen_histories_stream: Array<Citizen_Histories>;
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
  /** fetch data from the table: "citizens" using primary key columns */
  citizens_by_pk?: Maybe<Citizens>;
  /** fetch data from the table in a streaming manner: "citizens" */
  citizens_stream: Array<Citizens>;
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
  /** An array relationship */
  laws: Array<Laws>;
  /** An aggregate relationship */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** fetch data from the table in a streaming manner: "laws" */
  laws_stream: Array<Laws>;
  /** An array relationship */
  resource_editable_users: Array<Resource_Editable_Users>;
  /** An aggregate relationship */
  resource_editable_users_aggregate: Resource_Editable_Users_Aggregate;
  /** fetch data from the table: "resource_editable_users" using primary key columns */
  resource_editable_users_by_pk?: Maybe<Resource_Editable_Users>;
  /** fetch data from the table in a streaming manner: "resource_editable_users" */
  resource_editable_users_stream: Array<Resource_Editable_Users>;
  /** An array relationship */
  resource_histories: Array<Resource_Histories>;
  /** An aggregate relationship */
  resource_histories_aggregate: Resource_Histories_Aggregate;
  /** fetch data from the table: "resource_histories" using primary key columns */
  resource_histories_by_pk?: Maybe<Resource_Histories>;
  /** fetch data from the table in a streaming manner: "resource_histories" */
  resource_histories_stream: Array<Resource_Histories>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table in a streaming manner: "resources" */
  resources_stream: Array<Resources>;
  /** An array relationship */
  species: Array<Species>;
  /** An aggregate relationship */
  species_aggregate: Species_Aggregate;
  /** An array relationship */
  species_assets: Array<Species_Assets>;
  /** An aggregate relationship */
  species_assets_aggregate: Species_Assets_Aggregate;
  /** fetch data from the table: "species_assets" using primary key columns */
  species_assets_by_pk?: Maybe<Species_Assets>;
  /** fetch data from the table in a streaming manner: "species_assets" */
  species_assets_stream: Array<Species_Assets>;
  /** fetch data from the table: "species" using primary key columns */
  species_by_pk?: Maybe<Species>;
  /** fetch data from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id: Array<Species_Percentage_View_With_World_Id>;
  /** fetch aggregated fields from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  /** fetch data from the table in a streaming manner: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id_stream: Array<Species_Percentage_View_With_World_Id>;
  /** fetch data from the table in a streaming manner: "species" */
  species_stream: Array<Species>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  world_arguments: Array<World_Arguments>;
  /** An aggregate relationship */
  world_arguments_aggregate: World_Arguments_Aggregate;
  /** fetch data from the table: "world_arguments" using primary key columns */
  world_arguments_by_pk?: Maybe<World_Arguments>;
  /** fetch data from the table in a streaming manner: "world_arguments" */
  world_arguments_stream: Array<World_Arguments>;
  /** An array relationship */
  world_categories: Array<World_Categories>;
  /** An aggregate relationship */
  world_categories_aggregate: World_Categories_Aggregate;
  /** fetch data from the table: "world_categories" using primary key columns */
  world_categories_by_pk?: Maybe<World_Categories>;
  /** fetch data from the table in a streaming manner: "world_categories" */
  world_categories_stream: Array<World_Categories>;
  /** An array relationship */
  world_chat_boxes: Array<World_Chat_Boxes>;
  /** An aggregate relationship */
  world_chat_boxes_aggregate: World_Chat_Boxes_Aggregate;
  /** fetch data from the table: "world_chat_boxes" using primary key columns */
  world_chat_boxes_by_pk?: Maybe<World_Chat_Boxes>;
  /** fetch data from the table in a streaming manner: "world_chat_boxes" */
  world_chat_boxes_stream: Array<World_Chat_Boxes>;
  /** An array relationship */
  world_chats: Array<World_Chats>;
  /** An aggregate relationship */
  world_chats_aggregate: World_Chats_Aggregate;
  /** fetch data from the table: "world_chats" using primary key columns */
  world_chats_by_pk?: Maybe<World_Chats>;
  /** fetch data from the table in a streaming manner: "world_chats" */
  world_chats_stream: Array<World_Chats>;
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
  /** fetch data from the table: "world_citizens" using primary key columns */
  world_citizens_by_pk?: Maybe<World_Citizens>;
  /** fetch data from the table in a streaming manner: "world_citizens" */
  world_citizens_stream: Array<World_Citizens>;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** fetch data from the table: "world_comments" using primary key columns */
  world_comments_by_pk?: Maybe<World_Comments>;
  /** fetch data from the table in a streaming manner: "world_comments" */
  world_comments_stream: Array<World_Comments>;
  /** An array relationship */
  world_editable_users: Array<World_Editable_Users>;
  /** An aggregate relationship */
  world_editable_users_aggregate: World_Editable_Users_Aggregate;
  /** fetch data from the table: "world_editable_users" using primary key columns */
  world_editable_users_by_pk?: Maybe<World_Editable_Users>;
  /** fetch data from the table in a streaming manner: "world_editable_users" */
  world_editable_users_stream: Array<World_Editable_Users>;
  /** An array relationship */
  world_histories: Array<World_Histories>;
  /** An aggregate relationship */
  world_histories_aggregate: World_Histories_Aggregate;
  /** fetch data from the table: "world_histories" using primary key columns */
  world_histories_by_pk?: Maybe<World_Histories>;
  /** fetch data from the table in a streaming manner: "world_histories" */
  world_histories_stream: Array<World_Histories>;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
  /** fetch data from the table: "world_laws" using primary key columns */
  world_laws_by_pk?: Maybe<World_Laws>;
  /** fetch data from the table in a streaming manner: "world_laws" */
  world_laws_stream: Array<World_Laws>;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
  /** fetch data from the table: "world_reactions" using primary key columns */
  world_reactions_by_pk?: Maybe<World_Reactions>;
  /** fetch data from the table in a streaming manner: "world_reactions" */
  world_reactions_stream: Array<World_Reactions>;
  /** An array relationship */
  worlds: Array<Worlds>;
  /** An aggregate relationship */
  worlds_aggregate: Worlds_Aggregate;
  /** fetch data from the table: "worlds" using primary key columns */
  worlds_by_pk?: Maybe<Worlds>;
  /** fetch data from the table in a streaming manner: "worlds" */
  worlds_stream: Array<Worlds>;
};


export type Subscription_RootArgumen_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argumen_Chats_Order_By>>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};


export type Subscription_RootArgumen_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argumen_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argumen_Chats_Order_By>>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};


export type Subscription_RootArgumen_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootArgumen_Chats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Argumen_Chats_Stream_Cursor_Input>>;
  where?: InputMaybe<Argumen_Chats_Bool_Exp>;
};


export type Subscription_RootArgument_Chat_BoxesArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chat_Boxes_Order_By>>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};


export type Subscription_RootArgument_Chat_Boxes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Chat_Boxes_Order_By>>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};


export type Subscription_RootArgument_Chat_Boxes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootArgument_Chat_Boxes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Argument_Chat_Boxes_Stream_Cursor_Input>>;
  where?: InputMaybe<Argument_Chat_Boxes_Bool_Exp>;
};


export type Subscription_RootArgument_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};


export type Subscription_RootArgument_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};


export type Subscription_RootArgument_Views_By_PkArgs = {
  argument_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootArgument_Views_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Argument_Views_Stream_Cursor_Input>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
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


export type Subscription_RootCitizen_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


export type Subscription_RootCitizen_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


export type Subscription_RootCitizen_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCitizen_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Citizen_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


export type Subscription_RootCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Subscription_RootCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Subscription_RootCitizens_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCitizens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Citizens_Stream_Cursor_Input>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
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
  law_revision_id: Scalars['uuid']['input'];
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
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
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


export type Subscription_RootResource_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


export type Subscription_RootResource_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


export type Subscription_RootResource_Editable_Users_By_PkArgs = {
  resource_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootResource_Editable_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resource_Editable_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


export type Subscription_RootResource_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};


export type Subscription_RootResource_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};


export type Subscription_RootResource_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootResource_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resource_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
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


export type Subscription_RootSpeciesArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Subscription_RootSpecies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Subscription_RootSpecies_AssetsArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Subscription_RootSpecies_Assets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Subscription_RootSpecies_Assets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSpecies_Assets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Species_Assets_Stream_Cursor_Input>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Subscription_RootSpecies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSpecies_Percentage_View_With_World_IdArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Subscription_RootSpecies_Percentage_View_With_World_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Subscription_RootSpecies_Percentage_View_With_World_Id_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Species_Percentage_View_With_World_Id_Stream_Cursor_Input>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Subscription_RootSpecies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Species_Stream_Cursor_Input>>;
  where?: InputMaybe<Species_Bool_Exp>;
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


export type Subscription_RootWorld_ArgumentsArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


export type Subscription_RootWorld_Arguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


export type Subscription_RootWorld_Arguments_By_PkArgs = {
  argument_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Arguments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Arguments_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


export type Subscription_RootWorld_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


export type Subscription_RootWorld_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


export type Subscription_RootWorld_Categories_By_PkArgs = {
  law_category_ja: Scalars['String']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


export type Subscription_RootWorld_Chat_BoxesArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


export type Subscription_RootWorld_Chat_Boxes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


export type Subscription_RootWorld_Chat_Boxes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Chat_Boxes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Chat_Boxes_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


export type Subscription_RootWorld_ChatsArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


export type Subscription_RootWorld_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


export type Subscription_RootWorld_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Chats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Chats_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


export type Subscription_RootWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Subscription_RootWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Subscription_RootWorld_Citizens_By_PkArgs = {
  citizen_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Citizens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Citizens_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Subscription_RootWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Subscription_RootWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Subscription_RootWorld_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Comments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Subscription_RootWorld_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


export type Subscription_RootWorld_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


export type Subscription_RootWorld_Editable_Users_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Editable_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Editable_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


export type Subscription_RootWorld_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Subscription_RootWorld_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Subscription_RootWorld_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Subscription_RootWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Subscription_RootWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Subscription_RootWorld_Laws_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Laws_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Laws_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Subscription_RootWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Subscription_RootWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Subscription_RootWorld_Reactions_By_PkArgs = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Reactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Subscription_RootWorldsArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Subscription_RootWorlds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Subscription_RootWorlds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorlds_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Worlds_Stream_Cursor_Input>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
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
  argument_views: Array<Argument_Views>;
  /** An aggregate relationship */
  argument_views_aggregate: Argument_Views_Aggregate;
  /** An array relationship */
  arguments: Array<Arguments>;
  /** An aggregate relationship */
  arguments_aggregate: Arguments_Aggregate;
  authentication_id: Scalars['String']['output'];
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
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
  /** An array relationship */
  laws: Array<Laws>;
  /** An aggregate relationship */
  laws_aggregate: Laws_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  resource_editable_users: Array<Resource_Editable_Users>;
  /** An aggregate relationship */
  resource_editable_users_aggregate: Resource_Editable_Users_Aggregate;
  /** An array relationship */
  resource_histories: Array<Resource_Histories>;
  /** An aggregate relationship */
  resource_histories_aggregate: Resource_Histories_Aggregate;
  /** An array relationship */
  species: Array<Species>;
  /** An aggregate relationship */
  species_aggregate: Species_Aggregate;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  world_chat_boxes: Array<World_Chat_Boxes>;
  /** An aggregate relationship */
  world_chat_boxes_aggregate: World_Chat_Boxes_Aggregate;
  /** An array relationship */
  world_chats: Array<World_Chats>;
  /** An aggregate relationship */
  world_chats_aggregate: World_Chats_Aggregate;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** An array relationship */
  world_editable_users: Array<World_Editable_Users>;
  /** An aggregate relationship */
  world_editable_users_aggregate: World_Editable_Users_Aggregate;
  /** An array relationship */
  world_histories: Array<World_Histories>;
  /** An aggregate relationship */
  world_histories_aggregate: World_Histories_Aggregate;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
  /** An array relationship */
  worlds: Array<Worlds>;
  /** An aggregate relationship */
  worlds_aggregate: Worlds_Aggregate;
};


/** columns and relationships of "users" */
export type UsersArgument_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersArgument_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Argument_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Argument_Views_Order_By>>;
  where?: InputMaybe<Argument_Views_Bool_Exp>;
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
export type UsersCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
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
export type UsersLawsArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersResource_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersResource_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Editable_Users_Order_By>>;
  where?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersResource_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersResource_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Histories_Order_By>>;
  where?: InputMaybe<Resource_Histories_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSpeciesArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSpecies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Chat_BoxesArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Chat_Boxes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_ChatsArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorldsArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorlds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
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
  status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  argument_views?: InputMaybe<Argument_Views_Bool_Exp>;
  argument_views_aggregate?: InputMaybe<Argument_Views_Aggregate_Bool_Exp>;
  arguments?: InputMaybe<Arguments_Bool_Exp>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Bool_Exp>;
  authentication_id?: InputMaybe<String_Comparison_Exp>;
  citizens?: InputMaybe<Citizens_Bool_Exp>;
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  icon_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_summaries?: InputMaybe<Law_Summaries_Bool_Exp>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Bool_Exp>;
  law_views?: InputMaybe<Law_Views_Bool_Exp>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Bool_Exp>;
  laws?: InputMaybe<Laws_Bool_Exp>;
  laws_aggregate?: InputMaybe<Laws_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  resource_editable_users?: InputMaybe<Resource_Editable_Users_Bool_Exp>;
  resource_editable_users_aggregate?: InputMaybe<Resource_Editable_Users_Aggregate_Bool_Exp>;
  resource_histories?: InputMaybe<Resource_Histories_Bool_Exp>;
  resource_histories_aggregate?: InputMaybe<Resource_Histories_Aggregate_Bool_Exp>;
  species?: InputMaybe<Species_Bool_Exp>;
  species_aggregate?: InputMaybe<Species_Aggregate_Bool_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world_chat_boxes?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
  world_chat_boxes_aggregate?: InputMaybe<World_Chat_Boxes_Aggregate_Bool_Exp>;
  world_chats?: InputMaybe<World_Chats_Bool_Exp>;
  world_chats_aggregate?: InputMaybe<World_Chats_Aggregate_Bool_Exp>;
  world_comments?: InputMaybe<World_Comments_Bool_Exp>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Bool_Exp>;
  world_editable_users?: InputMaybe<World_Editable_Users_Bool_Exp>;
  world_editable_users_aggregate?: InputMaybe<World_Editable_Users_Aggregate_Bool_Exp>;
  world_histories?: InputMaybe<World_Histories_Bool_Exp>;
  world_histories_aggregate?: InputMaybe<World_Histories_Aggregate_Bool_Exp>;
  world_reactions?: InputMaybe<World_Reactions_Bool_Exp>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Bool_Exp>;
  worlds?: InputMaybe<Worlds_Bool_Exp>;
  worlds_aggregate?: InputMaybe<Worlds_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export const Users_Constraint = {
  /** unique or primary key constraint on columns "id" */
  UsersPkey: 'users_pkey'
} as const;

export type Users_Constraint = typeof Users_Constraint[keyof typeof Users_Constraint];
/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  argument_views?: InputMaybe<Argument_Views_Arr_Rel_Insert_Input>;
  arguments?: InputMaybe<Arguments_Arr_Rel_Insert_Input>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  citizens?: InputMaybe<Citizens_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_summaries?: InputMaybe<Law_Summaries_Arr_Rel_Insert_Input>;
  law_views?: InputMaybe<Law_Views_Arr_Rel_Insert_Input>;
  laws?: InputMaybe<Laws_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_editable_users?: InputMaybe<Resource_Editable_Users_Arr_Rel_Insert_Input>;
  resource_histories?: InputMaybe<Resource_Histories_Arr_Rel_Insert_Input>;
  species?: InputMaybe<Species_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_chat_boxes?: InputMaybe<World_Chat_Boxes_Arr_Rel_Insert_Input>;
  world_chats?: InputMaybe<World_Chats_Arr_Rel_Insert_Input>;
  world_comments?: InputMaybe<World_Comments_Arr_Rel_Insert_Input>;
  world_editable_users?: InputMaybe<World_Editable_Users_Arr_Rel_Insert_Input>;
  world_histories?: InputMaybe<World_Histories_Arr_Rel_Insert_Input>;
  world_reactions?: InputMaybe<World_Reactions_Arr_Rel_Insert_Input>;
  worlds?: InputMaybe<Worlds_Arr_Rel_Insert_Input>;
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
  status?: Maybe<Scalars['Int']['output']>;
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
  status?: Maybe<Scalars['Int']['output']>;
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
  argument_views_aggregate?: InputMaybe<Argument_Views_Aggregate_Order_By>;
  arguments_aggregate?: InputMaybe<Arguments_Aggregate_Order_By>;
  authentication_id?: InputMaybe<Order_By>;
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  icon_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_summaries_aggregate?: InputMaybe<Law_Summaries_Aggregate_Order_By>;
  law_views_aggregate?: InputMaybe<Law_Views_Aggregate_Order_By>;
  laws_aggregate?: InputMaybe<Laws_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  resource_editable_users_aggregate?: InputMaybe<Resource_Editable_Users_Aggregate_Order_By>;
  resource_histories_aggregate?: InputMaybe<Resource_Histories_Aggregate_Order_By>;
  species_aggregate?: InputMaybe<Species_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_chat_boxes_aggregate?: InputMaybe<World_Chat_Boxes_Aggregate_Order_By>;
  world_chats_aggregate?: InputMaybe<World_Chats_Aggregate_Order_By>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Order_By>;
  world_editable_users_aggregate?: InputMaybe<World_Editable_Users_Aggregate_Order_By>;
  world_histories_aggregate?: InputMaybe<World_Histories_Aggregate_Order_By>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Order_By>;
  worlds_aggregate?: InputMaybe<Worlds_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export const Users_Select_Column = {
  /** column name */
  Age: 'age',
  /** column name */
  AuthenticationId: 'authentication_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  IconUrl: 'icon_url',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Users_Select_Column = typeof Users_Select_Column[keyof typeof Users_Select_Column];
/** input type for updating data in table "users" */
export type Users_Set_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
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
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export const Users_Update_Column = {
  /** column name */
  Age: 'age',
  /** column name */
  AuthenticationId: 'authentication_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  IconUrl: 'icon_url',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Users_Update_Column = typeof Users_Update_Column[keyof typeof Users_Update_Column];
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
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
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

/** columns and relationships of "world_arguments" */
export type World_Arguments = {
  __typename?: 'world_arguments';
  /** An object relationship */
  argument: Arguments;
  argument_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_arguments" */
export type World_Arguments_Aggregate = {
  __typename?: 'world_arguments_aggregate';
  aggregate?: Maybe<World_Arguments_Aggregate_Fields>;
  nodes: Array<World_Arguments>;
};

export type World_Arguments_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Arguments_Aggregate_Bool_Exp_Count>;
};

export type World_Arguments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Arguments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Arguments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_arguments" */
export type World_Arguments_Aggregate_Fields = {
  __typename?: 'world_arguments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<World_Arguments_Max_Fields>;
  min?: Maybe<World_Arguments_Min_Fields>;
};


/** aggregate fields of "world_arguments" */
export type World_Arguments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Arguments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_arguments" */
export type World_Arguments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Arguments_Max_Order_By>;
  min?: InputMaybe<World_Arguments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "world_arguments" */
export type World_Arguments_Arr_Rel_Insert_Input = {
  data: Array<World_Arguments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Arguments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "world_arguments". All fields are combined with a logical 'AND'. */
export type World_Arguments_Bool_Exp = {
  _and?: InputMaybe<Array<World_Arguments_Bool_Exp>>;
  _not?: InputMaybe<World_Arguments_Bool_Exp>;
  _or?: InputMaybe<Array<World_Arguments_Bool_Exp>>;
  argument?: InputMaybe<Arguments_Bool_Exp>;
  argument_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_arguments" */
export const World_Arguments_Constraint = {
  /** unique or primary key constraint on columns "world_id", "argument_id" */
  WorldArgumentsPkey: 'world_arguments_pkey'
} as const;

export type World_Arguments_Constraint = typeof World_Arguments_Constraint[keyof typeof World_Arguments_Constraint];
/** input type for inserting data into table "world_arguments" */
export type World_Arguments_Insert_Input = {
  argument?: InputMaybe<Arguments_Obj_Rel_Insert_Input>;
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Arguments_Max_Fields = {
  __typename?: 'world_arguments_max_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_arguments" */
export type World_Arguments_Max_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Arguments_Min_Fields = {
  __typename?: 'world_arguments_min_fields';
  argument_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_arguments" */
export type World_Arguments_Min_Order_By = {
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_arguments" */
export type World_Arguments_Mutation_Response = {
  __typename?: 'world_arguments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Arguments>;
};

/** on_conflict condition type for table "world_arguments" */
export type World_Arguments_On_Conflict = {
  constraint: World_Arguments_Constraint;
  update_columns?: Array<World_Arguments_Update_Column>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};

/** Ordering options when selecting data from "world_arguments". */
export type World_Arguments_Order_By = {
  argument?: InputMaybe<Arguments_Order_By>;
  argument_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_arguments */
export type World_Arguments_Pk_Columns_Input = {
  argument_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_arguments" */
export const World_Arguments_Select_Column = {
  /** column name */
  ArgumentId: 'argument_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Arguments_Select_Column = typeof World_Arguments_Select_Column[keyof typeof World_Arguments_Select_Column];
/** input type for updating data in table "world_arguments" */
export type World_Arguments_Set_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "world_arguments" */
export type World_Arguments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Arguments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Arguments_Stream_Cursor_Value_Input = {
  argument_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "world_arguments" */
export const World_Arguments_Update_Column = {
  /** column name */
  ArgumentId: 'argument_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Arguments_Update_Column = typeof World_Arguments_Update_Column[keyof typeof World_Arguments_Update_Column];
export type World_Arguments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Arguments_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Arguments_Bool_Exp;
};

/** columns and relationships of "world_categories" */
export type World_Categories = {
  __typename?: 'world_categories';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  law_category: Law_Categories;
  law_category_ja: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_categories" */
export type World_Categories_Aggregate = {
  __typename?: 'world_categories_aggregate';
  aggregate?: Maybe<World_Categories_Aggregate_Fields>;
  nodes: Array<World_Categories>;
};

export type World_Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Categories_Aggregate_Bool_Exp_Count>;
};

export type World_Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Categories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_categories" */
export type World_Categories_Aggregate_Fields = {
  __typename?: 'world_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<World_Categories_Max_Fields>;
  min?: Maybe<World_Categories_Min_Fields>;
};


/** aggregate fields of "world_categories" */
export type World_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_categories" */
export type World_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Categories_Max_Order_By>;
  min?: InputMaybe<World_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "world_categories" */
export type World_Categories_Arr_Rel_Insert_Input = {
  data: Array<World_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "world_categories". All fields are combined with a logical 'AND'. */
export type World_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<World_Categories_Bool_Exp>>;
  _not?: InputMaybe<World_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<World_Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  law_category?: InputMaybe<Law_Categories_Bool_Exp>;
  law_category_ja?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_categories" */
export const World_Categories_Constraint = {
  /** unique or primary key constraint on columns "world_id", "law_category_ja" */
  WorldCategoriesPkey: 'world_categories_pkey'
} as const;

export type World_Categories_Constraint = typeof World_Categories_Constraint[keyof typeof World_Categories_Constraint];
/** input type for inserting data into table "world_categories" */
export type World_Categories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_category?: InputMaybe<Law_Categories_Obj_Rel_Insert_Input>;
  law_category_ja?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Categories_Max_Fields = {
  __typename?: 'world_categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_category_ja?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_categories" */
export type World_Categories_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_category_ja?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Categories_Min_Fields = {
  __typename?: 'world_categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_category_ja?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_categories" */
export type World_Categories_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_category_ja?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_categories" */
export type World_Categories_Mutation_Response = {
  __typename?: 'world_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Categories>;
};

/** on_conflict condition type for table "world_categories" */
export type World_Categories_On_Conflict = {
  constraint: World_Categories_Constraint;
  update_columns?: Array<World_Categories_Update_Column>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "world_categories". */
export type World_Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_category?: InputMaybe<Law_Categories_Order_By>;
  law_category_ja?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_categories */
export type World_Categories_Pk_Columns_Input = {
  law_category_ja: Scalars['String']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_categories" */
export const World_Categories_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawCategoryJa: 'law_category_ja',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Categories_Select_Column = typeof World_Categories_Select_Column[keyof typeof World_Categories_Select_Column];
/** input type for updating data in table "world_categories" */
export type World_Categories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_category_ja?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "world_categories" */
export type World_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Categories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_category_ja?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "world_categories" */
export const World_Categories_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawCategoryJa: 'law_category_ja',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Categories_Update_Column = typeof World_Categories_Update_Column[keyof typeof World_Categories_Update_Column];
export type World_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Categories_Bool_Exp;
};

/** columns and relationships of "world_chat_boxes" */
export type World_Chat_Boxes = {
  __typename?: 'world_chat_boxes';
  author_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  status: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  world: Worlds;
  /** An array relationship */
  world_chats: Array<World_Chats>;
  /** An aggregate relationship */
  world_chats_aggregate: World_Chats_Aggregate;
  world_id: Scalars['uuid']['output'];
};


/** columns and relationships of "world_chat_boxes" */
export type World_Chat_BoxesWorld_ChatsArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};


/** columns and relationships of "world_chat_boxes" */
export type World_Chat_BoxesWorld_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chats_Order_By>>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};

/** aggregated selection of "world_chat_boxes" */
export type World_Chat_Boxes_Aggregate = {
  __typename?: 'world_chat_boxes_aggregate';
  aggregate?: Maybe<World_Chat_Boxes_Aggregate_Fields>;
  nodes: Array<World_Chat_Boxes>;
};

export type World_Chat_Boxes_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Chat_Boxes_Aggregate_Bool_Exp_Count>;
};

export type World_Chat_Boxes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_chat_boxes" */
export type World_Chat_Boxes_Aggregate_Fields = {
  __typename?: 'world_chat_boxes_aggregate_fields';
  avg?: Maybe<World_Chat_Boxes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Chat_Boxes_Max_Fields>;
  min?: Maybe<World_Chat_Boxes_Min_Fields>;
  stddev?: Maybe<World_Chat_Boxes_Stddev_Fields>;
  stddev_pop?: Maybe<World_Chat_Boxes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Chat_Boxes_Stddev_Samp_Fields>;
  sum?: Maybe<World_Chat_Boxes_Sum_Fields>;
  var_pop?: Maybe<World_Chat_Boxes_Var_Pop_Fields>;
  var_samp?: Maybe<World_Chat_Boxes_Var_Samp_Fields>;
  variance?: Maybe<World_Chat_Boxes_Variance_Fields>;
};


/** aggregate fields of "world_chat_boxes" */
export type World_Chat_Boxes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_chat_boxes" */
export type World_Chat_Boxes_Aggregate_Order_By = {
  avg?: InputMaybe<World_Chat_Boxes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Chat_Boxes_Max_Order_By>;
  min?: InputMaybe<World_Chat_Boxes_Min_Order_By>;
  stddev?: InputMaybe<World_Chat_Boxes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Chat_Boxes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Chat_Boxes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Chat_Boxes_Sum_Order_By>;
  var_pop?: InputMaybe<World_Chat_Boxes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Chat_Boxes_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Chat_Boxes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_chat_boxes" */
export type World_Chat_Boxes_Arr_Rel_Insert_Input = {
  data: Array<World_Chat_Boxes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Chat_Boxes_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Chat_Boxes_Avg_Fields = {
  __typename?: 'world_chat_boxes_avg_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_chat_boxes". All fields are combined with a logical 'AND'. */
export type World_Chat_Boxes_Bool_Exp = {
  _and?: InputMaybe<Array<World_Chat_Boxes_Bool_Exp>>;
  _not?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
  _or?: InputMaybe<Array<World_Chat_Boxes_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_chats?: InputMaybe<World_Chats_Bool_Exp>;
  world_chats_aggregate?: InputMaybe<World_Chats_Aggregate_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_chat_boxes" */
export const World_Chat_Boxes_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldChatTopicsPkey: 'world_chat_topics_pkey'
} as const;

export type World_Chat_Boxes_Constraint = typeof World_Chat_Boxes_Constraint[keyof typeof World_Chat_Boxes_Constraint];
/** input type for incrementing numeric columns in table "world_chat_boxes" */
export type World_Chat_Boxes_Inc_Input = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_chat_boxes" */
export type World_Chat_Boxes_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_chats?: InputMaybe<World_Chats_Arr_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Chat_Boxes_Max_Fields = {
  __typename?: 'world_chat_boxes_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Chat_Boxes_Min_Fields = {
  __typename?: 'world_chat_boxes_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_chat_boxes" */
export type World_Chat_Boxes_Mutation_Response = {
  __typename?: 'world_chat_boxes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Chat_Boxes>;
};

/** input type for inserting object relation for remote table "world_chat_boxes" */
export type World_Chat_Boxes_Obj_Rel_Insert_Input = {
  data: World_Chat_Boxes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Chat_Boxes_On_Conflict>;
};

/** on_conflict condition type for table "world_chat_boxes" */
export type World_Chat_Boxes_On_Conflict = {
  constraint: World_Chat_Boxes_Constraint;
  update_columns?: Array<World_Chat_Boxes_Update_Column>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};

/** Ordering options when selecting data from "world_chat_boxes". */
export type World_Chat_Boxes_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_chats_aggregate?: InputMaybe<World_Chats_Aggregate_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_chat_boxes */
export type World_Chat_Boxes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "world_chat_boxes" */
export const World_Chat_Boxes_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Chat_Boxes_Select_Column = typeof World_Chat_Boxes_Select_Column[keyof typeof World_Chat_Boxes_Select_Column];
/** input type for updating data in table "world_chat_boxes" */
export type World_Chat_Boxes_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Chat_Boxes_Stddev_Fields = {
  __typename?: 'world_chat_boxes_stddev_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Chat_Boxes_Stddev_Pop_Fields = {
  __typename?: 'world_chat_boxes_stddev_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Chat_Boxes_Stddev_Samp_Fields = {
  __typename?: 'world_chat_boxes_stddev_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_chat_boxes" */
export type World_Chat_Boxes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Chat_Boxes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Chat_Boxes_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Chat_Boxes_Sum_Fields = {
  __typename?: 'world_chat_boxes_sum_fields';
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** update columns of table "world_chat_boxes" */
export const World_Chat_Boxes_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Chat_Boxes_Update_Column = typeof World_Chat_Boxes_Update_Column[keyof typeof World_Chat_Boxes_Update_Column];
export type World_Chat_Boxes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Chat_Boxes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Chat_Boxes_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Chat_Boxes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Chat_Boxes_Var_Pop_Fields = {
  __typename?: 'world_chat_boxes_var_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Chat_Boxes_Var_Samp_Fields = {
  __typename?: 'world_chat_boxes_var_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Chat_Boxes_Variance_Fields = {
  __typename?: 'world_chat_boxes_variance_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_chat_boxes" */
export type World_Chat_Boxes_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_chats" */
export type World_Chats = {
  __typename?: 'world_chats';
  author_id: Scalars['uuid']['output'];
  chat_box_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  status: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  world_chat_box: World_Chat_Boxes;
};

/** aggregated selection of "world_chats" */
export type World_Chats_Aggregate = {
  __typename?: 'world_chats_aggregate';
  aggregate?: Maybe<World_Chats_Aggregate_Fields>;
  nodes: Array<World_Chats>;
};

export type World_Chats_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Chats_Aggregate_Bool_Exp_Count>;
};

export type World_Chats_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Chats_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_chats" */
export type World_Chats_Aggregate_Fields = {
  __typename?: 'world_chats_aggregate_fields';
  avg?: Maybe<World_Chats_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Chats_Max_Fields>;
  min?: Maybe<World_Chats_Min_Fields>;
  stddev?: Maybe<World_Chats_Stddev_Fields>;
  stddev_pop?: Maybe<World_Chats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Chats_Stddev_Samp_Fields>;
  sum?: Maybe<World_Chats_Sum_Fields>;
  var_pop?: Maybe<World_Chats_Var_Pop_Fields>;
  var_samp?: Maybe<World_Chats_Var_Samp_Fields>;
  variance?: Maybe<World_Chats_Variance_Fields>;
};


/** aggregate fields of "world_chats" */
export type World_Chats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_chats" */
export type World_Chats_Aggregate_Order_By = {
  avg?: InputMaybe<World_Chats_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Chats_Max_Order_By>;
  min?: InputMaybe<World_Chats_Min_Order_By>;
  stddev?: InputMaybe<World_Chats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Chats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Chats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Chats_Sum_Order_By>;
  var_pop?: InputMaybe<World_Chats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Chats_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Chats_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_chats" */
export type World_Chats_Arr_Rel_Insert_Input = {
  data: Array<World_Chats_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Chats_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Chats_Avg_Fields = {
  __typename?: 'world_chats_avg_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_chats" */
export type World_Chats_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_chats". All fields are combined with a logical 'AND'. */
export type World_Chats_Bool_Exp = {
  _and?: InputMaybe<Array<World_Chats_Bool_Exp>>;
  _not?: InputMaybe<World_Chats_Bool_Exp>;
  _or?: InputMaybe<Array<World_Chats_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  chat_box_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world_chat_box?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};

/** unique or primary key constraints on table "world_chats" */
export const World_Chats_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldChatCommentsPkey: 'world_chat_comments_pkey'
} as const;

export type World_Chats_Constraint = typeof World_Chats_Constraint[keyof typeof World_Chats_Constraint];
/** input type for incrementing numeric columns in table "world_chats" */
export type World_Chats_Inc_Input = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_chats" */
export type World_Chats_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat_box_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world_chat_box?: InputMaybe<World_Chat_Boxes_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type World_Chats_Max_Fields = {
  __typename?: 'world_chats_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  chat_box_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "world_chats" */
export type World_Chats_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_box_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Chats_Min_Fields = {
  __typename?: 'world_chats_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  chat_box_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "world_chats" */
export type World_Chats_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_box_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_chats" */
export type World_Chats_Mutation_Response = {
  __typename?: 'world_chats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Chats>;
};

/** on_conflict condition type for table "world_chats" */
export type World_Chats_On_Conflict = {
  constraint: World_Chats_Constraint;
  update_columns?: Array<World_Chats_Update_Column>;
  where?: InputMaybe<World_Chats_Bool_Exp>;
};

/** Ordering options when selecting data from "world_chats". */
export type World_Chats_Order_By = {
  author_id?: InputMaybe<Order_By>;
  chat_box_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world_chat_box?: InputMaybe<World_Chat_Boxes_Order_By>;
};

/** primary key columns input for table: world_chats */
export type World_Chats_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "world_chats" */
export const World_Chats_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  ChatBoxId: 'chat_box_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type World_Chats_Select_Column = typeof World_Chats_Select_Column[keyof typeof World_Chats_Select_Column];
/** input type for updating data in table "world_chats" */
export type World_Chats_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat_box_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type World_Chats_Stddev_Fields = {
  __typename?: 'world_chats_stddev_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_chats" */
export type World_Chats_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Chats_Stddev_Pop_Fields = {
  __typename?: 'world_chats_stddev_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_chats" */
export type World_Chats_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Chats_Stddev_Samp_Fields = {
  __typename?: 'world_chats_stddev_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_chats" */
export type World_Chats_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_chats" */
export type World_Chats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Chats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Chats_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  chat_box_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type World_Chats_Sum_Fields = {
  __typename?: 'world_chats_sum_fields';
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_chats" */
export type World_Chats_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** update columns of table "world_chats" */
export const World_Chats_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  ChatBoxId: 'chat_box_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type World_Chats_Update_Column = typeof World_Chats_Update_Column[keyof typeof World_Chats_Update_Column];
export type World_Chats_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Chats_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Chats_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Chats_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Chats_Var_Pop_Fields = {
  __typename?: 'world_chats_var_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_chats" */
export type World_Chats_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Chats_Var_Samp_Fields = {
  __typename?: 'world_chats_var_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_chats" */
export type World_Chats_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Chats_Variance_Fields = {
  __typename?: 'world_chats_variance_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_chats" */
export type World_Chats_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_citizens" */
export type World_Citizens = {
  __typename?: 'world_citizens';
  /** An object relationship */
  citizen: Citizens;
  citizen_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_citizens" */
export type World_Citizens_Aggregate = {
  __typename?: 'world_citizens_aggregate';
  aggregate?: Maybe<World_Citizens_Aggregate_Fields>;
  nodes: Array<World_Citizens>;
};

export type World_Citizens_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Citizens_Aggregate_Bool_Exp_Count>;
};

export type World_Citizens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Citizens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_citizens" */
export type World_Citizens_Aggregate_Fields = {
  __typename?: 'world_citizens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<World_Citizens_Max_Fields>;
  min?: Maybe<World_Citizens_Min_Fields>;
};


/** aggregate fields of "world_citizens" */
export type World_Citizens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_citizens" */
export type World_Citizens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Citizens_Max_Order_By>;
  min?: InputMaybe<World_Citizens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "world_citizens" */
export type World_Citizens_Arr_Rel_Insert_Input = {
  data: Array<World_Citizens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Citizens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "world_citizens". All fields are combined with a logical 'AND'. */
export type World_Citizens_Bool_Exp = {
  _and?: InputMaybe<Array<World_Citizens_Bool_Exp>>;
  _not?: InputMaybe<World_Citizens_Bool_Exp>;
  _or?: InputMaybe<Array<World_Citizens_Bool_Exp>>;
  citizen?: InputMaybe<Citizens_Bool_Exp>;
  citizen_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_citizens" */
export const World_Citizens_Constraint = {
  /** unique or primary key constraint on columns "user_id", "citizen_id" */
  WorldCitizensPkey: 'world_citizens_pkey'
} as const;

export type World_Citizens_Constraint = typeof World_Citizens_Constraint[keyof typeof World_Citizens_Constraint];
/** input type for inserting data into table "world_citizens" */
export type World_Citizens_Insert_Input = {
  citizen?: InputMaybe<Citizens_Obj_Rel_Insert_Input>;
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Citizens_Max_Fields = {
  __typename?: 'world_citizens_max_fields';
  citizen_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_citizens" */
export type World_Citizens_Max_Order_By = {
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Citizens_Min_Fields = {
  __typename?: 'world_citizens_min_fields';
  citizen_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_citizens" */
export type World_Citizens_Min_Order_By = {
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_citizens" */
export type World_Citizens_Mutation_Response = {
  __typename?: 'world_citizens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Citizens>;
};

/** on_conflict condition type for table "world_citizens" */
export type World_Citizens_On_Conflict = {
  constraint: World_Citizens_Constraint;
  update_columns?: Array<World_Citizens_Update_Column>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};

/** Ordering options when selecting data from "world_citizens". */
export type World_Citizens_Order_By = {
  citizen?: InputMaybe<Citizens_Order_By>;
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_citizens */
export type World_Citizens_Pk_Columns_Input = {
  citizen_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "world_citizens" */
export const World_Citizens_Select_Column = {
  /** column name */
  CitizenId: 'citizen_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Citizens_Select_Column = typeof World_Citizens_Select_Column[keyof typeof World_Citizens_Select_Column];
/** input type for updating data in table "world_citizens" */
export type World_Citizens_Set_Input = {
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "world_citizens" */
export type World_Citizens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Citizens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Citizens_Stream_Cursor_Value_Input = {
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "world_citizens" */
export const World_Citizens_Update_Column = {
  /** column name */
  CitizenId: 'citizen_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Citizens_Update_Column = typeof World_Citizens_Update_Column[keyof typeof World_Citizens_Update_Column];
export type World_Citizens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Citizens_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Citizens_Bool_Exp;
};

/** columns and relationships of "world_comments" */
export type World_Comments = {
  __typename?: 'world_comments';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  status: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_comments" */
export type World_Comments_Aggregate = {
  __typename?: 'world_comments_aggregate';
  aggregate?: Maybe<World_Comments_Aggregate_Fields>;
  nodes: Array<World_Comments>;
};

export type World_Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Comments_Aggregate_Bool_Exp_Count>;
};

export type World_Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_comments" */
export type World_Comments_Aggregate_Fields = {
  __typename?: 'world_comments_aggregate_fields';
  avg?: Maybe<World_Comments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Comments_Max_Fields>;
  min?: Maybe<World_Comments_Min_Fields>;
  stddev?: Maybe<World_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<World_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<World_Comments_Sum_Fields>;
  var_pop?: Maybe<World_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<World_Comments_Var_Samp_Fields>;
  variance?: Maybe<World_Comments_Variance_Fields>;
};


/** aggregate fields of "world_comments" */
export type World_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_comments" */
export type World_Comments_Aggregate_Order_By = {
  avg?: InputMaybe<World_Comments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Comments_Max_Order_By>;
  min?: InputMaybe<World_Comments_Min_Order_By>;
  stddev?: InputMaybe<World_Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Comments_Sum_Order_By>;
  var_pop?: InputMaybe<World_Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_comments" */
export type World_Comments_Arr_Rel_Insert_Input = {
  data: Array<World_Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Comments_Avg_Fields = {
  __typename?: 'world_comments_avg_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_comments" */
export type World_Comments_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_comments". All fields are combined with a logical 'AND'. */
export type World_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<World_Comments_Bool_Exp>>;
  _not?: InputMaybe<World_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<World_Comments_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_comments" */
export const World_Comments_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldCommentsPkey: 'world_comments_pkey'
} as const;

export type World_Comments_Constraint = typeof World_Comments_Constraint[keyof typeof World_Comments_Constraint];
/** input type for incrementing numeric columns in table "world_comments" */
export type World_Comments_Inc_Input = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_comments" */
export type World_Comments_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Comments_Max_Fields = {
  __typename?: 'world_comments_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_comments" */
export type World_Comments_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Comments_Min_Fields = {
  __typename?: 'world_comments_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_comments" */
export type World_Comments_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_comments" */
export type World_Comments_Mutation_Response = {
  __typename?: 'world_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Comments>;
};

/** on_conflict condition type for table "world_comments" */
export type World_Comments_On_Conflict = {
  constraint: World_Comments_Constraint;
  update_columns?: Array<World_Comments_Update_Column>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "world_comments". */
export type World_Comments_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_comments */
export type World_Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "world_comments" */
export const World_Comments_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Comments_Select_Column = typeof World_Comments_Select_Column[keyof typeof World_Comments_Select_Column];
/** input type for updating data in table "world_comments" */
export type World_Comments_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Comments_Stddev_Fields = {
  __typename?: 'world_comments_stddev_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_comments" */
export type World_Comments_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Comments_Stddev_Pop_Fields = {
  __typename?: 'world_comments_stddev_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_comments" */
export type World_Comments_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Comments_Stddev_Samp_Fields = {
  __typename?: 'world_comments_stddev_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_comments" */
export type World_Comments_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_comments" */
export type World_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Comments_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Comments_Sum_Fields = {
  __typename?: 'world_comments_sum_fields';
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_comments" */
export type World_Comments_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** update columns of table "world_comments" */
export const World_Comments_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Comments_Update_Column = typeof World_Comments_Update_Column[keyof typeof World_Comments_Update_Column];
export type World_Comments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Comments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Comments_Var_Pop_Fields = {
  __typename?: 'world_comments_var_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_comments" */
export type World_Comments_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Comments_Var_Samp_Fields = {
  __typename?: 'world_comments_var_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_comments" */
export type World_Comments_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Comments_Variance_Fields = {
  __typename?: 'world_comments_variance_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_comments" */
export type World_Comments_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_editable_users" */
export type World_Editable_Users = {
  __typename?: 'world_editable_users';
  created_at: Scalars['timestamptz']['output'];
  status: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_editable_users" */
export type World_Editable_Users_Aggregate = {
  __typename?: 'world_editable_users_aggregate';
  aggregate?: Maybe<World_Editable_Users_Aggregate_Fields>;
  nodes: Array<World_Editable_Users>;
};

export type World_Editable_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Editable_Users_Aggregate_Bool_Exp_Count>;
};

export type World_Editable_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Editable_Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_editable_users" */
export type World_Editable_Users_Aggregate_Fields = {
  __typename?: 'world_editable_users_aggregate_fields';
  avg?: Maybe<World_Editable_Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Editable_Users_Max_Fields>;
  min?: Maybe<World_Editable_Users_Min_Fields>;
  stddev?: Maybe<World_Editable_Users_Stddev_Fields>;
  stddev_pop?: Maybe<World_Editable_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Editable_Users_Stddev_Samp_Fields>;
  sum?: Maybe<World_Editable_Users_Sum_Fields>;
  var_pop?: Maybe<World_Editable_Users_Var_Pop_Fields>;
  var_samp?: Maybe<World_Editable_Users_Var_Samp_Fields>;
  variance?: Maybe<World_Editable_Users_Variance_Fields>;
};


/** aggregate fields of "world_editable_users" */
export type World_Editable_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_editable_users" */
export type World_Editable_Users_Aggregate_Order_By = {
  avg?: InputMaybe<World_Editable_Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Editable_Users_Max_Order_By>;
  min?: InputMaybe<World_Editable_Users_Min_Order_By>;
  stddev?: InputMaybe<World_Editable_Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Editable_Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Editable_Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Editable_Users_Sum_Order_By>;
  var_pop?: InputMaybe<World_Editable_Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Editable_Users_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Editable_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_editable_users" */
export type World_Editable_Users_Arr_Rel_Insert_Input = {
  data: Array<World_Editable_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Editable_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Editable_Users_Avg_Fields = {
  __typename?: 'world_editable_users_avg_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_editable_users" */
export type World_Editable_Users_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_editable_users". All fields are combined with a logical 'AND'. */
export type World_Editable_Users_Bool_Exp = {
  _and?: InputMaybe<Array<World_Editable_Users_Bool_Exp>>;
  _not?: InputMaybe<World_Editable_Users_Bool_Exp>;
  _or?: InputMaybe<Array<World_Editable_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_editable_users" */
export const World_Editable_Users_Constraint = {
  /** unique or primary key constraint on columns "world_id", "user_id" */
  WorldEditableUsersPkey: 'world_editable_users_pkey'
} as const;

export type World_Editable_Users_Constraint = typeof World_Editable_Users_Constraint[keyof typeof World_Editable_Users_Constraint];
/** input type for incrementing numeric columns in table "world_editable_users" */
export type World_Editable_Users_Inc_Input = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_editable_users" */
export type World_Editable_Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Editable_Users_Max_Fields = {
  __typename?: 'world_editable_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_editable_users" */
export type World_Editable_Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Editable_Users_Min_Fields = {
  __typename?: 'world_editable_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_editable_users" */
export type World_Editable_Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_editable_users" */
export type World_Editable_Users_Mutation_Response = {
  __typename?: 'world_editable_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Editable_Users>;
};

/** on_conflict condition type for table "world_editable_users" */
export type World_Editable_Users_On_Conflict = {
  constraint: World_Editable_Users_Constraint;
  update_columns?: Array<World_Editable_Users_Update_Column>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "world_editable_users". */
export type World_Editable_Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_editable_users */
export type World_Editable_Users_Pk_Columns_Input = {
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_editable_users" */
export const World_Editable_Users_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Editable_Users_Select_Column = typeof World_Editable_Users_Select_Column[keyof typeof World_Editable_Users_Select_Column];
/** input type for updating data in table "world_editable_users" */
export type World_Editable_Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Editable_Users_Stddev_Fields = {
  __typename?: 'world_editable_users_stddev_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_editable_users" */
export type World_Editable_Users_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Editable_Users_Stddev_Pop_Fields = {
  __typename?: 'world_editable_users_stddev_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_editable_users" */
export type World_Editable_Users_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Editable_Users_Stddev_Samp_Fields = {
  __typename?: 'world_editable_users_stddev_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_editable_users" */
export type World_Editable_Users_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_editable_users" */
export type World_Editable_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Editable_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Editable_Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Editable_Users_Sum_Fields = {
  __typename?: 'world_editable_users_sum_fields';
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_editable_users" */
export type World_Editable_Users_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** update columns of table "world_editable_users" */
export const World_Editable_Users_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Editable_Users_Update_Column = typeof World_Editable_Users_Update_Column[keyof typeof World_Editable_Users_Update_Column];
export type World_Editable_Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Editable_Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Editable_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Editable_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Editable_Users_Var_Pop_Fields = {
  __typename?: 'world_editable_users_var_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_editable_users" */
export type World_Editable_Users_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Editable_Users_Var_Samp_Fields = {
  __typename?: 'world_editable_users_var_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_editable_users" */
export type World_Editable_Users_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Editable_Users_Variance_Fields = {
  __typename?: 'world_editable_users_variance_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_editable_users" */
export type World_Editable_Users_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_histories" */
export type World_Histories = {
  __typename?: 'world_histories';
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  editor_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  markup_text: Scalars['String']['output'];
  markup_text_html?: Maybe<Scalars['String']['output']>;
  official_language: Scalars['Int']['output'];
  public_security: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_histories" */
export type World_Histories_Aggregate = {
  __typename?: 'world_histories_aggregate';
  aggregate?: Maybe<World_Histories_Aggregate_Fields>;
  nodes: Array<World_Histories>;
};

export type World_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Histories_Aggregate_Bool_Exp_Count>;
};

export type World_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_histories" */
export type World_Histories_Aggregate_Fields = {
  __typename?: 'world_histories_aggregate_fields';
  avg?: Maybe<World_Histories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Histories_Max_Fields>;
  min?: Maybe<World_Histories_Min_Fields>;
  stddev?: Maybe<World_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<World_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<World_Histories_Sum_Fields>;
  var_pop?: Maybe<World_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<World_Histories_Var_Samp_Fields>;
  variance?: Maybe<World_Histories_Variance_Fields>;
};


/** aggregate fields of "world_histories" */
export type World_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_histories" */
export type World_Histories_Aggregate_Order_By = {
  avg?: InputMaybe<World_Histories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Histories_Max_Order_By>;
  min?: InputMaybe<World_Histories_Min_Order_By>;
  stddev?: InputMaybe<World_Histories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Histories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Histories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Histories_Sum_Order_By>;
  var_pop?: InputMaybe<World_Histories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Histories_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Histories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_histories" */
export type World_Histories_Arr_Rel_Insert_Input = {
  data: Array<World_Histories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Histories_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Histories_Avg_Fields = {
  __typename?: 'world_histories_avg_fields';
  official_language?: Maybe<Scalars['Float']['output']>;
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_histories" */
export type World_Histories_Avg_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_histories". All fields are combined with a logical 'AND'. */
export type World_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<World_Histories_Bool_Exp>>;
  _not?: InputMaybe<World_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<World_Histories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  editor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  markup_text?: InputMaybe<String_Comparison_Exp>;
  markup_text_html?: InputMaybe<String_Comparison_Exp>;
  official_language?: InputMaybe<Int_Comparison_Exp>;
  public_security?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_histories" */
export const World_Histories_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldsPkey: 'worlds_pkey'
} as const;

export type World_Histories_Constraint = typeof World_Histories_Constraint[keyof typeof World_Histories_Constraint];
/** input type for incrementing numeric columns in table "world_histories" */
export type World_Histories_Inc_Input = {
  official_language?: InputMaybe<Scalars['Int']['input']>;
  public_security?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_histories" */
export type World_Histories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  editor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
  markup_text_html?: InputMaybe<Scalars['String']['input']>;
  official_language?: InputMaybe<Scalars['Int']['input']>;
  public_security?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Histories_Max_Fields = {
  __typename?: 'world_histories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
  markup_text_html?: Maybe<Scalars['String']['output']>;
  official_language?: Maybe<Scalars['Int']['output']>;
  public_security?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_histories" */
export type World_Histories_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  editor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
  markup_text_html?: InputMaybe<Order_By>;
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Histories_Min_Fields = {
  __typename?: 'world_histories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  markup_text?: Maybe<Scalars['String']['output']>;
  markup_text_html?: Maybe<Scalars['String']['output']>;
  official_language?: Maybe<Scalars['Int']['output']>;
  public_security?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_histories" */
export type World_Histories_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  editor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
  markup_text_html?: InputMaybe<Order_By>;
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_histories" */
export type World_Histories_Mutation_Response = {
  __typename?: 'world_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Histories>;
};

/** on_conflict condition type for table "world_histories" */
export type World_Histories_On_Conflict = {
  constraint: World_Histories_Constraint;
  update_columns?: Array<World_Histories_Update_Column>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "world_histories". */
export type World_Histories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  editor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  markup_text?: InputMaybe<Order_By>;
  markup_text_html?: InputMaybe<Order_By>;
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_histories */
export type World_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "world_histories" */
export const World_Histories_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  EditorId: 'editor_id',
  /** column name */
  Id: 'id',
  /** column name */
  MarkupText: 'markup_text',
  /** column name */
  MarkupTextHtml: 'markup_text_html',
  /** column name */
  OfficialLanguage: 'official_language',
  /** column name */
  PublicSecurity: 'public_security',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Histories_Select_Column = typeof World_Histories_Select_Column[keyof typeof World_Histories_Select_Column];
/** input type for updating data in table "world_histories" */
export type World_Histories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  editor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
  markup_text_html?: InputMaybe<Scalars['String']['input']>;
  official_language?: InputMaybe<Scalars['Int']['input']>;
  public_security?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Histories_Stddev_Fields = {
  __typename?: 'world_histories_stddev_fields';
  official_language?: Maybe<Scalars['Float']['output']>;
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_histories" */
export type World_Histories_Stddev_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Histories_Stddev_Pop_Fields = {
  __typename?: 'world_histories_stddev_pop_fields';
  official_language?: Maybe<Scalars['Float']['output']>;
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_histories" */
export type World_Histories_Stddev_Pop_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Histories_Stddev_Samp_Fields = {
  __typename?: 'world_histories_stddev_samp_fields';
  official_language?: Maybe<Scalars['Float']['output']>;
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_histories" */
export type World_Histories_Stddev_Samp_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_histories" */
export type World_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Histories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  editor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  markup_text?: InputMaybe<Scalars['String']['input']>;
  markup_text_html?: InputMaybe<Scalars['String']['input']>;
  official_language?: InputMaybe<Scalars['Int']['input']>;
  public_security?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Histories_Sum_Fields = {
  __typename?: 'world_histories_sum_fields';
  official_language?: Maybe<Scalars['Int']['output']>;
  public_security?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_histories" */
export type World_Histories_Sum_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** update columns of table "world_histories" */
export const World_Histories_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  EditorId: 'editor_id',
  /** column name */
  Id: 'id',
  /** column name */
  MarkupText: 'markup_text',
  /** column name */
  MarkupTextHtml: 'markup_text_html',
  /** column name */
  OfficialLanguage: 'official_language',
  /** column name */
  PublicSecurity: 'public_security',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Histories_Update_Column = typeof World_Histories_Update_Column[keyof typeof World_Histories_Update_Column];
export type World_Histories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Histories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Histories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Histories_Var_Pop_Fields = {
  __typename?: 'world_histories_var_pop_fields';
  official_language?: Maybe<Scalars['Float']['output']>;
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_histories" */
export type World_Histories_Var_Pop_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Histories_Var_Samp_Fields = {
  __typename?: 'world_histories_var_samp_fields';
  official_language?: Maybe<Scalars['Float']['output']>;
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_histories" */
export type World_Histories_Var_Samp_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Histories_Variance_Fields = {
  __typename?: 'world_histories_variance_fields';
  official_language?: Maybe<Scalars['Float']['output']>;
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_histories" */
export type World_Histories_Variance_Order_By = {
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_laws" */
export type World_Laws = {
  __typename?: 'world_laws';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_laws" */
export type World_Laws_Aggregate = {
  __typename?: 'world_laws_aggregate';
  aggregate?: Maybe<World_Laws_Aggregate_Fields>;
  nodes: Array<World_Laws>;
};

export type World_Laws_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Laws_Aggregate_Bool_Exp_Count>;
};

export type World_Laws_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Laws_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_laws" */
export type World_Laws_Aggregate_Fields = {
  __typename?: 'world_laws_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<World_Laws_Max_Fields>;
  min?: Maybe<World_Laws_Min_Fields>;
};


/** aggregate fields of "world_laws" */
export type World_Laws_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_laws" */
export type World_Laws_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Laws_Max_Order_By>;
  min?: InputMaybe<World_Laws_Min_Order_By>;
};

/** input type for inserting array relation for remote table "world_laws" */
export type World_Laws_Arr_Rel_Insert_Input = {
  data: Array<World_Laws_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Laws_On_Conflict>;
};

/** Boolean expression to filter rows from the table "world_laws". All fields are combined with a logical 'AND'. */
export type World_Laws_Bool_Exp = {
  _and?: InputMaybe<Array<World_Laws_Bool_Exp>>;
  _not?: InputMaybe<World_Laws_Bool_Exp>;
  _or?: InputMaybe<Array<World_Laws_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_laws" */
export const World_Laws_Constraint = {
  /** unique or primary key constraint on columns "world_id", "law_id" */
  WorldLawsPkey: 'world_laws_pkey'
} as const;

export type World_Laws_Constraint = typeof World_Laws_Constraint[keyof typeof World_Laws_Constraint];
/** input type for inserting data into table "world_laws" */
export type World_Laws_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Laws_Max_Fields = {
  __typename?: 'world_laws_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_laws" */
export type World_Laws_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Laws_Min_Fields = {
  __typename?: 'world_laws_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_laws" */
export type World_Laws_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_laws" */
export type World_Laws_Mutation_Response = {
  __typename?: 'world_laws_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Laws>;
};

/** on_conflict condition type for table "world_laws" */
export type World_Laws_On_Conflict = {
  constraint: World_Laws_Constraint;
  update_columns?: Array<World_Laws_Update_Column>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};

/** Ordering options when selecting data from "world_laws". */
export type World_Laws_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_laws */
export type World_Laws_Pk_Columns_Input = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_laws" */
export const World_Laws_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Laws_Select_Column = typeof World_Laws_Select_Column[keyof typeof World_Laws_Select_Column];
/** input type for updating data in table "world_laws" */
export type World_Laws_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "world_laws" */
export type World_Laws_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Laws_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Laws_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "world_laws" */
export const World_Laws_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Laws_Update_Column = typeof World_Laws_Update_Column[keyof typeof World_Laws_Update_Column];
export type World_Laws_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Laws_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Laws_Bool_Exp;
};

/** columns and relationships of "world_reactions" */
export type World_Reactions = {
  __typename?: 'world_reactions';
  created_at: Scalars['timestamptz']['output'];
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_reactions" */
export type World_Reactions_Aggregate = {
  __typename?: 'world_reactions_aggregate';
  aggregate?: Maybe<World_Reactions_Aggregate_Fields>;
  nodes: Array<World_Reactions>;
};

export type World_Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Reactions_Aggregate_Bool_Exp_Count>;
};

export type World_Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_reactions" */
export type World_Reactions_Aggregate_Fields = {
  __typename?: 'world_reactions_aggregate_fields';
  avg?: Maybe<World_Reactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Reactions_Max_Fields>;
  min?: Maybe<World_Reactions_Min_Fields>;
  stddev?: Maybe<World_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<World_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<World_Reactions_Sum_Fields>;
  var_pop?: Maybe<World_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<World_Reactions_Var_Samp_Fields>;
  variance?: Maybe<World_Reactions_Variance_Fields>;
};


/** aggregate fields of "world_reactions" */
export type World_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_reactions" */
export type World_Reactions_Aggregate_Order_By = {
  avg?: InputMaybe<World_Reactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Reactions_Max_Order_By>;
  min?: InputMaybe<World_Reactions_Min_Order_By>;
  stddev?: InputMaybe<World_Reactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Reactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Reactions_Sum_Order_By>;
  var_pop?: InputMaybe<World_Reactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Reactions_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_reactions" */
export type World_Reactions_Arr_Rel_Insert_Input = {
  data: Array<World_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Reactions_Avg_Fields = {
  __typename?: 'world_reactions_avg_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_reactions" */
export type World_Reactions_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_reactions". All fields are combined with a logical 'AND'. */
export type World_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<World_Reactions_Bool_Exp>>;
  _not?: InputMaybe<World_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<World_Reactions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_reactions" */
export const World_Reactions_Constraint = {
  /** unique or primary key constraint on columns "world_id", "user_id", "type" */
  WorldReactionsPkey: 'world_reactions_pkey'
} as const;

export type World_Reactions_Constraint = typeof World_Reactions_Constraint[keyof typeof World_Reactions_Constraint];
/** input type for incrementing numeric columns in table "world_reactions" */
export type World_Reactions_Inc_Input = {
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_reactions" */
export type World_Reactions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Reactions_Max_Fields = {
  __typename?: 'world_reactions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_reactions" */
export type World_Reactions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Reactions_Min_Fields = {
  __typename?: 'world_reactions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_reactions" */
export type World_Reactions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_reactions" */
export type World_Reactions_Mutation_Response = {
  __typename?: 'world_reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Reactions>;
};

/** on_conflict condition type for table "world_reactions" */
export type World_Reactions_On_Conflict = {
  constraint: World_Reactions_Constraint;
  update_columns?: Array<World_Reactions_Update_Column>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "world_reactions". */
export type World_Reactions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_reactions */
export type World_Reactions_Pk_Columns_Input = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_reactions" */
export const World_Reactions_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Reactions_Select_Column = typeof World_Reactions_Select_Column[keyof typeof World_Reactions_Select_Column];
/** input type for updating data in table "world_reactions" */
export type World_Reactions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Reactions_Stddev_Fields = {
  __typename?: 'world_reactions_stddev_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_reactions" */
export type World_Reactions_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Reactions_Stddev_Pop_Fields = {
  __typename?: 'world_reactions_stddev_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_reactions" */
export type World_Reactions_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Reactions_Stddev_Samp_Fields = {
  __typename?: 'world_reactions_stddev_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_reactions" */
export type World_Reactions_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_reactions" */
export type World_Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Reactions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Reactions_Sum_Fields = {
  __typename?: 'world_reactions_sum_fields';
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_reactions" */
export type World_Reactions_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "world_reactions" */
export const World_Reactions_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Reactions_Update_Column = typeof World_Reactions_Update_Column[keyof typeof World_Reactions_Update_Column];
export type World_Reactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Reactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Reactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Reactions_Var_Pop_Fields = {
  __typename?: 'world_reactions_var_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_reactions" */
export type World_Reactions_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Reactions_Var_Samp_Fields = {
  __typename?: 'world_reactions_var_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_reactions" */
export type World_Reactions_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Reactions_Variance_Fields = {
  __typename?: 'world_reactions_variance_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_reactions" */
export type World_Reactions_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "worlds" */
export type Worlds = {
  __typename?: 'worlds';
  author_id: Scalars['uuid']['output'];
  /** An array relationship */
  citizen_histories: Array<Citizen_Histories>;
  /** An aggregate relationship */
  citizen_histories_aggregate: Citizen_Histories_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  identify_id?: Maybe<Scalars['String']['output']>;
  level: Scalars['Int']['output'];
  /** An array relationship */
  species_percentage: Array<Species_Percentage_View_With_World_Id>;
  /** An aggregate relationship */
  species_percentage_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  status: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  world_arguments: Array<World_Arguments>;
  /** An aggregate relationship */
  world_arguments_aggregate: World_Arguments_Aggregate;
  /** An array relationship */
  world_categories: Array<World_Categories>;
  /** An aggregate relationship */
  world_categories_aggregate: World_Categories_Aggregate;
  /** An array relationship */
  world_chat_boxes: Array<World_Chat_Boxes>;
  /** An aggregate relationship */
  world_chat_boxes_aggregate: World_Chat_Boxes_Aggregate;
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** An array relationship */
  world_editable_users: Array<World_Editable_Users>;
  /** An aggregate relationship */
  world_editable_users_aggregate: World_Editable_Users_Aggregate;
  /** An array relationship */
  world_histories: Array<World_Histories>;
  /** An aggregate relationship */
  world_histories_aggregate: World_Histories_Aggregate;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
};


/** columns and relationships of "worlds" */
export type WorldsCitizen_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsCitizen_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizen_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizen_Histories_Order_By>>;
  where?: InputMaybe<Citizen_Histories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsSpecies_PercentageArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsSpecies_Percentage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_ArgumentsArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Arguments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Arguments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Arguments_Order_By>>;
  where?: InputMaybe<World_Arguments_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Categories_Order_By>>;
  where?: InputMaybe<World_Categories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Chat_BoxesArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Chat_Boxes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Chat_Boxes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Chat_Boxes_Order_By>>;
  where?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Editable_UsersArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Editable_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Editable_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Editable_Users_Order_By>>;
  where?: InputMaybe<World_Editable_Users_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};

/** aggregated selection of "worlds" */
export type Worlds_Aggregate = {
  __typename?: 'worlds_aggregate';
  aggregate?: Maybe<Worlds_Aggregate_Fields>;
  nodes: Array<Worlds>;
};

export type Worlds_Aggregate_Bool_Exp = {
  count?: InputMaybe<Worlds_Aggregate_Bool_Exp_Count>;
};

export type Worlds_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Worlds_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Worlds_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "worlds" */
export type Worlds_Aggregate_Fields = {
  __typename?: 'worlds_aggregate_fields';
  avg?: Maybe<Worlds_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Worlds_Max_Fields>;
  min?: Maybe<Worlds_Min_Fields>;
  stddev?: Maybe<Worlds_Stddev_Fields>;
  stddev_pop?: Maybe<Worlds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Worlds_Stddev_Samp_Fields>;
  sum?: Maybe<Worlds_Sum_Fields>;
  var_pop?: Maybe<Worlds_Var_Pop_Fields>;
  var_samp?: Maybe<Worlds_Var_Samp_Fields>;
  variance?: Maybe<Worlds_Variance_Fields>;
};


/** aggregate fields of "worlds" */
export type Worlds_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Worlds_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "worlds" */
export type Worlds_Aggregate_Order_By = {
  avg?: InputMaybe<Worlds_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Worlds_Max_Order_By>;
  min?: InputMaybe<Worlds_Min_Order_By>;
  stddev?: InputMaybe<Worlds_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Worlds_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Worlds_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Worlds_Sum_Order_By>;
  var_pop?: InputMaybe<Worlds_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Worlds_Var_Samp_Order_By>;
  variance?: InputMaybe<Worlds_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "worlds" */
export type Worlds_Arr_Rel_Insert_Input = {
  data: Array<Worlds_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};

/** aggregate avg on columns */
export type Worlds_Avg_Fields = {
  __typename?: 'worlds_avg_fields';
  level?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "worlds" */
export type Worlds_Avg_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "worlds". All fields are combined with a logical 'AND'. */
export type Worlds_Bool_Exp = {
  _and?: InputMaybe<Array<Worlds_Bool_Exp>>;
  _not?: InputMaybe<Worlds_Bool_Exp>;
  _or?: InputMaybe<Array<Worlds_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  citizen_histories?: InputMaybe<Citizen_Histories_Bool_Exp>;
  citizen_histories_aggregate?: InputMaybe<Citizen_Histories_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  identify_id?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  species_percentage?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
  species_percentage_aggregate?: InputMaybe<Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world_arguments?: InputMaybe<World_Arguments_Bool_Exp>;
  world_arguments_aggregate?: InputMaybe<World_Arguments_Aggregate_Bool_Exp>;
  world_categories?: InputMaybe<World_Categories_Bool_Exp>;
  world_categories_aggregate?: InputMaybe<World_Categories_Aggregate_Bool_Exp>;
  world_chat_boxes?: InputMaybe<World_Chat_Boxes_Bool_Exp>;
  world_chat_boxes_aggregate?: InputMaybe<World_Chat_Boxes_Aggregate_Bool_Exp>;
  world_citizens?: InputMaybe<World_Citizens_Bool_Exp>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Bool_Exp>;
  world_comments?: InputMaybe<World_Comments_Bool_Exp>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Bool_Exp>;
  world_editable_users?: InputMaybe<World_Editable_Users_Bool_Exp>;
  world_editable_users_aggregate?: InputMaybe<World_Editable_Users_Aggregate_Bool_Exp>;
  world_histories?: InputMaybe<World_Histories_Bool_Exp>;
  world_histories_aggregate?: InputMaybe<World_Histories_Aggregate_Bool_Exp>;
  world_laws?: InputMaybe<World_Laws_Bool_Exp>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Bool_Exp>;
  world_reactions?: InputMaybe<World_Reactions_Bool_Exp>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "worlds" */
export const Worlds_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldsPkey1: 'worlds_pkey1'
} as const;

export type Worlds_Constraint = typeof Worlds_Constraint[keyof typeof Worlds_Constraint];
/** input type for incrementing numeric columns in table "worlds" */
export type Worlds_Inc_Input = {
  level?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "worlds" */
export type Worlds_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  citizen_histories?: InputMaybe<Citizen_Histories_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identify_id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  species_percentage?: InputMaybe<Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world_arguments?: InputMaybe<World_Arguments_Arr_Rel_Insert_Input>;
  world_categories?: InputMaybe<World_Categories_Arr_Rel_Insert_Input>;
  world_chat_boxes?: InputMaybe<World_Chat_Boxes_Arr_Rel_Insert_Input>;
  world_citizens?: InputMaybe<World_Citizens_Arr_Rel_Insert_Input>;
  world_comments?: InputMaybe<World_Comments_Arr_Rel_Insert_Input>;
  world_editable_users?: InputMaybe<World_Editable_Users_Arr_Rel_Insert_Input>;
  world_histories?: InputMaybe<World_Histories_Arr_Rel_Insert_Input>;
  world_laws?: InputMaybe<World_Laws_Arr_Rel_Insert_Input>;
  world_reactions?: InputMaybe<World_Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Worlds_Max_Fields = {
  __typename?: 'worlds_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identify_id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "worlds" */
export type Worlds_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identify_id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Worlds_Min_Fields = {
  __typename?: 'worlds_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identify_id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "worlds" */
export type Worlds_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identify_id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "worlds" */
export type Worlds_Mutation_Response = {
  __typename?: 'worlds_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Worlds>;
};

/** input type for inserting object relation for remote table "worlds" */
export type Worlds_Obj_Rel_Insert_Input = {
  data: Worlds_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};

/** on_conflict condition type for table "worlds" */
export type Worlds_On_Conflict = {
  constraint: Worlds_Constraint;
  update_columns?: Array<Worlds_Update_Column>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};

/** Ordering options when selecting data from "worlds". */
export type Worlds_Order_By = {
  author_id?: InputMaybe<Order_By>;
  citizen_histories_aggregate?: InputMaybe<Citizen_Histories_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identify_id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  species_percentage_aggregate?: InputMaybe<Species_Percentage_View_With_World_Id_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world_arguments_aggregate?: InputMaybe<World_Arguments_Aggregate_Order_By>;
  world_categories_aggregate?: InputMaybe<World_Categories_Aggregate_Order_By>;
  world_chat_boxes_aggregate?: InputMaybe<World_Chat_Boxes_Aggregate_Order_By>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Order_By>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Order_By>;
  world_editable_users_aggregate?: InputMaybe<World_Editable_Users_Aggregate_Order_By>;
  world_histories_aggregate?: InputMaybe<World_Histories_Aggregate_Order_By>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Order_By>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: worlds */
export type Worlds_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "worlds" */
export const Worlds_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  IdentifyId: 'identify_id',
  /** column name */
  Level: 'level',
  /** column name */
  Status: 'status',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Worlds_Select_Column = typeof Worlds_Select_Column[keyof typeof Worlds_Select_Column];
/** input type for updating data in table "worlds" */
export type Worlds_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identify_id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Worlds_Stddev_Fields = {
  __typename?: 'worlds_stddev_fields';
  level?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "worlds" */
export type Worlds_Stddev_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Worlds_Stddev_Pop_Fields = {
  __typename?: 'worlds_stddev_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "worlds" */
export type Worlds_Stddev_Pop_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Worlds_Stddev_Samp_Fields = {
  __typename?: 'worlds_stddev_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "worlds" */
export type Worlds_Stddev_Samp_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "worlds" */
export type Worlds_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Worlds_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Worlds_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identify_id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Worlds_Sum_Fields = {
  __typename?: 'worlds_sum_fields';
  level?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "worlds" */
export type Worlds_Sum_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** update columns of table "worlds" */
export const Worlds_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  IdentifyId: 'identify_id',
  /** column name */
  Level: 'level',
  /** column name */
  Status: 'status',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Worlds_Update_Column = typeof Worlds_Update_Column[keyof typeof Worlds_Update_Column];
export type Worlds_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Worlds_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Worlds_Set_Input>;
  /** filter the rows which have to be updated */
  where: Worlds_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Worlds_Var_Pop_Fields = {
  __typename?: 'worlds_var_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "worlds" */
export type Worlds_Var_Pop_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Worlds_Var_Samp_Fields = {
  __typename?: 'worlds_var_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "worlds" */
export type Worlds_Var_Samp_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Worlds_Variance_Fields = {
  __typename?: 'worlds_variance_fields';
  level?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "worlds" */
export type Worlds_Variance_Order_By = {
  level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  String_comparison_exp: String_Comparison_Exp;
  _Service: ResolverTypeWrapper<_Service>;
  argumen_chats: ResolverTypeWrapper<Argumen_Chats>;
  argumen_chats_aggregate: ResolverTypeWrapper<Argumen_Chats_Aggregate>;
  argumen_chats_aggregate_bool_exp: Argumen_Chats_Aggregate_Bool_Exp;
  argumen_chats_aggregate_bool_exp_count: Argumen_Chats_Aggregate_Bool_Exp_Count;
  argumen_chats_aggregate_fields: ResolverTypeWrapper<Argumen_Chats_Aggregate_Fields>;
  argumen_chats_aggregate_order_by: Argumen_Chats_Aggregate_Order_By;
  argumen_chats_arr_rel_insert_input: Argumen_Chats_Arr_Rel_Insert_Input;
  argumen_chats_avg_fields: ResolverTypeWrapper<Argumen_Chats_Avg_Fields>;
  argumen_chats_avg_order_by: Argumen_Chats_Avg_Order_By;
  argumen_chats_bool_exp: Argumen_Chats_Bool_Exp;
  argumen_chats_constraint: Argumen_Chats_Constraint;
  argumen_chats_inc_input: Argumen_Chats_Inc_Input;
  argumen_chats_insert_input: Argumen_Chats_Insert_Input;
  argumen_chats_max_fields: ResolverTypeWrapper<Argumen_Chats_Max_Fields>;
  argumen_chats_max_order_by: Argumen_Chats_Max_Order_By;
  argumen_chats_min_fields: ResolverTypeWrapper<Argumen_Chats_Min_Fields>;
  argumen_chats_min_order_by: Argumen_Chats_Min_Order_By;
  argumen_chats_mutation_response: ResolverTypeWrapper<Argumen_Chats_Mutation_Response>;
  argumen_chats_on_conflict: Argumen_Chats_On_Conflict;
  argumen_chats_order_by: Argumen_Chats_Order_By;
  argumen_chats_pk_columns_input: Argumen_Chats_Pk_Columns_Input;
  argumen_chats_select_column: Argumen_Chats_Select_Column;
  argumen_chats_set_input: Argumen_Chats_Set_Input;
  argumen_chats_stddev_fields: ResolverTypeWrapper<Argumen_Chats_Stddev_Fields>;
  argumen_chats_stddev_order_by: Argumen_Chats_Stddev_Order_By;
  argumen_chats_stddev_pop_fields: ResolverTypeWrapper<Argumen_Chats_Stddev_Pop_Fields>;
  argumen_chats_stddev_pop_order_by: Argumen_Chats_Stddev_Pop_Order_By;
  argumen_chats_stddev_samp_fields: ResolverTypeWrapper<Argumen_Chats_Stddev_Samp_Fields>;
  argumen_chats_stddev_samp_order_by: Argumen_Chats_Stddev_Samp_Order_By;
  argumen_chats_stream_cursor_input: Argumen_Chats_Stream_Cursor_Input;
  argumen_chats_stream_cursor_value_input: Argumen_Chats_Stream_Cursor_Value_Input;
  argumen_chats_sum_fields: ResolverTypeWrapper<Argumen_Chats_Sum_Fields>;
  argumen_chats_sum_order_by: Argumen_Chats_Sum_Order_By;
  argumen_chats_update_column: Argumen_Chats_Update_Column;
  argumen_chats_updates: Argumen_Chats_Updates;
  argumen_chats_var_pop_fields: ResolverTypeWrapper<Argumen_Chats_Var_Pop_Fields>;
  argumen_chats_var_pop_order_by: Argumen_Chats_Var_Pop_Order_By;
  argumen_chats_var_samp_fields: ResolverTypeWrapper<Argumen_Chats_Var_Samp_Fields>;
  argumen_chats_var_samp_order_by: Argumen_Chats_Var_Samp_Order_By;
  argumen_chats_variance_fields: ResolverTypeWrapper<Argumen_Chats_Variance_Fields>;
  argumen_chats_variance_order_by: Argumen_Chats_Variance_Order_By;
  argument_chat_boxes: ResolverTypeWrapper<Argument_Chat_Boxes>;
  argument_chat_boxes_aggregate: ResolverTypeWrapper<Argument_Chat_Boxes_Aggregate>;
  argument_chat_boxes_aggregate_bool_exp: Argument_Chat_Boxes_Aggregate_Bool_Exp;
  argument_chat_boxes_aggregate_bool_exp_count: Argument_Chat_Boxes_Aggregate_Bool_Exp_Count;
  argument_chat_boxes_aggregate_fields: ResolverTypeWrapper<Argument_Chat_Boxes_Aggregate_Fields>;
  argument_chat_boxes_aggregate_order_by: Argument_Chat_Boxes_Aggregate_Order_By;
  argument_chat_boxes_arr_rel_insert_input: Argument_Chat_Boxes_Arr_Rel_Insert_Input;
  argument_chat_boxes_bool_exp: Argument_Chat_Boxes_Bool_Exp;
  argument_chat_boxes_constraint: Argument_Chat_Boxes_Constraint;
  argument_chat_boxes_insert_input: Argument_Chat_Boxes_Insert_Input;
  argument_chat_boxes_max_fields: ResolverTypeWrapper<Argument_Chat_Boxes_Max_Fields>;
  argument_chat_boxes_max_order_by: Argument_Chat_Boxes_Max_Order_By;
  argument_chat_boxes_min_fields: ResolverTypeWrapper<Argument_Chat_Boxes_Min_Fields>;
  argument_chat_boxes_min_order_by: Argument_Chat_Boxes_Min_Order_By;
  argument_chat_boxes_mutation_response: ResolverTypeWrapper<Argument_Chat_Boxes_Mutation_Response>;
  argument_chat_boxes_obj_rel_insert_input: Argument_Chat_Boxes_Obj_Rel_Insert_Input;
  argument_chat_boxes_on_conflict: Argument_Chat_Boxes_On_Conflict;
  argument_chat_boxes_order_by: Argument_Chat_Boxes_Order_By;
  argument_chat_boxes_pk_columns_input: Argument_Chat_Boxes_Pk_Columns_Input;
  argument_chat_boxes_select_column: Argument_Chat_Boxes_Select_Column;
  argument_chat_boxes_set_input: Argument_Chat_Boxes_Set_Input;
  argument_chat_boxes_stream_cursor_input: Argument_Chat_Boxes_Stream_Cursor_Input;
  argument_chat_boxes_stream_cursor_value_input: Argument_Chat_Boxes_Stream_Cursor_Value_Input;
  argument_chat_boxes_update_column: Argument_Chat_Boxes_Update_Column;
  argument_chat_boxes_updates: Argument_Chat_Boxes_Updates;
  argument_views: ResolverTypeWrapper<Argument_Views>;
  argument_views_aggregate: ResolverTypeWrapper<Argument_Views_Aggregate>;
  argument_views_aggregate_bool_exp: Argument_Views_Aggregate_Bool_Exp;
  argument_views_aggregate_bool_exp_count: Argument_Views_Aggregate_Bool_Exp_Count;
  argument_views_aggregate_fields: ResolverTypeWrapper<Argument_Views_Aggregate_Fields>;
  argument_views_aggregate_order_by: Argument_Views_Aggregate_Order_By;
  argument_views_arr_rel_insert_input: Argument_Views_Arr_Rel_Insert_Input;
  argument_views_bool_exp: Argument_Views_Bool_Exp;
  argument_views_constraint: Argument_Views_Constraint;
  argument_views_insert_input: Argument_Views_Insert_Input;
  argument_views_max_fields: ResolverTypeWrapper<Argument_Views_Max_Fields>;
  argument_views_max_order_by: Argument_Views_Max_Order_By;
  argument_views_min_fields: ResolverTypeWrapper<Argument_Views_Min_Fields>;
  argument_views_min_order_by: Argument_Views_Min_Order_By;
  argument_views_mutation_response: ResolverTypeWrapper<Argument_Views_Mutation_Response>;
  argument_views_on_conflict: Argument_Views_On_Conflict;
  argument_views_order_by: Argument_Views_Order_By;
  argument_views_pk_columns_input: Argument_Views_Pk_Columns_Input;
  argument_views_select_column: Argument_Views_Select_Column;
  argument_views_set_input: Argument_Views_Set_Input;
  argument_views_stream_cursor_input: Argument_Views_Stream_Cursor_Input;
  argument_views_stream_cursor_value_input: Argument_Views_Stream_Cursor_Value_Input;
  argument_views_update_column: Argument_Views_Update_Column;
  argument_views_updates: Argument_Views_Updates;
  arguments: ResolverTypeWrapper<Arguments>;
  arguments_aggregate: ResolverTypeWrapper<Arguments_Aggregate>;
  arguments_aggregate_bool_exp: Arguments_Aggregate_Bool_Exp;
  arguments_aggregate_bool_exp_count: Arguments_Aggregate_Bool_Exp_Count;
  arguments_aggregate_fields: ResolverTypeWrapper<Arguments_Aggregate_Fields>;
  arguments_aggregate_order_by: Arguments_Aggregate_Order_By;
  arguments_arr_rel_insert_input: Arguments_Arr_Rel_Insert_Input;
  arguments_bool_exp: Arguments_Bool_Exp;
  arguments_constraint: Arguments_Constraint;
  arguments_insert_input: Arguments_Insert_Input;
  arguments_max_fields: ResolverTypeWrapper<Arguments_Max_Fields>;
  arguments_max_order_by: Arguments_Max_Order_By;
  arguments_min_fields: ResolverTypeWrapper<Arguments_Min_Fields>;
  arguments_min_order_by: Arguments_Min_Order_By;
  arguments_mutation_response: ResolverTypeWrapper<Arguments_Mutation_Response>;
  arguments_obj_rel_insert_input: Arguments_Obj_Rel_Insert_Input;
  arguments_on_conflict: Arguments_On_Conflict;
  arguments_order_by: Arguments_Order_By;
  arguments_pk_columns_input: Arguments_Pk_Columns_Input;
  arguments_select_column: Arguments_Select_Column;
  arguments_set_input: Arguments_Set_Input;
  arguments_stream_cursor_input: Arguments_Stream_Cursor_Input;
  arguments_stream_cursor_value_input: Arguments_Stream_Cursor_Value_Input;
  arguments_update_column: Arguments_Update_Column;
  arguments_updates: Arguments_Updates;
  citizen_histories: ResolverTypeWrapper<Citizen_Histories>;
  citizen_histories_aggregate: ResolverTypeWrapper<Citizen_Histories_Aggregate>;
  citizen_histories_aggregate_bool_exp: Citizen_Histories_Aggregate_Bool_Exp;
  citizen_histories_aggregate_bool_exp_count: Citizen_Histories_Aggregate_Bool_Exp_Count;
  citizen_histories_aggregate_fields: ResolverTypeWrapper<Citizen_Histories_Aggregate_Fields>;
  citizen_histories_aggregate_order_by: Citizen_Histories_Aggregate_Order_By;
  citizen_histories_arr_rel_insert_input: Citizen_Histories_Arr_Rel_Insert_Input;
  citizen_histories_bool_exp: Citizen_Histories_Bool_Exp;
  citizen_histories_constraint: Citizen_Histories_Constraint;
  citizen_histories_insert_input: Citizen_Histories_Insert_Input;
  citizen_histories_max_fields: ResolverTypeWrapper<Citizen_Histories_Max_Fields>;
  citizen_histories_max_order_by: Citizen_Histories_Max_Order_By;
  citizen_histories_min_fields: ResolverTypeWrapper<Citizen_Histories_Min_Fields>;
  citizen_histories_min_order_by: Citizen_Histories_Min_Order_By;
  citizen_histories_mutation_response: ResolverTypeWrapper<Citizen_Histories_Mutation_Response>;
  citizen_histories_on_conflict: Citizen_Histories_On_Conflict;
  citizen_histories_order_by: Citizen_Histories_Order_By;
  citizen_histories_pk_columns_input: Citizen_Histories_Pk_Columns_Input;
  citizen_histories_select_column: Citizen_Histories_Select_Column;
  citizen_histories_set_input: Citizen_Histories_Set_Input;
  citizen_histories_stream_cursor_input: Citizen_Histories_Stream_Cursor_Input;
  citizen_histories_stream_cursor_value_input: Citizen_Histories_Stream_Cursor_Value_Input;
  citizen_histories_update_column: Citizen_Histories_Update_Column;
  citizen_histories_updates: Citizen_Histories_Updates;
  citizens: ResolverTypeWrapper<Citizens>;
  citizens_aggregate: ResolverTypeWrapper<Citizens_Aggregate>;
  citizens_aggregate_bool_exp: Citizens_Aggregate_Bool_Exp;
  citizens_aggregate_bool_exp_count: Citizens_Aggregate_Bool_Exp_Count;
  citizens_aggregate_fields: ResolverTypeWrapper<Citizens_Aggregate_Fields>;
  citizens_aggregate_order_by: Citizens_Aggregate_Order_By;
  citizens_append_input: Citizens_Append_Input;
  citizens_arr_rel_insert_input: Citizens_Arr_Rel_Insert_Input;
  citizens_avg_fields: ResolverTypeWrapper<Citizens_Avg_Fields>;
  citizens_avg_order_by: Citizens_Avg_Order_By;
  citizens_bool_exp: Citizens_Bool_Exp;
  citizens_constraint: Citizens_Constraint;
  citizens_delete_at_path_input: Citizens_Delete_At_Path_Input;
  citizens_delete_elem_input: Citizens_Delete_Elem_Input;
  citizens_delete_key_input: Citizens_Delete_Key_Input;
  citizens_inc_input: Citizens_Inc_Input;
  citizens_insert_input: Citizens_Insert_Input;
  citizens_max_fields: ResolverTypeWrapper<Citizens_Max_Fields>;
  citizens_max_order_by: Citizens_Max_Order_By;
  citizens_min_fields: ResolverTypeWrapper<Citizens_Min_Fields>;
  citizens_min_order_by: Citizens_Min_Order_By;
  citizens_mutation_response: ResolverTypeWrapper<Citizens_Mutation_Response>;
  citizens_obj_rel_insert_input: Citizens_Obj_Rel_Insert_Input;
  citizens_on_conflict: Citizens_On_Conflict;
  citizens_order_by: Citizens_Order_By;
  citizens_pk_columns_input: Citizens_Pk_Columns_Input;
  citizens_prepend_input: Citizens_Prepend_Input;
  citizens_select_column: Citizens_Select_Column;
  citizens_set_input: Citizens_Set_Input;
  citizens_stddev_fields: ResolverTypeWrapper<Citizens_Stddev_Fields>;
  citizens_stddev_order_by: Citizens_Stddev_Order_By;
  citizens_stddev_pop_fields: ResolverTypeWrapper<Citizens_Stddev_Pop_Fields>;
  citizens_stddev_pop_order_by: Citizens_Stddev_Pop_Order_By;
  citizens_stddev_samp_fields: ResolverTypeWrapper<Citizens_Stddev_Samp_Fields>;
  citizens_stddev_samp_order_by: Citizens_Stddev_Samp_Order_By;
  citizens_stream_cursor_input: Citizens_Stream_Cursor_Input;
  citizens_stream_cursor_value_input: Citizens_Stream_Cursor_Value_Input;
  citizens_sum_fields: ResolverTypeWrapper<Citizens_Sum_Fields>;
  citizens_sum_order_by: Citizens_Sum_Order_By;
  citizens_update_column: Citizens_Update_Column;
  citizens_updates: Citizens_Updates;
  citizens_var_pop_fields: ResolverTypeWrapper<Citizens_Var_Pop_Fields>;
  citizens_var_pop_order_by: Citizens_Var_Pop_Order_By;
  citizens_var_samp_fields: ResolverTypeWrapper<Citizens_Var_Samp_Fields>;
  citizens_var_samp_order_by: Citizens_Var_Samp_Order_By;
  citizens_variance_fields: ResolverTypeWrapper<Citizens_Variance_Fields>;
  citizens_variance_order_by: Citizens_Variance_Order_By;
  cursor_ordering: Cursor_Ordering;
  date: ResolverTypeWrapper<Scalars['date']['output']>;
  date_comparison_exp: Date_Comparison_Exp;
  jsonb: ResolverTypeWrapper<Scalars['jsonb']['output']>;
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  law_categories: ResolverTypeWrapper<Law_Categories>;
  law_categories_aggregate: ResolverTypeWrapper<Law_Categories_Aggregate>;
  law_categories_aggregate_fields: ResolverTypeWrapper<Law_Categories_Aggregate_Fields>;
  law_categories_bool_exp: Law_Categories_Bool_Exp;
  law_categories_constraint: Law_Categories_Constraint;
  law_categories_insert_input: Law_Categories_Insert_Input;
  law_categories_max_fields: ResolverTypeWrapper<Law_Categories_Max_Fields>;
  law_categories_min_fields: ResolverTypeWrapper<Law_Categories_Min_Fields>;
  law_categories_mutation_response: ResolverTypeWrapper<Law_Categories_Mutation_Response>;
  law_categories_obj_rel_insert_input: Law_Categories_Obj_Rel_Insert_Input;
  law_categories_on_conflict: Law_Categories_On_Conflict;
  law_categories_order_by: Law_Categories_Order_By;
  law_categories_pk_columns_input: Law_Categories_Pk_Columns_Input;
  law_categories_select_column: Law_Categories_Select_Column;
  law_categories_set_input: Law_Categories_Set_Input;
  law_categories_stream_cursor_input: Law_Categories_Stream_Cursor_Input;
  law_categories_stream_cursor_value_input: Law_Categories_Stream_Cursor_Value_Input;
  law_categories_update_column: Law_Categories_Update_Column;
  law_categories_updates: Law_Categories_Updates;
  law_revision_columns: ResolverTypeWrapper<Law_Revision_Columns>;
  law_revision_columns_aggregate: ResolverTypeWrapper<Law_Revision_Columns_Aggregate>;
  law_revision_columns_aggregate_bool_exp: Law_Revision_Columns_Aggregate_Bool_Exp;
  law_revision_columns_aggregate_bool_exp_count: Law_Revision_Columns_Aggregate_Bool_Exp_Count;
  law_revision_columns_aggregate_fields: ResolverTypeWrapper<Law_Revision_Columns_Aggregate_Fields>;
  law_revision_columns_aggregate_order_by: Law_Revision_Columns_Aggregate_Order_By;
  law_revision_columns_arr_rel_insert_input: Law_Revision_Columns_Arr_Rel_Insert_Input;
  law_revision_columns_bool_exp: Law_Revision_Columns_Bool_Exp;
  law_revision_columns_constraint: Law_Revision_Columns_Constraint;
  law_revision_columns_insert_input: Law_Revision_Columns_Insert_Input;
  law_revision_columns_max_fields: ResolverTypeWrapper<Law_Revision_Columns_Max_Fields>;
  law_revision_columns_max_order_by: Law_Revision_Columns_Max_Order_By;
  law_revision_columns_min_fields: ResolverTypeWrapper<Law_Revision_Columns_Min_Fields>;
  law_revision_columns_min_order_by: Law_Revision_Columns_Min_Order_By;
  law_revision_columns_mutation_response: ResolverTypeWrapper<Law_Revision_Columns_Mutation_Response>;
  law_revision_columns_on_conflict: Law_Revision_Columns_On_Conflict;
  law_revision_columns_order_by: Law_Revision_Columns_Order_By;
  law_revision_columns_pk_columns_input: Law_Revision_Columns_Pk_Columns_Input;
  law_revision_columns_select_column: Law_Revision_Columns_Select_Column;
  law_revision_columns_set_input: Law_Revision_Columns_Set_Input;
  law_revision_columns_stream_cursor_input: Law_Revision_Columns_Stream_Cursor_Input;
  law_revision_columns_stream_cursor_value_input: Law_Revision_Columns_Stream_Cursor_Value_Input;
  law_revision_columns_update_column: Law_Revision_Columns_Update_Column;
  law_revision_columns_updates: Law_Revision_Columns_Updates;
  law_revisions: ResolverTypeWrapper<Law_Revisions>;
  law_revisions_aggregate: ResolverTypeWrapper<Law_Revisions_Aggregate>;
  law_revisions_aggregate_bool_exp: Law_Revisions_Aggregate_Bool_Exp;
  law_revisions_aggregate_bool_exp_count: Law_Revisions_Aggregate_Bool_Exp_Count;
  law_revisions_aggregate_fields: ResolverTypeWrapper<Law_Revisions_Aggregate_Fields>;
  law_revisions_aggregate_order_by: Law_Revisions_Aggregate_Order_By;
  law_revisions_append_input: Law_Revisions_Append_Input;
  law_revisions_arr_rel_insert_input: Law_Revisions_Arr_Rel_Insert_Input;
  law_revisions_bool_exp: Law_Revisions_Bool_Exp;
  law_revisions_constraint: Law_Revisions_Constraint;
  law_revisions_delete_at_path_input: Law_Revisions_Delete_At_Path_Input;
  law_revisions_delete_elem_input: Law_Revisions_Delete_Elem_Input;
  law_revisions_delete_key_input: Law_Revisions_Delete_Key_Input;
  law_revisions_insert_input: Law_Revisions_Insert_Input;
  law_revisions_max_fields: ResolverTypeWrapper<Law_Revisions_Max_Fields>;
  law_revisions_max_order_by: Law_Revisions_Max_Order_By;
  law_revisions_min_fields: ResolverTypeWrapper<Law_Revisions_Min_Fields>;
  law_revisions_min_order_by: Law_Revisions_Min_Order_By;
  law_revisions_mutation_response: ResolverTypeWrapper<Law_Revisions_Mutation_Response>;
  law_revisions_obj_rel_insert_input: Law_Revisions_Obj_Rel_Insert_Input;
  law_revisions_on_conflict: Law_Revisions_On_Conflict;
  law_revisions_order_by: Law_Revisions_Order_By;
  law_revisions_pk_columns_input: Law_Revisions_Pk_Columns_Input;
  law_revisions_prepend_input: Law_Revisions_Prepend_Input;
  law_revisions_select_column: Law_Revisions_Select_Column;
  law_revisions_set_input: Law_Revisions_Set_Input;
  law_revisions_stream_cursor_input: Law_Revisions_Stream_Cursor_Input;
  law_revisions_stream_cursor_value_input: Law_Revisions_Stream_Cursor_Value_Input;
  law_revisions_update_column: Law_Revisions_Update_Column;
  law_revisions_updates: Law_Revisions_Updates;
  law_statuses: ResolverTypeWrapper<Law_Statuses>;
  law_statuses_aggregate: ResolverTypeWrapper<Law_Statuses_Aggregate>;
  law_statuses_aggregate_fields: ResolverTypeWrapper<Law_Statuses_Aggregate_Fields>;
  law_statuses_bool_exp: Law_Statuses_Bool_Exp;
  law_statuses_constraint: Law_Statuses_Constraint;
  law_statuses_insert_input: Law_Statuses_Insert_Input;
  law_statuses_max_fields: ResolverTypeWrapper<Law_Statuses_Max_Fields>;
  law_statuses_min_fields: ResolverTypeWrapper<Law_Statuses_Min_Fields>;
  law_statuses_mutation_response: ResolverTypeWrapper<Law_Statuses_Mutation_Response>;
  law_statuses_obj_rel_insert_input: Law_Statuses_Obj_Rel_Insert_Input;
  law_statuses_on_conflict: Law_Statuses_On_Conflict;
  law_statuses_order_by: Law_Statuses_Order_By;
  law_statuses_pk_columns_input: Law_Statuses_Pk_Columns_Input;
  law_statuses_select_column: Law_Statuses_Select_Column;
  law_statuses_set_input: Law_Statuses_Set_Input;
  law_statuses_stream_cursor_input: Law_Statuses_Stream_Cursor_Input;
  law_statuses_stream_cursor_value_input: Law_Statuses_Stream_Cursor_Value_Input;
  law_statuses_update_column: Law_Statuses_Update_Column;
  law_statuses_updates: Law_Statuses_Updates;
  law_summaries: ResolverTypeWrapper<Law_Summaries>;
  law_summaries_aggregate: ResolverTypeWrapper<Law_Summaries_Aggregate>;
  law_summaries_aggregate_bool_exp: Law_Summaries_Aggregate_Bool_Exp;
  law_summaries_aggregate_bool_exp_count: Law_Summaries_Aggregate_Bool_Exp_Count;
  law_summaries_aggregate_fields: ResolverTypeWrapper<Law_Summaries_Aggregate_Fields>;
  law_summaries_aggregate_order_by: Law_Summaries_Aggregate_Order_By;
  law_summaries_arr_rel_insert_input: Law_Summaries_Arr_Rel_Insert_Input;
  law_summaries_bool_exp: Law_Summaries_Bool_Exp;
  law_summaries_constraint: Law_Summaries_Constraint;
  law_summaries_insert_input: Law_Summaries_Insert_Input;
  law_summaries_max_fields: ResolverTypeWrapper<Law_Summaries_Max_Fields>;
  law_summaries_max_order_by: Law_Summaries_Max_Order_By;
  law_summaries_min_fields: ResolverTypeWrapper<Law_Summaries_Min_Fields>;
  law_summaries_min_order_by: Law_Summaries_Min_Order_By;
  law_summaries_mutation_response: ResolverTypeWrapper<Law_Summaries_Mutation_Response>;
  law_summaries_on_conflict: Law_Summaries_On_Conflict;
  law_summaries_order_by: Law_Summaries_Order_By;
  law_summaries_pk_columns_input: Law_Summaries_Pk_Columns_Input;
  law_summaries_select_column: Law_Summaries_Select_Column;
  law_summaries_set_input: Law_Summaries_Set_Input;
  law_summaries_stream_cursor_input: Law_Summaries_Stream_Cursor_Input;
  law_summaries_stream_cursor_value_input: Law_Summaries_Stream_Cursor_Value_Input;
  law_summaries_update_column: Law_Summaries_Update_Column;
  law_summaries_updates: Law_Summaries_Updates;
  law_types: ResolverTypeWrapper<Law_Types>;
  law_types_aggregate: ResolverTypeWrapper<Law_Types_Aggregate>;
  law_types_aggregate_fields: ResolverTypeWrapper<Law_Types_Aggregate_Fields>;
  law_types_bool_exp: Law_Types_Bool_Exp;
  law_types_constraint: Law_Types_Constraint;
  law_types_insert_input: Law_Types_Insert_Input;
  law_types_max_fields: ResolverTypeWrapper<Law_Types_Max_Fields>;
  law_types_min_fields: ResolverTypeWrapper<Law_Types_Min_Fields>;
  law_types_mutation_response: ResolverTypeWrapper<Law_Types_Mutation_Response>;
  law_types_obj_rel_insert_input: Law_Types_Obj_Rel_Insert_Input;
  law_types_on_conflict: Law_Types_On_Conflict;
  law_types_order_by: Law_Types_Order_By;
  law_types_pk_columns_input: Law_Types_Pk_Columns_Input;
  law_types_select_column: Law_Types_Select_Column;
  law_types_set_input: Law_Types_Set_Input;
  law_types_stream_cursor_input: Law_Types_Stream_Cursor_Input;
  law_types_stream_cursor_value_input: Law_Types_Stream_Cursor_Value_Input;
  law_types_update_column: Law_Types_Update_Column;
  law_types_updates: Law_Types_Updates;
  law_views: ResolverTypeWrapper<Law_Views>;
  law_views_aggregate: ResolverTypeWrapper<Law_Views_Aggregate>;
  law_views_aggregate_bool_exp: Law_Views_Aggregate_Bool_Exp;
  law_views_aggregate_bool_exp_count: Law_Views_Aggregate_Bool_Exp_Count;
  law_views_aggregate_fields: ResolverTypeWrapper<Law_Views_Aggregate_Fields>;
  law_views_aggregate_order_by: Law_Views_Aggregate_Order_By;
  law_views_arr_rel_insert_input: Law_Views_Arr_Rel_Insert_Input;
  law_views_bool_exp: Law_Views_Bool_Exp;
  law_views_constraint: Law_Views_Constraint;
  law_views_insert_input: Law_Views_Insert_Input;
  law_views_max_fields: ResolverTypeWrapper<Law_Views_Max_Fields>;
  law_views_max_order_by: Law_Views_Max_Order_By;
  law_views_min_fields: ResolverTypeWrapper<Law_Views_Min_Fields>;
  law_views_min_order_by: Law_Views_Min_Order_By;
  law_views_mutation_response: ResolverTypeWrapper<Law_Views_Mutation_Response>;
  law_views_on_conflict: Law_Views_On_Conflict;
  law_views_order_by: Law_Views_Order_By;
  law_views_pk_columns_input: Law_Views_Pk_Columns_Input;
  law_views_select_column: Law_Views_Select_Column;
  law_views_set_input: Law_Views_Set_Input;
  law_views_stream_cursor_input: Law_Views_Stream_Cursor_Input;
  law_views_stream_cursor_value_input: Law_Views_Stream_Cursor_Value_Input;
  law_views_update_column: Law_Views_Update_Column;
  law_views_updates: Law_Views_Updates;
  laws: ResolverTypeWrapper<Laws>;
  laws_aggregate: ResolverTypeWrapper<Laws_Aggregate>;
  laws_aggregate_bool_exp: Laws_Aggregate_Bool_Exp;
  laws_aggregate_bool_exp_count: Laws_Aggregate_Bool_Exp_Count;
  laws_aggregate_fields: ResolverTypeWrapper<Laws_Aggregate_Fields>;
  laws_aggregate_order_by: Laws_Aggregate_Order_By;
  laws_arr_rel_insert_input: Laws_Arr_Rel_Insert_Input;
  laws_bool_exp: Laws_Bool_Exp;
  laws_constraint: Laws_Constraint;
  laws_insert_input: Laws_Insert_Input;
  laws_max_fields: ResolverTypeWrapper<Laws_Max_Fields>;
  laws_max_order_by: Laws_Max_Order_By;
  laws_min_fields: ResolverTypeWrapper<Laws_Min_Fields>;
  laws_min_order_by: Laws_Min_Order_By;
  laws_mutation_response: ResolverTypeWrapper<Laws_Mutation_Response>;
  laws_obj_rel_insert_input: Laws_Obj_Rel_Insert_Input;
  laws_on_conflict: Laws_On_Conflict;
  laws_order_by: Laws_Order_By;
  laws_pk_columns_input: Laws_Pk_Columns_Input;
  laws_select_column: Laws_Select_Column;
  laws_set_input: Laws_Set_Input;
  laws_stream_cursor_input: Laws_Stream_Cursor_Input;
  laws_stream_cursor_value_input: Laws_Stream_Cursor_Value_Input;
  laws_update_column: Laws_Update_Column;
  laws_updates: Laws_Updates;
  mutation_root: ResolverTypeWrapper<{}>;
  numeric: ResolverTypeWrapper<Scalars['numeric']['output']>;
  numeric_comparison_exp: Numeric_Comparison_Exp;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  resource_editable_users: ResolverTypeWrapper<Resource_Editable_Users>;
  resource_editable_users_aggregate: ResolverTypeWrapper<Resource_Editable_Users_Aggregate>;
  resource_editable_users_aggregate_bool_exp: Resource_Editable_Users_Aggregate_Bool_Exp;
  resource_editable_users_aggregate_bool_exp_count: Resource_Editable_Users_Aggregate_Bool_Exp_Count;
  resource_editable_users_aggregate_fields: ResolverTypeWrapper<Resource_Editable_Users_Aggregate_Fields>;
  resource_editable_users_aggregate_order_by: Resource_Editable_Users_Aggregate_Order_By;
  resource_editable_users_arr_rel_insert_input: Resource_Editable_Users_Arr_Rel_Insert_Input;
  resource_editable_users_bool_exp: Resource_Editable_Users_Bool_Exp;
  resource_editable_users_constraint: Resource_Editable_Users_Constraint;
  resource_editable_users_insert_input: Resource_Editable_Users_Insert_Input;
  resource_editable_users_max_fields: ResolverTypeWrapper<Resource_Editable_Users_Max_Fields>;
  resource_editable_users_max_order_by: Resource_Editable_Users_Max_Order_By;
  resource_editable_users_min_fields: ResolverTypeWrapper<Resource_Editable_Users_Min_Fields>;
  resource_editable_users_min_order_by: Resource_Editable_Users_Min_Order_By;
  resource_editable_users_mutation_response: ResolverTypeWrapper<Resource_Editable_Users_Mutation_Response>;
  resource_editable_users_on_conflict: Resource_Editable_Users_On_Conflict;
  resource_editable_users_order_by: Resource_Editable_Users_Order_By;
  resource_editable_users_pk_columns_input: Resource_Editable_Users_Pk_Columns_Input;
  resource_editable_users_select_column: Resource_Editable_Users_Select_Column;
  resource_editable_users_set_input: Resource_Editable_Users_Set_Input;
  resource_editable_users_stream_cursor_input: Resource_Editable_Users_Stream_Cursor_Input;
  resource_editable_users_stream_cursor_value_input: Resource_Editable_Users_Stream_Cursor_Value_Input;
  resource_editable_users_update_column: Resource_Editable_Users_Update_Column;
  resource_editable_users_updates: Resource_Editable_Users_Updates;
  resource_histories: ResolverTypeWrapper<Resource_Histories>;
  resource_histories_aggregate: ResolverTypeWrapper<Resource_Histories_Aggregate>;
  resource_histories_aggregate_bool_exp: Resource_Histories_Aggregate_Bool_Exp;
  resource_histories_aggregate_bool_exp_count: Resource_Histories_Aggregate_Bool_Exp_Count;
  resource_histories_aggregate_fields: ResolverTypeWrapper<Resource_Histories_Aggregate_Fields>;
  resource_histories_aggregate_order_by: Resource_Histories_Aggregate_Order_By;
  resource_histories_arr_rel_insert_input: Resource_Histories_Arr_Rel_Insert_Input;
  resource_histories_bool_exp: Resource_Histories_Bool_Exp;
  resource_histories_constraint: Resource_Histories_Constraint;
  resource_histories_insert_input: Resource_Histories_Insert_Input;
  resource_histories_max_fields: ResolverTypeWrapper<Resource_Histories_Max_Fields>;
  resource_histories_max_order_by: Resource_Histories_Max_Order_By;
  resource_histories_min_fields: ResolverTypeWrapper<Resource_Histories_Min_Fields>;
  resource_histories_min_order_by: Resource_Histories_Min_Order_By;
  resource_histories_mutation_response: ResolverTypeWrapper<Resource_Histories_Mutation_Response>;
  resource_histories_on_conflict: Resource_Histories_On_Conflict;
  resource_histories_order_by: Resource_Histories_Order_By;
  resource_histories_pk_columns_input: Resource_Histories_Pk_Columns_Input;
  resource_histories_select_column: Resource_Histories_Select_Column;
  resource_histories_set_input: Resource_Histories_Set_Input;
  resource_histories_stream_cursor_input: Resource_Histories_Stream_Cursor_Input;
  resource_histories_stream_cursor_value_input: Resource_Histories_Stream_Cursor_Value_Input;
  resource_histories_update_column: Resource_Histories_Update_Column;
  resource_histories_updates: Resource_Histories_Updates;
  resources: ResolverTypeWrapper<Resources>;
  resources_aggregate: ResolverTypeWrapper<Resources_Aggregate>;
  resources_aggregate_fields: ResolverTypeWrapper<Resources_Aggregate_Fields>;
  resources_bool_exp: Resources_Bool_Exp;
  resources_constraint: Resources_Constraint;
  resources_insert_input: Resources_Insert_Input;
  resources_max_fields: ResolverTypeWrapper<Resources_Max_Fields>;
  resources_min_fields: ResolverTypeWrapper<Resources_Min_Fields>;
  resources_mutation_response: ResolverTypeWrapper<Resources_Mutation_Response>;
  resources_obj_rel_insert_input: Resources_Obj_Rel_Insert_Input;
  resources_on_conflict: Resources_On_Conflict;
  resources_order_by: Resources_Order_By;
  resources_pk_columns_input: Resources_Pk_Columns_Input;
  resources_select_column: Resources_Select_Column;
  resources_set_input: Resources_Set_Input;
  resources_stream_cursor_input: Resources_Stream_Cursor_Input;
  resources_stream_cursor_value_input: Resources_Stream_Cursor_Value_Input;
  resources_update_column: Resources_Update_Column;
  resources_updates: Resources_Updates;
  species: ResolverTypeWrapper<Species>;
  species_aggregate: ResolverTypeWrapper<Species_Aggregate>;
  species_aggregate_bool_exp: Species_Aggregate_Bool_Exp;
  species_aggregate_bool_exp_count: Species_Aggregate_Bool_Exp_Count;
  species_aggregate_fields: ResolverTypeWrapper<Species_Aggregate_Fields>;
  species_aggregate_order_by: Species_Aggregate_Order_By;
  species_arr_rel_insert_input: Species_Arr_Rel_Insert_Input;
  species_assets: ResolverTypeWrapper<Species_Assets>;
  species_assets_aggregate: ResolverTypeWrapper<Species_Assets_Aggregate>;
  species_assets_aggregate_bool_exp: Species_Assets_Aggregate_Bool_Exp;
  species_assets_aggregate_bool_exp_count: Species_Assets_Aggregate_Bool_Exp_Count;
  species_assets_aggregate_fields: ResolverTypeWrapper<Species_Assets_Aggregate_Fields>;
  species_assets_aggregate_order_by: Species_Assets_Aggregate_Order_By;
  species_assets_arr_rel_insert_input: Species_Assets_Arr_Rel_Insert_Input;
  species_assets_bool_exp: Species_Assets_Bool_Exp;
  species_assets_constraint: Species_Assets_Constraint;
  species_assets_insert_input: Species_Assets_Insert_Input;
  species_assets_max_fields: ResolverTypeWrapper<Species_Assets_Max_Fields>;
  species_assets_max_order_by: Species_Assets_Max_Order_By;
  species_assets_min_fields: ResolverTypeWrapper<Species_Assets_Min_Fields>;
  species_assets_min_order_by: Species_Assets_Min_Order_By;
  species_assets_mutation_response: ResolverTypeWrapper<Species_Assets_Mutation_Response>;
  species_assets_obj_rel_insert_input: Species_Assets_Obj_Rel_Insert_Input;
  species_assets_on_conflict: Species_Assets_On_Conflict;
  species_assets_order_by: Species_Assets_Order_By;
  species_assets_pk_columns_input: Species_Assets_Pk_Columns_Input;
  species_assets_select_column: Species_Assets_Select_Column;
  species_assets_set_input: Species_Assets_Set_Input;
  species_assets_stream_cursor_input: Species_Assets_Stream_Cursor_Input;
  species_assets_stream_cursor_value_input: Species_Assets_Stream_Cursor_Value_Input;
  species_assets_update_column: Species_Assets_Update_Column;
  species_assets_updates: Species_Assets_Updates;
  species_bool_exp: Species_Bool_Exp;
  species_constraint: Species_Constraint;
  species_insert_input: Species_Insert_Input;
  species_max_fields: ResolverTypeWrapper<Species_Max_Fields>;
  species_max_order_by: Species_Max_Order_By;
  species_min_fields: ResolverTypeWrapper<Species_Min_Fields>;
  species_min_order_by: Species_Min_Order_By;
  species_mutation_response: ResolverTypeWrapper<Species_Mutation_Response>;
  species_obj_rel_insert_input: Species_Obj_Rel_Insert_Input;
  species_on_conflict: Species_On_Conflict;
  species_order_by: Species_Order_By;
  species_percentage_view_with_world_id: ResolverTypeWrapper<Species_Percentage_View_With_World_Id>;
  species_percentage_view_with_world_id_aggregate: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Aggregate>;
  species_percentage_view_with_world_id_aggregate_bool_exp: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp;
  species_percentage_view_with_world_id_aggregate_bool_exp_count: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count;
  species_percentage_view_with_world_id_aggregate_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Aggregate_Fields>;
  species_percentage_view_with_world_id_aggregate_order_by: Species_Percentage_View_With_World_Id_Aggregate_Order_By;
  species_percentage_view_with_world_id_arr_rel_insert_input: Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input;
  species_percentage_view_with_world_id_avg_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Avg_Fields>;
  species_percentage_view_with_world_id_avg_order_by: Species_Percentage_View_With_World_Id_Avg_Order_By;
  species_percentage_view_with_world_id_bool_exp: Species_Percentage_View_With_World_Id_Bool_Exp;
  species_percentage_view_with_world_id_insert_input: Species_Percentage_View_With_World_Id_Insert_Input;
  species_percentage_view_with_world_id_max_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Max_Fields>;
  species_percentage_view_with_world_id_max_order_by: Species_Percentage_View_With_World_Id_Max_Order_By;
  species_percentage_view_with_world_id_min_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Min_Fields>;
  species_percentage_view_with_world_id_min_order_by: Species_Percentage_View_With_World_Id_Min_Order_By;
  species_percentage_view_with_world_id_order_by: Species_Percentage_View_With_World_Id_Order_By;
  species_percentage_view_with_world_id_select_column: Species_Percentage_View_With_World_Id_Select_Column;
  species_percentage_view_with_world_id_stddev_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Stddev_Fields>;
  species_percentage_view_with_world_id_stddev_order_by: Species_Percentage_View_With_World_Id_Stddev_Order_By;
  species_percentage_view_with_world_id_stddev_pop_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Stddev_Pop_Fields>;
  species_percentage_view_with_world_id_stddev_pop_order_by: Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By;
  species_percentage_view_with_world_id_stddev_samp_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Stddev_Samp_Fields>;
  species_percentage_view_with_world_id_stddev_samp_order_by: Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By;
  species_percentage_view_with_world_id_stream_cursor_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Input;
  species_percentage_view_with_world_id_stream_cursor_value_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input;
  species_percentage_view_with_world_id_sum_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Sum_Fields>;
  species_percentage_view_with_world_id_sum_order_by: Species_Percentage_View_With_World_Id_Sum_Order_By;
  species_percentage_view_with_world_id_var_pop_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Var_Pop_Fields>;
  species_percentage_view_with_world_id_var_pop_order_by: Species_Percentage_View_With_World_Id_Var_Pop_Order_By;
  species_percentage_view_with_world_id_var_samp_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Var_Samp_Fields>;
  species_percentage_view_with_world_id_var_samp_order_by: Species_Percentage_View_With_World_Id_Var_Samp_Order_By;
  species_percentage_view_with_world_id_variance_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Variance_Fields>;
  species_percentage_view_with_world_id_variance_order_by: Species_Percentage_View_With_World_Id_Variance_Order_By;
  species_pk_columns_input: Species_Pk_Columns_Input;
  species_select_column: Species_Select_Column;
  species_set_input: Species_Set_Input;
  species_stream_cursor_input: Species_Stream_Cursor_Input;
  species_stream_cursor_value_input: Species_Stream_Cursor_Value_Input;
  species_update_column: Species_Update_Column;
  species_updates: Species_Updates;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']['output']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_avg_fields: ResolverTypeWrapper<Users_Avg_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_inc_input: Users_Inc_Input;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_stddev_fields: ResolverTypeWrapper<Users_Stddev_Fields>;
  users_stddev_pop_fields: ResolverTypeWrapper<Users_Stddev_Pop_Fields>;
  users_stddev_samp_fields: ResolverTypeWrapper<Users_Stddev_Samp_Fields>;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_sum_fields: ResolverTypeWrapper<Users_Sum_Fields>;
  users_update_column: Users_Update_Column;
  users_updates: Users_Updates;
  users_var_pop_fields: ResolverTypeWrapper<Users_Var_Pop_Fields>;
  users_var_samp_fields: ResolverTypeWrapper<Users_Var_Samp_Fields>;
  users_variance_fields: ResolverTypeWrapper<Users_Variance_Fields>;
  uuid: ResolverTypeWrapper<Scalars['uuid']['output']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  world_arguments: ResolverTypeWrapper<World_Arguments>;
  world_arguments_aggregate: ResolverTypeWrapper<World_Arguments_Aggregate>;
  world_arguments_aggregate_bool_exp: World_Arguments_Aggregate_Bool_Exp;
  world_arguments_aggregate_bool_exp_count: World_Arguments_Aggregate_Bool_Exp_Count;
  world_arguments_aggregate_fields: ResolverTypeWrapper<World_Arguments_Aggregate_Fields>;
  world_arguments_aggregate_order_by: World_Arguments_Aggregate_Order_By;
  world_arguments_arr_rel_insert_input: World_Arguments_Arr_Rel_Insert_Input;
  world_arguments_bool_exp: World_Arguments_Bool_Exp;
  world_arguments_constraint: World_Arguments_Constraint;
  world_arguments_insert_input: World_Arguments_Insert_Input;
  world_arguments_max_fields: ResolverTypeWrapper<World_Arguments_Max_Fields>;
  world_arguments_max_order_by: World_Arguments_Max_Order_By;
  world_arguments_min_fields: ResolverTypeWrapper<World_Arguments_Min_Fields>;
  world_arguments_min_order_by: World_Arguments_Min_Order_By;
  world_arguments_mutation_response: ResolverTypeWrapper<World_Arguments_Mutation_Response>;
  world_arguments_on_conflict: World_Arguments_On_Conflict;
  world_arguments_order_by: World_Arguments_Order_By;
  world_arguments_pk_columns_input: World_Arguments_Pk_Columns_Input;
  world_arguments_select_column: World_Arguments_Select_Column;
  world_arguments_set_input: World_Arguments_Set_Input;
  world_arguments_stream_cursor_input: World_Arguments_Stream_Cursor_Input;
  world_arguments_stream_cursor_value_input: World_Arguments_Stream_Cursor_Value_Input;
  world_arguments_update_column: World_Arguments_Update_Column;
  world_arguments_updates: World_Arguments_Updates;
  world_categories: ResolverTypeWrapper<World_Categories>;
  world_categories_aggregate: ResolverTypeWrapper<World_Categories_Aggregate>;
  world_categories_aggregate_bool_exp: World_Categories_Aggregate_Bool_Exp;
  world_categories_aggregate_bool_exp_count: World_Categories_Aggregate_Bool_Exp_Count;
  world_categories_aggregate_fields: ResolverTypeWrapper<World_Categories_Aggregate_Fields>;
  world_categories_aggregate_order_by: World_Categories_Aggregate_Order_By;
  world_categories_arr_rel_insert_input: World_Categories_Arr_Rel_Insert_Input;
  world_categories_bool_exp: World_Categories_Bool_Exp;
  world_categories_constraint: World_Categories_Constraint;
  world_categories_insert_input: World_Categories_Insert_Input;
  world_categories_max_fields: ResolverTypeWrapper<World_Categories_Max_Fields>;
  world_categories_max_order_by: World_Categories_Max_Order_By;
  world_categories_min_fields: ResolverTypeWrapper<World_Categories_Min_Fields>;
  world_categories_min_order_by: World_Categories_Min_Order_By;
  world_categories_mutation_response: ResolverTypeWrapper<World_Categories_Mutation_Response>;
  world_categories_on_conflict: World_Categories_On_Conflict;
  world_categories_order_by: World_Categories_Order_By;
  world_categories_pk_columns_input: World_Categories_Pk_Columns_Input;
  world_categories_select_column: World_Categories_Select_Column;
  world_categories_set_input: World_Categories_Set_Input;
  world_categories_stream_cursor_input: World_Categories_Stream_Cursor_Input;
  world_categories_stream_cursor_value_input: World_Categories_Stream_Cursor_Value_Input;
  world_categories_update_column: World_Categories_Update_Column;
  world_categories_updates: World_Categories_Updates;
  world_chat_boxes: ResolverTypeWrapper<World_Chat_Boxes>;
  world_chat_boxes_aggregate: ResolverTypeWrapper<World_Chat_Boxes_Aggregate>;
  world_chat_boxes_aggregate_bool_exp: World_Chat_Boxes_Aggregate_Bool_Exp;
  world_chat_boxes_aggregate_bool_exp_count: World_Chat_Boxes_Aggregate_Bool_Exp_Count;
  world_chat_boxes_aggregate_fields: ResolverTypeWrapper<World_Chat_Boxes_Aggregate_Fields>;
  world_chat_boxes_aggregate_order_by: World_Chat_Boxes_Aggregate_Order_By;
  world_chat_boxes_arr_rel_insert_input: World_Chat_Boxes_Arr_Rel_Insert_Input;
  world_chat_boxes_avg_fields: ResolverTypeWrapper<World_Chat_Boxes_Avg_Fields>;
  world_chat_boxes_avg_order_by: World_Chat_Boxes_Avg_Order_By;
  world_chat_boxes_bool_exp: World_Chat_Boxes_Bool_Exp;
  world_chat_boxes_constraint: World_Chat_Boxes_Constraint;
  world_chat_boxes_inc_input: World_Chat_Boxes_Inc_Input;
  world_chat_boxes_insert_input: World_Chat_Boxes_Insert_Input;
  world_chat_boxes_max_fields: ResolverTypeWrapper<World_Chat_Boxes_Max_Fields>;
  world_chat_boxes_max_order_by: World_Chat_Boxes_Max_Order_By;
  world_chat_boxes_min_fields: ResolverTypeWrapper<World_Chat_Boxes_Min_Fields>;
  world_chat_boxes_min_order_by: World_Chat_Boxes_Min_Order_By;
  world_chat_boxes_mutation_response: ResolverTypeWrapper<World_Chat_Boxes_Mutation_Response>;
  world_chat_boxes_obj_rel_insert_input: World_Chat_Boxes_Obj_Rel_Insert_Input;
  world_chat_boxes_on_conflict: World_Chat_Boxes_On_Conflict;
  world_chat_boxes_order_by: World_Chat_Boxes_Order_By;
  world_chat_boxes_pk_columns_input: World_Chat_Boxes_Pk_Columns_Input;
  world_chat_boxes_select_column: World_Chat_Boxes_Select_Column;
  world_chat_boxes_set_input: World_Chat_Boxes_Set_Input;
  world_chat_boxes_stddev_fields: ResolverTypeWrapper<World_Chat_Boxes_Stddev_Fields>;
  world_chat_boxes_stddev_order_by: World_Chat_Boxes_Stddev_Order_By;
  world_chat_boxes_stddev_pop_fields: ResolverTypeWrapper<World_Chat_Boxes_Stddev_Pop_Fields>;
  world_chat_boxes_stddev_pop_order_by: World_Chat_Boxes_Stddev_Pop_Order_By;
  world_chat_boxes_stddev_samp_fields: ResolverTypeWrapper<World_Chat_Boxes_Stddev_Samp_Fields>;
  world_chat_boxes_stddev_samp_order_by: World_Chat_Boxes_Stddev_Samp_Order_By;
  world_chat_boxes_stream_cursor_input: World_Chat_Boxes_Stream_Cursor_Input;
  world_chat_boxes_stream_cursor_value_input: World_Chat_Boxes_Stream_Cursor_Value_Input;
  world_chat_boxes_sum_fields: ResolverTypeWrapper<World_Chat_Boxes_Sum_Fields>;
  world_chat_boxes_sum_order_by: World_Chat_Boxes_Sum_Order_By;
  world_chat_boxes_update_column: World_Chat_Boxes_Update_Column;
  world_chat_boxes_updates: World_Chat_Boxes_Updates;
  world_chat_boxes_var_pop_fields: ResolverTypeWrapper<World_Chat_Boxes_Var_Pop_Fields>;
  world_chat_boxes_var_pop_order_by: World_Chat_Boxes_Var_Pop_Order_By;
  world_chat_boxes_var_samp_fields: ResolverTypeWrapper<World_Chat_Boxes_Var_Samp_Fields>;
  world_chat_boxes_var_samp_order_by: World_Chat_Boxes_Var_Samp_Order_By;
  world_chat_boxes_variance_fields: ResolverTypeWrapper<World_Chat_Boxes_Variance_Fields>;
  world_chat_boxes_variance_order_by: World_Chat_Boxes_Variance_Order_By;
  world_chats: ResolverTypeWrapper<World_Chats>;
  world_chats_aggregate: ResolverTypeWrapper<World_Chats_Aggregate>;
  world_chats_aggregate_bool_exp: World_Chats_Aggregate_Bool_Exp;
  world_chats_aggregate_bool_exp_count: World_Chats_Aggregate_Bool_Exp_Count;
  world_chats_aggregate_fields: ResolverTypeWrapper<World_Chats_Aggregate_Fields>;
  world_chats_aggregate_order_by: World_Chats_Aggregate_Order_By;
  world_chats_arr_rel_insert_input: World_Chats_Arr_Rel_Insert_Input;
  world_chats_avg_fields: ResolverTypeWrapper<World_Chats_Avg_Fields>;
  world_chats_avg_order_by: World_Chats_Avg_Order_By;
  world_chats_bool_exp: World_Chats_Bool_Exp;
  world_chats_constraint: World_Chats_Constraint;
  world_chats_inc_input: World_Chats_Inc_Input;
  world_chats_insert_input: World_Chats_Insert_Input;
  world_chats_max_fields: ResolverTypeWrapper<World_Chats_Max_Fields>;
  world_chats_max_order_by: World_Chats_Max_Order_By;
  world_chats_min_fields: ResolverTypeWrapper<World_Chats_Min_Fields>;
  world_chats_min_order_by: World_Chats_Min_Order_By;
  world_chats_mutation_response: ResolverTypeWrapper<World_Chats_Mutation_Response>;
  world_chats_on_conflict: World_Chats_On_Conflict;
  world_chats_order_by: World_Chats_Order_By;
  world_chats_pk_columns_input: World_Chats_Pk_Columns_Input;
  world_chats_select_column: World_Chats_Select_Column;
  world_chats_set_input: World_Chats_Set_Input;
  world_chats_stddev_fields: ResolverTypeWrapper<World_Chats_Stddev_Fields>;
  world_chats_stddev_order_by: World_Chats_Stddev_Order_By;
  world_chats_stddev_pop_fields: ResolverTypeWrapper<World_Chats_Stddev_Pop_Fields>;
  world_chats_stddev_pop_order_by: World_Chats_Stddev_Pop_Order_By;
  world_chats_stddev_samp_fields: ResolverTypeWrapper<World_Chats_Stddev_Samp_Fields>;
  world_chats_stddev_samp_order_by: World_Chats_Stddev_Samp_Order_By;
  world_chats_stream_cursor_input: World_Chats_Stream_Cursor_Input;
  world_chats_stream_cursor_value_input: World_Chats_Stream_Cursor_Value_Input;
  world_chats_sum_fields: ResolverTypeWrapper<World_Chats_Sum_Fields>;
  world_chats_sum_order_by: World_Chats_Sum_Order_By;
  world_chats_update_column: World_Chats_Update_Column;
  world_chats_updates: World_Chats_Updates;
  world_chats_var_pop_fields: ResolverTypeWrapper<World_Chats_Var_Pop_Fields>;
  world_chats_var_pop_order_by: World_Chats_Var_Pop_Order_By;
  world_chats_var_samp_fields: ResolverTypeWrapper<World_Chats_Var_Samp_Fields>;
  world_chats_var_samp_order_by: World_Chats_Var_Samp_Order_By;
  world_chats_variance_fields: ResolverTypeWrapper<World_Chats_Variance_Fields>;
  world_chats_variance_order_by: World_Chats_Variance_Order_By;
  world_citizens: ResolverTypeWrapper<World_Citizens>;
  world_citizens_aggregate: ResolverTypeWrapper<World_Citizens_Aggregate>;
  world_citizens_aggregate_bool_exp: World_Citizens_Aggregate_Bool_Exp;
  world_citizens_aggregate_bool_exp_count: World_Citizens_Aggregate_Bool_Exp_Count;
  world_citizens_aggregate_fields: ResolverTypeWrapper<World_Citizens_Aggregate_Fields>;
  world_citizens_aggregate_order_by: World_Citizens_Aggregate_Order_By;
  world_citizens_arr_rel_insert_input: World_Citizens_Arr_Rel_Insert_Input;
  world_citizens_bool_exp: World_Citizens_Bool_Exp;
  world_citizens_constraint: World_Citizens_Constraint;
  world_citizens_insert_input: World_Citizens_Insert_Input;
  world_citizens_max_fields: ResolverTypeWrapper<World_Citizens_Max_Fields>;
  world_citizens_max_order_by: World_Citizens_Max_Order_By;
  world_citizens_min_fields: ResolverTypeWrapper<World_Citizens_Min_Fields>;
  world_citizens_min_order_by: World_Citizens_Min_Order_By;
  world_citizens_mutation_response: ResolverTypeWrapper<World_Citizens_Mutation_Response>;
  world_citizens_on_conflict: World_Citizens_On_Conflict;
  world_citizens_order_by: World_Citizens_Order_By;
  world_citizens_pk_columns_input: World_Citizens_Pk_Columns_Input;
  world_citizens_select_column: World_Citizens_Select_Column;
  world_citizens_set_input: World_Citizens_Set_Input;
  world_citizens_stream_cursor_input: World_Citizens_Stream_Cursor_Input;
  world_citizens_stream_cursor_value_input: World_Citizens_Stream_Cursor_Value_Input;
  world_citizens_update_column: World_Citizens_Update_Column;
  world_citizens_updates: World_Citizens_Updates;
  world_comments: ResolverTypeWrapper<World_Comments>;
  world_comments_aggregate: ResolverTypeWrapper<World_Comments_Aggregate>;
  world_comments_aggregate_bool_exp: World_Comments_Aggregate_Bool_Exp;
  world_comments_aggregate_bool_exp_count: World_Comments_Aggregate_Bool_Exp_Count;
  world_comments_aggregate_fields: ResolverTypeWrapper<World_Comments_Aggregate_Fields>;
  world_comments_aggregate_order_by: World_Comments_Aggregate_Order_By;
  world_comments_arr_rel_insert_input: World_Comments_Arr_Rel_Insert_Input;
  world_comments_avg_fields: ResolverTypeWrapper<World_Comments_Avg_Fields>;
  world_comments_avg_order_by: World_Comments_Avg_Order_By;
  world_comments_bool_exp: World_Comments_Bool_Exp;
  world_comments_constraint: World_Comments_Constraint;
  world_comments_inc_input: World_Comments_Inc_Input;
  world_comments_insert_input: World_Comments_Insert_Input;
  world_comments_max_fields: ResolverTypeWrapper<World_Comments_Max_Fields>;
  world_comments_max_order_by: World_Comments_Max_Order_By;
  world_comments_min_fields: ResolverTypeWrapper<World_Comments_Min_Fields>;
  world_comments_min_order_by: World_Comments_Min_Order_By;
  world_comments_mutation_response: ResolverTypeWrapper<World_Comments_Mutation_Response>;
  world_comments_on_conflict: World_Comments_On_Conflict;
  world_comments_order_by: World_Comments_Order_By;
  world_comments_pk_columns_input: World_Comments_Pk_Columns_Input;
  world_comments_select_column: World_Comments_Select_Column;
  world_comments_set_input: World_Comments_Set_Input;
  world_comments_stddev_fields: ResolverTypeWrapper<World_Comments_Stddev_Fields>;
  world_comments_stddev_order_by: World_Comments_Stddev_Order_By;
  world_comments_stddev_pop_fields: ResolverTypeWrapper<World_Comments_Stddev_Pop_Fields>;
  world_comments_stddev_pop_order_by: World_Comments_Stddev_Pop_Order_By;
  world_comments_stddev_samp_fields: ResolverTypeWrapper<World_Comments_Stddev_Samp_Fields>;
  world_comments_stddev_samp_order_by: World_Comments_Stddev_Samp_Order_By;
  world_comments_stream_cursor_input: World_Comments_Stream_Cursor_Input;
  world_comments_stream_cursor_value_input: World_Comments_Stream_Cursor_Value_Input;
  world_comments_sum_fields: ResolverTypeWrapper<World_Comments_Sum_Fields>;
  world_comments_sum_order_by: World_Comments_Sum_Order_By;
  world_comments_update_column: World_Comments_Update_Column;
  world_comments_updates: World_Comments_Updates;
  world_comments_var_pop_fields: ResolverTypeWrapper<World_Comments_Var_Pop_Fields>;
  world_comments_var_pop_order_by: World_Comments_Var_Pop_Order_By;
  world_comments_var_samp_fields: ResolverTypeWrapper<World_Comments_Var_Samp_Fields>;
  world_comments_var_samp_order_by: World_Comments_Var_Samp_Order_By;
  world_comments_variance_fields: ResolverTypeWrapper<World_Comments_Variance_Fields>;
  world_comments_variance_order_by: World_Comments_Variance_Order_By;
  world_editable_users: ResolverTypeWrapper<World_Editable_Users>;
  world_editable_users_aggregate: ResolverTypeWrapper<World_Editable_Users_Aggregate>;
  world_editable_users_aggregate_bool_exp: World_Editable_Users_Aggregate_Bool_Exp;
  world_editable_users_aggregate_bool_exp_count: World_Editable_Users_Aggregate_Bool_Exp_Count;
  world_editable_users_aggregate_fields: ResolverTypeWrapper<World_Editable_Users_Aggregate_Fields>;
  world_editable_users_aggregate_order_by: World_Editable_Users_Aggregate_Order_By;
  world_editable_users_arr_rel_insert_input: World_Editable_Users_Arr_Rel_Insert_Input;
  world_editable_users_avg_fields: ResolverTypeWrapper<World_Editable_Users_Avg_Fields>;
  world_editable_users_avg_order_by: World_Editable_Users_Avg_Order_By;
  world_editable_users_bool_exp: World_Editable_Users_Bool_Exp;
  world_editable_users_constraint: World_Editable_Users_Constraint;
  world_editable_users_inc_input: World_Editable_Users_Inc_Input;
  world_editable_users_insert_input: World_Editable_Users_Insert_Input;
  world_editable_users_max_fields: ResolverTypeWrapper<World_Editable_Users_Max_Fields>;
  world_editable_users_max_order_by: World_Editable_Users_Max_Order_By;
  world_editable_users_min_fields: ResolverTypeWrapper<World_Editable_Users_Min_Fields>;
  world_editable_users_min_order_by: World_Editable_Users_Min_Order_By;
  world_editable_users_mutation_response: ResolverTypeWrapper<World_Editable_Users_Mutation_Response>;
  world_editable_users_on_conflict: World_Editable_Users_On_Conflict;
  world_editable_users_order_by: World_Editable_Users_Order_By;
  world_editable_users_pk_columns_input: World_Editable_Users_Pk_Columns_Input;
  world_editable_users_select_column: World_Editable_Users_Select_Column;
  world_editable_users_set_input: World_Editable_Users_Set_Input;
  world_editable_users_stddev_fields: ResolverTypeWrapper<World_Editable_Users_Stddev_Fields>;
  world_editable_users_stddev_order_by: World_Editable_Users_Stddev_Order_By;
  world_editable_users_stddev_pop_fields: ResolverTypeWrapper<World_Editable_Users_Stddev_Pop_Fields>;
  world_editable_users_stddev_pop_order_by: World_Editable_Users_Stddev_Pop_Order_By;
  world_editable_users_stddev_samp_fields: ResolverTypeWrapper<World_Editable_Users_Stddev_Samp_Fields>;
  world_editable_users_stddev_samp_order_by: World_Editable_Users_Stddev_Samp_Order_By;
  world_editable_users_stream_cursor_input: World_Editable_Users_Stream_Cursor_Input;
  world_editable_users_stream_cursor_value_input: World_Editable_Users_Stream_Cursor_Value_Input;
  world_editable_users_sum_fields: ResolverTypeWrapper<World_Editable_Users_Sum_Fields>;
  world_editable_users_sum_order_by: World_Editable_Users_Sum_Order_By;
  world_editable_users_update_column: World_Editable_Users_Update_Column;
  world_editable_users_updates: World_Editable_Users_Updates;
  world_editable_users_var_pop_fields: ResolverTypeWrapper<World_Editable_Users_Var_Pop_Fields>;
  world_editable_users_var_pop_order_by: World_Editable_Users_Var_Pop_Order_By;
  world_editable_users_var_samp_fields: ResolverTypeWrapper<World_Editable_Users_Var_Samp_Fields>;
  world_editable_users_var_samp_order_by: World_Editable_Users_Var_Samp_Order_By;
  world_editable_users_variance_fields: ResolverTypeWrapper<World_Editable_Users_Variance_Fields>;
  world_editable_users_variance_order_by: World_Editable_Users_Variance_Order_By;
  world_histories: ResolverTypeWrapper<World_Histories>;
  world_histories_aggregate: ResolverTypeWrapper<World_Histories_Aggregate>;
  world_histories_aggregate_bool_exp: World_Histories_Aggregate_Bool_Exp;
  world_histories_aggregate_bool_exp_count: World_Histories_Aggregate_Bool_Exp_Count;
  world_histories_aggregate_fields: ResolverTypeWrapper<World_Histories_Aggregate_Fields>;
  world_histories_aggregate_order_by: World_Histories_Aggregate_Order_By;
  world_histories_arr_rel_insert_input: World_Histories_Arr_Rel_Insert_Input;
  world_histories_avg_fields: ResolverTypeWrapper<World_Histories_Avg_Fields>;
  world_histories_avg_order_by: World_Histories_Avg_Order_By;
  world_histories_bool_exp: World_Histories_Bool_Exp;
  world_histories_constraint: World_Histories_Constraint;
  world_histories_inc_input: World_Histories_Inc_Input;
  world_histories_insert_input: World_Histories_Insert_Input;
  world_histories_max_fields: ResolverTypeWrapper<World_Histories_Max_Fields>;
  world_histories_max_order_by: World_Histories_Max_Order_By;
  world_histories_min_fields: ResolverTypeWrapper<World_Histories_Min_Fields>;
  world_histories_min_order_by: World_Histories_Min_Order_By;
  world_histories_mutation_response: ResolverTypeWrapper<World_Histories_Mutation_Response>;
  world_histories_on_conflict: World_Histories_On_Conflict;
  world_histories_order_by: World_Histories_Order_By;
  world_histories_pk_columns_input: World_Histories_Pk_Columns_Input;
  world_histories_select_column: World_Histories_Select_Column;
  world_histories_set_input: World_Histories_Set_Input;
  world_histories_stddev_fields: ResolverTypeWrapper<World_Histories_Stddev_Fields>;
  world_histories_stddev_order_by: World_Histories_Stddev_Order_By;
  world_histories_stddev_pop_fields: ResolverTypeWrapper<World_Histories_Stddev_Pop_Fields>;
  world_histories_stddev_pop_order_by: World_Histories_Stddev_Pop_Order_By;
  world_histories_stddev_samp_fields: ResolverTypeWrapper<World_Histories_Stddev_Samp_Fields>;
  world_histories_stddev_samp_order_by: World_Histories_Stddev_Samp_Order_By;
  world_histories_stream_cursor_input: World_Histories_Stream_Cursor_Input;
  world_histories_stream_cursor_value_input: World_Histories_Stream_Cursor_Value_Input;
  world_histories_sum_fields: ResolverTypeWrapper<World_Histories_Sum_Fields>;
  world_histories_sum_order_by: World_Histories_Sum_Order_By;
  world_histories_update_column: World_Histories_Update_Column;
  world_histories_updates: World_Histories_Updates;
  world_histories_var_pop_fields: ResolverTypeWrapper<World_Histories_Var_Pop_Fields>;
  world_histories_var_pop_order_by: World_Histories_Var_Pop_Order_By;
  world_histories_var_samp_fields: ResolverTypeWrapper<World_Histories_Var_Samp_Fields>;
  world_histories_var_samp_order_by: World_Histories_Var_Samp_Order_By;
  world_histories_variance_fields: ResolverTypeWrapper<World_Histories_Variance_Fields>;
  world_histories_variance_order_by: World_Histories_Variance_Order_By;
  world_laws: ResolverTypeWrapper<World_Laws>;
  world_laws_aggregate: ResolverTypeWrapper<World_Laws_Aggregate>;
  world_laws_aggregate_bool_exp: World_Laws_Aggregate_Bool_Exp;
  world_laws_aggregate_bool_exp_count: World_Laws_Aggregate_Bool_Exp_Count;
  world_laws_aggregate_fields: ResolverTypeWrapper<World_Laws_Aggregate_Fields>;
  world_laws_aggregate_order_by: World_Laws_Aggregate_Order_By;
  world_laws_arr_rel_insert_input: World_Laws_Arr_Rel_Insert_Input;
  world_laws_bool_exp: World_Laws_Bool_Exp;
  world_laws_constraint: World_Laws_Constraint;
  world_laws_insert_input: World_Laws_Insert_Input;
  world_laws_max_fields: ResolverTypeWrapper<World_Laws_Max_Fields>;
  world_laws_max_order_by: World_Laws_Max_Order_By;
  world_laws_min_fields: ResolverTypeWrapper<World_Laws_Min_Fields>;
  world_laws_min_order_by: World_Laws_Min_Order_By;
  world_laws_mutation_response: ResolverTypeWrapper<World_Laws_Mutation_Response>;
  world_laws_on_conflict: World_Laws_On_Conflict;
  world_laws_order_by: World_Laws_Order_By;
  world_laws_pk_columns_input: World_Laws_Pk_Columns_Input;
  world_laws_select_column: World_Laws_Select_Column;
  world_laws_set_input: World_Laws_Set_Input;
  world_laws_stream_cursor_input: World_Laws_Stream_Cursor_Input;
  world_laws_stream_cursor_value_input: World_Laws_Stream_Cursor_Value_Input;
  world_laws_update_column: World_Laws_Update_Column;
  world_laws_updates: World_Laws_Updates;
  world_reactions: ResolverTypeWrapper<World_Reactions>;
  world_reactions_aggregate: ResolverTypeWrapper<World_Reactions_Aggregate>;
  world_reactions_aggregate_bool_exp: World_Reactions_Aggregate_Bool_Exp;
  world_reactions_aggregate_bool_exp_count: World_Reactions_Aggregate_Bool_Exp_Count;
  world_reactions_aggregate_fields: ResolverTypeWrapper<World_Reactions_Aggregate_Fields>;
  world_reactions_aggregate_order_by: World_Reactions_Aggregate_Order_By;
  world_reactions_arr_rel_insert_input: World_Reactions_Arr_Rel_Insert_Input;
  world_reactions_avg_fields: ResolverTypeWrapper<World_Reactions_Avg_Fields>;
  world_reactions_avg_order_by: World_Reactions_Avg_Order_By;
  world_reactions_bool_exp: World_Reactions_Bool_Exp;
  world_reactions_constraint: World_Reactions_Constraint;
  world_reactions_inc_input: World_Reactions_Inc_Input;
  world_reactions_insert_input: World_Reactions_Insert_Input;
  world_reactions_max_fields: ResolverTypeWrapper<World_Reactions_Max_Fields>;
  world_reactions_max_order_by: World_Reactions_Max_Order_By;
  world_reactions_min_fields: ResolverTypeWrapper<World_Reactions_Min_Fields>;
  world_reactions_min_order_by: World_Reactions_Min_Order_By;
  world_reactions_mutation_response: ResolverTypeWrapper<World_Reactions_Mutation_Response>;
  world_reactions_on_conflict: World_Reactions_On_Conflict;
  world_reactions_order_by: World_Reactions_Order_By;
  world_reactions_pk_columns_input: World_Reactions_Pk_Columns_Input;
  world_reactions_select_column: World_Reactions_Select_Column;
  world_reactions_set_input: World_Reactions_Set_Input;
  world_reactions_stddev_fields: ResolverTypeWrapper<World_Reactions_Stddev_Fields>;
  world_reactions_stddev_order_by: World_Reactions_Stddev_Order_By;
  world_reactions_stddev_pop_fields: ResolverTypeWrapper<World_Reactions_Stddev_Pop_Fields>;
  world_reactions_stddev_pop_order_by: World_Reactions_Stddev_Pop_Order_By;
  world_reactions_stddev_samp_fields: ResolverTypeWrapper<World_Reactions_Stddev_Samp_Fields>;
  world_reactions_stddev_samp_order_by: World_Reactions_Stddev_Samp_Order_By;
  world_reactions_stream_cursor_input: World_Reactions_Stream_Cursor_Input;
  world_reactions_stream_cursor_value_input: World_Reactions_Stream_Cursor_Value_Input;
  world_reactions_sum_fields: ResolverTypeWrapper<World_Reactions_Sum_Fields>;
  world_reactions_sum_order_by: World_Reactions_Sum_Order_By;
  world_reactions_update_column: World_Reactions_Update_Column;
  world_reactions_updates: World_Reactions_Updates;
  world_reactions_var_pop_fields: ResolverTypeWrapper<World_Reactions_Var_Pop_Fields>;
  world_reactions_var_pop_order_by: World_Reactions_Var_Pop_Order_By;
  world_reactions_var_samp_fields: ResolverTypeWrapper<World_Reactions_Var_Samp_Fields>;
  world_reactions_var_samp_order_by: World_Reactions_Var_Samp_Order_By;
  world_reactions_variance_fields: ResolverTypeWrapper<World_Reactions_Variance_Fields>;
  world_reactions_variance_order_by: World_Reactions_Variance_Order_By;
  worlds: ResolverTypeWrapper<Worlds>;
  worlds_aggregate: ResolverTypeWrapper<Worlds_Aggregate>;
  worlds_aggregate_bool_exp: Worlds_Aggregate_Bool_Exp;
  worlds_aggregate_bool_exp_count: Worlds_Aggregate_Bool_Exp_Count;
  worlds_aggregate_fields: ResolverTypeWrapper<Worlds_Aggregate_Fields>;
  worlds_aggregate_order_by: Worlds_Aggregate_Order_By;
  worlds_arr_rel_insert_input: Worlds_Arr_Rel_Insert_Input;
  worlds_avg_fields: ResolverTypeWrapper<Worlds_Avg_Fields>;
  worlds_avg_order_by: Worlds_Avg_Order_By;
  worlds_bool_exp: Worlds_Bool_Exp;
  worlds_constraint: Worlds_Constraint;
  worlds_inc_input: Worlds_Inc_Input;
  worlds_insert_input: Worlds_Insert_Input;
  worlds_max_fields: ResolverTypeWrapper<Worlds_Max_Fields>;
  worlds_max_order_by: Worlds_Max_Order_By;
  worlds_min_fields: ResolverTypeWrapper<Worlds_Min_Fields>;
  worlds_min_order_by: Worlds_Min_Order_By;
  worlds_mutation_response: ResolverTypeWrapper<Worlds_Mutation_Response>;
  worlds_obj_rel_insert_input: Worlds_Obj_Rel_Insert_Input;
  worlds_on_conflict: Worlds_On_Conflict;
  worlds_order_by: Worlds_Order_By;
  worlds_pk_columns_input: Worlds_Pk_Columns_Input;
  worlds_select_column: Worlds_Select_Column;
  worlds_set_input: Worlds_Set_Input;
  worlds_stddev_fields: ResolverTypeWrapper<Worlds_Stddev_Fields>;
  worlds_stddev_order_by: Worlds_Stddev_Order_By;
  worlds_stddev_pop_fields: ResolverTypeWrapper<Worlds_Stddev_Pop_Fields>;
  worlds_stddev_pop_order_by: Worlds_Stddev_Pop_Order_By;
  worlds_stddev_samp_fields: ResolverTypeWrapper<Worlds_Stddev_Samp_Fields>;
  worlds_stddev_samp_order_by: Worlds_Stddev_Samp_Order_By;
  worlds_stream_cursor_input: Worlds_Stream_Cursor_Input;
  worlds_stream_cursor_value_input: Worlds_Stream_Cursor_Value_Input;
  worlds_sum_fields: ResolverTypeWrapper<Worlds_Sum_Fields>;
  worlds_sum_order_by: Worlds_Sum_Order_By;
  worlds_update_column: Worlds_Update_Column;
  worlds_updates: Worlds_Updates;
  worlds_var_pop_fields: ResolverTypeWrapper<Worlds_Var_Pop_Fields>;
  worlds_var_pop_order_by: Worlds_Var_Pop_Order_By;
  worlds_var_samp_fields: ResolverTypeWrapper<Worlds_Var_Samp_Fields>;
  worlds_var_samp_order_by: Worlds_Var_Samp_Order_By;
  worlds_variance_fields: ResolverTypeWrapper<Worlds_Variance_Fields>;
  worlds_variance_order_by: Worlds_Variance_Order_By;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String']['output'];
  String_comparison_exp: String_Comparison_Exp;
  _Service: _Service;
  argumen_chats: Argumen_Chats;
  argumen_chats_aggregate: Argumen_Chats_Aggregate;
  argumen_chats_aggregate_bool_exp: Argumen_Chats_Aggregate_Bool_Exp;
  argumen_chats_aggregate_bool_exp_count: Argumen_Chats_Aggregate_Bool_Exp_Count;
  argumen_chats_aggregate_fields: Argumen_Chats_Aggregate_Fields;
  argumen_chats_aggregate_order_by: Argumen_Chats_Aggregate_Order_By;
  argumen_chats_arr_rel_insert_input: Argumen_Chats_Arr_Rel_Insert_Input;
  argumen_chats_avg_fields: Argumen_Chats_Avg_Fields;
  argumen_chats_avg_order_by: Argumen_Chats_Avg_Order_By;
  argumen_chats_bool_exp: Argumen_Chats_Bool_Exp;
  argumen_chats_inc_input: Argumen_Chats_Inc_Input;
  argumen_chats_insert_input: Argumen_Chats_Insert_Input;
  argumen_chats_max_fields: Argumen_Chats_Max_Fields;
  argumen_chats_max_order_by: Argumen_Chats_Max_Order_By;
  argumen_chats_min_fields: Argumen_Chats_Min_Fields;
  argumen_chats_min_order_by: Argumen_Chats_Min_Order_By;
  argumen_chats_mutation_response: Argumen_Chats_Mutation_Response;
  argumen_chats_on_conflict: Argumen_Chats_On_Conflict;
  argumen_chats_order_by: Argumen_Chats_Order_By;
  argumen_chats_pk_columns_input: Argumen_Chats_Pk_Columns_Input;
  argumen_chats_set_input: Argumen_Chats_Set_Input;
  argumen_chats_stddev_fields: Argumen_Chats_Stddev_Fields;
  argumen_chats_stddev_order_by: Argumen_Chats_Stddev_Order_By;
  argumen_chats_stddev_pop_fields: Argumen_Chats_Stddev_Pop_Fields;
  argumen_chats_stddev_pop_order_by: Argumen_Chats_Stddev_Pop_Order_By;
  argumen_chats_stddev_samp_fields: Argumen_Chats_Stddev_Samp_Fields;
  argumen_chats_stddev_samp_order_by: Argumen_Chats_Stddev_Samp_Order_By;
  argumen_chats_stream_cursor_input: Argumen_Chats_Stream_Cursor_Input;
  argumen_chats_stream_cursor_value_input: Argumen_Chats_Stream_Cursor_Value_Input;
  argumen_chats_sum_fields: Argumen_Chats_Sum_Fields;
  argumen_chats_sum_order_by: Argumen_Chats_Sum_Order_By;
  argumen_chats_updates: Argumen_Chats_Updates;
  argumen_chats_var_pop_fields: Argumen_Chats_Var_Pop_Fields;
  argumen_chats_var_pop_order_by: Argumen_Chats_Var_Pop_Order_By;
  argumen_chats_var_samp_fields: Argumen_Chats_Var_Samp_Fields;
  argumen_chats_var_samp_order_by: Argumen_Chats_Var_Samp_Order_By;
  argumen_chats_variance_fields: Argumen_Chats_Variance_Fields;
  argumen_chats_variance_order_by: Argumen_Chats_Variance_Order_By;
  argument_chat_boxes: Argument_Chat_Boxes;
  argument_chat_boxes_aggregate: Argument_Chat_Boxes_Aggregate;
  argument_chat_boxes_aggregate_bool_exp: Argument_Chat_Boxes_Aggregate_Bool_Exp;
  argument_chat_boxes_aggregate_bool_exp_count: Argument_Chat_Boxes_Aggregate_Bool_Exp_Count;
  argument_chat_boxes_aggregate_fields: Argument_Chat_Boxes_Aggregate_Fields;
  argument_chat_boxes_aggregate_order_by: Argument_Chat_Boxes_Aggregate_Order_By;
  argument_chat_boxes_arr_rel_insert_input: Argument_Chat_Boxes_Arr_Rel_Insert_Input;
  argument_chat_boxes_bool_exp: Argument_Chat_Boxes_Bool_Exp;
  argument_chat_boxes_insert_input: Argument_Chat_Boxes_Insert_Input;
  argument_chat_boxes_max_fields: Argument_Chat_Boxes_Max_Fields;
  argument_chat_boxes_max_order_by: Argument_Chat_Boxes_Max_Order_By;
  argument_chat_boxes_min_fields: Argument_Chat_Boxes_Min_Fields;
  argument_chat_boxes_min_order_by: Argument_Chat_Boxes_Min_Order_By;
  argument_chat_boxes_mutation_response: Argument_Chat_Boxes_Mutation_Response;
  argument_chat_boxes_obj_rel_insert_input: Argument_Chat_Boxes_Obj_Rel_Insert_Input;
  argument_chat_boxes_on_conflict: Argument_Chat_Boxes_On_Conflict;
  argument_chat_boxes_order_by: Argument_Chat_Boxes_Order_By;
  argument_chat_boxes_pk_columns_input: Argument_Chat_Boxes_Pk_Columns_Input;
  argument_chat_boxes_set_input: Argument_Chat_Boxes_Set_Input;
  argument_chat_boxes_stream_cursor_input: Argument_Chat_Boxes_Stream_Cursor_Input;
  argument_chat_boxes_stream_cursor_value_input: Argument_Chat_Boxes_Stream_Cursor_Value_Input;
  argument_chat_boxes_updates: Argument_Chat_Boxes_Updates;
  argument_views: Argument_Views;
  argument_views_aggregate: Argument_Views_Aggregate;
  argument_views_aggregate_bool_exp: Argument_Views_Aggregate_Bool_Exp;
  argument_views_aggregate_bool_exp_count: Argument_Views_Aggregate_Bool_Exp_Count;
  argument_views_aggregate_fields: Argument_Views_Aggregate_Fields;
  argument_views_aggregate_order_by: Argument_Views_Aggregate_Order_By;
  argument_views_arr_rel_insert_input: Argument_Views_Arr_Rel_Insert_Input;
  argument_views_bool_exp: Argument_Views_Bool_Exp;
  argument_views_insert_input: Argument_Views_Insert_Input;
  argument_views_max_fields: Argument_Views_Max_Fields;
  argument_views_max_order_by: Argument_Views_Max_Order_By;
  argument_views_min_fields: Argument_Views_Min_Fields;
  argument_views_min_order_by: Argument_Views_Min_Order_By;
  argument_views_mutation_response: Argument_Views_Mutation_Response;
  argument_views_on_conflict: Argument_Views_On_Conflict;
  argument_views_order_by: Argument_Views_Order_By;
  argument_views_pk_columns_input: Argument_Views_Pk_Columns_Input;
  argument_views_set_input: Argument_Views_Set_Input;
  argument_views_stream_cursor_input: Argument_Views_Stream_Cursor_Input;
  argument_views_stream_cursor_value_input: Argument_Views_Stream_Cursor_Value_Input;
  argument_views_updates: Argument_Views_Updates;
  arguments: Arguments;
  arguments_aggregate: Arguments_Aggregate;
  arguments_aggregate_bool_exp: Arguments_Aggregate_Bool_Exp;
  arguments_aggregate_bool_exp_count: Arguments_Aggregate_Bool_Exp_Count;
  arguments_aggregate_fields: Arguments_Aggregate_Fields;
  arguments_aggregate_order_by: Arguments_Aggregate_Order_By;
  arguments_arr_rel_insert_input: Arguments_Arr_Rel_Insert_Input;
  arguments_bool_exp: Arguments_Bool_Exp;
  arguments_insert_input: Arguments_Insert_Input;
  arguments_max_fields: Arguments_Max_Fields;
  arguments_max_order_by: Arguments_Max_Order_By;
  arguments_min_fields: Arguments_Min_Fields;
  arguments_min_order_by: Arguments_Min_Order_By;
  arguments_mutation_response: Arguments_Mutation_Response;
  arguments_obj_rel_insert_input: Arguments_Obj_Rel_Insert_Input;
  arguments_on_conflict: Arguments_On_Conflict;
  arguments_order_by: Arguments_Order_By;
  arguments_pk_columns_input: Arguments_Pk_Columns_Input;
  arguments_set_input: Arguments_Set_Input;
  arguments_stream_cursor_input: Arguments_Stream_Cursor_Input;
  arguments_stream_cursor_value_input: Arguments_Stream_Cursor_Value_Input;
  arguments_updates: Arguments_Updates;
  citizen_histories: Citizen_Histories;
  citizen_histories_aggregate: Citizen_Histories_Aggregate;
  citizen_histories_aggregate_bool_exp: Citizen_Histories_Aggregate_Bool_Exp;
  citizen_histories_aggregate_bool_exp_count: Citizen_Histories_Aggregate_Bool_Exp_Count;
  citizen_histories_aggregate_fields: Citizen_Histories_Aggregate_Fields;
  citizen_histories_aggregate_order_by: Citizen_Histories_Aggregate_Order_By;
  citizen_histories_arr_rel_insert_input: Citizen_Histories_Arr_Rel_Insert_Input;
  citizen_histories_bool_exp: Citizen_Histories_Bool_Exp;
  citizen_histories_insert_input: Citizen_Histories_Insert_Input;
  citizen_histories_max_fields: Citizen_Histories_Max_Fields;
  citizen_histories_max_order_by: Citizen_Histories_Max_Order_By;
  citizen_histories_min_fields: Citizen_Histories_Min_Fields;
  citizen_histories_min_order_by: Citizen_Histories_Min_Order_By;
  citizen_histories_mutation_response: Citizen_Histories_Mutation_Response;
  citizen_histories_on_conflict: Citizen_Histories_On_Conflict;
  citizen_histories_order_by: Citizen_Histories_Order_By;
  citizen_histories_pk_columns_input: Citizen_Histories_Pk_Columns_Input;
  citizen_histories_set_input: Citizen_Histories_Set_Input;
  citizen_histories_stream_cursor_input: Citizen_Histories_Stream_Cursor_Input;
  citizen_histories_stream_cursor_value_input: Citizen_Histories_Stream_Cursor_Value_Input;
  citizen_histories_updates: Citizen_Histories_Updates;
  citizens: Citizens;
  citizens_aggregate: Citizens_Aggregate;
  citizens_aggregate_bool_exp: Citizens_Aggregate_Bool_Exp;
  citizens_aggregate_bool_exp_count: Citizens_Aggregate_Bool_Exp_Count;
  citizens_aggregate_fields: Citizens_Aggregate_Fields;
  citizens_aggregate_order_by: Citizens_Aggregate_Order_By;
  citizens_append_input: Citizens_Append_Input;
  citizens_arr_rel_insert_input: Citizens_Arr_Rel_Insert_Input;
  citizens_avg_fields: Citizens_Avg_Fields;
  citizens_avg_order_by: Citizens_Avg_Order_By;
  citizens_bool_exp: Citizens_Bool_Exp;
  citizens_delete_at_path_input: Citizens_Delete_At_Path_Input;
  citizens_delete_elem_input: Citizens_Delete_Elem_Input;
  citizens_delete_key_input: Citizens_Delete_Key_Input;
  citizens_inc_input: Citizens_Inc_Input;
  citizens_insert_input: Citizens_Insert_Input;
  citizens_max_fields: Citizens_Max_Fields;
  citizens_max_order_by: Citizens_Max_Order_By;
  citizens_min_fields: Citizens_Min_Fields;
  citizens_min_order_by: Citizens_Min_Order_By;
  citizens_mutation_response: Citizens_Mutation_Response;
  citizens_obj_rel_insert_input: Citizens_Obj_Rel_Insert_Input;
  citizens_on_conflict: Citizens_On_Conflict;
  citizens_order_by: Citizens_Order_By;
  citizens_pk_columns_input: Citizens_Pk_Columns_Input;
  citizens_prepend_input: Citizens_Prepend_Input;
  citizens_set_input: Citizens_Set_Input;
  citizens_stddev_fields: Citizens_Stddev_Fields;
  citizens_stddev_order_by: Citizens_Stddev_Order_By;
  citizens_stddev_pop_fields: Citizens_Stddev_Pop_Fields;
  citizens_stddev_pop_order_by: Citizens_Stddev_Pop_Order_By;
  citizens_stddev_samp_fields: Citizens_Stddev_Samp_Fields;
  citizens_stddev_samp_order_by: Citizens_Stddev_Samp_Order_By;
  citizens_stream_cursor_input: Citizens_Stream_Cursor_Input;
  citizens_stream_cursor_value_input: Citizens_Stream_Cursor_Value_Input;
  citizens_sum_fields: Citizens_Sum_Fields;
  citizens_sum_order_by: Citizens_Sum_Order_By;
  citizens_updates: Citizens_Updates;
  citizens_var_pop_fields: Citizens_Var_Pop_Fields;
  citizens_var_pop_order_by: Citizens_Var_Pop_Order_By;
  citizens_var_samp_fields: Citizens_Var_Samp_Fields;
  citizens_var_samp_order_by: Citizens_Var_Samp_Order_By;
  citizens_variance_fields: Citizens_Variance_Fields;
  citizens_variance_order_by: Citizens_Variance_Order_By;
  date: Scalars['date']['output'];
  date_comparison_exp: Date_Comparison_Exp;
  jsonb: Scalars['jsonb']['output'];
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  law_categories: Law_Categories;
  law_categories_aggregate: Law_Categories_Aggregate;
  law_categories_aggregate_fields: Law_Categories_Aggregate_Fields;
  law_categories_bool_exp: Law_Categories_Bool_Exp;
  law_categories_insert_input: Law_Categories_Insert_Input;
  law_categories_max_fields: Law_Categories_Max_Fields;
  law_categories_min_fields: Law_Categories_Min_Fields;
  law_categories_mutation_response: Law_Categories_Mutation_Response;
  law_categories_obj_rel_insert_input: Law_Categories_Obj_Rel_Insert_Input;
  law_categories_on_conflict: Law_Categories_On_Conflict;
  law_categories_order_by: Law_Categories_Order_By;
  law_categories_pk_columns_input: Law_Categories_Pk_Columns_Input;
  law_categories_set_input: Law_Categories_Set_Input;
  law_categories_stream_cursor_input: Law_Categories_Stream_Cursor_Input;
  law_categories_stream_cursor_value_input: Law_Categories_Stream_Cursor_Value_Input;
  law_categories_updates: Law_Categories_Updates;
  law_revision_columns: Law_Revision_Columns;
  law_revision_columns_aggregate: Law_Revision_Columns_Aggregate;
  law_revision_columns_aggregate_bool_exp: Law_Revision_Columns_Aggregate_Bool_Exp;
  law_revision_columns_aggregate_bool_exp_count: Law_Revision_Columns_Aggregate_Bool_Exp_Count;
  law_revision_columns_aggregate_fields: Law_Revision_Columns_Aggregate_Fields;
  law_revision_columns_aggregate_order_by: Law_Revision_Columns_Aggregate_Order_By;
  law_revision_columns_arr_rel_insert_input: Law_Revision_Columns_Arr_Rel_Insert_Input;
  law_revision_columns_bool_exp: Law_Revision_Columns_Bool_Exp;
  law_revision_columns_insert_input: Law_Revision_Columns_Insert_Input;
  law_revision_columns_max_fields: Law_Revision_Columns_Max_Fields;
  law_revision_columns_max_order_by: Law_Revision_Columns_Max_Order_By;
  law_revision_columns_min_fields: Law_Revision_Columns_Min_Fields;
  law_revision_columns_min_order_by: Law_Revision_Columns_Min_Order_By;
  law_revision_columns_mutation_response: Law_Revision_Columns_Mutation_Response;
  law_revision_columns_on_conflict: Law_Revision_Columns_On_Conflict;
  law_revision_columns_order_by: Law_Revision_Columns_Order_By;
  law_revision_columns_pk_columns_input: Law_Revision_Columns_Pk_Columns_Input;
  law_revision_columns_set_input: Law_Revision_Columns_Set_Input;
  law_revision_columns_stream_cursor_input: Law_Revision_Columns_Stream_Cursor_Input;
  law_revision_columns_stream_cursor_value_input: Law_Revision_Columns_Stream_Cursor_Value_Input;
  law_revision_columns_updates: Law_Revision_Columns_Updates;
  law_revisions: Law_Revisions;
  law_revisions_aggregate: Law_Revisions_Aggregate;
  law_revisions_aggregate_bool_exp: Law_Revisions_Aggregate_Bool_Exp;
  law_revisions_aggregate_bool_exp_count: Law_Revisions_Aggregate_Bool_Exp_Count;
  law_revisions_aggregate_fields: Law_Revisions_Aggregate_Fields;
  law_revisions_aggregate_order_by: Law_Revisions_Aggregate_Order_By;
  law_revisions_append_input: Law_Revisions_Append_Input;
  law_revisions_arr_rel_insert_input: Law_Revisions_Arr_Rel_Insert_Input;
  law_revisions_bool_exp: Law_Revisions_Bool_Exp;
  law_revisions_delete_at_path_input: Law_Revisions_Delete_At_Path_Input;
  law_revisions_delete_elem_input: Law_Revisions_Delete_Elem_Input;
  law_revisions_delete_key_input: Law_Revisions_Delete_Key_Input;
  law_revisions_insert_input: Law_Revisions_Insert_Input;
  law_revisions_max_fields: Law_Revisions_Max_Fields;
  law_revisions_max_order_by: Law_Revisions_Max_Order_By;
  law_revisions_min_fields: Law_Revisions_Min_Fields;
  law_revisions_min_order_by: Law_Revisions_Min_Order_By;
  law_revisions_mutation_response: Law_Revisions_Mutation_Response;
  law_revisions_obj_rel_insert_input: Law_Revisions_Obj_Rel_Insert_Input;
  law_revisions_on_conflict: Law_Revisions_On_Conflict;
  law_revisions_order_by: Law_Revisions_Order_By;
  law_revisions_pk_columns_input: Law_Revisions_Pk_Columns_Input;
  law_revisions_prepend_input: Law_Revisions_Prepend_Input;
  law_revisions_set_input: Law_Revisions_Set_Input;
  law_revisions_stream_cursor_input: Law_Revisions_Stream_Cursor_Input;
  law_revisions_stream_cursor_value_input: Law_Revisions_Stream_Cursor_Value_Input;
  law_revisions_updates: Law_Revisions_Updates;
  law_statuses: Law_Statuses;
  law_statuses_aggregate: Law_Statuses_Aggregate;
  law_statuses_aggregate_fields: Law_Statuses_Aggregate_Fields;
  law_statuses_bool_exp: Law_Statuses_Bool_Exp;
  law_statuses_insert_input: Law_Statuses_Insert_Input;
  law_statuses_max_fields: Law_Statuses_Max_Fields;
  law_statuses_min_fields: Law_Statuses_Min_Fields;
  law_statuses_mutation_response: Law_Statuses_Mutation_Response;
  law_statuses_obj_rel_insert_input: Law_Statuses_Obj_Rel_Insert_Input;
  law_statuses_on_conflict: Law_Statuses_On_Conflict;
  law_statuses_order_by: Law_Statuses_Order_By;
  law_statuses_pk_columns_input: Law_Statuses_Pk_Columns_Input;
  law_statuses_set_input: Law_Statuses_Set_Input;
  law_statuses_stream_cursor_input: Law_Statuses_Stream_Cursor_Input;
  law_statuses_stream_cursor_value_input: Law_Statuses_Stream_Cursor_Value_Input;
  law_statuses_updates: Law_Statuses_Updates;
  law_summaries: Law_Summaries;
  law_summaries_aggregate: Law_Summaries_Aggregate;
  law_summaries_aggregate_bool_exp: Law_Summaries_Aggregate_Bool_Exp;
  law_summaries_aggregate_bool_exp_count: Law_Summaries_Aggregate_Bool_Exp_Count;
  law_summaries_aggregate_fields: Law_Summaries_Aggregate_Fields;
  law_summaries_aggregate_order_by: Law_Summaries_Aggregate_Order_By;
  law_summaries_arr_rel_insert_input: Law_Summaries_Arr_Rel_Insert_Input;
  law_summaries_bool_exp: Law_Summaries_Bool_Exp;
  law_summaries_insert_input: Law_Summaries_Insert_Input;
  law_summaries_max_fields: Law_Summaries_Max_Fields;
  law_summaries_max_order_by: Law_Summaries_Max_Order_By;
  law_summaries_min_fields: Law_Summaries_Min_Fields;
  law_summaries_min_order_by: Law_Summaries_Min_Order_By;
  law_summaries_mutation_response: Law_Summaries_Mutation_Response;
  law_summaries_on_conflict: Law_Summaries_On_Conflict;
  law_summaries_order_by: Law_Summaries_Order_By;
  law_summaries_pk_columns_input: Law_Summaries_Pk_Columns_Input;
  law_summaries_set_input: Law_Summaries_Set_Input;
  law_summaries_stream_cursor_input: Law_Summaries_Stream_Cursor_Input;
  law_summaries_stream_cursor_value_input: Law_Summaries_Stream_Cursor_Value_Input;
  law_summaries_updates: Law_Summaries_Updates;
  law_types: Law_Types;
  law_types_aggregate: Law_Types_Aggregate;
  law_types_aggregate_fields: Law_Types_Aggregate_Fields;
  law_types_bool_exp: Law_Types_Bool_Exp;
  law_types_insert_input: Law_Types_Insert_Input;
  law_types_max_fields: Law_Types_Max_Fields;
  law_types_min_fields: Law_Types_Min_Fields;
  law_types_mutation_response: Law_Types_Mutation_Response;
  law_types_obj_rel_insert_input: Law_Types_Obj_Rel_Insert_Input;
  law_types_on_conflict: Law_Types_On_Conflict;
  law_types_order_by: Law_Types_Order_By;
  law_types_pk_columns_input: Law_Types_Pk_Columns_Input;
  law_types_set_input: Law_Types_Set_Input;
  law_types_stream_cursor_input: Law_Types_Stream_Cursor_Input;
  law_types_stream_cursor_value_input: Law_Types_Stream_Cursor_Value_Input;
  law_types_updates: Law_Types_Updates;
  law_views: Law_Views;
  law_views_aggregate: Law_Views_Aggregate;
  law_views_aggregate_bool_exp: Law_Views_Aggregate_Bool_Exp;
  law_views_aggregate_bool_exp_count: Law_Views_Aggregate_Bool_Exp_Count;
  law_views_aggregate_fields: Law_Views_Aggregate_Fields;
  law_views_aggregate_order_by: Law_Views_Aggregate_Order_By;
  law_views_arr_rel_insert_input: Law_Views_Arr_Rel_Insert_Input;
  law_views_bool_exp: Law_Views_Bool_Exp;
  law_views_insert_input: Law_Views_Insert_Input;
  law_views_max_fields: Law_Views_Max_Fields;
  law_views_max_order_by: Law_Views_Max_Order_By;
  law_views_min_fields: Law_Views_Min_Fields;
  law_views_min_order_by: Law_Views_Min_Order_By;
  law_views_mutation_response: Law_Views_Mutation_Response;
  law_views_on_conflict: Law_Views_On_Conflict;
  law_views_order_by: Law_Views_Order_By;
  law_views_pk_columns_input: Law_Views_Pk_Columns_Input;
  law_views_set_input: Law_Views_Set_Input;
  law_views_stream_cursor_input: Law_Views_Stream_Cursor_Input;
  law_views_stream_cursor_value_input: Law_Views_Stream_Cursor_Value_Input;
  law_views_updates: Law_Views_Updates;
  laws: Laws;
  laws_aggregate: Laws_Aggregate;
  laws_aggregate_bool_exp: Laws_Aggregate_Bool_Exp;
  laws_aggregate_bool_exp_count: Laws_Aggregate_Bool_Exp_Count;
  laws_aggregate_fields: Laws_Aggregate_Fields;
  laws_aggregate_order_by: Laws_Aggregate_Order_By;
  laws_arr_rel_insert_input: Laws_Arr_Rel_Insert_Input;
  laws_bool_exp: Laws_Bool_Exp;
  laws_insert_input: Laws_Insert_Input;
  laws_max_fields: Laws_Max_Fields;
  laws_max_order_by: Laws_Max_Order_By;
  laws_min_fields: Laws_Min_Fields;
  laws_min_order_by: Laws_Min_Order_By;
  laws_mutation_response: Laws_Mutation_Response;
  laws_obj_rel_insert_input: Laws_Obj_Rel_Insert_Input;
  laws_on_conflict: Laws_On_Conflict;
  laws_order_by: Laws_Order_By;
  laws_pk_columns_input: Laws_Pk_Columns_Input;
  laws_set_input: Laws_Set_Input;
  laws_stream_cursor_input: Laws_Stream_Cursor_Input;
  laws_stream_cursor_value_input: Laws_Stream_Cursor_Value_Input;
  laws_updates: Laws_Updates;
  mutation_root: {};
  numeric: Scalars['numeric']['output'];
  numeric_comparison_exp: Numeric_Comparison_Exp;
  query_root: {};
  resource_editable_users: Resource_Editable_Users;
  resource_editable_users_aggregate: Resource_Editable_Users_Aggregate;
  resource_editable_users_aggregate_bool_exp: Resource_Editable_Users_Aggregate_Bool_Exp;
  resource_editable_users_aggregate_bool_exp_count: Resource_Editable_Users_Aggregate_Bool_Exp_Count;
  resource_editable_users_aggregate_fields: Resource_Editable_Users_Aggregate_Fields;
  resource_editable_users_aggregate_order_by: Resource_Editable_Users_Aggregate_Order_By;
  resource_editable_users_arr_rel_insert_input: Resource_Editable_Users_Arr_Rel_Insert_Input;
  resource_editable_users_bool_exp: Resource_Editable_Users_Bool_Exp;
  resource_editable_users_insert_input: Resource_Editable_Users_Insert_Input;
  resource_editable_users_max_fields: Resource_Editable_Users_Max_Fields;
  resource_editable_users_max_order_by: Resource_Editable_Users_Max_Order_By;
  resource_editable_users_min_fields: Resource_Editable_Users_Min_Fields;
  resource_editable_users_min_order_by: Resource_Editable_Users_Min_Order_By;
  resource_editable_users_mutation_response: Resource_Editable_Users_Mutation_Response;
  resource_editable_users_on_conflict: Resource_Editable_Users_On_Conflict;
  resource_editable_users_order_by: Resource_Editable_Users_Order_By;
  resource_editable_users_pk_columns_input: Resource_Editable_Users_Pk_Columns_Input;
  resource_editable_users_set_input: Resource_Editable_Users_Set_Input;
  resource_editable_users_stream_cursor_input: Resource_Editable_Users_Stream_Cursor_Input;
  resource_editable_users_stream_cursor_value_input: Resource_Editable_Users_Stream_Cursor_Value_Input;
  resource_editable_users_updates: Resource_Editable_Users_Updates;
  resource_histories: Resource_Histories;
  resource_histories_aggregate: Resource_Histories_Aggregate;
  resource_histories_aggregate_bool_exp: Resource_Histories_Aggregate_Bool_Exp;
  resource_histories_aggregate_bool_exp_count: Resource_Histories_Aggregate_Bool_Exp_Count;
  resource_histories_aggregate_fields: Resource_Histories_Aggregate_Fields;
  resource_histories_aggregate_order_by: Resource_Histories_Aggregate_Order_By;
  resource_histories_arr_rel_insert_input: Resource_Histories_Arr_Rel_Insert_Input;
  resource_histories_bool_exp: Resource_Histories_Bool_Exp;
  resource_histories_insert_input: Resource_Histories_Insert_Input;
  resource_histories_max_fields: Resource_Histories_Max_Fields;
  resource_histories_max_order_by: Resource_Histories_Max_Order_By;
  resource_histories_min_fields: Resource_Histories_Min_Fields;
  resource_histories_min_order_by: Resource_Histories_Min_Order_By;
  resource_histories_mutation_response: Resource_Histories_Mutation_Response;
  resource_histories_on_conflict: Resource_Histories_On_Conflict;
  resource_histories_order_by: Resource_Histories_Order_By;
  resource_histories_pk_columns_input: Resource_Histories_Pk_Columns_Input;
  resource_histories_set_input: Resource_Histories_Set_Input;
  resource_histories_stream_cursor_input: Resource_Histories_Stream_Cursor_Input;
  resource_histories_stream_cursor_value_input: Resource_Histories_Stream_Cursor_Value_Input;
  resource_histories_updates: Resource_Histories_Updates;
  resources: Resources;
  resources_aggregate: Resources_Aggregate;
  resources_aggregate_fields: Resources_Aggregate_Fields;
  resources_bool_exp: Resources_Bool_Exp;
  resources_insert_input: Resources_Insert_Input;
  resources_max_fields: Resources_Max_Fields;
  resources_min_fields: Resources_Min_Fields;
  resources_mutation_response: Resources_Mutation_Response;
  resources_obj_rel_insert_input: Resources_Obj_Rel_Insert_Input;
  resources_on_conflict: Resources_On_Conflict;
  resources_order_by: Resources_Order_By;
  resources_pk_columns_input: Resources_Pk_Columns_Input;
  resources_set_input: Resources_Set_Input;
  resources_stream_cursor_input: Resources_Stream_Cursor_Input;
  resources_stream_cursor_value_input: Resources_Stream_Cursor_Value_Input;
  resources_updates: Resources_Updates;
  species: Species;
  species_aggregate: Species_Aggregate;
  species_aggregate_bool_exp: Species_Aggregate_Bool_Exp;
  species_aggregate_bool_exp_count: Species_Aggregate_Bool_Exp_Count;
  species_aggregate_fields: Species_Aggregate_Fields;
  species_aggregate_order_by: Species_Aggregate_Order_By;
  species_arr_rel_insert_input: Species_Arr_Rel_Insert_Input;
  species_assets: Species_Assets;
  species_assets_aggregate: Species_Assets_Aggregate;
  species_assets_aggregate_bool_exp: Species_Assets_Aggregate_Bool_Exp;
  species_assets_aggregate_bool_exp_count: Species_Assets_Aggregate_Bool_Exp_Count;
  species_assets_aggregate_fields: Species_Assets_Aggregate_Fields;
  species_assets_aggregate_order_by: Species_Assets_Aggregate_Order_By;
  species_assets_arr_rel_insert_input: Species_Assets_Arr_Rel_Insert_Input;
  species_assets_bool_exp: Species_Assets_Bool_Exp;
  species_assets_insert_input: Species_Assets_Insert_Input;
  species_assets_max_fields: Species_Assets_Max_Fields;
  species_assets_max_order_by: Species_Assets_Max_Order_By;
  species_assets_min_fields: Species_Assets_Min_Fields;
  species_assets_min_order_by: Species_Assets_Min_Order_By;
  species_assets_mutation_response: Species_Assets_Mutation_Response;
  species_assets_obj_rel_insert_input: Species_Assets_Obj_Rel_Insert_Input;
  species_assets_on_conflict: Species_Assets_On_Conflict;
  species_assets_order_by: Species_Assets_Order_By;
  species_assets_pk_columns_input: Species_Assets_Pk_Columns_Input;
  species_assets_set_input: Species_Assets_Set_Input;
  species_assets_stream_cursor_input: Species_Assets_Stream_Cursor_Input;
  species_assets_stream_cursor_value_input: Species_Assets_Stream_Cursor_Value_Input;
  species_assets_updates: Species_Assets_Updates;
  species_bool_exp: Species_Bool_Exp;
  species_insert_input: Species_Insert_Input;
  species_max_fields: Species_Max_Fields;
  species_max_order_by: Species_Max_Order_By;
  species_min_fields: Species_Min_Fields;
  species_min_order_by: Species_Min_Order_By;
  species_mutation_response: Species_Mutation_Response;
  species_obj_rel_insert_input: Species_Obj_Rel_Insert_Input;
  species_on_conflict: Species_On_Conflict;
  species_order_by: Species_Order_By;
  species_percentage_view_with_world_id: Species_Percentage_View_With_World_Id;
  species_percentage_view_with_world_id_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  species_percentage_view_with_world_id_aggregate_bool_exp: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp;
  species_percentage_view_with_world_id_aggregate_bool_exp_count: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count;
  species_percentage_view_with_world_id_aggregate_fields: Species_Percentage_View_With_World_Id_Aggregate_Fields;
  species_percentage_view_with_world_id_aggregate_order_by: Species_Percentage_View_With_World_Id_Aggregate_Order_By;
  species_percentage_view_with_world_id_arr_rel_insert_input: Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input;
  species_percentage_view_with_world_id_avg_fields: Species_Percentage_View_With_World_Id_Avg_Fields;
  species_percentage_view_with_world_id_avg_order_by: Species_Percentage_View_With_World_Id_Avg_Order_By;
  species_percentage_view_with_world_id_bool_exp: Species_Percentage_View_With_World_Id_Bool_Exp;
  species_percentage_view_with_world_id_insert_input: Species_Percentage_View_With_World_Id_Insert_Input;
  species_percentage_view_with_world_id_max_fields: Species_Percentage_View_With_World_Id_Max_Fields;
  species_percentage_view_with_world_id_max_order_by: Species_Percentage_View_With_World_Id_Max_Order_By;
  species_percentage_view_with_world_id_min_fields: Species_Percentage_View_With_World_Id_Min_Fields;
  species_percentage_view_with_world_id_min_order_by: Species_Percentage_View_With_World_Id_Min_Order_By;
  species_percentage_view_with_world_id_order_by: Species_Percentage_View_With_World_Id_Order_By;
  species_percentage_view_with_world_id_stddev_fields: Species_Percentage_View_With_World_Id_Stddev_Fields;
  species_percentage_view_with_world_id_stddev_order_by: Species_Percentage_View_With_World_Id_Stddev_Order_By;
  species_percentage_view_with_world_id_stddev_pop_fields: Species_Percentage_View_With_World_Id_Stddev_Pop_Fields;
  species_percentage_view_with_world_id_stddev_pop_order_by: Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By;
  species_percentage_view_with_world_id_stddev_samp_fields: Species_Percentage_View_With_World_Id_Stddev_Samp_Fields;
  species_percentage_view_with_world_id_stddev_samp_order_by: Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By;
  species_percentage_view_with_world_id_stream_cursor_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Input;
  species_percentage_view_with_world_id_stream_cursor_value_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input;
  species_percentage_view_with_world_id_sum_fields: Species_Percentage_View_With_World_Id_Sum_Fields;
  species_percentage_view_with_world_id_sum_order_by: Species_Percentage_View_With_World_Id_Sum_Order_By;
  species_percentage_view_with_world_id_var_pop_fields: Species_Percentage_View_With_World_Id_Var_Pop_Fields;
  species_percentage_view_with_world_id_var_pop_order_by: Species_Percentage_View_With_World_Id_Var_Pop_Order_By;
  species_percentage_view_with_world_id_var_samp_fields: Species_Percentage_View_With_World_Id_Var_Samp_Fields;
  species_percentage_view_with_world_id_var_samp_order_by: Species_Percentage_View_With_World_Id_Var_Samp_Order_By;
  species_percentage_view_with_world_id_variance_fields: Species_Percentage_View_With_World_Id_Variance_Fields;
  species_percentage_view_with_world_id_variance_order_by: Species_Percentage_View_With_World_Id_Variance_Order_By;
  species_pk_columns_input: Species_Pk_Columns_Input;
  species_set_input: Species_Set_Input;
  species_stream_cursor_input: Species_Stream_Cursor_Input;
  species_stream_cursor_value_input: Species_Stream_Cursor_Value_Input;
  species_updates: Species_Updates;
  subscription_root: {};
  timestamptz: Scalars['timestamptz']['output'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_avg_fields: Users_Avg_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_inc_input: Users_Inc_Input;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  users_stddev_fields: Users_Stddev_Fields;
  users_stddev_pop_fields: Users_Stddev_Pop_Fields;
  users_stddev_samp_fields: Users_Stddev_Samp_Fields;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_sum_fields: Users_Sum_Fields;
  users_updates: Users_Updates;
  users_var_pop_fields: Users_Var_Pop_Fields;
  users_var_samp_fields: Users_Var_Samp_Fields;
  users_variance_fields: Users_Variance_Fields;
  uuid: Scalars['uuid']['output'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  world_arguments: World_Arguments;
  world_arguments_aggregate: World_Arguments_Aggregate;
  world_arguments_aggregate_bool_exp: World_Arguments_Aggregate_Bool_Exp;
  world_arguments_aggregate_bool_exp_count: World_Arguments_Aggregate_Bool_Exp_Count;
  world_arguments_aggregate_fields: World_Arguments_Aggregate_Fields;
  world_arguments_aggregate_order_by: World_Arguments_Aggregate_Order_By;
  world_arguments_arr_rel_insert_input: World_Arguments_Arr_Rel_Insert_Input;
  world_arguments_bool_exp: World_Arguments_Bool_Exp;
  world_arguments_insert_input: World_Arguments_Insert_Input;
  world_arguments_max_fields: World_Arguments_Max_Fields;
  world_arguments_max_order_by: World_Arguments_Max_Order_By;
  world_arguments_min_fields: World_Arguments_Min_Fields;
  world_arguments_min_order_by: World_Arguments_Min_Order_By;
  world_arguments_mutation_response: World_Arguments_Mutation_Response;
  world_arguments_on_conflict: World_Arguments_On_Conflict;
  world_arguments_order_by: World_Arguments_Order_By;
  world_arguments_pk_columns_input: World_Arguments_Pk_Columns_Input;
  world_arguments_set_input: World_Arguments_Set_Input;
  world_arguments_stream_cursor_input: World_Arguments_Stream_Cursor_Input;
  world_arguments_stream_cursor_value_input: World_Arguments_Stream_Cursor_Value_Input;
  world_arguments_updates: World_Arguments_Updates;
  world_categories: World_Categories;
  world_categories_aggregate: World_Categories_Aggregate;
  world_categories_aggregate_bool_exp: World_Categories_Aggregate_Bool_Exp;
  world_categories_aggregate_bool_exp_count: World_Categories_Aggregate_Bool_Exp_Count;
  world_categories_aggregate_fields: World_Categories_Aggregate_Fields;
  world_categories_aggregate_order_by: World_Categories_Aggregate_Order_By;
  world_categories_arr_rel_insert_input: World_Categories_Arr_Rel_Insert_Input;
  world_categories_bool_exp: World_Categories_Bool_Exp;
  world_categories_insert_input: World_Categories_Insert_Input;
  world_categories_max_fields: World_Categories_Max_Fields;
  world_categories_max_order_by: World_Categories_Max_Order_By;
  world_categories_min_fields: World_Categories_Min_Fields;
  world_categories_min_order_by: World_Categories_Min_Order_By;
  world_categories_mutation_response: World_Categories_Mutation_Response;
  world_categories_on_conflict: World_Categories_On_Conflict;
  world_categories_order_by: World_Categories_Order_By;
  world_categories_pk_columns_input: World_Categories_Pk_Columns_Input;
  world_categories_set_input: World_Categories_Set_Input;
  world_categories_stream_cursor_input: World_Categories_Stream_Cursor_Input;
  world_categories_stream_cursor_value_input: World_Categories_Stream_Cursor_Value_Input;
  world_categories_updates: World_Categories_Updates;
  world_chat_boxes: World_Chat_Boxes;
  world_chat_boxes_aggregate: World_Chat_Boxes_Aggregate;
  world_chat_boxes_aggregate_bool_exp: World_Chat_Boxes_Aggregate_Bool_Exp;
  world_chat_boxes_aggregate_bool_exp_count: World_Chat_Boxes_Aggregate_Bool_Exp_Count;
  world_chat_boxes_aggregate_fields: World_Chat_Boxes_Aggregate_Fields;
  world_chat_boxes_aggregate_order_by: World_Chat_Boxes_Aggregate_Order_By;
  world_chat_boxes_arr_rel_insert_input: World_Chat_Boxes_Arr_Rel_Insert_Input;
  world_chat_boxes_avg_fields: World_Chat_Boxes_Avg_Fields;
  world_chat_boxes_avg_order_by: World_Chat_Boxes_Avg_Order_By;
  world_chat_boxes_bool_exp: World_Chat_Boxes_Bool_Exp;
  world_chat_boxes_inc_input: World_Chat_Boxes_Inc_Input;
  world_chat_boxes_insert_input: World_Chat_Boxes_Insert_Input;
  world_chat_boxes_max_fields: World_Chat_Boxes_Max_Fields;
  world_chat_boxes_max_order_by: World_Chat_Boxes_Max_Order_By;
  world_chat_boxes_min_fields: World_Chat_Boxes_Min_Fields;
  world_chat_boxes_min_order_by: World_Chat_Boxes_Min_Order_By;
  world_chat_boxes_mutation_response: World_Chat_Boxes_Mutation_Response;
  world_chat_boxes_obj_rel_insert_input: World_Chat_Boxes_Obj_Rel_Insert_Input;
  world_chat_boxes_on_conflict: World_Chat_Boxes_On_Conflict;
  world_chat_boxes_order_by: World_Chat_Boxes_Order_By;
  world_chat_boxes_pk_columns_input: World_Chat_Boxes_Pk_Columns_Input;
  world_chat_boxes_set_input: World_Chat_Boxes_Set_Input;
  world_chat_boxes_stddev_fields: World_Chat_Boxes_Stddev_Fields;
  world_chat_boxes_stddev_order_by: World_Chat_Boxes_Stddev_Order_By;
  world_chat_boxes_stddev_pop_fields: World_Chat_Boxes_Stddev_Pop_Fields;
  world_chat_boxes_stddev_pop_order_by: World_Chat_Boxes_Stddev_Pop_Order_By;
  world_chat_boxes_stddev_samp_fields: World_Chat_Boxes_Stddev_Samp_Fields;
  world_chat_boxes_stddev_samp_order_by: World_Chat_Boxes_Stddev_Samp_Order_By;
  world_chat_boxes_stream_cursor_input: World_Chat_Boxes_Stream_Cursor_Input;
  world_chat_boxes_stream_cursor_value_input: World_Chat_Boxes_Stream_Cursor_Value_Input;
  world_chat_boxes_sum_fields: World_Chat_Boxes_Sum_Fields;
  world_chat_boxes_sum_order_by: World_Chat_Boxes_Sum_Order_By;
  world_chat_boxes_updates: World_Chat_Boxes_Updates;
  world_chat_boxes_var_pop_fields: World_Chat_Boxes_Var_Pop_Fields;
  world_chat_boxes_var_pop_order_by: World_Chat_Boxes_Var_Pop_Order_By;
  world_chat_boxes_var_samp_fields: World_Chat_Boxes_Var_Samp_Fields;
  world_chat_boxes_var_samp_order_by: World_Chat_Boxes_Var_Samp_Order_By;
  world_chat_boxes_variance_fields: World_Chat_Boxes_Variance_Fields;
  world_chat_boxes_variance_order_by: World_Chat_Boxes_Variance_Order_By;
  world_chats: World_Chats;
  world_chats_aggregate: World_Chats_Aggregate;
  world_chats_aggregate_bool_exp: World_Chats_Aggregate_Bool_Exp;
  world_chats_aggregate_bool_exp_count: World_Chats_Aggregate_Bool_Exp_Count;
  world_chats_aggregate_fields: World_Chats_Aggregate_Fields;
  world_chats_aggregate_order_by: World_Chats_Aggregate_Order_By;
  world_chats_arr_rel_insert_input: World_Chats_Arr_Rel_Insert_Input;
  world_chats_avg_fields: World_Chats_Avg_Fields;
  world_chats_avg_order_by: World_Chats_Avg_Order_By;
  world_chats_bool_exp: World_Chats_Bool_Exp;
  world_chats_inc_input: World_Chats_Inc_Input;
  world_chats_insert_input: World_Chats_Insert_Input;
  world_chats_max_fields: World_Chats_Max_Fields;
  world_chats_max_order_by: World_Chats_Max_Order_By;
  world_chats_min_fields: World_Chats_Min_Fields;
  world_chats_min_order_by: World_Chats_Min_Order_By;
  world_chats_mutation_response: World_Chats_Mutation_Response;
  world_chats_on_conflict: World_Chats_On_Conflict;
  world_chats_order_by: World_Chats_Order_By;
  world_chats_pk_columns_input: World_Chats_Pk_Columns_Input;
  world_chats_set_input: World_Chats_Set_Input;
  world_chats_stddev_fields: World_Chats_Stddev_Fields;
  world_chats_stddev_order_by: World_Chats_Stddev_Order_By;
  world_chats_stddev_pop_fields: World_Chats_Stddev_Pop_Fields;
  world_chats_stddev_pop_order_by: World_Chats_Stddev_Pop_Order_By;
  world_chats_stddev_samp_fields: World_Chats_Stddev_Samp_Fields;
  world_chats_stddev_samp_order_by: World_Chats_Stddev_Samp_Order_By;
  world_chats_stream_cursor_input: World_Chats_Stream_Cursor_Input;
  world_chats_stream_cursor_value_input: World_Chats_Stream_Cursor_Value_Input;
  world_chats_sum_fields: World_Chats_Sum_Fields;
  world_chats_sum_order_by: World_Chats_Sum_Order_By;
  world_chats_updates: World_Chats_Updates;
  world_chats_var_pop_fields: World_Chats_Var_Pop_Fields;
  world_chats_var_pop_order_by: World_Chats_Var_Pop_Order_By;
  world_chats_var_samp_fields: World_Chats_Var_Samp_Fields;
  world_chats_var_samp_order_by: World_Chats_Var_Samp_Order_By;
  world_chats_variance_fields: World_Chats_Variance_Fields;
  world_chats_variance_order_by: World_Chats_Variance_Order_By;
  world_citizens: World_Citizens;
  world_citizens_aggregate: World_Citizens_Aggregate;
  world_citizens_aggregate_bool_exp: World_Citizens_Aggregate_Bool_Exp;
  world_citizens_aggregate_bool_exp_count: World_Citizens_Aggregate_Bool_Exp_Count;
  world_citizens_aggregate_fields: World_Citizens_Aggregate_Fields;
  world_citizens_aggregate_order_by: World_Citizens_Aggregate_Order_By;
  world_citizens_arr_rel_insert_input: World_Citizens_Arr_Rel_Insert_Input;
  world_citizens_bool_exp: World_Citizens_Bool_Exp;
  world_citizens_insert_input: World_Citizens_Insert_Input;
  world_citizens_max_fields: World_Citizens_Max_Fields;
  world_citizens_max_order_by: World_Citizens_Max_Order_By;
  world_citizens_min_fields: World_Citizens_Min_Fields;
  world_citizens_min_order_by: World_Citizens_Min_Order_By;
  world_citizens_mutation_response: World_Citizens_Mutation_Response;
  world_citizens_on_conflict: World_Citizens_On_Conflict;
  world_citizens_order_by: World_Citizens_Order_By;
  world_citizens_pk_columns_input: World_Citizens_Pk_Columns_Input;
  world_citizens_set_input: World_Citizens_Set_Input;
  world_citizens_stream_cursor_input: World_Citizens_Stream_Cursor_Input;
  world_citizens_stream_cursor_value_input: World_Citizens_Stream_Cursor_Value_Input;
  world_citizens_updates: World_Citizens_Updates;
  world_comments: World_Comments;
  world_comments_aggregate: World_Comments_Aggregate;
  world_comments_aggregate_bool_exp: World_Comments_Aggregate_Bool_Exp;
  world_comments_aggregate_bool_exp_count: World_Comments_Aggregate_Bool_Exp_Count;
  world_comments_aggregate_fields: World_Comments_Aggregate_Fields;
  world_comments_aggregate_order_by: World_Comments_Aggregate_Order_By;
  world_comments_arr_rel_insert_input: World_Comments_Arr_Rel_Insert_Input;
  world_comments_avg_fields: World_Comments_Avg_Fields;
  world_comments_avg_order_by: World_Comments_Avg_Order_By;
  world_comments_bool_exp: World_Comments_Bool_Exp;
  world_comments_inc_input: World_Comments_Inc_Input;
  world_comments_insert_input: World_Comments_Insert_Input;
  world_comments_max_fields: World_Comments_Max_Fields;
  world_comments_max_order_by: World_Comments_Max_Order_By;
  world_comments_min_fields: World_Comments_Min_Fields;
  world_comments_min_order_by: World_Comments_Min_Order_By;
  world_comments_mutation_response: World_Comments_Mutation_Response;
  world_comments_on_conflict: World_Comments_On_Conflict;
  world_comments_order_by: World_Comments_Order_By;
  world_comments_pk_columns_input: World_Comments_Pk_Columns_Input;
  world_comments_set_input: World_Comments_Set_Input;
  world_comments_stddev_fields: World_Comments_Stddev_Fields;
  world_comments_stddev_order_by: World_Comments_Stddev_Order_By;
  world_comments_stddev_pop_fields: World_Comments_Stddev_Pop_Fields;
  world_comments_stddev_pop_order_by: World_Comments_Stddev_Pop_Order_By;
  world_comments_stddev_samp_fields: World_Comments_Stddev_Samp_Fields;
  world_comments_stddev_samp_order_by: World_Comments_Stddev_Samp_Order_By;
  world_comments_stream_cursor_input: World_Comments_Stream_Cursor_Input;
  world_comments_stream_cursor_value_input: World_Comments_Stream_Cursor_Value_Input;
  world_comments_sum_fields: World_Comments_Sum_Fields;
  world_comments_sum_order_by: World_Comments_Sum_Order_By;
  world_comments_updates: World_Comments_Updates;
  world_comments_var_pop_fields: World_Comments_Var_Pop_Fields;
  world_comments_var_pop_order_by: World_Comments_Var_Pop_Order_By;
  world_comments_var_samp_fields: World_Comments_Var_Samp_Fields;
  world_comments_var_samp_order_by: World_Comments_Var_Samp_Order_By;
  world_comments_variance_fields: World_Comments_Variance_Fields;
  world_comments_variance_order_by: World_Comments_Variance_Order_By;
  world_editable_users: World_Editable_Users;
  world_editable_users_aggregate: World_Editable_Users_Aggregate;
  world_editable_users_aggregate_bool_exp: World_Editable_Users_Aggregate_Bool_Exp;
  world_editable_users_aggregate_bool_exp_count: World_Editable_Users_Aggregate_Bool_Exp_Count;
  world_editable_users_aggregate_fields: World_Editable_Users_Aggregate_Fields;
  world_editable_users_aggregate_order_by: World_Editable_Users_Aggregate_Order_By;
  world_editable_users_arr_rel_insert_input: World_Editable_Users_Arr_Rel_Insert_Input;
  world_editable_users_avg_fields: World_Editable_Users_Avg_Fields;
  world_editable_users_avg_order_by: World_Editable_Users_Avg_Order_By;
  world_editable_users_bool_exp: World_Editable_Users_Bool_Exp;
  world_editable_users_inc_input: World_Editable_Users_Inc_Input;
  world_editable_users_insert_input: World_Editable_Users_Insert_Input;
  world_editable_users_max_fields: World_Editable_Users_Max_Fields;
  world_editable_users_max_order_by: World_Editable_Users_Max_Order_By;
  world_editable_users_min_fields: World_Editable_Users_Min_Fields;
  world_editable_users_min_order_by: World_Editable_Users_Min_Order_By;
  world_editable_users_mutation_response: World_Editable_Users_Mutation_Response;
  world_editable_users_on_conflict: World_Editable_Users_On_Conflict;
  world_editable_users_order_by: World_Editable_Users_Order_By;
  world_editable_users_pk_columns_input: World_Editable_Users_Pk_Columns_Input;
  world_editable_users_set_input: World_Editable_Users_Set_Input;
  world_editable_users_stddev_fields: World_Editable_Users_Stddev_Fields;
  world_editable_users_stddev_order_by: World_Editable_Users_Stddev_Order_By;
  world_editable_users_stddev_pop_fields: World_Editable_Users_Stddev_Pop_Fields;
  world_editable_users_stddev_pop_order_by: World_Editable_Users_Stddev_Pop_Order_By;
  world_editable_users_stddev_samp_fields: World_Editable_Users_Stddev_Samp_Fields;
  world_editable_users_stddev_samp_order_by: World_Editable_Users_Stddev_Samp_Order_By;
  world_editable_users_stream_cursor_input: World_Editable_Users_Stream_Cursor_Input;
  world_editable_users_stream_cursor_value_input: World_Editable_Users_Stream_Cursor_Value_Input;
  world_editable_users_sum_fields: World_Editable_Users_Sum_Fields;
  world_editable_users_sum_order_by: World_Editable_Users_Sum_Order_By;
  world_editable_users_updates: World_Editable_Users_Updates;
  world_editable_users_var_pop_fields: World_Editable_Users_Var_Pop_Fields;
  world_editable_users_var_pop_order_by: World_Editable_Users_Var_Pop_Order_By;
  world_editable_users_var_samp_fields: World_Editable_Users_Var_Samp_Fields;
  world_editable_users_var_samp_order_by: World_Editable_Users_Var_Samp_Order_By;
  world_editable_users_variance_fields: World_Editable_Users_Variance_Fields;
  world_editable_users_variance_order_by: World_Editable_Users_Variance_Order_By;
  world_histories: World_Histories;
  world_histories_aggregate: World_Histories_Aggregate;
  world_histories_aggregate_bool_exp: World_Histories_Aggregate_Bool_Exp;
  world_histories_aggregate_bool_exp_count: World_Histories_Aggregate_Bool_Exp_Count;
  world_histories_aggregate_fields: World_Histories_Aggregate_Fields;
  world_histories_aggregate_order_by: World_Histories_Aggregate_Order_By;
  world_histories_arr_rel_insert_input: World_Histories_Arr_Rel_Insert_Input;
  world_histories_avg_fields: World_Histories_Avg_Fields;
  world_histories_avg_order_by: World_Histories_Avg_Order_By;
  world_histories_bool_exp: World_Histories_Bool_Exp;
  world_histories_inc_input: World_Histories_Inc_Input;
  world_histories_insert_input: World_Histories_Insert_Input;
  world_histories_max_fields: World_Histories_Max_Fields;
  world_histories_max_order_by: World_Histories_Max_Order_By;
  world_histories_min_fields: World_Histories_Min_Fields;
  world_histories_min_order_by: World_Histories_Min_Order_By;
  world_histories_mutation_response: World_Histories_Mutation_Response;
  world_histories_on_conflict: World_Histories_On_Conflict;
  world_histories_order_by: World_Histories_Order_By;
  world_histories_pk_columns_input: World_Histories_Pk_Columns_Input;
  world_histories_set_input: World_Histories_Set_Input;
  world_histories_stddev_fields: World_Histories_Stddev_Fields;
  world_histories_stddev_order_by: World_Histories_Stddev_Order_By;
  world_histories_stddev_pop_fields: World_Histories_Stddev_Pop_Fields;
  world_histories_stddev_pop_order_by: World_Histories_Stddev_Pop_Order_By;
  world_histories_stddev_samp_fields: World_Histories_Stddev_Samp_Fields;
  world_histories_stddev_samp_order_by: World_Histories_Stddev_Samp_Order_By;
  world_histories_stream_cursor_input: World_Histories_Stream_Cursor_Input;
  world_histories_stream_cursor_value_input: World_Histories_Stream_Cursor_Value_Input;
  world_histories_sum_fields: World_Histories_Sum_Fields;
  world_histories_sum_order_by: World_Histories_Sum_Order_By;
  world_histories_updates: World_Histories_Updates;
  world_histories_var_pop_fields: World_Histories_Var_Pop_Fields;
  world_histories_var_pop_order_by: World_Histories_Var_Pop_Order_By;
  world_histories_var_samp_fields: World_Histories_Var_Samp_Fields;
  world_histories_var_samp_order_by: World_Histories_Var_Samp_Order_By;
  world_histories_variance_fields: World_Histories_Variance_Fields;
  world_histories_variance_order_by: World_Histories_Variance_Order_By;
  world_laws: World_Laws;
  world_laws_aggregate: World_Laws_Aggregate;
  world_laws_aggregate_bool_exp: World_Laws_Aggregate_Bool_Exp;
  world_laws_aggregate_bool_exp_count: World_Laws_Aggregate_Bool_Exp_Count;
  world_laws_aggregate_fields: World_Laws_Aggregate_Fields;
  world_laws_aggregate_order_by: World_Laws_Aggregate_Order_By;
  world_laws_arr_rel_insert_input: World_Laws_Arr_Rel_Insert_Input;
  world_laws_bool_exp: World_Laws_Bool_Exp;
  world_laws_insert_input: World_Laws_Insert_Input;
  world_laws_max_fields: World_Laws_Max_Fields;
  world_laws_max_order_by: World_Laws_Max_Order_By;
  world_laws_min_fields: World_Laws_Min_Fields;
  world_laws_min_order_by: World_Laws_Min_Order_By;
  world_laws_mutation_response: World_Laws_Mutation_Response;
  world_laws_on_conflict: World_Laws_On_Conflict;
  world_laws_order_by: World_Laws_Order_By;
  world_laws_pk_columns_input: World_Laws_Pk_Columns_Input;
  world_laws_set_input: World_Laws_Set_Input;
  world_laws_stream_cursor_input: World_Laws_Stream_Cursor_Input;
  world_laws_stream_cursor_value_input: World_Laws_Stream_Cursor_Value_Input;
  world_laws_updates: World_Laws_Updates;
  world_reactions: World_Reactions;
  world_reactions_aggregate: World_Reactions_Aggregate;
  world_reactions_aggregate_bool_exp: World_Reactions_Aggregate_Bool_Exp;
  world_reactions_aggregate_bool_exp_count: World_Reactions_Aggregate_Bool_Exp_Count;
  world_reactions_aggregate_fields: World_Reactions_Aggregate_Fields;
  world_reactions_aggregate_order_by: World_Reactions_Aggregate_Order_By;
  world_reactions_arr_rel_insert_input: World_Reactions_Arr_Rel_Insert_Input;
  world_reactions_avg_fields: World_Reactions_Avg_Fields;
  world_reactions_avg_order_by: World_Reactions_Avg_Order_By;
  world_reactions_bool_exp: World_Reactions_Bool_Exp;
  world_reactions_inc_input: World_Reactions_Inc_Input;
  world_reactions_insert_input: World_Reactions_Insert_Input;
  world_reactions_max_fields: World_Reactions_Max_Fields;
  world_reactions_max_order_by: World_Reactions_Max_Order_By;
  world_reactions_min_fields: World_Reactions_Min_Fields;
  world_reactions_min_order_by: World_Reactions_Min_Order_By;
  world_reactions_mutation_response: World_Reactions_Mutation_Response;
  world_reactions_on_conflict: World_Reactions_On_Conflict;
  world_reactions_order_by: World_Reactions_Order_By;
  world_reactions_pk_columns_input: World_Reactions_Pk_Columns_Input;
  world_reactions_set_input: World_Reactions_Set_Input;
  world_reactions_stddev_fields: World_Reactions_Stddev_Fields;
  world_reactions_stddev_order_by: World_Reactions_Stddev_Order_By;
  world_reactions_stddev_pop_fields: World_Reactions_Stddev_Pop_Fields;
  world_reactions_stddev_pop_order_by: World_Reactions_Stddev_Pop_Order_By;
  world_reactions_stddev_samp_fields: World_Reactions_Stddev_Samp_Fields;
  world_reactions_stddev_samp_order_by: World_Reactions_Stddev_Samp_Order_By;
  world_reactions_stream_cursor_input: World_Reactions_Stream_Cursor_Input;
  world_reactions_stream_cursor_value_input: World_Reactions_Stream_Cursor_Value_Input;
  world_reactions_sum_fields: World_Reactions_Sum_Fields;
  world_reactions_sum_order_by: World_Reactions_Sum_Order_By;
  world_reactions_updates: World_Reactions_Updates;
  world_reactions_var_pop_fields: World_Reactions_Var_Pop_Fields;
  world_reactions_var_pop_order_by: World_Reactions_Var_Pop_Order_By;
  world_reactions_var_samp_fields: World_Reactions_Var_Samp_Fields;
  world_reactions_var_samp_order_by: World_Reactions_Var_Samp_Order_By;
  world_reactions_variance_fields: World_Reactions_Variance_Fields;
  world_reactions_variance_order_by: World_Reactions_Variance_Order_By;
  worlds: Worlds;
  worlds_aggregate: Worlds_Aggregate;
  worlds_aggregate_bool_exp: Worlds_Aggregate_Bool_Exp;
  worlds_aggregate_bool_exp_count: Worlds_Aggregate_Bool_Exp_Count;
  worlds_aggregate_fields: Worlds_Aggregate_Fields;
  worlds_aggregate_order_by: Worlds_Aggregate_Order_By;
  worlds_arr_rel_insert_input: Worlds_Arr_Rel_Insert_Input;
  worlds_avg_fields: Worlds_Avg_Fields;
  worlds_avg_order_by: Worlds_Avg_Order_By;
  worlds_bool_exp: Worlds_Bool_Exp;
  worlds_inc_input: Worlds_Inc_Input;
  worlds_insert_input: Worlds_Insert_Input;
  worlds_max_fields: Worlds_Max_Fields;
  worlds_max_order_by: Worlds_Max_Order_By;
  worlds_min_fields: Worlds_Min_Fields;
  worlds_min_order_by: Worlds_Min_Order_By;
  worlds_mutation_response: Worlds_Mutation_Response;
  worlds_obj_rel_insert_input: Worlds_Obj_Rel_Insert_Input;
  worlds_on_conflict: Worlds_On_Conflict;
  worlds_order_by: Worlds_Order_By;
  worlds_pk_columns_input: Worlds_Pk_Columns_Input;
  worlds_set_input: Worlds_Set_Input;
  worlds_stddev_fields: Worlds_Stddev_Fields;
  worlds_stddev_order_by: Worlds_Stddev_Order_By;
  worlds_stddev_pop_fields: Worlds_Stddev_Pop_Fields;
  worlds_stddev_pop_order_by: Worlds_Stddev_Pop_Order_By;
  worlds_stddev_samp_fields: Worlds_Stddev_Samp_Fields;
  worlds_stddev_samp_order_by: Worlds_Stddev_Samp_Order_By;
  worlds_stream_cursor_input: Worlds_Stream_Cursor_Input;
  worlds_stream_cursor_value_input: Worlds_Stream_Cursor_Value_Input;
  worlds_sum_fields: Worlds_Sum_Fields;
  worlds_sum_order_by: Worlds_Sum_Order_By;
  worlds_updates: Worlds_Updates;
  worlds_var_pop_fields: Worlds_Var_Pop_Fields;
  worlds_var_pop_order_by: Worlds_Var_Pop_Order_By;
  worlds_var_samp_fields: Worlds_Var_Samp_Fields;
  worlds_var_samp_order_by: Worlds_Var_Samp_Order_By;
  worlds_variance_fields: Worlds_Variance_Fields;
  worlds_variance_order_by: Worlds_Variance_Order_By;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean']['input'];
  ttl?: Scalars['Int']['input'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type _ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = {
  sdl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_ChatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats'] = ResolversParentTypes['argumen_chats']> = {
  argument_chat_box?: Resolver<ResolversTypes['argument_chat_boxes'], ParentType, ContextType>;
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  chat_box_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_aggregate'] = ResolversParentTypes['argumen_chats_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['argumen_chats_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['argumen_chats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_aggregate_fields'] = ResolversParentTypes['argumen_chats_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['argumen_chats_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Argumen_Chats_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['argumen_chats_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['argumen_chats_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['argumen_chats_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['argumen_chats_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['argumen_chats_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['argumen_chats_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['argumen_chats_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['argumen_chats_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['argumen_chats_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_avg_fields'] = ResolversParentTypes['argumen_chats_avg_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_max_fields'] = ResolversParentTypes['argumen_chats_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  chat_box_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_min_fields'] = ResolversParentTypes['argumen_chats_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  chat_box_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_mutation_response'] = ResolversParentTypes['argumen_chats_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['argumen_chats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_stddev_fields'] = ResolversParentTypes['argumen_chats_stddev_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_stddev_pop_fields'] = ResolversParentTypes['argumen_chats_stddev_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_stddev_samp_fields'] = ResolversParentTypes['argumen_chats_stddev_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_sum_fields'] = ResolversParentTypes['argumen_chats_sum_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_var_pop_fields'] = ResolversParentTypes['argumen_chats_var_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_var_samp_fields'] = ResolversParentTypes['argumen_chats_var_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argumen_Chats_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argumen_chats_variance_fields'] = ResolversParentTypes['argumen_chats_variance_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Chat_BoxesResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_chat_boxes'] = ResolversParentTypes['argument_chat_boxes']> = {
  argumen_chats?: Resolver<Array<ResolversTypes['argumen_chats']>, ParentType, ContextType, Partial<Argument_Chat_BoxesArgumen_ChatsArgs>>;
  argumen_chats_aggregate?: Resolver<ResolversTypes['argumen_chats_aggregate'], ParentType, ContextType, Partial<Argument_Chat_BoxesArgumen_Chats_AggregateArgs>>;
  argument?: Resolver<ResolversTypes['arguments'], ParentType, ContextType>;
  argument_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  desctiption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Chat_Boxes_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_chat_boxes_aggregate'] = ResolversParentTypes['argument_chat_boxes_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['argument_chat_boxes_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Chat_Boxes_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_chat_boxes_aggregate_fields'] = ResolversParentTypes['argument_chat_boxes_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Argument_Chat_Boxes_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['argument_chat_boxes_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['argument_chat_boxes_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Chat_Boxes_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_chat_boxes_max_fields'] = ResolversParentTypes['argument_chat_boxes_max_fields']> = {
  argument_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  desctiption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Chat_Boxes_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_chat_boxes_min_fields'] = ResolversParentTypes['argument_chat_boxes_min_fields']> = {
  argument_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  desctiption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Chat_Boxes_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_chat_boxes_mutation_response'] = ResolversParentTypes['argument_chat_boxes_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_ViewsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_views'] = ResolversParentTypes['argument_views']> = {
  argument?: Resolver<ResolversTypes['arguments'], ParentType, ContextType>;
  argument_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Views_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_views_aggregate'] = ResolversParentTypes['argument_views_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['argument_views_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['argument_views']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Views_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_views_aggregate_fields'] = ResolversParentTypes['argument_views_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Argument_Views_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['argument_views_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['argument_views_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Views_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_views_max_fields'] = ResolversParentTypes['argument_views_max_fields']> = {
  argument_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Views_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_views_min_fields'] = ResolversParentTypes['argument_views_min_fields']> = {
  argument_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Argument_Views_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['argument_views_mutation_response'] = ResolversParentTypes['argument_views_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['argument_views']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArgumentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['arguments'] = ResolversParentTypes['arguments']> = {
  argument_chat_boxes?: Resolver<Array<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType, Partial<ArgumentsArgument_Chat_BoxesArgs>>;
  argument_chat_boxes_aggregate?: Resolver<ResolversTypes['argument_chat_boxes_aggregate'], ParentType, ContextType, Partial<ArgumentsArgument_Chat_Boxes_AggregateArgs>>;
  argument_views?: Resolver<Array<ResolversTypes['argument_views']>, ParentType, ContextType, Partial<ArgumentsArgument_ViewsArgs>>;
  argument_views_aggregate?: Resolver<ResolversTypes['argument_views_aggregate'], ParentType, ContextType, Partial<ArgumentsArgument_Views_AggregateArgs>>;
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world_arguments?: Resolver<Array<ResolversTypes['world_arguments']>, ParentType, ContextType, Partial<ArgumentsWorld_ArgumentsArgs>>;
  world_arguments_aggregate?: Resolver<ResolversTypes['world_arguments_aggregate'], ParentType, ContextType, Partial<ArgumentsWorld_Arguments_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Arguments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['arguments_aggregate'] = ResolversParentTypes['arguments_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['arguments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['arguments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Arguments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['arguments_aggregate_fields'] = ResolversParentTypes['arguments_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Arguments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['arguments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['arguments_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Arguments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['arguments_max_fields'] = ResolversParentTypes['arguments_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Arguments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['arguments_min_fields'] = ResolversParentTypes['arguments_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Arguments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['arguments_mutation_response'] = ResolversParentTypes['arguments_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['arguments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizen_HistoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizen_histories'] = ResolversParentTypes['citizen_histories']> = {
  citizen?: Resolver<ResolversTypes['citizens'], ParentType, ContextType>;
  citizen_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizen_Histories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizen_histories_aggregate'] = ResolversParentTypes['citizen_histories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['citizen_histories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['citizen_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizen_Histories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizen_histories_aggregate_fields'] = ResolversParentTypes['citizen_histories_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Citizen_Histories_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['citizen_histories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['citizen_histories_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizen_Histories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizen_histories_max_fields'] = ResolversParentTypes['citizen_histories_max_fields']> = {
  citizen_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizen_Histories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizen_histories_min_fields'] = ResolversParentTypes['citizen_histories_min_fields']> = {
  citizen_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizen_Histories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizen_histories_mutation_response'] = ResolversParentTypes['citizen_histories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['citizen_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitizensResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens'] = ResolversParentTypes['citizens']> = {
  body_setting?: Resolver<ResolversTypes['jsonb'], ParentType, ContextType, Partial<CitizensBody_SettingArgs>>;
  citizen_histories?: Resolver<Array<ResolversTypes['citizen_histories']>, ParentType, ContextType, Partial<CitizensCitizen_HistoriesArgs>>;
  citizen_histories_aggregate?: Resolver<ResolversTypes['citizen_histories_aggregate'], ParentType, ContextType, Partial<CitizensCitizen_Histories_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species_asset?: Resolver<ResolversTypes['species_assets'], ParentType, ContextType>;
  species_asset_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world_citizens?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType, Partial<CitizensWorld_CitizensArgs>>;
  world_citizens_aggregate?: Resolver<ResolversTypes['world_citizens_aggregate'], ParentType, ContextType, Partial<CitizensWorld_Citizens_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_aggregate'] = ResolversParentTypes['citizens_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['citizens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_aggregate_fields'] = ResolversParentTypes['citizens_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['citizens_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Citizens_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['citizens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['citizens_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['citizens_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['citizens_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['citizens_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['citizens_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['citizens_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['citizens_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['citizens_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_avg_fields'] = ResolversParentTypes['citizens_avg_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_max_fields'] = ResolversParentTypes['citizens_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species_asset_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_min_fields'] = ResolversParentTypes['citizens_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species_asset_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_mutation_response'] = ResolversParentTypes['citizens_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_stddev_fields'] = ResolversParentTypes['citizens_stddev_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_stddev_pop_fields'] = ResolversParentTypes['citizens_stddev_pop_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_stddev_samp_fields'] = ResolversParentTypes['citizens_stddev_samp_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_sum_fields'] = ResolversParentTypes['citizens_sum_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_var_pop_fields'] = ResolversParentTypes['citizens_var_pop_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_var_samp_fields'] = ResolversParentTypes['citizens_var_samp_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_variance_fields'] = ResolversParentTypes['citizens_variance_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export interface JsonbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['jsonb'], any> {
  name: 'jsonb';
}

export type Law_CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_categories'] = ResolversParentTypes['law_categories']> = {
  category_ja?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  law_revisions?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType, Partial<Law_CategoriesLaw_RevisionsArgs>>;
  law_revisions_aggregate?: Resolver<ResolversTypes['law_revisions_aggregate'], ParentType, ContextType, Partial<Law_CategoriesLaw_Revisions_AggregateArgs>>;
  world_categories?: Resolver<Array<ResolversTypes['world_categories']>, ParentType, ContextType, Partial<Law_CategoriesWorld_CategoriesArgs>>;
  world_categories_aggregate?: Resolver<ResolversTypes['world_categories_aggregate'], ParentType, ContextType, Partial<Law_CategoriesWorld_Categories_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Categories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_categories_aggregate'] = ResolversParentTypes['law_categories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_categories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Categories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_categories_aggregate_fields'] = ResolversParentTypes['law_categories_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Categories_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_categories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_categories_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Categories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_categories_max_fields'] = ResolversParentTypes['law_categories_max_fields']> = {
  category_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Categories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_categories_min_fields'] = ResolversParentTypes['law_categories_min_fields']> = {
  category_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Categories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_categories_mutation_response'] = ResolversParentTypes['law_categories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revision_ColumnsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revision_columns'] = ResolversParentTypes['law_revision_columns']> = {
  column_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  column_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law_revision?: Resolver<ResolversTypes['law_revisions'], ParentType, ContextType>;
  law_revision_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revision_Columns_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revision_columns_aggregate'] = ResolversParentTypes['law_revision_columns_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_revision_columns_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_revision_columns']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revision_Columns_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revision_columns_aggregate_fields'] = ResolversParentTypes['law_revision_columns_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Revision_Columns_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_revision_columns_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_revision_columns_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revision_Columns_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revision_columns_max_fields'] = ResolversParentTypes['law_revision_columns_max_fields']> = {
  column_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  column_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_revision_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revision_Columns_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revision_columns_min_fields'] = ResolversParentTypes['law_revision_columns_min_fields']> = {
  column_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  column_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_revision_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revision_Columns_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revision_columns_mutation_response'] = ResolversParentTypes['law_revision_columns_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_revision_columns']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_RevisionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions'] = ResolversParentTypes['law_revisions']> = {
  abbrev?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  abbrev_kana?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  abbrev_kana_seion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ad_year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  api_law_data_info?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  api_law_revision_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  api_law_type_num?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enforcement_comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enforcement_date?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  era?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_category?: Resolver<ResolversTypes['law_categories'], ParentType, ContextType>;
  law_full_text?: Resolver<ResolversTypes['jsonb'], ParentType, ContextType, Partial<Law_RevisionsLaw_Full_TextArgs>>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law_revision_columns?: Resolver<Array<ResolversTypes['law_revision_columns']>, ParentType, ContextType, Partial<Law_RevisionsLaw_Revision_ColumnsArgs>>;
  law_revision_columns_aggregate?: Resolver<ResolversTypes['law_revision_columns_aggregate'], ParentType, ContextType, Partial<Law_RevisionsLaw_Revision_Columns_AggregateArgs>>;
  law_status?: Resolver<ResolversTypes['law_statuses'], ParentType, ContextType>;
  law_type?: Resolver<ResolversTypes['law_types'], ParentType, ContextType>;
  mission?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  num?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  num_kanji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title_kana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title_kana_seion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  promulgate_day?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  promulgate_month?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  remain_in_force?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  repeal_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title_kana?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title_kana_seion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_aggregate'] = ResolversParentTypes['law_revisions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_revisions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_aggregate_fields'] = ResolversParentTypes['law_revisions_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Revisions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_revisions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_revisions_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_max_fields'] = ResolversParentTypes['law_revisions_max_fields']> = {
  abbrev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  abbrev_kana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  abbrev_kana_seion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ad_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_law_data_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_law_revision_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_law_type_num?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enforcement_comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enforcement_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  era?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  mission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  num?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  num_kanji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title_kana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title_kana_seion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promulgate_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promulgate_month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remain_in_force?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repeal_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_kana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_kana_seion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_min_fields'] = ResolversParentTypes['law_revisions_min_fields']> = {
  abbrev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  abbrev_kana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  abbrev_kana_seion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ad_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_law_data_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_law_revision_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  api_law_type_num?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enforcement_comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enforcement_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  era?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  mission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  num?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  num_kanji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title_kana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_law_title_kana_seion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promulgate_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promulgate_month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remain_in_force?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repeal_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_kana?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_kana_seion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_mutation_response'] = ResolversParentTypes['law_revisions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_StatusesResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_statuses'] = ResolversParentTypes['law_statuses']> = {
  law_revisions?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType, Partial<Law_StatusesLaw_RevisionsArgs>>;
  law_revisions_aggregate?: Resolver<ResolversTypes['law_revisions_aggregate'], ParentType, ContextType, Partial<Law_StatusesLaw_Revisions_AggregateArgs>>;
  status_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status_ja?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Statuses_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_statuses_aggregate'] = ResolversParentTypes['law_statuses_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_statuses_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_statuses']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Statuses_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_statuses_aggregate_fields'] = ResolversParentTypes['law_statuses_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Statuses_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_statuses_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_statuses_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Statuses_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_statuses_max_fields'] = ResolversParentTypes['law_statuses_max_fields']> = {
  status_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Statuses_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_statuses_min_fields'] = ResolversParentTypes['law_statuses_min_fields']> = {
  status_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Statuses_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_statuses_mutation_response'] = ResolversParentTypes['law_statuses_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_statuses']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_SummariesResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_summaries'] = ResolversParentTypes['law_summaries']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Summaries_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_summaries_aggregate'] = ResolversParentTypes['law_summaries_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_summaries_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_summaries']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Summaries_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_summaries_aggregate_fields'] = ResolversParentTypes['law_summaries_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Summaries_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_summaries_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_summaries_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Summaries_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_summaries_max_fields'] = ResolversParentTypes['law_summaries_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Summaries_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_summaries_min_fields'] = ResolversParentTypes['law_summaries_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Summaries_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_summaries_mutation_response'] = ResolversParentTypes['law_summaries_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_summaries']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_TypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_types'] = ResolversParentTypes['law_types']> = {
  law_revisions?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType, Partial<Law_TypesLaw_RevisionsArgs>>;
  law_revisions_aggregate?: Resolver<ResolversTypes['law_revisions_aggregate'], ParentType, ContextType, Partial<Law_TypesLaw_Revisions_AggregateArgs>>;
  type_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type_ja?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Types_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_types_aggregate'] = ResolversParentTypes['law_types_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_types_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_types']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Types_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_types_aggregate_fields'] = ResolversParentTypes['law_types_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Types_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_types_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_types_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Types_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_types_max_fields'] = ResolversParentTypes['law_types_max_fields']> = {
  type_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Types_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_types_min_fields'] = ResolversParentTypes['law_types_min_fields']> = {
  type_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Types_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_types_mutation_response'] = ResolversParentTypes['law_types_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_types']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_ViewsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_views'] = ResolversParentTypes['law_views']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Views_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_views_aggregate'] = ResolversParentTypes['law_views_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_views_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_views']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Views_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_views_aggregate_fields'] = ResolversParentTypes['law_views_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Views_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_views_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_views_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Views_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_views_max_fields'] = ResolversParentTypes['law_views_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Views_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_views_min_fields'] = ResolversParentTypes['law_views_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Views_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_views_mutation_response'] = ResolversParentTypes['law_views_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_views']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LawsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws'] = ResolversParentTypes['laws']> = {
  api_law_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  arguments?: Resolver<Array<ResolversTypes['arguments']>, ParentType, ContextType, Partial<LawsArgumentsArgs>>;
  arguments_aggregate?: Resolver<ResolversTypes['arguments_aggregate'], ParentType, ContextType, Partial<LawsArguments_AggregateArgs>>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law_revisions?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType, Partial<LawsLaw_RevisionsArgs>>;
  law_revisions_aggregate?: Resolver<ResolversTypes['law_revisions_aggregate'], ParentType, ContextType, Partial<LawsLaw_Revisions_AggregateArgs>>;
  law_summaries?: Resolver<Array<ResolversTypes['law_summaries']>, ParentType, ContextType, Partial<LawsLaw_SummariesArgs>>;
  law_summaries_aggregate?: Resolver<ResolversTypes['law_summaries_aggregate'], ParentType, ContextType, Partial<LawsLaw_Summaries_AggregateArgs>>;
  law_views?: Resolver<Array<ResolversTypes['law_views']>, ParentType, ContextType, Partial<LawsLaw_ViewsArgs>>;
  law_views_aggregate?: Resolver<ResolversTypes['law_views_aggregate'], ParentType, ContextType, Partial<LawsLaw_Views_AggregateArgs>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  world_laws?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType, Partial<LawsWorld_LawsArgs>>;
  world_laws_aggregate?: Resolver<ResolversTypes['world_laws_aggregate'], ParentType, ContextType, Partial<LawsWorld_Laws_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_aggregate'] = ResolversParentTypes['laws_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['laws_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_aggregate_fields'] = ResolversParentTypes['laws_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Laws_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['laws_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['laws_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_max_fields'] = ResolversParentTypes['laws_max_fields']> = {
  api_law_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_min_fields'] = ResolversParentTypes['laws_min_fields']> = {
  api_law_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_mutation_response'] = ResolversParentTypes['laws_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_argumen_chats?: Resolver<Maybe<ResolversTypes['argumen_chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Argumen_ChatsArgs, 'where'>>;
  delete_argumen_chats_by_pk?: Resolver<Maybe<ResolversTypes['argumen_chats']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Argumen_Chats_By_PkArgs, 'id'>>;
  delete_argument_chat_boxes?: Resolver<Maybe<ResolversTypes['argument_chat_boxes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Argument_Chat_BoxesArgs, 'where'>>;
  delete_argument_chat_boxes_by_pk?: Resolver<Maybe<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Argument_Chat_Boxes_By_PkArgs, 'id'>>;
  delete_argument_views?: Resolver<Maybe<ResolversTypes['argument_views_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Argument_ViewsArgs, 'where'>>;
  delete_argument_views_by_pk?: Resolver<Maybe<ResolversTypes['argument_views']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Argument_Views_By_PkArgs, 'argument_id' | 'user_id'>>;
  delete_arguments?: Resolver<Maybe<ResolversTypes['arguments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ArgumentsArgs, 'where'>>;
  delete_arguments_by_pk?: Resolver<Maybe<ResolversTypes['arguments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Arguments_By_PkArgs, 'id'>>;
  delete_citizen_histories?: Resolver<Maybe<ResolversTypes['citizen_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Citizen_HistoriesArgs, 'where'>>;
  delete_citizen_histories_by_pk?: Resolver<Maybe<ResolversTypes['citizen_histories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Citizen_Histories_By_PkArgs, 'id'>>;
  delete_citizens?: Resolver<Maybe<ResolversTypes['citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CitizensArgs, 'where'>>;
  delete_citizens_by_pk?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Citizens_By_PkArgs, 'id'>>;
  delete_law_categories?: Resolver<Maybe<ResolversTypes['law_categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_CategoriesArgs, 'where'>>;
  delete_law_categories_by_pk?: Resolver<Maybe<ResolversTypes['law_categories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Categories_By_PkArgs, 'category_ja'>>;
  delete_law_revision_columns?: Resolver<Maybe<ResolversTypes['law_revision_columns_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Revision_ColumnsArgs, 'where'>>;
  delete_law_revision_columns_by_pk?: Resolver<Maybe<ResolversTypes['law_revision_columns']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Revision_Columns_By_PkArgs, 'column_id' | 'law_revision_id'>>;
  delete_law_revisions?: Resolver<Maybe<ResolversTypes['law_revisions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_RevisionsArgs, 'where'>>;
  delete_law_revisions_by_pk?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Revisions_By_PkArgs, 'id'>>;
  delete_law_statuses?: Resolver<Maybe<ResolversTypes['law_statuses_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_StatusesArgs, 'where'>>;
  delete_law_statuses_by_pk?: Resolver<Maybe<ResolversTypes['law_statuses']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Statuses_By_PkArgs, 'status_en'>>;
  delete_law_summaries?: Resolver<Maybe<ResolversTypes['law_summaries_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_SummariesArgs, 'where'>>;
  delete_law_summaries_by_pk?: Resolver<Maybe<ResolversTypes['law_summaries']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Summaries_By_PkArgs, 'id'>>;
  delete_law_types?: Resolver<Maybe<ResolversTypes['law_types_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_TypesArgs, 'where'>>;
  delete_law_types_by_pk?: Resolver<Maybe<ResolversTypes['law_types']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Types_By_PkArgs, 'type_en'>>;
  delete_law_views?: Resolver<Maybe<ResolversTypes['law_views_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_ViewsArgs, 'where'>>;
  delete_law_views_by_pk?: Resolver<Maybe<ResolversTypes['law_views']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Views_By_PkArgs, 'law_id' | 'user_id'>>;
  delete_laws?: Resolver<Maybe<ResolversTypes['laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_LawsArgs, 'where'>>;
  delete_laws_by_pk?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Laws_By_PkArgs, 'id'>>;
  delete_resource_editable_users?: Resolver<Maybe<ResolversTypes['resource_editable_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Resource_Editable_UsersArgs, 'where'>>;
  delete_resource_editable_users_by_pk?: Resolver<Maybe<ResolversTypes['resource_editable_users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Resource_Editable_Users_By_PkArgs, 'resource_id' | 'user_id'>>;
  delete_resource_histories?: Resolver<Maybe<ResolversTypes['resource_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Resource_HistoriesArgs, 'where'>>;
  delete_resource_histories_by_pk?: Resolver<Maybe<ResolversTypes['resource_histories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Resource_Histories_By_PkArgs, 'id'>>;
  delete_resources?: Resolver<Maybe<ResolversTypes['resources_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ResourcesArgs, 'where'>>;
  delete_resources_by_pk?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Resources_By_PkArgs, 'id'>>;
  delete_species?: Resolver<Maybe<ResolversTypes['species_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_SpeciesArgs, 'where'>>;
  delete_species_assets?: Resolver<Maybe<ResolversTypes['species_assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Species_AssetsArgs, 'where'>>;
  delete_species_assets_by_pk?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Species_Assets_By_PkArgs, 'id'>>;
  delete_species_by_pk?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Species_By_PkArgs, 'id'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>>;
  delete_world_arguments?: Resolver<Maybe<ResolversTypes['world_arguments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_ArgumentsArgs, 'where'>>;
  delete_world_arguments_by_pk?: Resolver<Maybe<ResolversTypes['world_arguments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Arguments_By_PkArgs, 'argument_id' | 'world_id'>>;
  delete_world_categories?: Resolver<Maybe<ResolversTypes['world_categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_CategoriesArgs, 'where'>>;
  delete_world_categories_by_pk?: Resolver<Maybe<ResolversTypes['world_categories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Categories_By_PkArgs, 'law_category_ja' | 'world_id'>>;
  delete_world_chat_boxes?: Resolver<Maybe<ResolversTypes['world_chat_boxes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Chat_BoxesArgs, 'where'>>;
  delete_world_chat_boxes_by_pk?: Resolver<Maybe<ResolversTypes['world_chat_boxes']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Chat_Boxes_By_PkArgs, 'id'>>;
  delete_world_chats?: Resolver<Maybe<ResolversTypes['world_chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_ChatsArgs, 'where'>>;
  delete_world_chats_by_pk?: Resolver<Maybe<ResolversTypes['world_chats']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Chats_By_PkArgs, 'id'>>;
  delete_world_citizens?: Resolver<Maybe<ResolversTypes['world_citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_CitizensArgs, 'where'>>;
  delete_world_citizens_by_pk?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Citizens_By_PkArgs, 'citizen_id' | 'user_id'>>;
  delete_world_comments?: Resolver<Maybe<ResolversTypes['world_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_CommentsArgs, 'where'>>;
  delete_world_comments_by_pk?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Comments_By_PkArgs, 'id'>>;
  delete_world_editable_users?: Resolver<Maybe<ResolversTypes['world_editable_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Editable_UsersArgs, 'where'>>;
  delete_world_editable_users_by_pk?: Resolver<Maybe<ResolversTypes['world_editable_users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Editable_Users_By_PkArgs, 'user_id' | 'world_id'>>;
  delete_world_histories?: Resolver<Maybe<ResolversTypes['world_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_HistoriesArgs, 'where'>>;
  delete_world_histories_by_pk?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Histories_By_PkArgs, 'id'>>;
  delete_world_laws?: Resolver<Maybe<ResolversTypes['world_laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_LawsArgs, 'where'>>;
  delete_world_laws_by_pk?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Laws_By_PkArgs, 'law_id' | 'world_id'>>;
  delete_world_reactions?: Resolver<Maybe<ResolversTypes['world_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_ReactionsArgs, 'where'>>;
  delete_world_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Reactions_By_PkArgs, 'type' | 'user_id' | 'world_id'>>;
  delete_worlds?: Resolver<Maybe<ResolversTypes['worlds_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_WorldsArgs, 'where'>>;
  delete_worlds_by_pk?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Worlds_By_PkArgs, 'id'>>;
  insert_argumen_chats?: Resolver<Maybe<ResolversTypes['argumen_chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Argumen_ChatsArgs, 'objects'>>;
  insert_argumen_chats_one?: Resolver<Maybe<ResolversTypes['argumen_chats']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Argumen_Chats_OneArgs, 'object'>>;
  insert_argument_chat_boxes?: Resolver<Maybe<ResolversTypes['argument_chat_boxes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Argument_Chat_BoxesArgs, 'objects'>>;
  insert_argument_chat_boxes_one?: Resolver<Maybe<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Argument_Chat_Boxes_OneArgs, 'object'>>;
  insert_argument_views?: Resolver<Maybe<ResolversTypes['argument_views_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Argument_ViewsArgs, 'objects'>>;
  insert_argument_views_one?: Resolver<Maybe<ResolversTypes['argument_views']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Argument_Views_OneArgs, 'object'>>;
  insert_arguments?: Resolver<Maybe<ResolversTypes['arguments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ArgumentsArgs, 'objects'>>;
  insert_arguments_one?: Resolver<Maybe<ResolversTypes['arguments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Arguments_OneArgs, 'object'>>;
  insert_citizen_histories?: Resolver<Maybe<ResolversTypes['citizen_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Citizen_HistoriesArgs, 'objects'>>;
  insert_citizen_histories_one?: Resolver<Maybe<ResolversTypes['citizen_histories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Citizen_Histories_OneArgs, 'object'>>;
  insert_citizens?: Resolver<Maybe<ResolversTypes['citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CitizensArgs, 'objects'>>;
  insert_citizens_one?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Citizens_OneArgs, 'object'>>;
  insert_law_categories?: Resolver<Maybe<ResolversTypes['law_categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_CategoriesArgs, 'objects'>>;
  insert_law_categories_one?: Resolver<Maybe<ResolversTypes['law_categories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Categories_OneArgs, 'object'>>;
  insert_law_revision_columns?: Resolver<Maybe<ResolversTypes['law_revision_columns_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Revision_ColumnsArgs, 'objects'>>;
  insert_law_revision_columns_one?: Resolver<Maybe<ResolversTypes['law_revision_columns']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Revision_Columns_OneArgs, 'object'>>;
  insert_law_revisions?: Resolver<Maybe<ResolversTypes['law_revisions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_RevisionsArgs, 'objects'>>;
  insert_law_revisions_one?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Revisions_OneArgs, 'object'>>;
  insert_law_statuses?: Resolver<Maybe<ResolversTypes['law_statuses_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_StatusesArgs, 'objects'>>;
  insert_law_statuses_one?: Resolver<Maybe<ResolversTypes['law_statuses']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Statuses_OneArgs, 'object'>>;
  insert_law_summaries?: Resolver<Maybe<ResolversTypes['law_summaries_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_SummariesArgs, 'objects'>>;
  insert_law_summaries_one?: Resolver<Maybe<ResolversTypes['law_summaries']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Summaries_OneArgs, 'object'>>;
  insert_law_types?: Resolver<Maybe<ResolversTypes['law_types_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_TypesArgs, 'objects'>>;
  insert_law_types_one?: Resolver<Maybe<ResolversTypes['law_types']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Types_OneArgs, 'object'>>;
  insert_law_views?: Resolver<Maybe<ResolversTypes['law_views_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_ViewsArgs, 'objects'>>;
  insert_law_views_one?: Resolver<Maybe<ResolversTypes['law_views']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Views_OneArgs, 'object'>>;
  insert_laws?: Resolver<Maybe<ResolversTypes['laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_LawsArgs, 'objects'>>;
  insert_laws_one?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Laws_OneArgs, 'object'>>;
  insert_resource_editable_users?: Resolver<Maybe<ResolversTypes['resource_editable_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Resource_Editable_UsersArgs, 'objects'>>;
  insert_resource_editable_users_one?: Resolver<Maybe<ResolversTypes['resource_editable_users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Resource_Editable_Users_OneArgs, 'object'>>;
  insert_resource_histories?: Resolver<Maybe<ResolversTypes['resource_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Resource_HistoriesArgs, 'objects'>>;
  insert_resource_histories_one?: Resolver<Maybe<ResolversTypes['resource_histories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Resource_Histories_OneArgs, 'object'>>;
  insert_resources?: Resolver<Maybe<ResolversTypes['resources_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ResourcesArgs, 'objects'>>;
  insert_resources_one?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Resources_OneArgs, 'object'>>;
  insert_species?: Resolver<Maybe<ResolversTypes['species_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_SpeciesArgs, 'objects'>>;
  insert_species_assets?: Resolver<Maybe<ResolversTypes['species_assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Species_AssetsArgs, 'objects'>>;
  insert_species_assets_one?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Species_Assets_OneArgs, 'object'>>;
  insert_species_one?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Species_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
  insert_world_arguments?: Resolver<Maybe<ResolversTypes['world_arguments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_ArgumentsArgs, 'objects'>>;
  insert_world_arguments_one?: Resolver<Maybe<ResolversTypes['world_arguments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Arguments_OneArgs, 'object'>>;
  insert_world_categories?: Resolver<Maybe<ResolversTypes['world_categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_CategoriesArgs, 'objects'>>;
  insert_world_categories_one?: Resolver<Maybe<ResolversTypes['world_categories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Categories_OneArgs, 'object'>>;
  insert_world_chat_boxes?: Resolver<Maybe<ResolversTypes['world_chat_boxes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Chat_BoxesArgs, 'objects'>>;
  insert_world_chat_boxes_one?: Resolver<Maybe<ResolversTypes['world_chat_boxes']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Chat_Boxes_OneArgs, 'object'>>;
  insert_world_chats?: Resolver<Maybe<ResolversTypes['world_chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_ChatsArgs, 'objects'>>;
  insert_world_chats_one?: Resolver<Maybe<ResolversTypes['world_chats']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Chats_OneArgs, 'object'>>;
  insert_world_citizens?: Resolver<Maybe<ResolversTypes['world_citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_CitizensArgs, 'objects'>>;
  insert_world_citizens_one?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Citizens_OneArgs, 'object'>>;
  insert_world_comments?: Resolver<Maybe<ResolversTypes['world_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_CommentsArgs, 'objects'>>;
  insert_world_comments_one?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Comments_OneArgs, 'object'>>;
  insert_world_editable_users?: Resolver<Maybe<ResolversTypes['world_editable_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Editable_UsersArgs, 'objects'>>;
  insert_world_editable_users_one?: Resolver<Maybe<ResolversTypes['world_editable_users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Editable_Users_OneArgs, 'object'>>;
  insert_world_histories?: Resolver<Maybe<ResolversTypes['world_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_HistoriesArgs, 'objects'>>;
  insert_world_histories_one?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Histories_OneArgs, 'object'>>;
  insert_world_laws?: Resolver<Maybe<ResolversTypes['world_laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_LawsArgs, 'objects'>>;
  insert_world_laws_one?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Laws_OneArgs, 'object'>>;
  insert_world_reactions?: Resolver<Maybe<ResolversTypes['world_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_ReactionsArgs, 'objects'>>;
  insert_world_reactions_one?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Reactions_OneArgs, 'object'>>;
  insert_worlds?: Resolver<Maybe<ResolversTypes['worlds_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_WorldsArgs, 'objects'>>;
  insert_worlds_one?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Worlds_OneArgs, 'object'>>;
  update_argumen_chats?: Resolver<Maybe<ResolversTypes['argumen_chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argumen_ChatsArgs, 'where'>>;
  update_argumen_chats_by_pk?: Resolver<Maybe<ResolversTypes['argumen_chats']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argumen_Chats_By_PkArgs, 'pk_columns'>>;
  update_argumen_chats_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['argumen_chats_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argumen_Chats_ManyArgs, 'updates'>>;
  update_argument_chat_boxes?: Resolver<Maybe<ResolversTypes['argument_chat_boxes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argument_Chat_BoxesArgs, 'where'>>;
  update_argument_chat_boxes_by_pk?: Resolver<Maybe<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argument_Chat_Boxes_By_PkArgs, 'pk_columns'>>;
  update_argument_chat_boxes_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['argument_chat_boxes_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argument_Chat_Boxes_ManyArgs, 'updates'>>;
  update_argument_views?: Resolver<Maybe<ResolversTypes['argument_views_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argument_ViewsArgs, 'where'>>;
  update_argument_views_by_pk?: Resolver<Maybe<ResolversTypes['argument_views']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argument_Views_By_PkArgs, 'pk_columns'>>;
  update_argument_views_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['argument_views_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Argument_Views_ManyArgs, 'updates'>>;
  update_arguments?: Resolver<Maybe<ResolversTypes['arguments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ArgumentsArgs, 'where'>>;
  update_arguments_by_pk?: Resolver<Maybe<ResolversTypes['arguments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Arguments_By_PkArgs, 'pk_columns'>>;
  update_arguments_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['arguments_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Arguments_ManyArgs, 'updates'>>;
  update_citizen_histories?: Resolver<Maybe<ResolversTypes['citizen_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Citizen_HistoriesArgs, 'where'>>;
  update_citizen_histories_by_pk?: Resolver<Maybe<ResolversTypes['citizen_histories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Citizen_Histories_By_PkArgs, 'pk_columns'>>;
  update_citizen_histories_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['citizen_histories_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Citizen_Histories_ManyArgs, 'updates'>>;
  update_citizens?: Resolver<Maybe<ResolversTypes['citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CitizensArgs, 'where'>>;
  update_citizens_by_pk?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Citizens_By_PkArgs, 'pk_columns'>>;
  update_citizens_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['citizens_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Citizens_ManyArgs, 'updates'>>;
  update_law_categories?: Resolver<Maybe<ResolversTypes['law_categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_CategoriesArgs, 'where'>>;
  update_law_categories_by_pk?: Resolver<Maybe<ResolversTypes['law_categories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Categories_By_PkArgs, 'pk_columns'>>;
  update_law_categories_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_categories_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Categories_ManyArgs, 'updates'>>;
  update_law_revision_columns?: Resolver<Maybe<ResolversTypes['law_revision_columns_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Revision_ColumnsArgs, 'where'>>;
  update_law_revision_columns_by_pk?: Resolver<Maybe<ResolversTypes['law_revision_columns']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Revision_Columns_By_PkArgs, 'pk_columns'>>;
  update_law_revision_columns_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_revision_columns_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Revision_Columns_ManyArgs, 'updates'>>;
  update_law_revisions?: Resolver<Maybe<ResolversTypes['law_revisions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_RevisionsArgs, 'where'>>;
  update_law_revisions_by_pk?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Revisions_By_PkArgs, 'pk_columns'>>;
  update_law_revisions_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_revisions_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Revisions_ManyArgs, 'updates'>>;
  update_law_statuses?: Resolver<Maybe<ResolversTypes['law_statuses_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_StatusesArgs, 'where'>>;
  update_law_statuses_by_pk?: Resolver<Maybe<ResolversTypes['law_statuses']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Statuses_By_PkArgs, 'pk_columns'>>;
  update_law_statuses_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_statuses_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Statuses_ManyArgs, 'updates'>>;
  update_law_summaries?: Resolver<Maybe<ResolversTypes['law_summaries_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_SummariesArgs, 'where'>>;
  update_law_summaries_by_pk?: Resolver<Maybe<ResolversTypes['law_summaries']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Summaries_By_PkArgs, 'pk_columns'>>;
  update_law_summaries_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_summaries_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Summaries_ManyArgs, 'updates'>>;
  update_law_types?: Resolver<Maybe<ResolversTypes['law_types_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_TypesArgs, 'where'>>;
  update_law_types_by_pk?: Resolver<Maybe<ResolversTypes['law_types']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Types_By_PkArgs, 'pk_columns'>>;
  update_law_types_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_types_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Types_ManyArgs, 'updates'>>;
  update_law_views?: Resolver<Maybe<ResolversTypes['law_views_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_ViewsArgs, 'where'>>;
  update_law_views_by_pk?: Resolver<Maybe<ResolversTypes['law_views']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Views_By_PkArgs, 'pk_columns'>>;
  update_law_views_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_views_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Views_ManyArgs, 'updates'>>;
  update_laws?: Resolver<Maybe<ResolversTypes['laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_LawsArgs, 'where'>>;
  update_laws_by_pk?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Laws_By_PkArgs, 'pk_columns'>>;
  update_laws_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['laws_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Laws_ManyArgs, 'updates'>>;
  update_resource_editable_users?: Resolver<Maybe<ResolversTypes['resource_editable_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resource_Editable_UsersArgs, 'where'>>;
  update_resource_editable_users_by_pk?: Resolver<Maybe<ResolversTypes['resource_editable_users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resource_Editable_Users_By_PkArgs, 'pk_columns'>>;
  update_resource_editable_users_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['resource_editable_users_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resource_Editable_Users_ManyArgs, 'updates'>>;
  update_resource_histories?: Resolver<Maybe<ResolversTypes['resource_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resource_HistoriesArgs, 'where'>>;
  update_resource_histories_by_pk?: Resolver<Maybe<ResolversTypes['resource_histories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resource_Histories_By_PkArgs, 'pk_columns'>>;
  update_resource_histories_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['resource_histories_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resource_Histories_ManyArgs, 'updates'>>;
  update_resources?: Resolver<Maybe<ResolversTypes['resources_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ResourcesArgs, 'where'>>;
  update_resources_by_pk?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resources_By_PkArgs, 'pk_columns'>>;
  update_resources_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['resources_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Resources_ManyArgs, 'updates'>>;
  update_species?: Resolver<Maybe<ResolversTypes['species_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_SpeciesArgs, 'where'>>;
  update_species_assets?: Resolver<Maybe<ResolversTypes['species_assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_AssetsArgs, 'where'>>;
  update_species_assets_by_pk?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_Assets_By_PkArgs, 'pk_columns'>>;
  update_species_assets_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['species_assets_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_Assets_ManyArgs, 'updates'>>;
  update_species_by_pk?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_By_PkArgs, 'pk_columns'>>;
  update_species_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['species_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_ManyArgs, 'updates'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
  update_users_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['users_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_ManyArgs, 'updates'>>;
  update_world_arguments?: Resolver<Maybe<ResolversTypes['world_arguments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_ArgumentsArgs, 'where'>>;
  update_world_arguments_by_pk?: Resolver<Maybe<ResolversTypes['world_arguments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Arguments_By_PkArgs, 'pk_columns'>>;
  update_world_arguments_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_arguments_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Arguments_ManyArgs, 'updates'>>;
  update_world_categories?: Resolver<Maybe<ResolversTypes['world_categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_CategoriesArgs, 'where'>>;
  update_world_categories_by_pk?: Resolver<Maybe<ResolversTypes['world_categories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Categories_By_PkArgs, 'pk_columns'>>;
  update_world_categories_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_categories_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Categories_ManyArgs, 'updates'>>;
  update_world_chat_boxes?: Resolver<Maybe<ResolversTypes['world_chat_boxes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Chat_BoxesArgs, 'where'>>;
  update_world_chat_boxes_by_pk?: Resolver<Maybe<ResolversTypes['world_chat_boxes']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Chat_Boxes_By_PkArgs, 'pk_columns'>>;
  update_world_chat_boxes_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_chat_boxes_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Chat_Boxes_ManyArgs, 'updates'>>;
  update_world_chats?: Resolver<Maybe<ResolversTypes['world_chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_ChatsArgs, 'where'>>;
  update_world_chats_by_pk?: Resolver<Maybe<ResolversTypes['world_chats']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Chats_By_PkArgs, 'pk_columns'>>;
  update_world_chats_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_chats_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Chats_ManyArgs, 'updates'>>;
  update_world_citizens?: Resolver<Maybe<ResolversTypes['world_citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_CitizensArgs, 'where'>>;
  update_world_citizens_by_pk?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Citizens_By_PkArgs, 'pk_columns'>>;
  update_world_citizens_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_citizens_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Citizens_ManyArgs, 'updates'>>;
  update_world_comments?: Resolver<Maybe<ResolversTypes['world_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_CommentsArgs, 'where'>>;
  update_world_comments_by_pk?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Comments_By_PkArgs, 'pk_columns'>>;
  update_world_comments_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_comments_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Comments_ManyArgs, 'updates'>>;
  update_world_editable_users?: Resolver<Maybe<ResolversTypes['world_editable_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Editable_UsersArgs, 'where'>>;
  update_world_editable_users_by_pk?: Resolver<Maybe<ResolversTypes['world_editable_users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Editable_Users_By_PkArgs, 'pk_columns'>>;
  update_world_editable_users_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_editable_users_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Editable_Users_ManyArgs, 'updates'>>;
  update_world_histories?: Resolver<Maybe<ResolversTypes['world_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_HistoriesArgs, 'where'>>;
  update_world_histories_by_pk?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Histories_By_PkArgs, 'pk_columns'>>;
  update_world_histories_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_histories_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Histories_ManyArgs, 'updates'>>;
  update_world_laws?: Resolver<Maybe<ResolversTypes['world_laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_LawsArgs, 'where'>>;
  update_world_laws_by_pk?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Laws_By_PkArgs, 'pk_columns'>>;
  update_world_laws_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_laws_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Laws_ManyArgs, 'updates'>>;
  update_world_reactions?: Resolver<Maybe<ResolversTypes['world_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_ReactionsArgs, 'where'>>;
  update_world_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Reactions_By_PkArgs, 'pk_columns'>>;
  update_world_reactions_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_reactions_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Reactions_ManyArgs, 'updates'>>;
  update_worlds?: Resolver<Maybe<ResolversTypes['worlds_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_WorldsArgs, 'where'>>;
  update_worlds_by_pk?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Worlds_By_PkArgs, 'pk_columns'>>;
  update_worlds_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['worlds_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Worlds_ManyArgs, 'updates'>>;
};

export interface NumericScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['numeric'], any> {
  name: 'numeric';
}

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  argumen_chats?: Resolver<Array<ResolversTypes['argumen_chats']>, ParentType, ContextType, Partial<Query_RootArgumen_ChatsArgs>>;
  argumen_chats_aggregate?: Resolver<ResolversTypes['argumen_chats_aggregate'], ParentType, ContextType, Partial<Query_RootArgumen_Chats_AggregateArgs>>;
  argumen_chats_by_pk?: Resolver<Maybe<ResolversTypes['argumen_chats']>, ParentType, ContextType, RequireFields<Query_RootArgumen_Chats_By_PkArgs, 'id'>>;
  argument_chat_boxes?: Resolver<Array<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType, Partial<Query_RootArgument_Chat_BoxesArgs>>;
  argument_chat_boxes_aggregate?: Resolver<ResolversTypes['argument_chat_boxes_aggregate'], ParentType, ContextType, Partial<Query_RootArgument_Chat_Boxes_AggregateArgs>>;
  argument_chat_boxes_by_pk?: Resolver<Maybe<ResolversTypes['argument_chat_boxes']>, ParentType, ContextType, RequireFields<Query_RootArgument_Chat_Boxes_By_PkArgs, 'id'>>;
  argument_views?: Resolver<Array<ResolversTypes['argument_views']>, ParentType, ContextType, Partial<Query_RootArgument_ViewsArgs>>;
  argument_views_aggregate?: Resolver<ResolversTypes['argument_views_aggregate'], ParentType, ContextType, Partial<Query_RootArgument_Views_AggregateArgs>>;
  argument_views_by_pk?: Resolver<Maybe<ResolversTypes['argument_views']>, ParentType, ContextType, RequireFields<Query_RootArgument_Views_By_PkArgs, 'argument_id' | 'user_id'>>;
  arguments?: Resolver<Array<ResolversTypes['arguments']>, ParentType, ContextType, Partial<Query_RootArgumentsArgs>>;
  arguments_aggregate?: Resolver<ResolversTypes['arguments_aggregate'], ParentType, ContextType, Partial<Query_RootArguments_AggregateArgs>>;
  arguments_by_pk?: Resolver<Maybe<ResolversTypes['arguments']>, ParentType, ContextType, RequireFields<Query_RootArguments_By_PkArgs, 'id'>>;
  citizen_histories?: Resolver<Array<ResolversTypes['citizen_histories']>, ParentType, ContextType, Partial<Query_RootCitizen_HistoriesArgs>>;
  citizen_histories_aggregate?: Resolver<ResolversTypes['citizen_histories_aggregate'], ParentType, ContextType, Partial<Query_RootCitizen_Histories_AggregateArgs>>;
  citizen_histories_by_pk?: Resolver<Maybe<ResolversTypes['citizen_histories']>, ParentType, ContextType, RequireFields<Query_RootCitizen_Histories_By_PkArgs, 'id'>>;
  citizens?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType, Partial<Query_RootCitizensArgs>>;
  citizens_aggregate?: Resolver<ResolversTypes['citizens_aggregate'], ParentType, ContextType, Partial<Query_RootCitizens_AggregateArgs>>;
  citizens_by_pk?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Query_RootCitizens_By_PkArgs, 'id'>>;
  law_categories?: Resolver<Array<ResolversTypes['law_categories']>, ParentType, ContextType, Partial<Query_RootLaw_CategoriesArgs>>;
  law_categories_aggregate?: Resolver<ResolversTypes['law_categories_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Categories_AggregateArgs>>;
  law_categories_by_pk?: Resolver<Maybe<ResolversTypes['law_categories']>, ParentType, ContextType, RequireFields<Query_RootLaw_Categories_By_PkArgs, 'category_ja'>>;
  law_revision_columns?: Resolver<Array<ResolversTypes['law_revision_columns']>, ParentType, ContextType, Partial<Query_RootLaw_Revision_ColumnsArgs>>;
  law_revision_columns_aggregate?: Resolver<ResolversTypes['law_revision_columns_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Revision_Columns_AggregateArgs>>;
  law_revision_columns_by_pk?: Resolver<Maybe<ResolversTypes['law_revision_columns']>, ParentType, ContextType, RequireFields<Query_RootLaw_Revision_Columns_By_PkArgs, 'column_id' | 'law_revision_id'>>;
  law_revisions?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType, Partial<Query_RootLaw_RevisionsArgs>>;
  law_revisions_aggregate?: Resolver<ResolversTypes['law_revisions_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Revisions_AggregateArgs>>;
  law_revisions_by_pk?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Query_RootLaw_Revisions_By_PkArgs, 'id'>>;
  law_statuses?: Resolver<Array<ResolversTypes['law_statuses']>, ParentType, ContextType, Partial<Query_RootLaw_StatusesArgs>>;
  law_statuses_aggregate?: Resolver<ResolversTypes['law_statuses_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Statuses_AggregateArgs>>;
  law_statuses_by_pk?: Resolver<Maybe<ResolversTypes['law_statuses']>, ParentType, ContextType, RequireFields<Query_RootLaw_Statuses_By_PkArgs, 'status_en'>>;
  law_summaries?: Resolver<Array<ResolversTypes['law_summaries']>, ParentType, ContextType, Partial<Query_RootLaw_SummariesArgs>>;
  law_summaries_aggregate?: Resolver<ResolversTypes['law_summaries_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Summaries_AggregateArgs>>;
  law_summaries_by_pk?: Resolver<Maybe<ResolversTypes['law_summaries']>, ParentType, ContextType, RequireFields<Query_RootLaw_Summaries_By_PkArgs, 'id'>>;
  law_types?: Resolver<Array<ResolversTypes['law_types']>, ParentType, ContextType, Partial<Query_RootLaw_TypesArgs>>;
  law_types_aggregate?: Resolver<ResolversTypes['law_types_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Types_AggregateArgs>>;
  law_types_by_pk?: Resolver<Maybe<ResolversTypes['law_types']>, ParentType, ContextType, RequireFields<Query_RootLaw_Types_By_PkArgs, 'type_en'>>;
  law_views?: Resolver<Array<ResolversTypes['law_views']>, ParentType, ContextType, Partial<Query_RootLaw_ViewsArgs>>;
  law_views_aggregate?: Resolver<ResolversTypes['law_views_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Views_AggregateArgs>>;
  law_views_by_pk?: Resolver<Maybe<ResolversTypes['law_views']>, ParentType, ContextType, RequireFields<Query_RootLaw_Views_By_PkArgs, 'law_id' | 'user_id'>>;
  laws?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType, Partial<Query_RootLawsArgs>>;
  laws_aggregate?: Resolver<ResolversTypes['laws_aggregate'], ParentType, ContextType, Partial<Query_RootLaws_AggregateArgs>>;
  laws_by_pk?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Query_RootLaws_By_PkArgs, 'id'>>;
  resource_editable_users?: Resolver<Array<ResolversTypes['resource_editable_users']>, ParentType, ContextType, Partial<Query_RootResource_Editable_UsersArgs>>;
  resource_editable_users_aggregate?: Resolver<ResolversTypes['resource_editable_users_aggregate'], ParentType, ContextType, Partial<Query_RootResource_Editable_Users_AggregateArgs>>;
  resource_editable_users_by_pk?: Resolver<Maybe<ResolversTypes['resource_editable_users']>, ParentType, ContextType, RequireFields<Query_RootResource_Editable_Users_By_PkArgs, 'resource_id' | 'user_id'>>;
  resource_histories?: Resolver<Array<ResolversTypes['resource_histories']>, ParentType, ContextType, Partial<Query_RootResource_HistoriesArgs>>;
  resource_histories_aggregate?: Resolver<ResolversTypes['resource_histories_aggregate'], ParentType, ContextType, Partial<Query_RootResource_Histories_AggregateArgs>>;
  resource_histories_by_pk?: Resolver<Maybe<ResolversTypes['resource_histories']>, ParentType, ContextType, RequireFields<Query_RootResource_Histories_By_PkArgs, 'id'>>;
  resources?: Resolver<Array<ResolversTypes['resources']>, ParentType, ContextType, Partial<Query_RootResourcesArgs>>;
  resources_aggregate?: Resolver<ResolversTypes['resources_aggregate'], ParentType, ContextType, Partial<Query_RootResources_AggregateArgs>>;
  resources_by_pk?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<Query_RootResources_By_PkArgs, 'id'>>;
  species?: Resolver<Array<ResolversTypes['species']>, ParentType, ContextType, Partial<Query_RootSpeciesArgs>>;
  species_aggregate?: Resolver<ResolversTypes['species_aggregate'], ParentType, ContextType, Partial<Query_RootSpecies_AggregateArgs>>;
  species_assets?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType, Partial<Query_RootSpecies_AssetsArgs>>;
  species_assets_aggregate?: Resolver<ResolversTypes['species_assets_aggregate'], ParentType, ContextType, Partial<Query_RootSpecies_Assets_AggregateArgs>>;
  species_assets_by_pk?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Query_RootSpecies_Assets_By_PkArgs, 'id'>>;
  species_by_pk?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Query_RootSpecies_By_PkArgs, 'id'>>;
  species_percentage_view_with_world_id?: Resolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, ParentType, ContextType, Partial<Query_RootSpecies_Percentage_View_With_World_IdArgs>>;
  species_percentage_view_with_world_id_aggregate?: Resolver<ResolversTypes['species_percentage_view_with_world_id_aggregate'], ParentType, ContextType, Partial<Query_RootSpecies_Percentage_View_With_World_Id_AggregateArgs>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, Partial<Query_RootUsersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, Partial<Query_RootUsers_AggregateArgs>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'id'>>;
  world_arguments?: Resolver<Array<ResolversTypes['world_arguments']>, ParentType, ContextType, Partial<Query_RootWorld_ArgumentsArgs>>;
  world_arguments_aggregate?: Resolver<ResolversTypes['world_arguments_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Arguments_AggregateArgs>>;
  world_arguments_by_pk?: Resolver<Maybe<ResolversTypes['world_arguments']>, ParentType, ContextType, RequireFields<Query_RootWorld_Arguments_By_PkArgs, 'argument_id' | 'world_id'>>;
  world_categories?: Resolver<Array<ResolversTypes['world_categories']>, ParentType, ContextType, Partial<Query_RootWorld_CategoriesArgs>>;
  world_categories_aggregate?: Resolver<ResolversTypes['world_categories_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Categories_AggregateArgs>>;
  world_categories_by_pk?: Resolver<Maybe<ResolversTypes['world_categories']>, ParentType, ContextType, RequireFields<Query_RootWorld_Categories_By_PkArgs, 'law_category_ja' | 'world_id'>>;
  world_chat_boxes?: Resolver<Array<ResolversTypes['world_chat_boxes']>, ParentType, ContextType, Partial<Query_RootWorld_Chat_BoxesArgs>>;
  world_chat_boxes_aggregate?: Resolver<ResolversTypes['world_chat_boxes_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Chat_Boxes_AggregateArgs>>;
  world_chat_boxes_by_pk?: Resolver<Maybe<ResolversTypes['world_chat_boxes']>, ParentType, ContextType, RequireFields<Query_RootWorld_Chat_Boxes_By_PkArgs, 'id'>>;
  world_chats?: Resolver<Array<ResolversTypes['world_chats']>, ParentType, ContextType, Partial<Query_RootWorld_ChatsArgs>>;
  world_chats_aggregate?: Resolver<ResolversTypes['world_chats_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Chats_AggregateArgs>>;
  world_chats_by_pk?: Resolver<Maybe<ResolversTypes['world_chats']>, ParentType, ContextType, RequireFields<Query_RootWorld_Chats_By_PkArgs, 'id'>>;
  world_citizens?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType, Partial<Query_RootWorld_CitizensArgs>>;
  world_citizens_aggregate?: Resolver<ResolversTypes['world_citizens_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Citizens_AggregateArgs>>;
  world_citizens_by_pk?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Query_RootWorld_Citizens_By_PkArgs, 'citizen_id' | 'user_id'>>;
  world_comments?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType, Partial<Query_RootWorld_CommentsArgs>>;
  world_comments_aggregate?: Resolver<ResolversTypes['world_comments_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Comments_AggregateArgs>>;
  world_comments_by_pk?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Query_RootWorld_Comments_By_PkArgs, 'id'>>;
  world_editable_users?: Resolver<Array<ResolversTypes['world_editable_users']>, ParentType, ContextType, Partial<Query_RootWorld_Editable_UsersArgs>>;
  world_editable_users_aggregate?: Resolver<ResolversTypes['world_editable_users_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Editable_Users_AggregateArgs>>;
  world_editable_users_by_pk?: Resolver<Maybe<ResolversTypes['world_editable_users']>, ParentType, ContextType, RequireFields<Query_RootWorld_Editable_Users_By_PkArgs, 'user_id' | 'world_id'>>;
  world_histories?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType, Partial<Query_RootWorld_HistoriesArgs>>;
  world_histories_aggregate?: Resolver<ResolversTypes['world_histories_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Histories_AggregateArgs>>;
  world_histories_by_pk?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Query_RootWorld_Histories_By_PkArgs, 'id'>>;
  world_laws?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType, Partial<Query_RootWorld_LawsArgs>>;
  world_laws_aggregate?: Resolver<ResolversTypes['world_laws_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Laws_AggregateArgs>>;
  world_laws_by_pk?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Query_RootWorld_Laws_By_PkArgs, 'law_id' | 'world_id'>>;
  world_reactions?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType, Partial<Query_RootWorld_ReactionsArgs>>;
  world_reactions_aggregate?: Resolver<ResolversTypes['world_reactions_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Reactions_AggregateArgs>>;
  world_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Query_RootWorld_Reactions_By_PkArgs, 'type' | 'user_id' | 'world_id'>>;
  worlds?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType, Partial<Query_RootWorldsArgs>>;
  worlds_aggregate?: Resolver<ResolversTypes['worlds_aggregate'], ParentType, ContextType, Partial<Query_RootWorlds_AggregateArgs>>;
  worlds_by_pk?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Query_RootWorlds_By_PkArgs, 'id'>>;
};

export type Resource_Editable_UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_editable_users'] = ResolversParentTypes['resource_editable_users']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['resources'], ParentType, ContextType>;
  resource_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Editable_Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_editable_users_aggregate'] = ResolversParentTypes['resource_editable_users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['resource_editable_users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['resource_editable_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Editable_Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_editable_users_aggregate_fields'] = ResolversParentTypes['resource_editable_users_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Resource_Editable_Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['resource_editable_users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['resource_editable_users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Editable_Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_editable_users_max_fields'] = ResolversParentTypes['resource_editable_users_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Editable_Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_editable_users_min_fields'] = ResolversParentTypes['resource_editable_users_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Editable_Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_editable_users_mutation_response'] = ResolversParentTypes['resource_editable_users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['resource_editable_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_HistoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_histories'] = ResolversParentTypes['resource_histories']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  edited_user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  markup_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['resources'], ParentType, ContextType>;
  resource_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Histories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_histories_aggregate'] = ResolversParentTypes['resource_histories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['resource_histories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['resource_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Histories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_histories_aggregate_fields'] = ResolversParentTypes['resource_histories_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Resource_Histories_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['resource_histories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['resource_histories_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Histories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_histories_max_fields'] = ResolversParentTypes['resource_histories_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  edited_user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  markup_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Histories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_histories_min_fields'] = ResolversParentTypes['resource_histories_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  edited_user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  markup_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Histories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['resource_histories_mutation_response'] = ResolversParentTypes['resource_histories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['resource_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources'] = ResolversParentTypes['resources']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  resource_editable_users?: Resolver<Array<ResolversTypes['resource_editable_users']>, ParentType, ContextType, Partial<ResourcesResource_Editable_UsersArgs>>;
  resource_editable_users_aggregate?: Resolver<ResolversTypes['resource_editable_users_aggregate'], ParentType, ContextType, Partial<ResourcesResource_Editable_Users_AggregateArgs>>;
  resource_histories?: Resolver<Array<ResolversTypes['resource_histories']>, ParentType, ContextType, Partial<ResourcesResource_HistoriesArgs>>;
  resource_histories_aggregate?: Resolver<ResolversTypes['resource_histories_aggregate'], ParentType, ContextType, Partial<ResourcesResource_Histories_AggregateArgs>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resources_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_aggregate'] = ResolversParentTypes['resources_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['resources_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['resources']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resources_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_aggregate_fields'] = ResolversParentTypes['resources_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Resources_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['resources_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['resources_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resources_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_max_fields'] = ResolversParentTypes['resources_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resources_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_min_fields'] = ResolversParentTypes['resources_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resources_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_mutation_response'] = ResolversParentTypes['resources_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['resources']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['species'] = ResolversParentTypes['species']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species_assets?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType, Partial<SpeciesSpecies_AssetsArgs>>;
  species_assets_aggregate?: Resolver<ResolversTypes['species_assets_aggregate'], ParentType, ContextType, Partial<SpeciesSpecies_Assets_AggregateArgs>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_aggregate'] = ResolversParentTypes['species_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['species_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['species']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_aggregate_fields'] = ResolversParentTypes['species_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Species_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['species_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['species_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_AssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets'] = ResolversParentTypes['species_assets']> = {
  citizens?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType, Partial<Species_AssetsCitizensArgs>>;
  citizens_aggregate?: Resolver<ResolversTypes['citizens_aggregate'], ParentType, ContextType, Partial<Species_AssetsCitizens_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['species'], ParentType, ContextType>;
  species_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_aggregate'] = ResolversParentTypes['species_assets_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['species_assets_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_aggregate_fields'] = ResolversParentTypes['species_assets_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Species_Assets_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['species_assets_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['species_assets_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_max_fields'] = ResolversParentTypes['species_assets_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_min_fields'] = ResolversParentTypes['species_assets_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_mutation_response'] = ResolversParentTypes['species_assets_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_max_fields'] = ResolversParentTypes['species_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_min_fields'] = ResolversParentTypes['species_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_mutation_response'] = ResolversParentTypes['species_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['species']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id'] = ResolversParentTypes['species_percentage_view_with_world_id']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  species_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  worlds?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType, Partial<Species_Percentage_View_With_World_IdWorldsArgs>>;
  worlds_aggregate?: Resolver<ResolversTypes['worlds_aggregate'], ParentType, ContextType, Partial<Species_Percentage_View_With_World_IdWorlds_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_aggregate'] = ResolversParentTypes['species_percentage_view_with_world_id_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_aggregate_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Species_Percentage_View_With_World_Id_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_avg_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_avg_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_max_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_max_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  species_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_min_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_min_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  species_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_stddev_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_stddev_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_stddev_pop_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_stddev_pop_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_stddev_samp_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_stddev_samp_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_sum_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_sum_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_var_pop_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_var_pop_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_var_samp_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_var_samp_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_variance_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_variance_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  argumen_chats?: SubscriptionResolver<Array<ResolversTypes['argumen_chats']>, "argumen_chats", ParentType, ContextType, Partial<Subscription_RootArgumen_ChatsArgs>>;
  argumen_chats_aggregate?: SubscriptionResolver<ResolversTypes['argumen_chats_aggregate'], "argumen_chats_aggregate", ParentType, ContextType, Partial<Subscription_RootArgumen_Chats_AggregateArgs>>;
  argumen_chats_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['argumen_chats']>, "argumen_chats_by_pk", ParentType, ContextType, RequireFields<Subscription_RootArgumen_Chats_By_PkArgs, 'id'>>;
  argumen_chats_stream?: SubscriptionResolver<Array<ResolversTypes['argumen_chats']>, "argumen_chats_stream", ParentType, ContextType, RequireFields<Subscription_RootArgumen_Chats_StreamArgs, 'batch_size' | 'cursor'>>;
  argument_chat_boxes?: SubscriptionResolver<Array<ResolversTypes['argument_chat_boxes']>, "argument_chat_boxes", ParentType, ContextType, Partial<Subscription_RootArgument_Chat_BoxesArgs>>;
  argument_chat_boxes_aggregate?: SubscriptionResolver<ResolversTypes['argument_chat_boxes_aggregate'], "argument_chat_boxes_aggregate", ParentType, ContextType, Partial<Subscription_RootArgument_Chat_Boxes_AggregateArgs>>;
  argument_chat_boxes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['argument_chat_boxes']>, "argument_chat_boxes_by_pk", ParentType, ContextType, RequireFields<Subscription_RootArgument_Chat_Boxes_By_PkArgs, 'id'>>;
  argument_chat_boxes_stream?: SubscriptionResolver<Array<ResolversTypes['argument_chat_boxes']>, "argument_chat_boxes_stream", ParentType, ContextType, RequireFields<Subscription_RootArgument_Chat_Boxes_StreamArgs, 'batch_size' | 'cursor'>>;
  argument_views?: SubscriptionResolver<Array<ResolversTypes['argument_views']>, "argument_views", ParentType, ContextType, Partial<Subscription_RootArgument_ViewsArgs>>;
  argument_views_aggregate?: SubscriptionResolver<ResolversTypes['argument_views_aggregate'], "argument_views_aggregate", ParentType, ContextType, Partial<Subscription_RootArgument_Views_AggregateArgs>>;
  argument_views_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['argument_views']>, "argument_views_by_pk", ParentType, ContextType, RequireFields<Subscription_RootArgument_Views_By_PkArgs, 'argument_id' | 'user_id'>>;
  argument_views_stream?: SubscriptionResolver<Array<ResolversTypes['argument_views']>, "argument_views_stream", ParentType, ContextType, RequireFields<Subscription_RootArgument_Views_StreamArgs, 'batch_size' | 'cursor'>>;
  arguments?: SubscriptionResolver<Array<ResolversTypes['arguments']>, "arguments", ParentType, ContextType, Partial<Subscription_RootArgumentsArgs>>;
  arguments_aggregate?: SubscriptionResolver<ResolversTypes['arguments_aggregate'], "arguments_aggregate", ParentType, ContextType, Partial<Subscription_RootArguments_AggregateArgs>>;
  arguments_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['arguments']>, "arguments_by_pk", ParentType, ContextType, RequireFields<Subscription_RootArguments_By_PkArgs, 'id'>>;
  arguments_stream?: SubscriptionResolver<Array<ResolversTypes['arguments']>, "arguments_stream", ParentType, ContextType, RequireFields<Subscription_RootArguments_StreamArgs, 'batch_size' | 'cursor'>>;
  citizen_histories?: SubscriptionResolver<Array<ResolversTypes['citizen_histories']>, "citizen_histories", ParentType, ContextType, Partial<Subscription_RootCitizen_HistoriesArgs>>;
  citizen_histories_aggregate?: SubscriptionResolver<ResolversTypes['citizen_histories_aggregate'], "citizen_histories_aggregate", ParentType, ContextType, Partial<Subscription_RootCitizen_Histories_AggregateArgs>>;
  citizen_histories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['citizen_histories']>, "citizen_histories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCitizen_Histories_By_PkArgs, 'id'>>;
  citizen_histories_stream?: SubscriptionResolver<Array<ResolversTypes['citizen_histories']>, "citizen_histories_stream", ParentType, ContextType, RequireFields<Subscription_RootCitizen_Histories_StreamArgs, 'batch_size' | 'cursor'>>;
  citizens?: SubscriptionResolver<Array<ResolversTypes['citizens']>, "citizens", ParentType, ContextType, Partial<Subscription_RootCitizensArgs>>;
  citizens_aggregate?: SubscriptionResolver<ResolversTypes['citizens_aggregate'], "citizens_aggregate", ParentType, ContextType, Partial<Subscription_RootCitizens_AggregateArgs>>;
  citizens_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['citizens']>, "citizens_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCitizens_By_PkArgs, 'id'>>;
  citizens_stream?: SubscriptionResolver<Array<ResolversTypes['citizens']>, "citizens_stream", ParentType, ContextType, RequireFields<Subscription_RootCitizens_StreamArgs, 'batch_size' | 'cursor'>>;
  law_categories?: SubscriptionResolver<Array<ResolversTypes['law_categories']>, "law_categories", ParentType, ContextType, Partial<Subscription_RootLaw_CategoriesArgs>>;
  law_categories_aggregate?: SubscriptionResolver<ResolversTypes['law_categories_aggregate'], "law_categories_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Categories_AggregateArgs>>;
  law_categories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_categories']>, "law_categories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Categories_By_PkArgs, 'category_ja'>>;
  law_categories_stream?: SubscriptionResolver<Array<ResolversTypes['law_categories']>, "law_categories_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Categories_StreamArgs, 'batch_size' | 'cursor'>>;
  law_revision_columns?: SubscriptionResolver<Array<ResolversTypes['law_revision_columns']>, "law_revision_columns", ParentType, ContextType, Partial<Subscription_RootLaw_Revision_ColumnsArgs>>;
  law_revision_columns_aggregate?: SubscriptionResolver<ResolversTypes['law_revision_columns_aggregate'], "law_revision_columns_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Revision_Columns_AggregateArgs>>;
  law_revision_columns_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_revision_columns']>, "law_revision_columns_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Revision_Columns_By_PkArgs, 'column_id' | 'law_revision_id'>>;
  law_revision_columns_stream?: SubscriptionResolver<Array<ResolversTypes['law_revision_columns']>, "law_revision_columns_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Revision_Columns_StreamArgs, 'batch_size' | 'cursor'>>;
  law_revisions?: SubscriptionResolver<Array<ResolversTypes['law_revisions']>, "law_revisions", ParentType, ContextType, Partial<Subscription_RootLaw_RevisionsArgs>>;
  law_revisions_aggregate?: SubscriptionResolver<ResolversTypes['law_revisions_aggregate'], "law_revisions_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Revisions_AggregateArgs>>;
  law_revisions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_revisions']>, "law_revisions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Revisions_By_PkArgs, 'id'>>;
  law_revisions_stream?: SubscriptionResolver<Array<ResolversTypes['law_revisions']>, "law_revisions_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Revisions_StreamArgs, 'batch_size' | 'cursor'>>;
  law_statuses?: SubscriptionResolver<Array<ResolversTypes['law_statuses']>, "law_statuses", ParentType, ContextType, Partial<Subscription_RootLaw_StatusesArgs>>;
  law_statuses_aggregate?: SubscriptionResolver<ResolversTypes['law_statuses_aggregate'], "law_statuses_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Statuses_AggregateArgs>>;
  law_statuses_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_statuses']>, "law_statuses_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Statuses_By_PkArgs, 'status_en'>>;
  law_statuses_stream?: SubscriptionResolver<Array<ResolversTypes['law_statuses']>, "law_statuses_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Statuses_StreamArgs, 'batch_size' | 'cursor'>>;
  law_summaries?: SubscriptionResolver<Array<ResolversTypes['law_summaries']>, "law_summaries", ParentType, ContextType, Partial<Subscription_RootLaw_SummariesArgs>>;
  law_summaries_aggregate?: SubscriptionResolver<ResolversTypes['law_summaries_aggregate'], "law_summaries_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Summaries_AggregateArgs>>;
  law_summaries_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_summaries']>, "law_summaries_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Summaries_By_PkArgs, 'id'>>;
  law_summaries_stream?: SubscriptionResolver<Array<ResolversTypes['law_summaries']>, "law_summaries_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Summaries_StreamArgs, 'batch_size' | 'cursor'>>;
  law_types?: SubscriptionResolver<Array<ResolversTypes['law_types']>, "law_types", ParentType, ContextType, Partial<Subscription_RootLaw_TypesArgs>>;
  law_types_aggregate?: SubscriptionResolver<ResolversTypes['law_types_aggregate'], "law_types_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Types_AggregateArgs>>;
  law_types_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_types']>, "law_types_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Types_By_PkArgs, 'type_en'>>;
  law_types_stream?: SubscriptionResolver<Array<ResolversTypes['law_types']>, "law_types_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Types_StreamArgs, 'batch_size' | 'cursor'>>;
  law_views?: SubscriptionResolver<Array<ResolversTypes['law_views']>, "law_views", ParentType, ContextType, Partial<Subscription_RootLaw_ViewsArgs>>;
  law_views_aggregate?: SubscriptionResolver<ResolversTypes['law_views_aggregate'], "law_views_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Views_AggregateArgs>>;
  law_views_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_views']>, "law_views_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Views_By_PkArgs, 'law_id' | 'user_id'>>;
  law_views_stream?: SubscriptionResolver<Array<ResolversTypes['law_views']>, "law_views_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Views_StreamArgs, 'batch_size' | 'cursor'>>;
  laws?: SubscriptionResolver<Array<ResolversTypes['laws']>, "laws", ParentType, ContextType, Partial<Subscription_RootLawsArgs>>;
  laws_aggregate?: SubscriptionResolver<ResolversTypes['laws_aggregate'], "laws_aggregate", ParentType, ContextType, Partial<Subscription_RootLaws_AggregateArgs>>;
  laws_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['laws']>, "laws_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaws_By_PkArgs, 'id'>>;
  laws_stream?: SubscriptionResolver<Array<ResolversTypes['laws']>, "laws_stream", ParentType, ContextType, RequireFields<Subscription_RootLaws_StreamArgs, 'batch_size' | 'cursor'>>;
  resource_editable_users?: SubscriptionResolver<Array<ResolversTypes['resource_editable_users']>, "resource_editable_users", ParentType, ContextType, Partial<Subscription_RootResource_Editable_UsersArgs>>;
  resource_editable_users_aggregate?: SubscriptionResolver<ResolversTypes['resource_editable_users_aggregate'], "resource_editable_users_aggregate", ParentType, ContextType, Partial<Subscription_RootResource_Editable_Users_AggregateArgs>>;
  resource_editable_users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['resource_editable_users']>, "resource_editable_users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootResource_Editable_Users_By_PkArgs, 'resource_id' | 'user_id'>>;
  resource_editable_users_stream?: SubscriptionResolver<Array<ResolversTypes['resource_editable_users']>, "resource_editable_users_stream", ParentType, ContextType, RequireFields<Subscription_RootResource_Editable_Users_StreamArgs, 'batch_size' | 'cursor'>>;
  resource_histories?: SubscriptionResolver<Array<ResolversTypes['resource_histories']>, "resource_histories", ParentType, ContextType, Partial<Subscription_RootResource_HistoriesArgs>>;
  resource_histories_aggregate?: SubscriptionResolver<ResolversTypes['resource_histories_aggregate'], "resource_histories_aggregate", ParentType, ContextType, Partial<Subscription_RootResource_Histories_AggregateArgs>>;
  resource_histories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['resource_histories']>, "resource_histories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootResource_Histories_By_PkArgs, 'id'>>;
  resource_histories_stream?: SubscriptionResolver<Array<ResolversTypes['resource_histories']>, "resource_histories_stream", ParentType, ContextType, RequireFields<Subscription_RootResource_Histories_StreamArgs, 'batch_size' | 'cursor'>>;
  resources?: SubscriptionResolver<Array<ResolversTypes['resources']>, "resources", ParentType, ContextType, Partial<Subscription_RootResourcesArgs>>;
  resources_aggregate?: SubscriptionResolver<ResolversTypes['resources_aggregate'], "resources_aggregate", ParentType, ContextType, Partial<Subscription_RootResources_AggregateArgs>>;
  resources_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['resources']>, "resources_by_pk", ParentType, ContextType, RequireFields<Subscription_RootResources_By_PkArgs, 'id'>>;
  resources_stream?: SubscriptionResolver<Array<ResolversTypes['resources']>, "resources_stream", ParentType, ContextType, RequireFields<Subscription_RootResources_StreamArgs, 'batch_size' | 'cursor'>>;
  species?: SubscriptionResolver<Array<ResolversTypes['species']>, "species", ParentType, ContextType, Partial<Subscription_RootSpeciesArgs>>;
  species_aggregate?: SubscriptionResolver<ResolversTypes['species_aggregate'], "species_aggregate", ParentType, ContextType, Partial<Subscription_RootSpecies_AggregateArgs>>;
  species_assets?: SubscriptionResolver<Array<ResolversTypes['species_assets']>, "species_assets", ParentType, ContextType, Partial<Subscription_RootSpecies_AssetsArgs>>;
  species_assets_aggregate?: SubscriptionResolver<ResolversTypes['species_assets_aggregate'], "species_assets_aggregate", ParentType, ContextType, Partial<Subscription_RootSpecies_Assets_AggregateArgs>>;
  species_assets_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['species_assets']>, "species_assets_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSpecies_Assets_By_PkArgs, 'id'>>;
  species_assets_stream?: SubscriptionResolver<Array<ResolversTypes['species_assets']>, "species_assets_stream", ParentType, ContextType, RequireFields<Subscription_RootSpecies_Assets_StreamArgs, 'batch_size' | 'cursor'>>;
  species_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['species']>, "species_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSpecies_By_PkArgs, 'id'>>;
  species_percentage_view_with_world_id?: SubscriptionResolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, "species_percentage_view_with_world_id", ParentType, ContextType, Partial<Subscription_RootSpecies_Percentage_View_With_World_IdArgs>>;
  species_percentage_view_with_world_id_aggregate?: SubscriptionResolver<ResolversTypes['species_percentage_view_with_world_id_aggregate'], "species_percentage_view_with_world_id_aggregate", ParentType, ContextType, Partial<Subscription_RootSpecies_Percentage_View_With_World_Id_AggregateArgs>>;
  species_percentage_view_with_world_id_stream?: SubscriptionResolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, "species_percentage_view_with_world_id_stream", ParentType, ContextType, RequireFields<Subscription_RootSpecies_Percentage_View_With_World_Id_StreamArgs, 'batch_size' | 'cursor'>>;
  species_stream?: SubscriptionResolver<Array<ResolversTypes['species']>, "species_stream", ParentType, ContextType, RequireFields<Subscription_RootSpecies_StreamArgs, 'batch_size' | 'cursor'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, Partial<Subscription_RootUsersArgs>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, Partial<Subscription_RootUsers_AggregateArgs>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>>;
  users_stream?: SubscriptionResolver<Array<ResolversTypes['users']>, "users_stream", ParentType, ContextType, RequireFields<Subscription_RootUsers_StreamArgs, 'batch_size' | 'cursor'>>;
  world_arguments?: SubscriptionResolver<Array<ResolversTypes['world_arguments']>, "world_arguments", ParentType, ContextType, Partial<Subscription_RootWorld_ArgumentsArgs>>;
  world_arguments_aggregate?: SubscriptionResolver<ResolversTypes['world_arguments_aggregate'], "world_arguments_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Arguments_AggregateArgs>>;
  world_arguments_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_arguments']>, "world_arguments_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Arguments_By_PkArgs, 'argument_id' | 'world_id'>>;
  world_arguments_stream?: SubscriptionResolver<Array<ResolversTypes['world_arguments']>, "world_arguments_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Arguments_StreamArgs, 'batch_size' | 'cursor'>>;
  world_categories?: SubscriptionResolver<Array<ResolversTypes['world_categories']>, "world_categories", ParentType, ContextType, Partial<Subscription_RootWorld_CategoriesArgs>>;
  world_categories_aggregate?: SubscriptionResolver<ResolversTypes['world_categories_aggregate'], "world_categories_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Categories_AggregateArgs>>;
  world_categories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_categories']>, "world_categories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Categories_By_PkArgs, 'law_category_ja' | 'world_id'>>;
  world_categories_stream?: SubscriptionResolver<Array<ResolversTypes['world_categories']>, "world_categories_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Categories_StreamArgs, 'batch_size' | 'cursor'>>;
  world_chat_boxes?: SubscriptionResolver<Array<ResolversTypes['world_chat_boxes']>, "world_chat_boxes", ParentType, ContextType, Partial<Subscription_RootWorld_Chat_BoxesArgs>>;
  world_chat_boxes_aggregate?: SubscriptionResolver<ResolversTypes['world_chat_boxes_aggregate'], "world_chat_boxes_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Chat_Boxes_AggregateArgs>>;
  world_chat_boxes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_chat_boxes']>, "world_chat_boxes_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Chat_Boxes_By_PkArgs, 'id'>>;
  world_chat_boxes_stream?: SubscriptionResolver<Array<ResolversTypes['world_chat_boxes']>, "world_chat_boxes_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Chat_Boxes_StreamArgs, 'batch_size' | 'cursor'>>;
  world_chats?: SubscriptionResolver<Array<ResolversTypes['world_chats']>, "world_chats", ParentType, ContextType, Partial<Subscription_RootWorld_ChatsArgs>>;
  world_chats_aggregate?: SubscriptionResolver<ResolversTypes['world_chats_aggregate'], "world_chats_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Chats_AggregateArgs>>;
  world_chats_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_chats']>, "world_chats_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Chats_By_PkArgs, 'id'>>;
  world_chats_stream?: SubscriptionResolver<Array<ResolversTypes['world_chats']>, "world_chats_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Chats_StreamArgs, 'batch_size' | 'cursor'>>;
  world_citizens?: SubscriptionResolver<Array<ResolversTypes['world_citizens']>, "world_citizens", ParentType, ContextType, Partial<Subscription_RootWorld_CitizensArgs>>;
  world_citizens_aggregate?: SubscriptionResolver<ResolversTypes['world_citizens_aggregate'], "world_citizens_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Citizens_AggregateArgs>>;
  world_citizens_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_citizens']>, "world_citizens_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Citizens_By_PkArgs, 'citizen_id' | 'user_id'>>;
  world_citizens_stream?: SubscriptionResolver<Array<ResolversTypes['world_citizens']>, "world_citizens_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Citizens_StreamArgs, 'batch_size' | 'cursor'>>;
  world_comments?: SubscriptionResolver<Array<ResolversTypes['world_comments']>, "world_comments", ParentType, ContextType, Partial<Subscription_RootWorld_CommentsArgs>>;
  world_comments_aggregate?: SubscriptionResolver<ResolversTypes['world_comments_aggregate'], "world_comments_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Comments_AggregateArgs>>;
  world_comments_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_comments']>, "world_comments_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Comments_By_PkArgs, 'id'>>;
  world_comments_stream?: SubscriptionResolver<Array<ResolversTypes['world_comments']>, "world_comments_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Comments_StreamArgs, 'batch_size' | 'cursor'>>;
  world_editable_users?: SubscriptionResolver<Array<ResolversTypes['world_editable_users']>, "world_editable_users", ParentType, ContextType, Partial<Subscription_RootWorld_Editable_UsersArgs>>;
  world_editable_users_aggregate?: SubscriptionResolver<ResolversTypes['world_editable_users_aggregate'], "world_editable_users_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Editable_Users_AggregateArgs>>;
  world_editable_users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_editable_users']>, "world_editable_users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Editable_Users_By_PkArgs, 'user_id' | 'world_id'>>;
  world_editable_users_stream?: SubscriptionResolver<Array<ResolversTypes['world_editable_users']>, "world_editable_users_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Editable_Users_StreamArgs, 'batch_size' | 'cursor'>>;
  world_histories?: SubscriptionResolver<Array<ResolversTypes['world_histories']>, "world_histories", ParentType, ContextType, Partial<Subscription_RootWorld_HistoriesArgs>>;
  world_histories_aggregate?: SubscriptionResolver<ResolversTypes['world_histories_aggregate'], "world_histories_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Histories_AggregateArgs>>;
  world_histories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_histories']>, "world_histories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Histories_By_PkArgs, 'id'>>;
  world_histories_stream?: SubscriptionResolver<Array<ResolversTypes['world_histories']>, "world_histories_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Histories_StreamArgs, 'batch_size' | 'cursor'>>;
  world_laws?: SubscriptionResolver<Array<ResolversTypes['world_laws']>, "world_laws", ParentType, ContextType, Partial<Subscription_RootWorld_LawsArgs>>;
  world_laws_aggregate?: SubscriptionResolver<ResolversTypes['world_laws_aggregate'], "world_laws_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Laws_AggregateArgs>>;
  world_laws_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_laws']>, "world_laws_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Laws_By_PkArgs, 'law_id' | 'world_id'>>;
  world_laws_stream?: SubscriptionResolver<Array<ResolversTypes['world_laws']>, "world_laws_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Laws_StreamArgs, 'batch_size' | 'cursor'>>;
  world_reactions?: SubscriptionResolver<Array<ResolversTypes['world_reactions']>, "world_reactions", ParentType, ContextType, Partial<Subscription_RootWorld_ReactionsArgs>>;
  world_reactions_aggregate?: SubscriptionResolver<ResolversTypes['world_reactions_aggregate'], "world_reactions_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Reactions_AggregateArgs>>;
  world_reactions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_reactions']>, "world_reactions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Reactions_By_PkArgs, 'type' | 'user_id' | 'world_id'>>;
  world_reactions_stream?: SubscriptionResolver<Array<ResolversTypes['world_reactions']>, "world_reactions_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Reactions_StreamArgs, 'batch_size' | 'cursor'>>;
  worlds?: SubscriptionResolver<Array<ResolversTypes['worlds']>, "worlds", ParentType, ContextType, Partial<Subscription_RootWorldsArgs>>;
  worlds_aggregate?: SubscriptionResolver<ResolversTypes['worlds_aggregate'], "worlds_aggregate", ParentType, ContextType, Partial<Subscription_RootWorlds_AggregateArgs>>;
  worlds_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['worlds']>, "worlds_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorlds_By_PkArgs, 'id'>>;
  worlds_stream?: SubscriptionResolver<Array<ResolversTypes['worlds']>, "worlds_stream", ParentType, ContextType, RequireFields<Subscription_RootWorlds_StreamArgs, 'batch_size' | 'cursor'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  argument_views?: Resolver<Array<ResolversTypes['argument_views']>, ParentType, ContextType, Partial<UsersArgument_ViewsArgs>>;
  argument_views_aggregate?: Resolver<ResolversTypes['argument_views_aggregate'], ParentType, ContextType, Partial<UsersArgument_Views_AggregateArgs>>;
  arguments?: Resolver<Array<ResolversTypes['arguments']>, ParentType, ContextType, Partial<UsersArgumentsArgs>>;
  arguments_aggregate?: Resolver<ResolversTypes['arguments_aggregate'], ParentType, ContextType, Partial<UsersArguments_AggregateArgs>>;
  authentication_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  citizens?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType, Partial<UsersCitizensArgs>>;
  citizens_aggregate?: Resolver<ResolversTypes['citizens_aggregate'], ParentType, ContextType, Partial<UsersCitizens_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law_summaries?: Resolver<Array<ResolversTypes['law_summaries']>, ParentType, ContextType, Partial<UsersLaw_SummariesArgs>>;
  law_summaries_aggregate?: Resolver<ResolversTypes['law_summaries_aggregate'], ParentType, ContextType, Partial<UsersLaw_Summaries_AggregateArgs>>;
  law_views?: Resolver<Array<ResolversTypes['law_views']>, ParentType, ContextType, Partial<UsersLaw_ViewsArgs>>;
  law_views_aggregate?: Resolver<ResolversTypes['law_views_aggregate'], ParentType, ContextType, Partial<UsersLaw_Views_AggregateArgs>>;
  laws?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType, Partial<UsersLawsArgs>>;
  laws_aggregate?: Resolver<ResolversTypes['laws_aggregate'], ParentType, ContextType, Partial<UsersLaws_AggregateArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resource_editable_users?: Resolver<Array<ResolversTypes['resource_editable_users']>, ParentType, ContextType, Partial<UsersResource_Editable_UsersArgs>>;
  resource_editable_users_aggregate?: Resolver<ResolversTypes['resource_editable_users_aggregate'], ParentType, ContextType, Partial<UsersResource_Editable_Users_AggregateArgs>>;
  resource_histories?: Resolver<Array<ResolversTypes['resource_histories']>, ParentType, ContextType, Partial<UsersResource_HistoriesArgs>>;
  resource_histories_aggregate?: Resolver<ResolversTypes['resource_histories_aggregate'], ParentType, ContextType, Partial<UsersResource_Histories_AggregateArgs>>;
  species?: Resolver<Array<ResolversTypes['species']>, ParentType, ContextType, Partial<UsersSpeciesArgs>>;
  species_aggregate?: Resolver<ResolversTypes['species_aggregate'], ParentType, ContextType, Partial<UsersSpecies_AggregateArgs>>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world_chat_boxes?: Resolver<Array<ResolversTypes['world_chat_boxes']>, ParentType, ContextType, Partial<UsersWorld_Chat_BoxesArgs>>;
  world_chat_boxes_aggregate?: Resolver<ResolversTypes['world_chat_boxes_aggregate'], ParentType, ContextType, Partial<UsersWorld_Chat_Boxes_AggregateArgs>>;
  world_chats?: Resolver<Array<ResolversTypes['world_chats']>, ParentType, ContextType, Partial<UsersWorld_ChatsArgs>>;
  world_chats_aggregate?: Resolver<ResolversTypes['world_chats_aggregate'], ParentType, ContextType, Partial<UsersWorld_Chats_AggregateArgs>>;
  world_comments?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType, Partial<UsersWorld_CommentsArgs>>;
  world_comments_aggregate?: Resolver<ResolversTypes['world_comments_aggregate'], ParentType, ContextType, Partial<UsersWorld_Comments_AggregateArgs>>;
  world_editable_users?: Resolver<Array<ResolversTypes['world_editable_users']>, ParentType, ContextType, Partial<UsersWorld_Editable_UsersArgs>>;
  world_editable_users_aggregate?: Resolver<ResolversTypes['world_editable_users_aggregate'], ParentType, ContextType, Partial<UsersWorld_Editable_Users_AggregateArgs>>;
  world_histories?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType, Partial<UsersWorld_HistoriesArgs>>;
  world_histories_aggregate?: Resolver<ResolversTypes['world_histories_aggregate'], ParentType, ContextType, Partial<UsersWorld_Histories_AggregateArgs>>;
  world_reactions?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType, Partial<UsersWorld_ReactionsArgs>>;
  world_reactions_aggregate?: Resolver<ResolversTypes['world_reactions_aggregate'], ParentType, ContextType, Partial<UsersWorld_Reactions_AggregateArgs>>;
  worlds?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType, Partial<UsersWorldsArgs>>;
  worlds_aggregate?: Resolver<ResolversTypes['worlds_aggregate'], ParentType, ContextType, Partial<UsersWorlds_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['users_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['users_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['users_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['users_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['users_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['users_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['users_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['users_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_avg_fields'] = ResolversParentTypes['users_avg_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authentication_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authentication_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_stddev_fields'] = ResolversParentTypes['users_stddev_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_stddev_pop_fields'] = ResolversParentTypes['users_stddev_pop_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_stddev_samp_fields'] = ResolversParentTypes['users_stddev_samp_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_sum_fields'] = ResolversParentTypes['users_sum_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_var_pop_fields'] = ResolversParentTypes['users_var_pop_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_var_samp_fields'] = ResolversParentTypes['users_var_samp_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_variance_fields'] = ResolversParentTypes['users_variance_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type World_ArgumentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_arguments'] = ResolversParentTypes['world_arguments']> = {
  argument?: Resolver<ResolversTypes['arguments'], ParentType, ContextType>;
  argument_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Arguments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_arguments_aggregate'] = ResolversParentTypes['world_arguments_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_arguments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_arguments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Arguments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_arguments_aggregate_fields'] = ResolversParentTypes['world_arguments_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Arguments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_arguments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_arguments_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Arguments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_arguments_max_fields'] = ResolversParentTypes['world_arguments_max_fields']> = {
  argument_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Arguments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_arguments_min_fields'] = ResolversParentTypes['world_arguments_min_fields']> = {
  argument_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Arguments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_arguments_mutation_response'] = ResolversParentTypes['world_arguments_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_arguments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_categories'] = ResolversParentTypes['world_categories']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  law_category?: Resolver<ResolversTypes['law_categories'], ParentType, ContextType>;
  law_category_ja?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Categories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_categories_aggregate'] = ResolversParentTypes['world_categories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_categories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Categories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_categories_aggregate_fields'] = ResolversParentTypes['world_categories_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Categories_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_categories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_categories_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Categories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_categories_max_fields'] = ResolversParentTypes['world_categories_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_category_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Categories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_categories_min_fields'] = ResolversParentTypes['world_categories_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_category_ja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Categories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_categories_mutation_response'] = ResolversParentTypes['world_categories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_BoxesResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes'] = ResolversParentTypes['world_chat_boxes']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_chats?: Resolver<Array<ResolversTypes['world_chats']>, ParentType, ContextType, Partial<World_Chat_BoxesWorld_ChatsArgs>>;
  world_chats_aggregate?: Resolver<ResolversTypes['world_chats_aggregate'], ParentType, ContextType, Partial<World_Chat_BoxesWorld_Chats_AggregateArgs>>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_aggregate'] = ResolversParentTypes['world_chat_boxes_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_chat_boxes_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_chat_boxes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_aggregate_fields'] = ResolversParentTypes['world_chat_boxes_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_chat_boxes_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Chat_Boxes_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_chat_boxes_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_chat_boxes_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_chat_boxes_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_chat_boxes_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_chat_boxes_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_chat_boxes_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_chat_boxes_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_chat_boxes_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_chat_boxes_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_avg_fields'] = ResolversParentTypes['world_chat_boxes_avg_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_max_fields'] = ResolversParentTypes['world_chat_boxes_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_min_fields'] = ResolversParentTypes['world_chat_boxes_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_mutation_response'] = ResolversParentTypes['world_chat_boxes_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_chat_boxes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_stddev_fields'] = ResolversParentTypes['world_chat_boxes_stddev_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_stddev_pop_fields'] = ResolversParentTypes['world_chat_boxes_stddev_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_stddev_samp_fields'] = ResolversParentTypes['world_chat_boxes_stddev_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_sum_fields'] = ResolversParentTypes['world_chat_boxes_sum_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_var_pop_fields'] = ResolversParentTypes['world_chat_boxes_var_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_var_samp_fields'] = ResolversParentTypes['world_chat_boxes_var_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chat_Boxes_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chat_boxes_variance_fields'] = ResolversParentTypes['world_chat_boxes_variance_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_ChatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats'] = ResolversParentTypes['world_chats']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  chat_box_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world_chat_box?: Resolver<ResolversTypes['world_chat_boxes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_aggregate'] = ResolversParentTypes['world_chats_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_chats_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_chats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_aggregate_fields'] = ResolversParentTypes['world_chats_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_chats_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Chats_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_chats_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_chats_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_chats_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_chats_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_chats_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_chats_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_chats_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_chats_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_chats_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_avg_fields'] = ResolversParentTypes['world_chats_avg_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_max_fields'] = ResolversParentTypes['world_chats_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  chat_box_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_min_fields'] = ResolversParentTypes['world_chats_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  chat_box_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_mutation_response'] = ResolversParentTypes['world_chats_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_chats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_stddev_fields'] = ResolversParentTypes['world_chats_stddev_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_stddev_pop_fields'] = ResolversParentTypes['world_chats_stddev_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_stddev_samp_fields'] = ResolversParentTypes['world_chats_stddev_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_sum_fields'] = ResolversParentTypes['world_chats_sum_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_var_pop_fields'] = ResolversParentTypes['world_chats_var_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_var_samp_fields'] = ResolversParentTypes['world_chats_var_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Chats_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_chats_variance_fields'] = ResolversParentTypes['world_chats_variance_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_CitizensResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens'] = ResolversParentTypes['world_citizens']> = {
  citizen?: Resolver<ResolversTypes['citizens'], ParentType, ContextType>;
  citizen_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_aggregate'] = ResolversParentTypes['world_citizens_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_citizens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_aggregate_fields'] = ResolversParentTypes['world_citizens_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Citizens_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_citizens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_citizens_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_max_fields'] = ResolversParentTypes['world_citizens_max_fields']> = {
  citizen_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_min_fields'] = ResolversParentTypes['world_citizens_min_fields']> = {
  citizen_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_mutation_response'] = ResolversParentTypes['world_citizens_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_CommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments'] = ResolversParentTypes['world_comments']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_aggregate'] = ResolversParentTypes['world_comments_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_comments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_aggregate_fields'] = ResolversParentTypes['world_comments_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_comments_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Comments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_comments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_comments_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_comments_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_comments_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_comments_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_comments_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_comments_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_comments_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_comments_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_avg_fields'] = ResolversParentTypes['world_comments_avg_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_max_fields'] = ResolversParentTypes['world_comments_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_min_fields'] = ResolversParentTypes['world_comments_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_mutation_response'] = ResolversParentTypes['world_comments_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_stddev_fields'] = ResolversParentTypes['world_comments_stddev_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_stddev_pop_fields'] = ResolversParentTypes['world_comments_stddev_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_stddev_samp_fields'] = ResolversParentTypes['world_comments_stddev_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_sum_fields'] = ResolversParentTypes['world_comments_sum_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_var_pop_fields'] = ResolversParentTypes['world_comments_var_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_var_samp_fields'] = ResolversParentTypes['world_comments_var_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_variance_fields'] = ResolversParentTypes['world_comments_variance_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users'] = ResolversParentTypes['world_editable_users']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_aggregate'] = ResolversParentTypes['world_editable_users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_editable_users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_editable_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_aggregate_fields'] = ResolversParentTypes['world_editable_users_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_editable_users_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Editable_Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_editable_users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_editable_users_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_editable_users_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_editable_users_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_editable_users_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_editable_users_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_editable_users_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_editable_users_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_editable_users_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_avg_fields'] = ResolversParentTypes['world_editable_users_avg_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_max_fields'] = ResolversParentTypes['world_editable_users_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_min_fields'] = ResolversParentTypes['world_editable_users_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_mutation_response'] = ResolversParentTypes['world_editable_users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_editable_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_stddev_fields'] = ResolversParentTypes['world_editable_users_stddev_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_stddev_pop_fields'] = ResolversParentTypes['world_editable_users_stddev_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_stddev_samp_fields'] = ResolversParentTypes['world_editable_users_stddev_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_sum_fields'] = ResolversParentTypes['world_editable_users_sum_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_var_pop_fields'] = ResolversParentTypes['world_editable_users_var_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_var_samp_fields'] = ResolversParentTypes['world_editable_users_var_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Editable_Users_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_editable_users_variance_fields'] = ResolversParentTypes['world_editable_users_variance_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_HistoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories'] = ResolversParentTypes['world_histories']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  editor_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  markup_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markup_text_html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  official_language?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  public_security?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_aggregate'] = ResolversParentTypes['world_histories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_histories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_aggregate_fields'] = ResolversParentTypes['world_histories_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_histories_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Histories_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_histories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_histories_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_histories_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_histories_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_histories_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_histories_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_histories_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_histories_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_histories_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_avg_fields'] = ResolversParentTypes['world_histories_avg_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_max_fields'] = ResolversParentTypes['world_histories_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  markup_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  markup_text_html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  official_language?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_min_fields'] = ResolversParentTypes['world_histories_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editor_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  markup_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  markup_text_html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  official_language?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_mutation_response'] = ResolversParentTypes['world_histories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_stddev_fields'] = ResolversParentTypes['world_histories_stddev_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_stddev_pop_fields'] = ResolversParentTypes['world_histories_stddev_pop_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_stddev_samp_fields'] = ResolversParentTypes['world_histories_stddev_samp_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_sum_fields'] = ResolversParentTypes['world_histories_sum_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_var_pop_fields'] = ResolversParentTypes['world_histories_var_pop_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_var_samp_fields'] = ResolversParentTypes['world_histories_var_samp_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_variance_fields'] = ResolversParentTypes['world_histories_variance_fields']> = {
  official_language?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_LawsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws'] = ResolversParentTypes['world_laws']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_aggregate'] = ResolversParentTypes['world_laws_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_laws_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_aggregate_fields'] = ResolversParentTypes['world_laws_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Laws_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_laws_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_laws_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_max_fields'] = ResolversParentTypes['world_laws_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_min_fields'] = ResolversParentTypes['world_laws_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_mutation_response'] = ResolversParentTypes['world_laws_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_ReactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions'] = ResolversParentTypes['world_reactions']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_aggregate'] = ResolversParentTypes['world_reactions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_reactions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_aggregate_fields'] = ResolversParentTypes['world_reactions_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_reactions_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Reactions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_reactions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_reactions_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_reactions_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_reactions_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_reactions_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_reactions_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_reactions_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_reactions_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_reactions_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_avg_fields'] = ResolversParentTypes['world_reactions_avg_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_max_fields'] = ResolversParentTypes['world_reactions_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_min_fields'] = ResolversParentTypes['world_reactions_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_mutation_response'] = ResolversParentTypes['world_reactions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_stddev_fields'] = ResolversParentTypes['world_reactions_stddev_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_stddev_pop_fields'] = ResolversParentTypes['world_reactions_stddev_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_stddev_samp_fields'] = ResolversParentTypes['world_reactions_stddev_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_sum_fields'] = ResolversParentTypes['world_reactions_sum_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_var_pop_fields'] = ResolversParentTypes['world_reactions_var_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_var_samp_fields'] = ResolversParentTypes['world_reactions_var_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_variance_fields'] = ResolversParentTypes['world_reactions_variance_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds'] = ResolversParentTypes['worlds']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  citizen_histories?: Resolver<Array<ResolversTypes['citizen_histories']>, ParentType, ContextType, Partial<WorldsCitizen_HistoriesArgs>>;
  citizen_histories_aggregate?: Resolver<ResolversTypes['citizen_histories_aggregate'], ParentType, ContextType, Partial<WorldsCitizen_Histories_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  identify_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  species_percentage?: Resolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, ParentType, ContextType, Partial<WorldsSpecies_PercentageArgs>>;
  species_percentage_aggregate?: Resolver<ResolversTypes['species_percentage_view_with_world_id_aggregate'], ParentType, ContextType, Partial<WorldsSpecies_Percentage_AggregateArgs>>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world_arguments?: Resolver<Array<ResolversTypes['world_arguments']>, ParentType, ContextType, Partial<WorldsWorld_ArgumentsArgs>>;
  world_arguments_aggregate?: Resolver<ResolversTypes['world_arguments_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Arguments_AggregateArgs>>;
  world_categories?: Resolver<Array<ResolversTypes['world_categories']>, ParentType, ContextType, Partial<WorldsWorld_CategoriesArgs>>;
  world_categories_aggregate?: Resolver<ResolversTypes['world_categories_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Categories_AggregateArgs>>;
  world_chat_boxes?: Resolver<Array<ResolversTypes['world_chat_boxes']>, ParentType, ContextType, Partial<WorldsWorld_Chat_BoxesArgs>>;
  world_chat_boxes_aggregate?: Resolver<ResolversTypes['world_chat_boxes_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Chat_Boxes_AggregateArgs>>;
  world_citizens?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType, Partial<WorldsWorld_CitizensArgs>>;
  world_citizens_aggregate?: Resolver<ResolversTypes['world_citizens_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Citizens_AggregateArgs>>;
  world_comments?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType, Partial<WorldsWorld_CommentsArgs>>;
  world_comments_aggregate?: Resolver<ResolversTypes['world_comments_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Comments_AggregateArgs>>;
  world_editable_users?: Resolver<Array<ResolversTypes['world_editable_users']>, ParentType, ContextType, Partial<WorldsWorld_Editable_UsersArgs>>;
  world_editable_users_aggregate?: Resolver<ResolversTypes['world_editable_users_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Editable_Users_AggregateArgs>>;
  world_histories?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType, Partial<WorldsWorld_HistoriesArgs>>;
  world_histories_aggregate?: Resolver<ResolversTypes['world_histories_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Histories_AggregateArgs>>;
  world_laws?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType, Partial<WorldsWorld_LawsArgs>>;
  world_laws_aggregate?: Resolver<ResolversTypes['world_laws_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Laws_AggregateArgs>>;
  world_reactions?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType, Partial<WorldsWorld_ReactionsArgs>>;
  world_reactions_aggregate?: Resolver<ResolversTypes['world_reactions_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Reactions_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_aggregate'] = ResolversParentTypes['worlds_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['worlds_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_aggregate_fields'] = ResolversParentTypes['worlds_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['worlds_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Worlds_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['worlds_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['worlds_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['worlds_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['worlds_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['worlds_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['worlds_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['worlds_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['worlds_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['worlds_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_avg_fields'] = ResolversParentTypes['worlds_avg_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_max_fields'] = ResolversParentTypes['worlds_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  identify_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_min_fields'] = ResolversParentTypes['worlds_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  identify_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_mutation_response'] = ResolversParentTypes['worlds_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_stddev_fields'] = ResolversParentTypes['worlds_stddev_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_stddev_pop_fields'] = ResolversParentTypes['worlds_stddev_pop_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_stddev_samp_fields'] = ResolversParentTypes['worlds_stddev_samp_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_sum_fields'] = ResolversParentTypes['worlds_sum_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_var_pop_fields'] = ResolversParentTypes['worlds_var_pop_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_var_samp_fields'] = ResolversParentTypes['worlds_var_samp_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_variance_fields'] = ResolversParentTypes['worlds_variance_fields']> = {
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  _Service?: _ServiceResolvers<ContextType>;
  argumen_chats?: Argumen_ChatsResolvers<ContextType>;
  argumen_chats_aggregate?: Argumen_Chats_AggregateResolvers<ContextType>;
  argumen_chats_aggregate_fields?: Argumen_Chats_Aggregate_FieldsResolvers<ContextType>;
  argumen_chats_avg_fields?: Argumen_Chats_Avg_FieldsResolvers<ContextType>;
  argumen_chats_max_fields?: Argumen_Chats_Max_FieldsResolvers<ContextType>;
  argumen_chats_min_fields?: Argumen_Chats_Min_FieldsResolvers<ContextType>;
  argumen_chats_mutation_response?: Argumen_Chats_Mutation_ResponseResolvers<ContextType>;
  argumen_chats_stddev_fields?: Argumen_Chats_Stddev_FieldsResolvers<ContextType>;
  argumen_chats_stddev_pop_fields?: Argumen_Chats_Stddev_Pop_FieldsResolvers<ContextType>;
  argumen_chats_stddev_samp_fields?: Argumen_Chats_Stddev_Samp_FieldsResolvers<ContextType>;
  argumen_chats_sum_fields?: Argumen_Chats_Sum_FieldsResolvers<ContextType>;
  argumen_chats_var_pop_fields?: Argumen_Chats_Var_Pop_FieldsResolvers<ContextType>;
  argumen_chats_var_samp_fields?: Argumen_Chats_Var_Samp_FieldsResolvers<ContextType>;
  argumen_chats_variance_fields?: Argumen_Chats_Variance_FieldsResolvers<ContextType>;
  argument_chat_boxes?: Argument_Chat_BoxesResolvers<ContextType>;
  argument_chat_boxes_aggregate?: Argument_Chat_Boxes_AggregateResolvers<ContextType>;
  argument_chat_boxes_aggregate_fields?: Argument_Chat_Boxes_Aggregate_FieldsResolvers<ContextType>;
  argument_chat_boxes_max_fields?: Argument_Chat_Boxes_Max_FieldsResolvers<ContextType>;
  argument_chat_boxes_min_fields?: Argument_Chat_Boxes_Min_FieldsResolvers<ContextType>;
  argument_chat_boxes_mutation_response?: Argument_Chat_Boxes_Mutation_ResponseResolvers<ContextType>;
  argument_views?: Argument_ViewsResolvers<ContextType>;
  argument_views_aggregate?: Argument_Views_AggregateResolvers<ContextType>;
  argument_views_aggregate_fields?: Argument_Views_Aggregate_FieldsResolvers<ContextType>;
  argument_views_max_fields?: Argument_Views_Max_FieldsResolvers<ContextType>;
  argument_views_min_fields?: Argument_Views_Min_FieldsResolvers<ContextType>;
  argument_views_mutation_response?: Argument_Views_Mutation_ResponseResolvers<ContextType>;
  arguments?: ArgumentsResolvers<ContextType>;
  arguments_aggregate?: Arguments_AggregateResolvers<ContextType>;
  arguments_aggregate_fields?: Arguments_Aggregate_FieldsResolvers<ContextType>;
  arguments_max_fields?: Arguments_Max_FieldsResolvers<ContextType>;
  arguments_min_fields?: Arguments_Min_FieldsResolvers<ContextType>;
  arguments_mutation_response?: Arguments_Mutation_ResponseResolvers<ContextType>;
  citizen_histories?: Citizen_HistoriesResolvers<ContextType>;
  citizen_histories_aggregate?: Citizen_Histories_AggregateResolvers<ContextType>;
  citizen_histories_aggregate_fields?: Citizen_Histories_Aggregate_FieldsResolvers<ContextType>;
  citizen_histories_max_fields?: Citizen_Histories_Max_FieldsResolvers<ContextType>;
  citizen_histories_min_fields?: Citizen_Histories_Min_FieldsResolvers<ContextType>;
  citizen_histories_mutation_response?: Citizen_Histories_Mutation_ResponseResolvers<ContextType>;
  citizens?: CitizensResolvers<ContextType>;
  citizens_aggregate?: Citizens_AggregateResolvers<ContextType>;
  citizens_aggregate_fields?: Citizens_Aggregate_FieldsResolvers<ContextType>;
  citizens_avg_fields?: Citizens_Avg_FieldsResolvers<ContextType>;
  citizens_max_fields?: Citizens_Max_FieldsResolvers<ContextType>;
  citizens_min_fields?: Citizens_Min_FieldsResolvers<ContextType>;
  citizens_mutation_response?: Citizens_Mutation_ResponseResolvers<ContextType>;
  citizens_stddev_fields?: Citizens_Stddev_FieldsResolvers<ContextType>;
  citizens_stddev_pop_fields?: Citizens_Stddev_Pop_FieldsResolvers<ContextType>;
  citizens_stddev_samp_fields?: Citizens_Stddev_Samp_FieldsResolvers<ContextType>;
  citizens_sum_fields?: Citizens_Sum_FieldsResolvers<ContextType>;
  citizens_var_pop_fields?: Citizens_Var_Pop_FieldsResolvers<ContextType>;
  citizens_var_samp_fields?: Citizens_Var_Samp_FieldsResolvers<ContextType>;
  citizens_variance_fields?: Citizens_Variance_FieldsResolvers<ContextType>;
  date?: GraphQLScalarType;
  jsonb?: GraphQLScalarType;
  law_categories?: Law_CategoriesResolvers<ContextType>;
  law_categories_aggregate?: Law_Categories_AggregateResolvers<ContextType>;
  law_categories_aggregate_fields?: Law_Categories_Aggregate_FieldsResolvers<ContextType>;
  law_categories_max_fields?: Law_Categories_Max_FieldsResolvers<ContextType>;
  law_categories_min_fields?: Law_Categories_Min_FieldsResolvers<ContextType>;
  law_categories_mutation_response?: Law_Categories_Mutation_ResponseResolvers<ContextType>;
  law_revision_columns?: Law_Revision_ColumnsResolvers<ContextType>;
  law_revision_columns_aggregate?: Law_Revision_Columns_AggregateResolvers<ContextType>;
  law_revision_columns_aggregate_fields?: Law_Revision_Columns_Aggregate_FieldsResolvers<ContextType>;
  law_revision_columns_max_fields?: Law_Revision_Columns_Max_FieldsResolvers<ContextType>;
  law_revision_columns_min_fields?: Law_Revision_Columns_Min_FieldsResolvers<ContextType>;
  law_revision_columns_mutation_response?: Law_Revision_Columns_Mutation_ResponseResolvers<ContextType>;
  law_revisions?: Law_RevisionsResolvers<ContextType>;
  law_revisions_aggregate?: Law_Revisions_AggregateResolvers<ContextType>;
  law_revisions_aggregate_fields?: Law_Revisions_Aggregate_FieldsResolvers<ContextType>;
  law_revisions_max_fields?: Law_Revisions_Max_FieldsResolvers<ContextType>;
  law_revisions_min_fields?: Law_Revisions_Min_FieldsResolvers<ContextType>;
  law_revisions_mutation_response?: Law_Revisions_Mutation_ResponseResolvers<ContextType>;
  law_statuses?: Law_StatusesResolvers<ContextType>;
  law_statuses_aggregate?: Law_Statuses_AggregateResolvers<ContextType>;
  law_statuses_aggregate_fields?: Law_Statuses_Aggregate_FieldsResolvers<ContextType>;
  law_statuses_max_fields?: Law_Statuses_Max_FieldsResolvers<ContextType>;
  law_statuses_min_fields?: Law_Statuses_Min_FieldsResolvers<ContextType>;
  law_statuses_mutation_response?: Law_Statuses_Mutation_ResponseResolvers<ContextType>;
  law_summaries?: Law_SummariesResolvers<ContextType>;
  law_summaries_aggregate?: Law_Summaries_AggregateResolvers<ContextType>;
  law_summaries_aggregate_fields?: Law_Summaries_Aggregate_FieldsResolvers<ContextType>;
  law_summaries_max_fields?: Law_Summaries_Max_FieldsResolvers<ContextType>;
  law_summaries_min_fields?: Law_Summaries_Min_FieldsResolvers<ContextType>;
  law_summaries_mutation_response?: Law_Summaries_Mutation_ResponseResolvers<ContextType>;
  law_types?: Law_TypesResolvers<ContextType>;
  law_types_aggregate?: Law_Types_AggregateResolvers<ContextType>;
  law_types_aggregate_fields?: Law_Types_Aggregate_FieldsResolvers<ContextType>;
  law_types_max_fields?: Law_Types_Max_FieldsResolvers<ContextType>;
  law_types_min_fields?: Law_Types_Min_FieldsResolvers<ContextType>;
  law_types_mutation_response?: Law_Types_Mutation_ResponseResolvers<ContextType>;
  law_views?: Law_ViewsResolvers<ContextType>;
  law_views_aggregate?: Law_Views_AggregateResolvers<ContextType>;
  law_views_aggregate_fields?: Law_Views_Aggregate_FieldsResolvers<ContextType>;
  law_views_max_fields?: Law_Views_Max_FieldsResolvers<ContextType>;
  law_views_min_fields?: Law_Views_Min_FieldsResolvers<ContextType>;
  law_views_mutation_response?: Law_Views_Mutation_ResponseResolvers<ContextType>;
  laws?: LawsResolvers<ContextType>;
  laws_aggregate?: Laws_AggregateResolvers<ContextType>;
  laws_aggregate_fields?: Laws_Aggregate_FieldsResolvers<ContextType>;
  laws_max_fields?: Laws_Max_FieldsResolvers<ContextType>;
  laws_min_fields?: Laws_Min_FieldsResolvers<ContextType>;
  laws_mutation_response?: Laws_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  numeric?: GraphQLScalarType;
  query_root?: Query_RootResolvers<ContextType>;
  resource_editable_users?: Resource_Editable_UsersResolvers<ContextType>;
  resource_editable_users_aggregate?: Resource_Editable_Users_AggregateResolvers<ContextType>;
  resource_editable_users_aggregate_fields?: Resource_Editable_Users_Aggregate_FieldsResolvers<ContextType>;
  resource_editable_users_max_fields?: Resource_Editable_Users_Max_FieldsResolvers<ContextType>;
  resource_editable_users_min_fields?: Resource_Editable_Users_Min_FieldsResolvers<ContextType>;
  resource_editable_users_mutation_response?: Resource_Editable_Users_Mutation_ResponseResolvers<ContextType>;
  resource_histories?: Resource_HistoriesResolvers<ContextType>;
  resource_histories_aggregate?: Resource_Histories_AggregateResolvers<ContextType>;
  resource_histories_aggregate_fields?: Resource_Histories_Aggregate_FieldsResolvers<ContextType>;
  resource_histories_max_fields?: Resource_Histories_Max_FieldsResolvers<ContextType>;
  resource_histories_min_fields?: Resource_Histories_Min_FieldsResolvers<ContextType>;
  resource_histories_mutation_response?: Resource_Histories_Mutation_ResponseResolvers<ContextType>;
  resources?: ResourcesResolvers<ContextType>;
  resources_aggregate?: Resources_AggregateResolvers<ContextType>;
  resources_aggregate_fields?: Resources_Aggregate_FieldsResolvers<ContextType>;
  resources_max_fields?: Resources_Max_FieldsResolvers<ContextType>;
  resources_min_fields?: Resources_Min_FieldsResolvers<ContextType>;
  resources_mutation_response?: Resources_Mutation_ResponseResolvers<ContextType>;
  species?: SpeciesResolvers<ContextType>;
  species_aggregate?: Species_AggregateResolvers<ContextType>;
  species_aggregate_fields?: Species_Aggregate_FieldsResolvers<ContextType>;
  species_assets?: Species_AssetsResolvers<ContextType>;
  species_assets_aggregate?: Species_Assets_AggregateResolvers<ContextType>;
  species_assets_aggregate_fields?: Species_Assets_Aggregate_FieldsResolvers<ContextType>;
  species_assets_max_fields?: Species_Assets_Max_FieldsResolvers<ContextType>;
  species_assets_min_fields?: Species_Assets_Min_FieldsResolvers<ContextType>;
  species_assets_mutation_response?: Species_Assets_Mutation_ResponseResolvers<ContextType>;
  species_max_fields?: Species_Max_FieldsResolvers<ContextType>;
  species_min_fields?: Species_Min_FieldsResolvers<ContextType>;
  species_mutation_response?: Species_Mutation_ResponseResolvers<ContextType>;
  species_percentage_view_with_world_id?: Species_Percentage_View_With_World_IdResolvers<ContextType>;
  species_percentage_view_with_world_id_aggregate?: Species_Percentage_View_With_World_Id_AggregateResolvers<ContextType>;
  species_percentage_view_with_world_id_aggregate_fields?: Species_Percentage_View_With_World_Id_Aggregate_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_avg_fields?: Species_Percentage_View_With_World_Id_Avg_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_max_fields?: Species_Percentage_View_With_World_Id_Max_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_min_fields?: Species_Percentage_View_With_World_Id_Min_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_stddev_fields?: Species_Percentage_View_With_World_Id_Stddev_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_stddev_pop_fields?: Species_Percentage_View_With_World_Id_Stddev_Pop_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_stddev_samp_fields?: Species_Percentage_View_With_World_Id_Stddev_Samp_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_sum_fields?: Species_Percentage_View_With_World_Id_Sum_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_var_pop_fields?: Species_Percentage_View_With_World_Id_Var_Pop_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_var_samp_fields?: Species_Percentage_View_With_World_Id_Var_Samp_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_variance_fields?: Species_Percentage_View_With_World_Id_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_avg_fields?: Users_Avg_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  users_stddev_fields?: Users_Stddev_FieldsResolvers<ContextType>;
  users_stddev_pop_fields?: Users_Stddev_Pop_FieldsResolvers<ContextType>;
  users_stddev_samp_fields?: Users_Stddev_Samp_FieldsResolvers<ContextType>;
  users_sum_fields?: Users_Sum_FieldsResolvers<ContextType>;
  users_var_pop_fields?: Users_Var_Pop_FieldsResolvers<ContextType>;
  users_var_samp_fields?: Users_Var_Samp_FieldsResolvers<ContextType>;
  users_variance_fields?: Users_Variance_FieldsResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  world_arguments?: World_ArgumentsResolvers<ContextType>;
  world_arguments_aggregate?: World_Arguments_AggregateResolvers<ContextType>;
  world_arguments_aggregate_fields?: World_Arguments_Aggregate_FieldsResolvers<ContextType>;
  world_arguments_max_fields?: World_Arguments_Max_FieldsResolvers<ContextType>;
  world_arguments_min_fields?: World_Arguments_Min_FieldsResolvers<ContextType>;
  world_arguments_mutation_response?: World_Arguments_Mutation_ResponseResolvers<ContextType>;
  world_categories?: World_CategoriesResolvers<ContextType>;
  world_categories_aggregate?: World_Categories_AggregateResolvers<ContextType>;
  world_categories_aggregate_fields?: World_Categories_Aggregate_FieldsResolvers<ContextType>;
  world_categories_max_fields?: World_Categories_Max_FieldsResolvers<ContextType>;
  world_categories_min_fields?: World_Categories_Min_FieldsResolvers<ContextType>;
  world_categories_mutation_response?: World_Categories_Mutation_ResponseResolvers<ContextType>;
  world_chat_boxes?: World_Chat_BoxesResolvers<ContextType>;
  world_chat_boxes_aggregate?: World_Chat_Boxes_AggregateResolvers<ContextType>;
  world_chat_boxes_aggregate_fields?: World_Chat_Boxes_Aggregate_FieldsResolvers<ContextType>;
  world_chat_boxes_avg_fields?: World_Chat_Boxes_Avg_FieldsResolvers<ContextType>;
  world_chat_boxes_max_fields?: World_Chat_Boxes_Max_FieldsResolvers<ContextType>;
  world_chat_boxes_min_fields?: World_Chat_Boxes_Min_FieldsResolvers<ContextType>;
  world_chat_boxes_mutation_response?: World_Chat_Boxes_Mutation_ResponseResolvers<ContextType>;
  world_chat_boxes_stddev_fields?: World_Chat_Boxes_Stddev_FieldsResolvers<ContextType>;
  world_chat_boxes_stddev_pop_fields?: World_Chat_Boxes_Stddev_Pop_FieldsResolvers<ContextType>;
  world_chat_boxes_stddev_samp_fields?: World_Chat_Boxes_Stddev_Samp_FieldsResolvers<ContextType>;
  world_chat_boxes_sum_fields?: World_Chat_Boxes_Sum_FieldsResolvers<ContextType>;
  world_chat_boxes_var_pop_fields?: World_Chat_Boxes_Var_Pop_FieldsResolvers<ContextType>;
  world_chat_boxes_var_samp_fields?: World_Chat_Boxes_Var_Samp_FieldsResolvers<ContextType>;
  world_chat_boxes_variance_fields?: World_Chat_Boxes_Variance_FieldsResolvers<ContextType>;
  world_chats?: World_ChatsResolvers<ContextType>;
  world_chats_aggregate?: World_Chats_AggregateResolvers<ContextType>;
  world_chats_aggregate_fields?: World_Chats_Aggregate_FieldsResolvers<ContextType>;
  world_chats_avg_fields?: World_Chats_Avg_FieldsResolvers<ContextType>;
  world_chats_max_fields?: World_Chats_Max_FieldsResolvers<ContextType>;
  world_chats_min_fields?: World_Chats_Min_FieldsResolvers<ContextType>;
  world_chats_mutation_response?: World_Chats_Mutation_ResponseResolvers<ContextType>;
  world_chats_stddev_fields?: World_Chats_Stddev_FieldsResolvers<ContextType>;
  world_chats_stddev_pop_fields?: World_Chats_Stddev_Pop_FieldsResolvers<ContextType>;
  world_chats_stddev_samp_fields?: World_Chats_Stddev_Samp_FieldsResolvers<ContextType>;
  world_chats_sum_fields?: World_Chats_Sum_FieldsResolvers<ContextType>;
  world_chats_var_pop_fields?: World_Chats_Var_Pop_FieldsResolvers<ContextType>;
  world_chats_var_samp_fields?: World_Chats_Var_Samp_FieldsResolvers<ContextType>;
  world_chats_variance_fields?: World_Chats_Variance_FieldsResolvers<ContextType>;
  world_citizens?: World_CitizensResolvers<ContextType>;
  world_citizens_aggregate?: World_Citizens_AggregateResolvers<ContextType>;
  world_citizens_aggregate_fields?: World_Citizens_Aggregate_FieldsResolvers<ContextType>;
  world_citizens_max_fields?: World_Citizens_Max_FieldsResolvers<ContextType>;
  world_citizens_min_fields?: World_Citizens_Min_FieldsResolvers<ContextType>;
  world_citizens_mutation_response?: World_Citizens_Mutation_ResponseResolvers<ContextType>;
  world_comments?: World_CommentsResolvers<ContextType>;
  world_comments_aggregate?: World_Comments_AggregateResolvers<ContextType>;
  world_comments_aggregate_fields?: World_Comments_Aggregate_FieldsResolvers<ContextType>;
  world_comments_avg_fields?: World_Comments_Avg_FieldsResolvers<ContextType>;
  world_comments_max_fields?: World_Comments_Max_FieldsResolvers<ContextType>;
  world_comments_min_fields?: World_Comments_Min_FieldsResolvers<ContextType>;
  world_comments_mutation_response?: World_Comments_Mutation_ResponseResolvers<ContextType>;
  world_comments_stddev_fields?: World_Comments_Stddev_FieldsResolvers<ContextType>;
  world_comments_stddev_pop_fields?: World_Comments_Stddev_Pop_FieldsResolvers<ContextType>;
  world_comments_stddev_samp_fields?: World_Comments_Stddev_Samp_FieldsResolvers<ContextType>;
  world_comments_sum_fields?: World_Comments_Sum_FieldsResolvers<ContextType>;
  world_comments_var_pop_fields?: World_Comments_Var_Pop_FieldsResolvers<ContextType>;
  world_comments_var_samp_fields?: World_Comments_Var_Samp_FieldsResolvers<ContextType>;
  world_comments_variance_fields?: World_Comments_Variance_FieldsResolvers<ContextType>;
  world_editable_users?: World_Editable_UsersResolvers<ContextType>;
  world_editable_users_aggregate?: World_Editable_Users_AggregateResolvers<ContextType>;
  world_editable_users_aggregate_fields?: World_Editable_Users_Aggregate_FieldsResolvers<ContextType>;
  world_editable_users_avg_fields?: World_Editable_Users_Avg_FieldsResolvers<ContextType>;
  world_editable_users_max_fields?: World_Editable_Users_Max_FieldsResolvers<ContextType>;
  world_editable_users_min_fields?: World_Editable_Users_Min_FieldsResolvers<ContextType>;
  world_editable_users_mutation_response?: World_Editable_Users_Mutation_ResponseResolvers<ContextType>;
  world_editable_users_stddev_fields?: World_Editable_Users_Stddev_FieldsResolvers<ContextType>;
  world_editable_users_stddev_pop_fields?: World_Editable_Users_Stddev_Pop_FieldsResolvers<ContextType>;
  world_editable_users_stddev_samp_fields?: World_Editable_Users_Stddev_Samp_FieldsResolvers<ContextType>;
  world_editable_users_sum_fields?: World_Editable_Users_Sum_FieldsResolvers<ContextType>;
  world_editable_users_var_pop_fields?: World_Editable_Users_Var_Pop_FieldsResolvers<ContextType>;
  world_editable_users_var_samp_fields?: World_Editable_Users_Var_Samp_FieldsResolvers<ContextType>;
  world_editable_users_variance_fields?: World_Editable_Users_Variance_FieldsResolvers<ContextType>;
  world_histories?: World_HistoriesResolvers<ContextType>;
  world_histories_aggregate?: World_Histories_AggregateResolvers<ContextType>;
  world_histories_aggregate_fields?: World_Histories_Aggregate_FieldsResolvers<ContextType>;
  world_histories_avg_fields?: World_Histories_Avg_FieldsResolvers<ContextType>;
  world_histories_max_fields?: World_Histories_Max_FieldsResolvers<ContextType>;
  world_histories_min_fields?: World_Histories_Min_FieldsResolvers<ContextType>;
  world_histories_mutation_response?: World_Histories_Mutation_ResponseResolvers<ContextType>;
  world_histories_stddev_fields?: World_Histories_Stddev_FieldsResolvers<ContextType>;
  world_histories_stddev_pop_fields?: World_Histories_Stddev_Pop_FieldsResolvers<ContextType>;
  world_histories_stddev_samp_fields?: World_Histories_Stddev_Samp_FieldsResolvers<ContextType>;
  world_histories_sum_fields?: World_Histories_Sum_FieldsResolvers<ContextType>;
  world_histories_var_pop_fields?: World_Histories_Var_Pop_FieldsResolvers<ContextType>;
  world_histories_var_samp_fields?: World_Histories_Var_Samp_FieldsResolvers<ContextType>;
  world_histories_variance_fields?: World_Histories_Variance_FieldsResolvers<ContextType>;
  world_laws?: World_LawsResolvers<ContextType>;
  world_laws_aggregate?: World_Laws_AggregateResolvers<ContextType>;
  world_laws_aggregate_fields?: World_Laws_Aggregate_FieldsResolvers<ContextType>;
  world_laws_max_fields?: World_Laws_Max_FieldsResolvers<ContextType>;
  world_laws_min_fields?: World_Laws_Min_FieldsResolvers<ContextType>;
  world_laws_mutation_response?: World_Laws_Mutation_ResponseResolvers<ContextType>;
  world_reactions?: World_ReactionsResolvers<ContextType>;
  world_reactions_aggregate?: World_Reactions_AggregateResolvers<ContextType>;
  world_reactions_aggregate_fields?: World_Reactions_Aggregate_FieldsResolvers<ContextType>;
  world_reactions_avg_fields?: World_Reactions_Avg_FieldsResolvers<ContextType>;
  world_reactions_max_fields?: World_Reactions_Max_FieldsResolvers<ContextType>;
  world_reactions_min_fields?: World_Reactions_Min_FieldsResolvers<ContextType>;
  world_reactions_mutation_response?: World_Reactions_Mutation_ResponseResolvers<ContextType>;
  world_reactions_stddev_fields?: World_Reactions_Stddev_FieldsResolvers<ContextType>;
  world_reactions_stddev_pop_fields?: World_Reactions_Stddev_Pop_FieldsResolvers<ContextType>;
  world_reactions_stddev_samp_fields?: World_Reactions_Stddev_Samp_FieldsResolvers<ContextType>;
  world_reactions_sum_fields?: World_Reactions_Sum_FieldsResolvers<ContextType>;
  world_reactions_var_pop_fields?: World_Reactions_Var_Pop_FieldsResolvers<ContextType>;
  world_reactions_var_samp_fields?: World_Reactions_Var_Samp_FieldsResolvers<ContextType>;
  world_reactions_variance_fields?: World_Reactions_Variance_FieldsResolvers<ContextType>;
  worlds?: WorldsResolvers<ContextType>;
  worlds_aggregate?: Worlds_AggregateResolvers<ContextType>;
  worlds_aggregate_fields?: Worlds_Aggregate_FieldsResolvers<ContextType>;
  worlds_avg_fields?: Worlds_Avg_FieldsResolvers<ContextType>;
  worlds_max_fields?: Worlds_Max_FieldsResolvers<ContextType>;
  worlds_min_fields?: Worlds_Min_FieldsResolvers<ContextType>;
  worlds_mutation_response?: Worlds_Mutation_ResponseResolvers<ContextType>;
  worlds_stddev_fields?: Worlds_Stddev_FieldsResolvers<ContextType>;
  worlds_stddev_pop_fields?: Worlds_Stddev_Pop_FieldsResolvers<ContextType>;
  worlds_stddev_samp_fields?: Worlds_Stddev_Samp_FieldsResolvers<ContextType>;
  worlds_sum_fields?: Worlds_Sum_FieldsResolvers<ContextType>;
  worlds_var_pop_fields?: Worlds_Var_Pop_FieldsResolvers<ContextType>;
  worlds_var_samp_fields?: Worlds_Var_Samp_FieldsResolvers<ContextType>;
  worlds_variance_fields?: Worlds_Variance_FieldsResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export type MyMutationMutationVariables = Exact<{
  api_law_id?: InputMaybe<Scalars['String']['input']>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
}>;


export type MyMutationMutation = { __typename?: 'mutation_root', insert_laws_one?: { __typename?: 'laws', id: string } | null };

export type FindUserQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string, icon_url?: string | null }> };

export type CreateUserMutationVariables = Exact<{
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: string }> } | null };

export type CreateWatchedLawMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateWatchedLawMutation = { __typename?: 'mutation_root', insert_law_views_one?: { __typename?: 'law_views', law_id: string } | null };

export type FindLawsWhenCreateWorldQueryVariables = Exact<{
  where?: InputMaybe<Laws_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindLawsWhenCreateWorldQuery = { __typename?: 'query_root', laws: Array<{ __typename?: 'laws', id: string, law_revisions: Array<{ __typename?: 'law_revisions', id: string, title: string, type: string, status: string, category: string }> }> };

export type FindArgumentsForCreateWorldQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Arguments_Order_By> | Arguments_Order_By>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Arguments_Bool_Exp>;
}>;


export type FindArgumentsForCreateWorldQuery = { __typename?: 'query_root', arguments: Array<{ __typename?: 'arguments', id: string, description: string, title: string, user: { __typename?: 'users', id: string, name: string, icon_url?: string | null } }> };

export type CreateWorldMutationVariables = Exact<{
  objects?: InputMaybe<Array<Worlds_Insert_Input> | Worlds_Insert_Input>;
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
}>;


export type CreateWorldMutation = { __typename?: 'mutation_root', insert_worlds?: { __typename?: 'worlds_mutation_response', returning: Array<{ __typename?: 'worlds', id: string }> } | null };

export type FindWorldQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindWorldQuery = { __typename?: 'query_root', worlds_by_pk?: { __typename?: 'worlds', level: number, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string }, world_arguments: Array<{ __typename?: 'world_arguments', argument: { __typename?: 'arguments', title: string, description: string, author_id: string, id: string } }>, species_percentage: Array<{ __typename?: 'species_percentage_view_with_world_id', percentage?: any | null, species_name?: string | null }>, world_citizens_aggregate: { __typename?: 'world_citizens_aggregate', aggregate?: { __typename?: 'world_citizens_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'world_citizens', citizen: { __typename?: 'citizens', name: string, id: string, species_asset: { __typename?: 'species_assets', image_url: string, species: { __typename?: 'species', name: string } } } }> }, world_categories: Array<{ __typename?: 'world_categories', law_category: { __typename?: 'law_categories', category_ja: string, category_number: string } }>, world_chat_boxes: Array<{ __typename?: 'world_chat_boxes', title: string, status: number, id: string, description: string, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string } }>, world_editable_users: Array<{ __typename?: 'world_editable_users', user: { __typename?: 'users', icon_url?: string | null, id: string, name: string } }>, world_histories: Array<{ __typename?: 'world_histories', description: string, editor_id: string, title: string, id: string, official_language: number, public_security: number, markup_text_html?: string | null, markup_text: string }>, world_laws: Array<{ __typename?: 'world_laws', law: { __typename?: 'laws', id: string, law_revisions: Array<{ __typename?: 'law_revisions', title: string }> } }>, world_editable_users_aggregate: { __typename?: 'world_editable_users_aggregate', aggregate?: { __typename?: 'world_editable_users_aggregate_fields', count: number } | null } } | null };

export type FindWorldsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By> | Worlds_Order_By>;
  where?: InputMaybe<Worlds_Bool_Exp>;
}>;


export type FindWorldsQuery = { __typename?: 'query_root', worlds: Array<{ __typename?: 'worlds', level: number, id: string, status: number, world_arguments: Array<{ __typename?: 'world_arguments', argument: { __typename?: 'arguments', title: string, description: string, author_id: string, id: string } }>, species_percentage: Array<{ __typename?: 'species_percentage_view_with_world_id', percentage?: any | null, species_name?: string | null }>, world_editable_users_aggregate: { __typename?: 'world_editable_users_aggregate', aggregate?: { __typename?: 'world_editable_users_aggregate_fields', count: number } | null }, world_categories: Array<{ __typename?: 'world_categories', law_category: { __typename?: 'law_categories', category_ja: string, category_number: string } }>, world_laws_aggregate: { __typename?: 'world_laws_aggregate', aggregate?: { __typename?: 'world_laws_aggregate_fields', count: number } | null }, world_chat_boxes: Array<{ __typename?: 'world_chat_boxes', title: string, status: number, id: string, description: string, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string } }>, world_editable_users: Array<{ __typename?: 'world_editable_users', user: { __typename?: 'users', icon_url?: string | null, id: string, name: string } }>, world_histories: Array<{ __typename?: 'world_histories', description: string, editor_id: string, title: string, id: string, official_language: number, public_security: number }>, world_laws: Array<{ __typename?: 'world_laws', law: { __typename?: 'laws', id: string, law_revisions: Array<{ __typename?: 'law_revisions', title: string }> } }>, user: { __typename?: 'users', id: string, name: string, icon_url?: string | null }, world_citizens_aggregate: { __typename?: 'world_citizens_aggregate', aggregate?: { __typename?: 'world_citizens_aggregate_fields', count: number } | null } }> };

export type FindChatsSubSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindChatsSubSubscription = { __typename?: 'subscription_root', world_chat_boxes_by_pk?: { __typename?: 'world_chat_boxes', id: string, description: string, author_id: string, title: string, status: number, world_chats: Array<{ __typename?: 'world_chats', status: number, text: string, created_at: string, author_id: string, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string } }> } | null };

export type FindChatBoxesQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindChatBoxesQuery = { __typename?: 'query_root', world_chat_boxes: Array<{ __typename?: 'world_chat_boxes', id: string, title: string }> };

export type CreateChatForWorldMutationVariables = Exact<{
  chat_box_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateChatForWorldMutation = { __typename?: 'mutation_root', insert_world_chats_one?: { __typename?: 'world_chats', id: string } | null };

export type FindWorldReactionQueryVariables = Exact<{
  like?: InputMaybe<Scalars['Int']['input']>;
  star?: InputMaybe<Scalars['Int']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindWorldReactionQuery = { __typename?: 'query_root', worlds_by_pk?: { __typename?: 'worlds', likeCount: { __typename?: 'world_reactions_aggregate', aggregate?: { __typename?: 'world_reactions_aggregate_fields', count: number } | null }, starCount: { __typename?: 'world_reactions_aggregate', aggregate?: { __typename?: 'world_reactions_aggregate_fields', count: number } | null }, world_citizens_aggregate: { __typename?: 'world_citizens_aggregate', aggregate?: { __typename?: 'world_citizens_aggregate_fields', count: number } | null }, isLiked: Array<{ __typename?: 'world_reactions', user_id: string, world_id: string }>, isStared: Array<{ __typename?: 'world_reactions', user_id: string, world_id: string }> } | null };

export type CreateReactionForWorldMutationVariables = Exact<{
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateReactionForWorldMutation = { __typename?: 'mutation_root', insert_world_reactions_one?: { __typename?: 'world_reactions', user_id: string, world_id: string } | null };

export type DeleteReactionForWorldMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteReactionForWorldMutation = { __typename?: 'mutation_root', delete_world_reactions_by_pk?: { __typename?: 'world_reactions', user_id: string, world_id: string, type: number } | null };

export type FindCitizensQueryVariables = Exact<{
  order_by?: InputMaybe<Array<Citizens_Order_By> | Citizens_Order_By>;
  where?: InputMaybe<Citizens_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindCitizensQuery = { __typename?: 'query_root', citizens: Array<{ __typename?: 'citizens', id: string, gender: number, name: string, species_asset: { __typename?: 'species_assets', image_url: string, personality: string, species: { __typename?: 'species', name: string, description: string } } }> };

export type FindCitizensNotBelongToWorldByUserIdQueryVariables = Exact<{
  order_by?: InputMaybe<Array<Citizens_Order_By> | Citizens_Order_By>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Citizens_Bool_Exp>;
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindCitizensNotBelongToWorldByUserIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', citizens: Array<{ __typename?: 'citizens', id: string, name: string, species_asset: { __typename?: 'species_assets', image_url: string, personality: string, species: { __typename?: 'species', name: string } } }> } | null };

export type CreateWorldCitizensMutationVariables = Exact<{
  objects?: InputMaybe<Array<World_Citizens_Insert_Input> | World_Citizens_Insert_Input>;
}>;


export type CreateWorldCitizensMutation = { __typename?: 'mutation_root', insert_world_citizens?: { __typename?: 'world_citizens_mutation_response', returning: Array<{ __typename?: 'world_citizens', citizen_id: string, world_id: string }> } | null };


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
export const FindUserDocument = gql`
    query findUser($_eq: String = "") {
  users(where: {authentication_id: {_eq: $_eq}}) {
    id
    name
    icon_url
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
export const CreateWatchedLawDocument = gql`
    mutation createWatchedLaw($user_id: uuid = "00000000-0000-0000-0000-000000000000", $law_id: uuid = "00000000-0000-0000-0000-000000000000") {
  insert_law_views_one(object: {user_id: $user_id, law_id: $law_id}) {
    law_id
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
export const FindLawsWhenCreateWorldDocument = gql`
    query findLawsWhenCreateWorld($where: laws_bool_exp, $limit: Int = 10) {
  laws(where: $where, limit: $limit) {
    id
    law_revisions {
      id
      title
      type
      status
      category
    }
  }
}
    `;

/**
 * __useFindLawsWhenCreateWorldQuery__
 *
 * To run a query within a React component, call `useFindLawsWhenCreateWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawsWhenCreateWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawsWhenCreateWorldQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFindLawsWhenCreateWorldQuery(baseOptions?: Apollo.QueryHookOptions<FindLawsWhenCreateWorldQuery, FindLawsWhenCreateWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawsWhenCreateWorldQuery, FindLawsWhenCreateWorldQueryVariables>(FindLawsWhenCreateWorldDocument, options);
      }
export function useFindLawsWhenCreateWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawsWhenCreateWorldQuery, FindLawsWhenCreateWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawsWhenCreateWorldQuery, FindLawsWhenCreateWorldQueryVariables>(FindLawsWhenCreateWorldDocument, options);
        }
export function useFindLawsWhenCreateWorldSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawsWhenCreateWorldQuery, FindLawsWhenCreateWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawsWhenCreateWorldQuery, FindLawsWhenCreateWorldQueryVariables>(FindLawsWhenCreateWorldDocument, options);
        }
export type FindLawsWhenCreateWorldQueryHookResult = ReturnType<typeof useFindLawsWhenCreateWorldQuery>;
export type FindLawsWhenCreateWorldLazyQueryHookResult = ReturnType<typeof useFindLawsWhenCreateWorldLazyQuery>;
export type FindLawsWhenCreateWorldSuspenseQueryHookResult = ReturnType<typeof useFindLawsWhenCreateWorldSuspenseQuery>;
export type FindLawsWhenCreateWorldQueryResult = Apollo.QueryResult<FindLawsWhenCreateWorldQuery, FindLawsWhenCreateWorldQueryVariables>;
export const FindArgumentsForCreateWorldDocument = gql`
    query findArgumentsForCreateWorld($limit: Int = 10, $order_by: [arguments_order_by!] = {}, $offset: Int = 0, $where: arguments_bool_exp = {}) {
  arguments(limit: $limit, order_by: $order_by, offset: $offset, where: $where) {
    id
    description
    user {
      id
      name
      icon_url
    }
    title
  }
}
    `;

/**
 * __useFindArgumentsForCreateWorldQuery__
 *
 * To run a query within a React component, call `useFindArgumentsForCreateWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindArgumentsForCreateWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindArgumentsForCreateWorldQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindArgumentsForCreateWorldQuery(baseOptions?: Apollo.QueryHookOptions<FindArgumentsForCreateWorldQuery, FindArgumentsForCreateWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindArgumentsForCreateWorldQuery, FindArgumentsForCreateWorldQueryVariables>(FindArgumentsForCreateWorldDocument, options);
      }
export function useFindArgumentsForCreateWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindArgumentsForCreateWorldQuery, FindArgumentsForCreateWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindArgumentsForCreateWorldQuery, FindArgumentsForCreateWorldQueryVariables>(FindArgumentsForCreateWorldDocument, options);
        }
export function useFindArgumentsForCreateWorldSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindArgumentsForCreateWorldQuery, FindArgumentsForCreateWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindArgumentsForCreateWorldQuery, FindArgumentsForCreateWorldQueryVariables>(FindArgumentsForCreateWorldDocument, options);
        }
export type FindArgumentsForCreateWorldQueryHookResult = ReturnType<typeof useFindArgumentsForCreateWorldQuery>;
export type FindArgumentsForCreateWorldLazyQueryHookResult = ReturnType<typeof useFindArgumentsForCreateWorldLazyQuery>;
export type FindArgumentsForCreateWorldSuspenseQueryHookResult = ReturnType<typeof useFindArgumentsForCreateWorldSuspenseQuery>;
export type FindArgumentsForCreateWorldQueryResult = Apollo.QueryResult<FindArgumentsForCreateWorldQuery, FindArgumentsForCreateWorldQueryVariables>;
export const CreateWorldDocument = gql`
    mutation createWorld($objects: [worlds_insert_input!] = [], $on_conflict: worlds_on_conflict = {constraint: worlds_pkey1}) {
  insert_worlds(objects: $objects, on_conflict: $on_conflict) {
    returning {
      id
    }
  }
}
    `;
export type CreateWorldMutationFn = Apollo.MutationFunction<CreateWorldMutation, CreateWorldMutationVariables>;

/**
 * __useCreateWorldMutation__
 *
 * To run a mutation, you first call `useCreateWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldMutation, { data, loading, error }] = useCreateWorldMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      on_conflict: // value for 'on_conflict'
 *   },
 * });
 */
export function useCreateWorldMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldMutation, CreateWorldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorldMutation, CreateWorldMutationVariables>(CreateWorldDocument, options);
      }
export type CreateWorldMutationHookResult = ReturnType<typeof useCreateWorldMutation>;
export type CreateWorldMutationResult = Apollo.MutationResult<CreateWorldMutation>;
export type CreateWorldMutationOptions = Apollo.BaseMutationOptions<CreateWorldMutation, CreateWorldMutationVariables>;
export const FindWorldDocument = gql`
    query findWorld($id: uuid = "") {
  worlds_by_pk(id: $id) {
    user {
      icon_url
      id
      name
    }
    world_arguments {
      argument {
        title
        description
        author_id
        id
      }
    }
    species_percentage {
      percentage
      species_name
    }
    world_citizens_aggregate {
      aggregate {
        count
      }
      nodes {
        citizen {
          name
          id
          species_asset {
            species {
              name
            }
            image_url
          }
        }
      }
    }
    world_categories {
      law_category {
        category_ja
        category_number
      }
    }
    world_chat_boxes {
      title
      status
      id
      description
      user {
        icon_url
        id
        name
      }
    }
    world_editable_users {
      user {
        icon_url
        id
        name
      }
    }
    world_histories {
      description
      editor_id
      title
      id
      official_language
      public_security
      markup_text_html
      markup_text
    }
    world_laws {
      law {
        id
        law_revisions {
          title
        }
      }
    }
    level
    world_editable_users_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useFindWorldQuery__
 *
 * To run a query within a React component, call `useFindWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindWorldQuery(baseOptions?: Apollo.QueryHookOptions<FindWorldQuery, FindWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldQuery, FindWorldQueryVariables>(FindWorldDocument, options);
      }
export function useFindWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldQuery, FindWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldQuery, FindWorldQueryVariables>(FindWorldDocument, options);
        }
export function useFindWorldSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldQuery, FindWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldQuery, FindWorldQueryVariables>(FindWorldDocument, options);
        }
export type FindWorldQueryHookResult = ReturnType<typeof useFindWorldQuery>;
export type FindWorldLazyQueryHookResult = ReturnType<typeof useFindWorldLazyQuery>;
export type FindWorldSuspenseQueryHookResult = ReturnType<typeof useFindWorldSuspenseQuery>;
export type FindWorldQueryResult = Apollo.QueryResult<FindWorldQuery, FindWorldQueryVariables>;
export const FindWorldsDocument = gql`
    query findWorlds($limit: Int = 10, $offset: Int = 0, $order_by: [worlds_order_by!] = {}, $where: worlds_bool_exp = {}) {
  worlds(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    world_arguments {
      argument {
        title
        description
        author_id
        id
      }
    }
    species_percentage {
      percentage
      species_name
    }
    level
    world_editable_users_aggregate {
      aggregate {
        count
      }
    }
    world_categories {
      law_category {
        category_ja
        category_number
      }
    }
    world_laws_aggregate {
      aggregate {
        count
      }
    }
    world_chat_boxes {
      title
      status
      id
      description
      user {
        icon_url
        id
        name
      }
    }
    world_editable_users {
      user {
        icon_url
        id
        name
      }
    }
    world_histories {
      description
      editor_id
      title
      id
      official_language
      public_security
    }
    world_laws {
      law {
        id
        law_revisions {
          title
        }
      }
    }
    id
    status
    user {
      id
      name
      icon_url
    }
    world_citizens_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useFindWorldsQuery__
 *
 * To run a query within a React component, call `useFindWorldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindWorldsQuery(baseOptions?: Apollo.QueryHookOptions<FindWorldsQuery, FindWorldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldsQuery, FindWorldsQueryVariables>(FindWorldsDocument, options);
      }
export function useFindWorldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldsQuery, FindWorldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldsQuery, FindWorldsQueryVariables>(FindWorldsDocument, options);
        }
export function useFindWorldsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldsQuery, FindWorldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldsQuery, FindWorldsQueryVariables>(FindWorldsDocument, options);
        }
export type FindWorldsQueryHookResult = ReturnType<typeof useFindWorldsQuery>;
export type FindWorldsLazyQueryHookResult = ReturnType<typeof useFindWorldsLazyQuery>;
export type FindWorldsSuspenseQueryHookResult = ReturnType<typeof useFindWorldsSuspenseQuery>;
export type FindWorldsQueryResult = Apollo.QueryResult<FindWorldsQuery, FindWorldsQueryVariables>;
export const FindChatsSubDocument = gql`
    subscription findChatsSub($id: uuid = "") {
  world_chat_boxes_by_pk(id: $id) {
    id
    description
    author_id
    title
    status
    world_chats {
      status
      text
      created_at
      user {
        icon_url
        id
        name
      }
      author_id
    }
  }
}
    `;

/**
 * __useFindChatsSubSubscription__
 *
 * To run a query within a React component, call `useFindChatsSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFindChatsSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChatsSubSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindChatsSubSubscription(baseOptions?: Apollo.SubscriptionHookOptions<FindChatsSubSubscription, FindChatsSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<FindChatsSubSubscription, FindChatsSubSubscriptionVariables>(FindChatsSubDocument, options);
      }
export type FindChatsSubSubscriptionHookResult = ReturnType<typeof useFindChatsSubSubscription>;
export type FindChatsSubSubscriptionResult = Apollo.SubscriptionResult<FindChatsSubSubscription>;
export const FindChatBoxesDocument = gql`
    query findChatBoxes($_eq: uuid = "") {
  world_chat_boxes(where: {world_id: {_eq: $_eq}}) {
    id
    title
  }
}
    `;

/**
 * __useFindChatBoxesQuery__
 *
 * To run a query within a React component, call `useFindChatBoxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChatBoxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChatBoxesQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useFindChatBoxesQuery(baseOptions?: Apollo.QueryHookOptions<FindChatBoxesQuery, FindChatBoxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindChatBoxesQuery, FindChatBoxesQueryVariables>(FindChatBoxesDocument, options);
      }
export function useFindChatBoxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindChatBoxesQuery, FindChatBoxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindChatBoxesQuery, FindChatBoxesQueryVariables>(FindChatBoxesDocument, options);
        }
export function useFindChatBoxesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindChatBoxesQuery, FindChatBoxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindChatBoxesQuery, FindChatBoxesQueryVariables>(FindChatBoxesDocument, options);
        }
export type FindChatBoxesQueryHookResult = ReturnType<typeof useFindChatBoxesQuery>;
export type FindChatBoxesLazyQueryHookResult = ReturnType<typeof useFindChatBoxesLazyQuery>;
export type FindChatBoxesSuspenseQueryHookResult = ReturnType<typeof useFindChatBoxesSuspenseQuery>;
export type FindChatBoxesQueryResult = Apollo.QueryResult<FindChatBoxesQuery, FindChatBoxesQueryVariables>;
export const CreateChatForWorldDocument = gql`
    mutation createChatForWorld($chat_box_id: uuid = "", $author_id: uuid = "", $text: String = "") {
  insert_world_chats_one(
    object: {chat_box_id: $chat_box_id, author_id: $author_id, text: $text}
  ) {
    id
  }
}
    `;
export type CreateChatForWorldMutationFn = Apollo.MutationFunction<CreateChatForWorldMutation, CreateChatForWorldMutationVariables>;

/**
 * __useCreateChatForWorldMutation__
 *
 * To run a mutation, you first call `useCreateChatForWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatForWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatForWorldMutation, { data, loading, error }] = useCreateChatForWorldMutation({
 *   variables: {
 *      chat_box_id: // value for 'chat_box_id'
 *      author_id: // value for 'author_id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateChatForWorldMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatForWorldMutation, CreateChatForWorldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatForWorldMutation, CreateChatForWorldMutationVariables>(CreateChatForWorldDocument, options);
      }
export type CreateChatForWorldMutationHookResult = ReturnType<typeof useCreateChatForWorldMutation>;
export type CreateChatForWorldMutationResult = Apollo.MutationResult<CreateChatForWorldMutation>;
export type CreateChatForWorldMutationOptions = Apollo.BaseMutationOptions<CreateChatForWorldMutation, CreateChatForWorldMutationVariables>;
export const FindWorldReactionDocument = gql`
    query findWorldReaction($like: Int, $star: Int, $world_id: uuid = "", $user_id: uuid = "") {
  worlds_by_pk(id: $world_id) {
    likeCount: world_reactions_aggregate(where: {type: {_eq: $like}}) {
      aggregate {
        count
      }
    }
    starCount: world_reactions_aggregate(where: {type: {_eq: $star}}) {
      aggregate {
        count
      }
    }
    world_citizens_aggregate {
      aggregate {
        count
      }
    }
    isLiked: world_reactions(where: {user_id: {_eq: $user_id}, type: {_eq: $like}}) {
      user_id
      world_id
    }
    isStared: world_reactions(where: {user_id: {_eq: $user_id}, type: {_eq: $star}}) {
      user_id
      world_id
    }
  }
}
    `;

/**
 * __useFindWorldReactionQuery__
 *
 * To run a query within a React component, call `useFindWorldReactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldReactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldReactionQuery({
 *   variables: {
 *      like: // value for 'like'
 *      star: // value for 'star'
 *      world_id: // value for 'world_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useFindWorldReactionQuery(baseOptions?: Apollo.QueryHookOptions<FindWorldReactionQuery, FindWorldReactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldReactionQuery, FindWorldReactionQueryVariables>(FindWorldReactionDocument, options);
      }
export function useFindWorldReactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldReactionQuery, FindWorldReactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldReactionQuery, FindWorldReactionQueryVariables>(FindWorldReactionDocument, options);
        }
export function useFindWorldReactionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldReactionQuery, FindWorldReactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldReactionQuery, FindWorldReactionQueryVariables>(FindWorldReactionDocument, options);
        }
export type FindWorldReactionQueryHookResult = ReturnType<typeof useFindWorldReactionQuery>;
export type FindWorldReactionLazyQueryHookResult = ReturnType<typeof useFindWorldReactionLazyQuery>;
export type FindWorldReactionSuspenseQueryHookResult = ReturnType<typeof useFindWorldReactionSuspenseQuery>;
export type FindWorldReactionQueryResult = Apollo.QueryResult<FindWorldReactionQuery, FindWorldReactionQueryVariables>;
export const CreateReactionForWorldDocument = gql`
    mutation createReactionForWorld($type: Int = 0, $user_id: uuid = "", $world_id: uuid = "") {
  insert_world_reactions_one(
    object: {type: $type, user_id: $user_id, world_id: $world_id}
  ) {
    user_id
    world_id
  }
}
    `;
export type CreateReactionForWorldMutationFn = Apollo.MutationFunction<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>;

/**
 * __useCreateReactionForWorldMutation__
 *
 * To run a mutation, you first call `useCreateReactionForWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReactionForWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReactionForWorldMutation, { data, loading, error }] = useCreateReactionForWorldMutation({
 *   variables: {
 *      type: // value for 'type'
 *      user_id: // value for 'user_id'
 *      world_id: // value for 'world_id'
 *   },
 * });
 */
export function useCreateReactionForWorldMutation(baseOptions?: Apollo.MutationHookOptions<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>(CreateReactionForWorldDocument, options);
      }
export type CreateReactionForWorldMutationHookResult = ReturnType<typeof useCreateReactionForWorldMutation>;
export type CreateReactionForWorldMutationResult = Apollo.MutationResult<CreateReactionForWorldMutation>;
export type CreateReactionForWorldMutationOptions = Apollo.BaseMutationOptions<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>;
export const DeleteReactionForWorldDocument = gql`
    mutation deleteReactionForWorld($user_id: uuid = "", $world_id: uuid = "", $type: Int = 0) {
  delete_world_reactions_by_pk(
    type: $type
    user_id: $user_id
    world_id: $world_id
  ) {
    user_id
    world_id
    type
  }
}
    `;
export type DeleteReactionForWorldMutationFn = Apollo.MutationFunction<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>;

/**
 * __useDeleteReactionForWorldMutation__
 *
 * To run a mutation, you first call `useDeleteReactionForWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReactionForWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReactionForWorldMutation, { data, loading, error }] = useDeleteReactionForWorldMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      world_id: // value for 'world_id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useDeleteReactionForWorldMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>(DeleteReactionForWorldDocument, options);
      }
export type DeleteReactionForWorldMutationHookResult = ReturnType<typeof useDeleteReactionForWorldMutation>;
export type DeleteReactionForWorldMutationResult = Apollo.MutationResult<DeleteReactionForWorldMutation>;
export type DeleteReactionForWorldMutationOptions = Apollo.BaseMutationOptions<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>;
export const FindCitizensDocument = gql`
    query findCitizens($order_by: [citizens_order_by!] = {}, $where: citizens_bool_exp = {}, $limit: Int = 10, $offset: Int = 0) {
  citizens(where: $where, order_by: $order_by, limit: $limit, offset: $offset) {
    id
    gender
    name
    species_asset {
      image_url
      personality
      species {
        name
        description
      }
    }
  }
}
    `;

/**
 * __useFindCitizensQuery__
 *
 * To run a query within a React component, call `useFindCitizensQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCitizensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCitizensQuery({
 *   variables: {
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFindCitizensQuery(baseOptions?: Apollo.QueryHookOptions<FindCitizensQuery, FindCitizensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCitizensQuery, FindCitizensQueryVariables>(FindCitizensDocument, options);
      }
export function useFindCitizensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCitizensQuery, FindCitizensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCitizensQuery, FindCitizensQueryVariables>(FindCitizensDocument, options);
        }
export function useFindCitizensSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCitizensQuery, FindCitizensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCitizensQuery, FindCitizensQueryVariables>(FindCitizensDocument, options);
        }
export type FindCitizensQueryHookResult = ReturnType<typeof useFindCitizensQuery>;
export type FindCitizensLazyQueryHookResult = ReturnType<typeof useFindCitizensLazyQuery>;
export type FindCitizensSuspenseQueryHookResult = ReturnType<typeof useFindCitizensSuspenseQuery>;
export type FindCitizensQueryResult = Apollo.QueryResult<FindCitizensQuery, FindCitizensQueryVariables>;
export const FindCitizensNotBelongToWorldByUserIdDocument = gql`
    query findCitizensNotBelongToWorldByUserId($order_by: [citizens_order_by!] = {}, $offset: Int = 10, $limit: Int = 10, $where: citizens_bool_exp = {world_citizens: {citizen_id: {_is_null: true}}}, $id: uuid = "") {
  users_by_pk(id: $id) {
    citizens(order_by: $order_by, offset: $offset, limit: $limit, where: $where) {
      id
      name
      species_asset {
        image_url
        personality
        species {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useFindCitizensNotBelongToWorldByUserIdQuery__
 *
 * To run a query within a React component, call `useFindCitizensNotBelongToWorldByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCitizensNotBelongToWorldByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCitizensNotBelongToWorldByUserIdQuery({
 *   variables: {
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      where: // value for 'where'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindCitizensNotBelongToWorldByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>(FindCitizensNotBelongToWorldByUserIdDocument, options);
      }
export function useFindCitizensNotBelongToWorldByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>(FindCitizensNotBelongToWorldByUserIdDocument, options);
        }
export function useFindCitizensNotBelongToWorldByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>(FindCitizensNotBelongToWorldByUserIdDocument, options);
        }
export type FindCitizensNotBelongToWorldByUserIdQueryHookResult = ReturnType<typeof useFindCitizensNotBelongToWorldByUserIdQuery>;
export type FindCitizensNotBelongToWorldByUserIdLazyQueryHookResult = ReturnType<typeof useFindCitizensNotBelongToWorldByUserIdLazyQuery>;
export type FindCitizensNotBelongToWorldByUserIdSuspenseQueryHookResult = ReturnType<typeof useFindCitizensNotBelongToWorldByUserIdSuspenseQuery>;
export type FindCitizensNotBelongToWorldByUserIdQueryResult = Apollo.QueryResult<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>;
export const CreateWorldCitizensDocument = gql`
    mutation createWorldCitizens($objects: [world_citizens_insert_input!] = {}) {
  insert_world_citizens(objects: $objects) {
    returning {
      citizen_id
      world_id
    }
  }
}
    `;
export type CreateWorldCitizensMutationFn = Apollo.MutationFunction<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>;

/**
 * __useCreateWorldCitizensMutation__
 *
 * To run a mutation, you first call `useCreateWorldCitizensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldCitizensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldCitizensMutation, { data, loading, error }] = useCreateWorldCitizensMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateWorldCitizensMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>(CreateWorldCitizensDocument, options);
      }
export type CreateWorldCitizensMutationHookResult = ReturnType<typeof useCreateWorldCitizensMutation>;
export type CreateWorldCitizensMutationResult = Apollo.MutationResult<CreateWorldCitizensMutation>;
export type CreateWorldCitizensMutationOptions = Apollo.BaseMutationOptions<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>;