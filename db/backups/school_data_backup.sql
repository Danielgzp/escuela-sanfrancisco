PGDMP         !                z            school_data    13.8    13.8 }    g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            h           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            i           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            j           1262    17129    school_data    DATABASE     g   CREATE DATABASE school_data WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE school_data;
                postgres    false            �            1259    17296    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    54357    eventuality    TABLE     %  CREATE TABLE public.eventuality (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    day date,
    created_at timestamp with time zone NOT NULL,
    staff_ci character varying(255),
    teacher_ci character varying(255)
);
    DROP TABLE public.eventuality;
       public         heap    postgres    false            �            1259    54355    eventuality_id_seq    SEQUENCE     �   CREATE SEQUENCE public.eventuality_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.eventuality_id_seq;
       public          postgres    false    224            k           0    0    eventuality_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.eventuality_id_seq OWNED BY public.eventuality.id;
          public          postgres    false    223            �            1259    54212    grade    TABLE       CREATE TABLE public.grade (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    section character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    education_level_id integer NOT NULL,
    period_id integer NOT NULL
);
    DROP TABLE public.grade;
       public         heap    postgres    false            �            1259    54210    grade_id_seq    SEQUENCE     �   CREATE SEQUENCE public.grade_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.grade_id_seq;
       public          postgres    false    206            l           0    0    grade_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.grade_id_seq OWNED BY public.grade.id;
          public          postgres    false    205            �            1259    54202    level    TABLE     �   CREATE TABLE public.level (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.level;
       public         heap    postgres    false            �            1259    54200    level_id_seq    SEQUENCE     �   CREATE SEQUENCE public.level_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.level_id_seq;
       public          postgres    false    204            m           0    0    level_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.level_id_seq OWNED BY public.level.id;
          public          postgres    false    203            �            1259    54394    logs    TABLE       CREATE TABLE public.logs (
    id integer NOT NULL,
    description character varying(255) NOT NULL,
    "table" character varying(255) NOT NULL,
    action character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.logs;
       public         heap    postgres    false            �            1259    54392    logs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.logs_id_seq;
       public          postgres    false    228            n           0    0    logs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;
          public          postgres    false    227            �            1259    54378    news    TABLE       CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    info character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.news;
       public         heap    postgres    false            �            1259    54376    news_id_seq    SEQUENCE     �   CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.news_id_seq;
       public          postgres    false    226            o           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public          postgres    false    225            �            1259    54192    period    TABLE     �   CREATE TABLE public.period (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.period;
       public         heap    postgres    false            �            1259    54190    period_id_seq    SEQUENCE     �   CREATE SEQUENCE public.period_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.period_id_seq;
       public          postgres    false    202            p           0    0    period_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.period_id_seq OWNED BY public.period.id;
          public          postgres    false    201            �            1259    54267    record    TABLE       CREATE TABLE public.record (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    day date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    student_schoolarship_ci character varying(255) NOT NULL
);
    DROP TABLE public.record;
       public         heap    postgres    false            �            1259    54265    record_id_seq    SEQUENCE     �   CREATE SEQUENCE public.record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.record_id_seq;
       public          postgres    false    212            q           0    0    record_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.record_id_seq OWNED BY public.record.id;
          public          postgres    false    211            �            1259    54233    representants    TABLE     =  CREATE TABLE public.representants (
    id integer NOT NULL,
    ci character varying(255) NOT NULL,
    rep_name character varying(255) NOT NULL,
    rep_last_name character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    email character varying(255),
    create_at timestamp with time zone
);
 !   DROP TABLE public.representants;
       public         heap    postgres    false            �            1259    54231    representants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.representants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.representants_id_seq;
       public          postgres    false    208            r           0    0    representants_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.representants_id_seq OWNED BY public.representants.id;
          public          postgres    false    207            �            1259    54311    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    54309    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    218            s           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public          postgres    false    217            �            1259    54321    staff    TABLE       CREATE TABLE public.staff (
    id integer NOT NULL,
    ci character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    birth_date date,
    gender character varying(255) NOT NULL,
    admission_date date,
    birth_place character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    role_id integer NOT NULL
);
    DROP TABLE public.staff;
       public         heap    postgres    false            �            1259    54319    staff_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.staff_id_seq;
       public          postgres    false    220            t           0    0    staff_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.staff_id_seq OWNED BY public.staff.id;
          public          postgres    false    219            �            1259    54244    students    TABLE     <  CREATE TABLE public.students (
    id integer NOT NULL,
    schoolarship_ci character varying(255) NOT NULL,
    native_ci character varying(255),
    name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    address character varying(255),
    birth_date date NOT NULL,
    gender character varying(255) NOT NULL,
    admission_date date,
    birth_place character varying(255),
    house_property character varying(255),
    created_at timestamp with time zone,
    representant_ci character varying(255),
    grade_id integer NOT NULL
);
    DROP TABLE public.students;
       public         heap    postgres    false            �            1259    54242    students_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.students_id_seq;
       public          postgres    false    210            u           0    0    students_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
          public          postgres    false    209            �            1259    54339    teacher    TABLE       CREATE TABLE public.teacher (
    id integer NOT NULL,
    ci character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    birth_date date,
    gender character varying(255) NOT NULL,
    admission_date date,
    birth_place character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    grade_id integer
);
    DROP TABLE public.teacher;
       public         heap    postgres    false            �            1259    54337    teacher_id_seq    SEQUENCE     �   CREATE SEQUENCE public.teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.teacher_id_seq;
       public          postgres    false    222            v           0    0    teacher_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.teacher_id_seq OWNED BY public.teacher.id;
          public          postgres    false    221            �            1259    54283    userRole    TABLE     �   CREATE TABLE public."userRole" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public."userRole";
       public         heap    postgres    false            �            1259    54281    userRole_id_seq    SEQUENCE     �   CREATE SEQUENCE public."userRole_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."userRole_id_seq";
       public          postgres    false    214            w           0    0    userRole_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."userRole_id_seq" OWNED BY public."userRole".id;
          public          postgres    false    213            �            1259    54293    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    recovery_token character varying(255),
    create_at timestamp with time zone NOT NULL,
    role_user integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    54291    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            x           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �           2604    54360    eventuality id    DEFAULT     p   ALTER TABLE ONLY public.eventuality ALTER COLUMN id SET DEFAULT nextval('public.eventuality_id_seq'::regclass);
 =   ALTER TABLE public.eventuality ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    54215    grade id    DEFAULT     d   ALTER TABLE ONLY public.grade ALTER COLUMN id SET DEFAULT nextval('public.grade_id_seq'::regclass);
 7   ALTER TABLE public.grade ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    206    206                       2604    54205    level id    DEFAULT     d   ALTER TABLE ONLY public.level ALTER COLUMN id SET DEFAULT nextval('public.level_id_seq'::regclass);
 7   ALTER TABLE public.level ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �           2604    54397    logs id    DEFAULT     b   ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);
 6   ALTER TABLE public.logs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    54381    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            ~           2604    54195 	   period id    DEFAULT     f   ALTER TABLE ONLY public.period ALTER COLUMN id SET DEFAULT nextval('public.period_id_seq'::regclass);
 8   ALTER TABLE public.period ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    201    202            �           2604    54270 	   record id    DEFAULT     f   ALTER TABLE ONLY public.record ALTER COLUMN id SET DEFAULT nextval('public.record_id_seq'::regclass);
 8   ALTER TABLE public.record ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �           2604    54236    representants id    DEFAULT     t   ALTER TABLE ONLY public.representants ALTER COLUMN id SET DEFAULT nextval('public.representants_id_seq'::regclass);
 ?   ALTER TABLE public.representants ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207    208            �           2604    54314    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    54324    staff id    DEFAULT     d   ALTER TABLE ONLY public.staff ALTER COLUMN id SET DEFAULT nextval('public.staff_id_seq'::regclass);
 7   ALTER TABLE public.staff ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    54247    students id    DEFAULT     j   ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
 :   ALTER TABLE public.students ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �           2604    54342 
   teacher id    DEFAULT     h   ALTER TABLE ONLY public.teacher ALTER COLUMN id SET DEFAULT nextval('public.teacher_id_seq'::regclass);
 9   ALTER TABLE public.teacher ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    54286    userRole id    DEFAULT     n   ALTER TABLE ONLY public."userRole" ALTER COLUMN id SET DEFAULT nextval('public."userRole_id_seq"'::regclass);
 <   ALTER TABLE public."userRole" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �           2604    54296    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            H          0    17296    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    200   �       `          0    54357    eventuality 
   TABLE DATA           d   COPY public.eventuality (id, title, description, day, created_at, staff_ci, teacher_ci) FROM stdin;
    public          postgres    false    224   *�       N          0    54212    grade 
   TABLE DATA           \   COPY public.grade (id, name, section, create_at, education_level_id, period_id) FROM stdin;
    public          postgres    false    206   G�       L          0    54202    level 
   TABLE DATA           4   COPY public.level (id, name, create_at) FROM stdin;
    public          postgres    false    204   �       d          0    54394    logs 
   TABLE DATA           T   COPY public.logs (id, description, "table", action, create_at, user_id) FROM stdin;
    public          postgres    false    228   8�       b          0    54378    news 
   TABLE DATA           J   COPY public.news (id, title, info, image, create_at, user_id) FROM stdin;
    public          postgres    false    226   U�       J          0    54192    period 
   TABLE DATA           5   COPY public.period (id, name, create_at) FROM stdin;
    public          postgres    false    202   r�       T          0    54267    record 
   TABLE DATA           b   COPY public.record (id, title, description, day, created_at, student_schoolarship_ci) FROM stdin;
    public          postgres    false    212   ��       P          0    54233    representants 
   TABLE DATA           a   COPY public.representants (id, ci, rep_name, rep_last_name, phone, email, create_at) FROM stdin;
    public          postgres    false    208   ֔       Z          0    54311    role 
   TABLE DATA           3   COPY public.role (id, name, create_at) FROM stdin;
    public          postgres    false    218   ��       \          0    54321    staff 
   TABLE DATA           �   COPY public.staff (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, create_at, role_id) FROM stdin;
    public          postgres    false    220   ��       R          0    54244    students 
   TABLE DATA           �   COPY public.students (id, schoolarship_ci, native_ci, name, last_name, address, birth_date, gender, admission_date, birth_place, house_property, created_at, representant_ci, grade_id) FROM stdin;
    public          postgres    false    210   z�       ^          0    54339    teacher 
   TABLE DATA           �   COPY public.teacher (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, created_at, grade_id) FROM stdin;
    public          postgres    false    222   c      V          0    54283    userRole 
   TABLE DATA           9   COPY public."userRole" (id, name, create_at) FROM stdin;
    public          postgres    false    214   _
      X          0    54293    users 
   TABLE DATA           Z   COPY public.users (id, email, password, recovery_token, create_at, role_user) FROM stdin;
    public          postgres    false    216   �
      y           0    0    eventuality_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.eventuality_id_seq', 1, false);
          public          postgres    false    223            z           0    0    grade_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.grade_id_seq', 16, true);
          public          postgres    false    205            {           0    0    level_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.level_id_seq', 2, true);
          public          postgres    false    203            |           0    0    logs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logs_id_seq', 1, false);
          public          postgres    false    227            }           0    0    news_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.news_id_seq', 1, false);
          public          postgres    false    225            ~           0    0    period_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.period_id_seq', 2, true);
          public          postgres    false    201                       0    0    record_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.record_id_seq', 1, false);
          public          postgres    false    211            �           0    0    representants_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.representants_id_seq', 480, true);
          public          postgres    false    207            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 5, true);
          public          postgres    false    217            �           0    0    staff_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.staff_id_seq', 5, true);
          public          postgres    false    219            �           0    0    students_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.students_id_seq', 525, true);
          public          postgres    false    209            �           0    0    teacher_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.teacher_id_seq', 16, true);
          public          postgres    false    221            �           0    0    userRole_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."userRole_id_seq"', 2, true);
          public          postgres    false    213            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    215            �           2606    17300     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    200            �           2606    54365    eventuality eventuality_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_pkey;
       public            postgres    false    224            �           2606    54220    grade grade_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_pkey;
       public            postgres    false    206            �           2606    54209    level level_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.level DROP CONSTRAINT level_name_key;
       public            postgres    false    204            �           2606    54207    level level_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.level DROP CONSTRAINT level_pkey;
       public            postgres    false    204            �           2606    54402    logs logs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_pkey;
       public            postgres    false    228            �           2606    54386    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    226            �           2606    54199    period period_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.period
    ADD CONSTRAINT period_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.period DROP CONSTRAINT period_name_key;
       public            postgres    false    202            �           2606    54197    period period_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.period
    ADD CONSTRAINT period_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.period DROP CONSTRAINT period_pkey;
       public            postgres    false    202            �           2606    54275    record record_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.record DROP CONSTRAINT record_pkey;
       public            postgres    false    212            �           2606    54241     representants representants_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.representants
    ADD CONSTRAINT representants_pkey PRIMARY KEY (ci);
 J   ALTER TABLE ONLY public.representants DROP CONSTRAINT representants_pkey;
       public            postgres    false    208            �           2606    54318    role role_name_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_name_key UNIQUE (name);
 <   ALTER TABLE ONLY public.role DROP CONSTRAINT role_name_key;
       public            postgres    false    218            �           2606    54316    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    218            �           2606    54331    staff staff_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_email_key;
       public            postgres    false    220            �           2606    54329    staff staff_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (ci);
 :   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_pkey;
       public            postgres    false    220            �           2606    54254    students students_native_ci_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_native_ci_key UNIQUE (native_ci);
 I   ALTER TABLE ONLY public.students DROP CONSTRAINT students_native_ci_key;
       public            postgres    false    210            �           2606    54252    students students_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (schoolarship_ci);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public            postgres    false    210            �           2606    54349    teacher teacher_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_email_key;
       public            postgres    false    222            �           2606    54347    teacher teacher_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (ci);
 >   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_pkey;
       public            postgres    false    222            �           2606    54290    userRole userRole_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."userRole"
    ADD CONSTRAINT "userRole_name_key" UNIQUE (name);
 H   ALTER TABLE ONLY public."userRole" DROP CONSTRAINT "userRole_name_key";
       public            postgres    false    214            �           2606    54288    userRole userRole_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."userRole"
    ADD CONSTRAINT "userRole_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."userRole" DROP CONSTRAINT "userRole_pkey";
       public            postgres    false    214            �           2606    54303    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    54301    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    54366 %   eventuality eventuality_staff_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_staff_ci_fkey FOREIGN KEY (staff_ci) REFERENCES public.staff(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_staff_ci_fkey;
       public          postgres    false    2991    224    220            �           2606    54371 '   eventuality eventuality_teacher_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_teacher_ci_fkey FOREIGN KEY (teacher_ci) REFERENCES public.teacher(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_teacher_ci_fkey;
       public          postgres    false    2995    222    224            �           2606    54221 #   grade grade_education_level_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_education_level_id_fkey FOREIGN KEY (education_level_id) REFERENCES public.level(id);
 M   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_education_level_id_fkey;
       public          postgres    false    2965    206    204            �           2606    54226    grade grade_period_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_period_id_fkey FOREIGN KEY (period_id) REFERENCES public.period(id);
 D   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_period_id_fkey;
       public          postgres    false    206    2961    202            �           2606    54403    logs logs_user_id_fkey    FK CONSTRAINT     u   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 @   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_user_id_fkey;
       public          postgres    false    216    2983    228            �           2606    54387    news news_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 @   ALTER TABLE ONLY public.news DROP CONSTRAINT news_user_id_fkey;
       public          postgres    false    216    226    2983            �           2606    54276 *   record record_student_schoolarship_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_student_schoolarship_ci_fkey FOREIGN KEY (student_schoolarship_ci) REFERENCES public.students(schoolarship_ci) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.record DROP CONSTRAINT record_student_schoolarship_ci_fkey;
       public          postgres    false    210    2973    212            �           2606    54332    staff staff_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_role_id_fkey;
       public          postgres    false    220    218    2987            �           2606    54260    students students_grade_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(id);
 I   ALTER TABLE ONLY public.students DROP CONSTRAINT students_grade_id_fkey;
       public          postgres    false    2967    210    206            �           2606    54255 &   students students_representant_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_representant_ci_fkey FOREIGN KEY (representant_ci) REFERENCES public.representants(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 P   ALTER TABLE ONLY public.students DROP CONSTRAINT students_representant_ci_fkey;
       public          postgres    false    210    2969    208            �           2606    54350    teacher teacher_grade_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_grade_id_fkey;
       public          postgres    false    222    2967    206            �           2606    54304    users users_role_user_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_user_fkey FOREIGN KEY (role_user) REFERENCES public."userRole"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_user_fkey;
       public          postgres    false    2979    216    214            H   5   x�32022404602446����,��*�2	EMM�,us�ӋA�1z\\\ 7�      `      x������ � �      N   �   x���K
�@��u�)���T�#�.9G6%B	9�U��q��Q�87��oz�UH��5�4d���I pT�͊��i����M9���<��X��[|�Vʝ�M��V��6i@ҷz5�jێ�O�Iն������M��:��Lꗦ      L   A   x�3�(J�u-N��I,�4202�54�5�P02�24�25�313�50�2*��M,�Lħ*F��� \��      d      x������ � �      b      x������ � �      J   7   x�3�4202��`������������������)�o�e�4)3��,F��� u
�      T      x������ � �      P      x��}�r�ȕ�u�)� kP( ���D��9K��a�#�� ����������m�b�YPdA��u��v%���d���:	��0�<)�A���=����=��(V���@��Ϸ�Z����u�v(��b^��?�K"�{Z%^�����~�O��8�`	IOG�Ԣ\UŦX���庨Vǧc��Z{��"��0i?�1�>
�8�"�(6ն��������u�q(�,g�zt�}�/Va�:�š�Qn��m�)��$�~{��gk$x�X�Kc�O�y6H�8����:Ikl���*V�Ŷ|<?:�󄯴����䟲��Joҫ�#~�Ld�"�Т�����{��|�K�b<��q�R�C�1Q�7y�}Z�e�%���7�x6��gW#s~�G���u5(W���m^
_�B^Ó2	����&q��P^Vպ��)�n��)�Ǟx�79�ķ|r��R�1A���Z�۪�XU�{XVwfxq�uf���&��t|�M����^�^�z�W8�m�s�&��%�� �\f���&0�<�c�B�N�šܕ������mY���|X,�kipJ|��!ߨ'>g�a:�s�Ft&ϼ֏m�y�����������x�����R^����b���=����H�q�`_�	�-���8K��ǉ��	z�|�\%���O�����}�ѷll�>���Z�m��~���},�p�ޫt|��6�J���=���X-��]���2
��qzc��e���a$�Ժ�,귢y�.���o� �)BH6�#�bāb��[�ϝs�i�:V*��f�G_�Ic">LdYn�]��G���j^��@k�:�/&�����=����@â�l}_��w��Xqp�-����wk���$J�����}t���+��l�_}��nc���p��c�zv��TI��F\#LG�f'"�� �u(��7�>���X%؈�l�M����K~elJ��4x��d��,W����B�O<��Az=��&��`0jR��Y������&+���XB���~� /�Ħ�"�`�k�R
�D%x��hBo:񫳄HϞs�b�|)W���&���O�R�����c�9M�������Bۺ�������g�����ߑ��rd�Z��7�C���^�Y%4�*%�H�p��}.�|Ǹs�/�>l�\���0lx:�qB����R妬�Zw6�G��4�&�q����R�I����a�����&h���^?3Td�+��0=K�<Um��&�-$,5��()� *\�4���x�v����Y$����鉢�}:�r�lx� ��3��Y�e��ΫBz�J0� n�?��!������`p�6eǬLD�w�A �Q�@ڇ�����i6�q��K���.^; �JD� ;\3�GgYr�P��_����w��, (J"_�F|ǰ	@��qW��y��3�p ґ�83��� F278#�&��x�TR�V5�Pu(7�"��R�!<�@Q�d����X��x��+��l� $|����S'5����Sw��,@T�������G�{���MZD$~*��i1��XUTk��t�5Γ��r׀Rg�#��� J��&�NNSb�z��?���v�&E��H)��S�#�d ��g�9��w/�;	��Øn������8K���aU���
0�0RH�1�����c68K�&W;�/a�X����	<��8=�jmZ�Ƕ��.����yZ�< *6�yxM�@0j��{n��$�wOa�9�������#�c��x��X�K\��F0�Ku�bq5 )��;K��a��q1��}�dx���gF���������&W>��E��ks#�b�Oh\Jd�Z�G�q~=m���u D�*��a��5�᝕Bf�0AP�SlU\�0��i'� (��ჽ�DC������3����D^����}<�t��G ��I�����ƮA$
�Bz�9�v`�Bڷ*5�'v�0��F.&Fp�^�	�f����ë�� ��?w~��v|��!���ӫl� �P���?�ow���OwI���!qq�T�A�n�%0�#G�kеm5��x����ρ�r[-0��<�79%��h�X��X?Vż���k0����ܦB��"�����+&��}�r�B�3�%�	�\�,�~��H<Ģ�၀?�ٍH� ���cG'Ӵ!��%�U!`��p
��D��B��Ѱ��o�4���jݩ4�3}���dz|I[� ^����VZ`�s��;�yIw-W8�2\��:4���]�&�톮�C�+��u�f�h��84�,����59;D����ͦ��r[��Mw%Ex%h�7C�1������:���1����j����~VH��O���-(�����qK��$� U��H�;�:!�0�&1��F�O��
Ge�`4�r̶$�����RA@��OXr�����r˸Pm�I�t�~�~K0����2��~�\W�����nbi��|$�Y?G��5��|�P����Sr!fL�
���>,�y�M1
�Q��y�`z/w ���>��q��a,ef���ňQƾ����*�J��$&�Zj59���j{�
A���c�V83XÍEnj�ͱj���q`�2��S�`�(�Ktce���co	�m��a�Asm�r^okwV!�
�D#=� O�r��b�������;�	0���YO\Oo�ll����o�\LzMʹ�%f��Up���%�*&0��@0B���aw/l4��;_� ���d�{��kH��ԏ/�������#�+��4Y�y5H��r��6&'�$���[���v���H�J�K"��h�-��U��W`w�K���@4�1�t:�� L����Tl^_��W�Qij2������X�����x�]��!��U�4��^����e6$i��A�QF��*�Đ����d����:�%�ű�%�L9u��x,�7!�c?�0�L-a40�ut;j�@>�k  �?�H��� �5�l����~��,��Y�EG��;&�� ��4#�
�$��&WW�YhE����׈�ξ� ���]�����&n�dl�Q �����7[;$-sãN��� mL�mt2���$��p�<��J k���GW��XM�O�5�������'wX��!�����3o�;yD$x0�(�j��zy�֏E��H�$�0�[�i�$"��'2..]GI���b�bnXO��Tw@��/+�	`  =�H}/���������
�騭��&�;<�Ś)��A�E�˪��Og���J�����x�EenD�I^_6U�}^��4	�	��7"���!	�y��EC��@R�Aݓ��d���-!0��0i��\w����M`%�/ÜQ�X�`T���.-s��
R�u�QH`V����
���;Z�"S����+6����[��� ����g�wl��졐L��HV�@;�/-��ۜ��/Ħx��2���-i`{�N�XE>�þ/������_��o&��/A�>j�8������(|n!j(l��(�T�K���B�����8n~?��9q_VK�;�	��؋�ֳ�ʫ�oc��2@A ok�]�"M
�R!�����`ʊU� �mY�
����6`0��Cb���?-ѥe#�`�A����
���k�O�Ff�A�p�Z��"!�q7�η G �"P ����h��my��`O�(�3бc�cS(>8�5�:��u�P��D��ʔv�5�v؀k|J��6���X̥� ;�����?&�Ӯ���5>��m�Ӏ���	(�{�iv�-"5�+^�k�:�|͋��v߄�%�jo6e�4ۢa�2`�(b���l�JD����Ln�����*
�e��g�u2:w��"�_ J�}6�]�y�x-��bw�~�BH�nT�&	�c#h��41�YB6dy[�'����<~J�]�~i+\X�a�gOcax�N�{�:��ϒa�ƎF�8+r�G�|�d�e�1v�kL
�A�'\z�?LH��[4��    ׂ��͋]�"%s<�0���c��[�,����J�*�'��	�@dnC ������H�;\���@���� ��[[����a�����$�XJR���#m5�G����z��\�eO
��`t<�n�e��fF��Ţ��ŲtW���B�l�ub���6陸�rEȂ�9@���;�Q�3�]��ۣ�Y�C�D�`(O���E"ɑ����X|J��w�"�gӊe:��5 �zg�I�7��Hb��h�}�"Q��6�����8�Ĥ>e��qe(��U�F@9 K��>��j�|�bv��bv���8j*^-cO�˸+�rU ?��Xn�=�A�ʦ��|u�{!�������F*KKR��v蛶�]( �����B����!Ϧ0���I9X� L7m�r��dpl�G�j�SS:��߻	H�6�6���}�֑AlDC&��ª.����񡦭�z�z���ڔ��Gشk���"h��_�l$;V��������B���� #]��+$��u1�P����Qx���[9�l��/[W �s1�	�l�۞���{x��]B��cX��u�����0c&��x�k���ӝ�!������ӛ4���7�.0¶{�K�m �V#D R!��¦�Jf�ue
;�µT���0�o 3�ə��K$��bQ�^�T�	�%�F �M�ϲ����1l6��vkw�*0��W��Ц���U����r_퀸�%���O��tN;�?�嶣��$��4 ��汪�`3H����pv���S��i��c�<�f/b��;X��+����.��2P��꧳���6����V�q�M'�j�~>+K�+E�5p�G�a���n�bw�����}�G�ˌn@���*Wә4�W�mf	G�U�&-GiV���� �HФm5g����!m閵 V�������F���b �h]c,� Q���F�g�<l�e�_�ȯ�i�"{ 8�	���>�IƱ
�$&�M�-�⮉��"nۚ�&B�������w��hJm�H�o/��a.���&�7�<`�_a~0�&_�-��^v���Z�d���8��thl 9�r%��]m���b� I��|�+�Q�ɷ��҉���S��b�|\ �"��/۽���lb�& ��@��i��)GYߨ��w�T��'�=��G�ĝ�Lg��=����U �tx+8v�W�>O�޴���w	!`&�<CQ��q�$}B8K���z@�fG��A�-k�sڻ��1 -���,�����Dw�D�Nυ�(�l�*}��[�u���ͪ�{p\7ذ}z^�.N������$%l0��Z�AM7���n_踎i�b%�n�=:�-�Sb��K]n��*M��y���U��3B���%Ǖ�|����0�n���Z  �OxBqc����I1��&��v{ح���o�7nX�V��OF[q2�N�K	~		'U�M�sbq`��+Z��Ls���5r�>�T�@��p����0�wJvt��~S��f�L!aE�
awQ4Z�(p5"26�k8�|oh�o���(�������/:�Wb�K!>i��A������؋=�0��5s�����N��<�S 7WJõ
[�:\�C�n��M.�R��P�x֨�ژ,Y�J.~ի� #g��a����|�K��	g��uň3�`M���"8�05Z�����Q�Q�VuqT�{n�e�KYV��ݟsqzH�'�JEU�v��-/�/��|�=k=�gi]킇��]�����'{]����ꠦ��	��ɺ���b�P�kor�}�/��_N��qzm�1(��Ge�j`��*2�$H�-�R������/��b_+Ѿ�Eπ\�8 `ri\��R�E��Ww��mu���/V{e�fM��B�m�R���a[�5=/M��[�I:��m�4z_��wF���};A��9�X1[��Qu�Ϧ�jK}�[��ĂSLĵ����=�D��C��R�]�|�^����mY�����W� ��rO�57@����Q�X�~iImHb*m��7!\�����/�]^��>%fC4m|���[P*'[!�����}���t��Ʊ��h�T���igtQ��\W����~Y~+P��C�5��Ey�/ 9I��Jd�x��m��0�n�A�P�@7@�^G��)Qp&K ^Qӧ6CQm��n�"TS����dVB�Z	����M��V��U�8�D�E,�OR$ҳ������~��	�LVL"O�;�\�;O�y��_껪@N1"Hp���L�m��p�C�]�(vIS`f�z"Jg����)-.�?�M��(Mq?�f��bK�P8�����e���,k�/.�����YV  ��2���y�����6���i��t�>��D,�װ���l��y)��uW!�%�0E=�0� #�s��,(Mm����	��/8���.+�-��(�l�����G�'8=-����p�qQ�L��k$v�(�e�ٻ�6�bj�-1:�r����cQ���R��hL�%�j���]^��VC(hD������Zi���U�yz������@p��A�`O�v�4��cfj����}<0�Θ��/H��>u�ô�ݨ��=��  �*{x������3ek�峛Ԇ1�ak๿P��QmA���H��T� �	���P�$�DؓO�I>��A�p�T�ݧb�Rt85�^�a��qp�f�)l��cM��˻V���X%��#,h��Mz�9�[G�C�m5*Ww�S��	�e�u|�R��.d`S?�\�\��ۙ {�����C��!��ޟ��3��`l���t|�ٔ�� ~�C�\���kw�x
�`��:Bx:6̺Q�ƞn:;��,������M =�)g3�^� %���**�]:%,��`$N�k5��_�^60���ʂ��D|�����d�/
����ڟճ�gf�h�9�DPʀm}���+UaW�	%e���=x�%��b�uٖ�b�t̂�|0��_��/p9n��#�� [�5����LdbD۩ߧ�T��[˜ۗ(?|�;O�^WB��俥}"�����k�1��@�~x�l@`�dL���,Д5��\*�y�]t�v{\a���^3��P�ٔ����]��_a+b���)�Ef2{S A<A;��� ��ؖ �݅��֧��?6D�"�����[:4�~���������p�lH�t;�O��$DS�~q�[��`�؞;>ddQ=���0~a�#p� �[�X#�%þN�l����;�˷��z\��f�`�u������;�I�oD���TQw�N$����G�HQ@�	�̣��ҫN��0�P�����$�vvS��\
���t��G;]{�R��4�Rg4�:f,�O�Fj�h��r��b8w�Pl��+��sv����g=g�'�"�.V��.Xס��Nwt��v$1\3H~V$��X#���.�.3����,�Ĝ���xqʓ��Sj
:
F /b�	�x�Q6��GB�0zKQ;��y=��xI�A�C�J Ł����P nM�uΜ$TV��94�3J��m՗�k�5�LfGw��,����n����v� �C~0~��  ��.�/$��j]5м*;�̮�S`�|��~�qh���H,�(���[3����]�sJv�Ś��p}qح
؊+�	B+je����i�fi�	H0�_.p���%�jlՂ�:���\d�����`��nq����SA>ankz,�,wD�|lK�@�q��yJ��o}��ˠLVZl�C�Z��P�uqp���C�̦��?26ʦ�y�%�j�Ç���4������J��u�a~Ի��5�!D�L���.cu�1���?��(w��x][0�a�"�0�?���|�SF�>-D���_/a{Z!��F��l���pD8{*_+����;�*	N��������>s:��1�cK�L�D��K�$,�\g��6� g�}ϓ���\C^mpC����n��o�G�ge���^�µ l�Ftv� w�Ȼ�_MU�)J �  Pfr^�P�d���3݌nG'�3��(�<�����L�v�-2�j����0���g��/�2������x:�߳kX��a ,����
8!��Xk��W���g��B�������ᝑ��F����S��p�&d�.7\��lG�hk�ۗ?�M�L�uH�$����7�����YĴ&ĺ�7Ն��ŵe;���Ȗ���[�����kX͋F���帍��l~i�t'�1�����PC)���c[�*=w `3� �0�3d%)�W�ʥ���aI��1�X5WV >;�OiYb��MQ-�w����FO���O�^f��1>��y�@s�O�ݗ���r6�p(���?�|E�\N��m�8f��,c��NQ��Ң���	f\˃��4���5N|N˵2�3��]��KF
�
zL �)��L��(��_��{<K��&oՁ���lxm4�49�q�#�H�g��i>6ג���,����WPk�Y]�[�9[��������0q��/����"���"b����q���c��w�b*YeꖈtS	�`�Q�k�������>w���I�K�H��>���@1�Mb
Q~��p���|[��w�(��,�u&���bW?}���BNTJ*_lV6�9��`6���m�j�#��M���i��X7W�����5ɮ��q�*I+����WgS���$�M������{c����r�70Y���MB���38vD~��Es�*�kP�F!]I�Fr�Wmk��Suc�W��'����d�b�%gV*|� �y��x`{u��[Tk��g�J���<Tw�ʈM�����G�!"ߴ�+�ˊ#��ijl�^/�8������9�容nx�dQ�ʈ7Q�|^��g�צ�Zv$,;Y<�Ќ_�^}{�ٌo?nlt�7u�S`��`����Ҋ���迬8���VĆP�����u>,.�	?Ć�b�$>�ñ���\�oŁ�y�*��J�e`eqs���3�Q�s@�m��{��B�]8��B3K#n?���M%أc��$N!�a �g�Q�4��۳���&V#��)U�$���o:��lS��&���C}�Id�a��H����dx��@2
�y��ET3C�	|�jM���Y�9��)��HŮ���+��� �FO�L�_����e(<�a2`�`S;���J�8/����aj�K�vn?FD�^�*�b���E/�����
�l4�b�iU�z$�J	]䯼���	'	ޫ�F�N8��^�$�t4c�����~������e3ʌyI@R��p6�՜/��!��]1��|�9!ޣa�-�eB����+!�Cj�Z����t�~���B��(,�fK*�Y'��j��J�2�]@�s?�r����v$'�D�ɛB��ܬ�L�Y�$"���bs+��9�+{x����\�u�4���Uf�K�si'9�	�ݼ&��+$�=�~ҕ䰪D���b^<ֻ���RҨ @�ނt�`���x�R�pi!7�(!/��^���G<k#�8������'m�~'�/4W��cM�Bc��t�!����jS8���e�
�(L��\QbݱRi)�G�S��V~�l� α�r�ZT2O�Ԏ�ꣻ�B,6pS�U;��IWE����x�����Z�>~o඗�!�>��燮Vq��Y�%���h��z�L���µr^6h�I������j4n����%��[�E���¼�����rO�U|�m�\�ug�[��1��zҐ��b�)/��X�AŠ,�Y9].8	D�4e$�����)��8��x�.�g��/ƞ�s*?ܛ,�]F�;*	�E��A����Js~��xK	Y�Ԧ�E�OO��hq�~�|+$5���A�/�m�`)b<�@������	���C��q{W��b�޹�܁�`���>W�}�z��j�S�;/�9��ʠ��[�"�� �&R�i)��Xy6h����үff(^�*7u;1��@�Ý����jX�)b��g�5D>�}Z��p�R^��mR%�x��h|�]��*�3n���N�t�J5ٝ����#h��Q+G����Ƃ`��?���"7�pZ��*�>����8�x��w��s����"@���C�mDO4����M�o��|����	y��7��C����y}�F ;+^����m�f�E.1G`�R/�̥�H�l<�������޳���Q>xv$����D�K0�%�,��P����U�E��={�'���V$��{XtW�|\�},�D�-���V�:i��%i��w���~ٯ���}	��B�kxۛ�>M�����E��N���V�;�ͯlga�%=�ČT���HFAPG�(�n+�L�ö�:��H�[τct��fI���<Q�X���)�;�y��S��6�2���5�xM�$�����5�>/_rQ��D6�z?e�^�T���3�b�R�0���R=1;QO�̐�yq��Hl�}Z��o��˾#��R_��y�Z�/���X���Z�ij_���缹�4n�F���ա0��y��&�fO������B&�U�<�z�#��.�O��
;^��+{� -�LJ�D�VQ�C�Xň�e�ը�?�c>`_����6!F��*�T�8r"�"0?�i�~���{O�Ss�>��+�� ��[Nus�OSEQh��ñ ΫL�y��Ìg!�պUg�ϴ�%Ɏ?���� 23C���M���|F�y"6�uވ�:��������#���BsB'�Gf㞸ET����ށ�ǥ��S�ӽ[�w	U<�
]��5�]r��$���6�ȴ?�̌o���]ը�����ph�_����g)hd��ouS�Ci #`e�0�߾pr14/�4k�d,O�Rs������J��Ok[mfS˽��t����J��.�e��I$�?��o�6��d�t�$g}���������*?�      Z   c   x���1�  ����@�@4nFwW�JR�����g`!�G-��A��q4n��\o�va{��3-̥p�+�vt0��.�+�Joi]k��ͳ+!�|/�      \   t  x����n�0�ϫ��P�]��ɩi�(�$衧^��Ĕ�$O���N���=ܙ�3$Zt}��N��y�	/p#��(% :rCߵ�5@C�{K-|S�㜁�E���UʟC\���ؗ�Ib�wyҋ̖X���+ϵ�ET1�G�A���d�b�"�3,q�.�bn�l���c�����Z"�ld��_&B��LO�d~ӿ��+}5�t�2�$p�FɚNJ�8�͍J�"����p��2����F5Iy&n.j*��7�]�p�.�w)�\ks���e̥6��/�)���9�r�����[��S�n��N���Ǔ�|2���U��u�W�1NQY��"I?���Q�v�ԜS�7�>�`�t�eH��]WU�
v��6      R      x����r�8�&��x
.{�2S$ ޖ�;C���T����9z=���,�mۼM�؜@���N+��TF��s�����WUuJ�eݕ��.��2�uxχ��L��Z|����p����8�2.C�=Uq/�A�U�gY�Y��w�-�������Ӏ?��T?K�k]u�����r�_��Ӽ���p8����2,�8��2��+��e���9�G����9/E���2�E|��*?7�G���4}@U�mkL�?{>ǹ8ߎ�p�A��v-^��|?\�K��8����Q���y,���Y�y���]*mZ]�����?�˽�����~8_�y(��e��v��Z��?��l�p��~�'�f�Mo�+�l���v�m��@�x�����\���r��E1^��]rU���%oιaɪ�;�z��l/��?ᏽ�/�H���� �x�m?�!���	n��U|?�|����s��Ж϶mTm4-�8��~�r/���>����.����[��]��e��0p�� ������쎅붭ۆn�i�~�K�sx����q�������6�7|[t�g���^�]V�ݴ����K��sy��_�p���t������P P�<��^nN(�*Y"�m����θJ����j������5�SE:cyU��{������O���jՕ���Ya}����v�ﷷ�8��拵J�ł��mփ�RU���J�G�6eۑʺMW����p=�b����������':ɺp���r��"��V]���6,S�<�ɍ��8��4���o��_�4����@i~���jT��A��e�''ظ�k��V�+z����m�}=�?�%�a���<?�SNe�Z�s���}o���<_~��jt0>��5.s�
��Y�R/Bk�K;���Ret�{�x���Ӈ�a�O��w����$����u1,�Z|8;���+�m�����&^%����[�)�:���#��hѢ�@1����Z��X��9��߹x��
�w��5�(x����e��:����^�=�9G�����j9��@R� ��v*tyΥ`e���4U�of�>O��<�[N�e������;3V1i��O�Ѷ����l�o�V�X)�W�h���?V6L��\o_m�C3����*��h�?��3�G`�Љ)@ؕ��O6Ə�.�^�F��}��*��o�ְƇ��w�k�}��8�3��嬑�h��ZvKE#�mۛ����E.�ׄ������*�ӿ�{���}S�,�άZ)kH��ܴ�(�A�w�@#�m�B;��#x&9�=п�W�N����J�&m���K�M_���&^n��?����v���\��6�JjSA�?������+�P`^~�`�P7(~/�Bϥܓ�³��$cTz	K���J���^�q��/:��-��C1���_q�8/�n�zw�1��e�V�"�t��y�H�;��U3��7��3֢��)�v�:��B _��;8���,�pz���|���!k��a28��s����?��q�[���=[��RZ�&NEݑ�v=�w�z�T�����4�A?���Gv6\��*��]Ϻ�
>��sr���a,� ��l�'x�w��T�
�nFih����45_'����ϗ��I��E���\=%��C�ꇮW�������xa���4$���PS�n�a�w��>�|@8��V�놄��G��ph��辜�I� �>,ٽ��I����,�4M_��s*X$���#��ၮn_�V68'���Uk�_:���t�S�N?<U?��E/��Kt��Ns~���P+U�_}�B�Z���a�sRklS��s�~QHx��X:�+=R�
Y�W<r���CGz/},���ٖ�������#&E���فU.D��e�'�w�T�u�A�8Pu�겦��b���e��P��麪~������.Y�N�j*�;��W�K�>��G1.���+�����	�@��2���ѭ�ɹ��
>��L����9�K�|�9�حDQOe�ʺGf9�gZ��ʁ�u��\�ͼ�ܖ������0��ެ���.�t�/�{��:}��_���6}��U?����j:��JBT���1�ϰ>�O�F`��K?E���V�3Y�䊎*벪J-�S��n��>~��r;��@#�����`�@'�� ���4����k���p���נ}�����H@��K1�]Ӫ��kq��;���w�c8���9V�-D<����lkNY�ڢf�l���u���)32\o��Y;~@,u����T���.X�~ԝ����2^��w�9��lW|��5?�r��U;~9�֫9h����wxD�T��IA�\������(�׍&6{�LRPMU�j��6���MyE���i~��lH�E|E�$9���n�F��/��5Pb��o9��cT�%ܞs#��1�Q�x�7�z��?�G����Dz���A���j�@"�Q�"/y��2-�a�zϰ�U?:u<�@0?wDv|��)��O���J���>*e/�������G���,c��p�y�mzx���/3\��5\����ր�Rx�a置�(��t��>"c����׳��pR�����qEYp(z�+
T �m���]0����`�h�_�g0�|�/\^3�Ypws �Ia7�ǚۣ*f7�8B�\����#`��ʦ+����f�FU&S� ����a��(J�{�'L�؉�)Ū���O��UY��J�+�8^$)���H��-չ2|���
H���]�v�u+�W6��'��g���k(����=�:L��
��T�Mi8?�@}���:�O��'|�.QeվMgRĞOg�M') PK�@Q�5��c�3���<O_C���ؘ��7��Ǐ$����6�J���\��`���2�����&�٢�s�������)o{ŋ���\�Vd�~x8��:1t��#2m�5Mв{j=	�;�r�c��v�D��A=Գq X��R�m�g{��X�70c�#	 �V|�1u]l�:���d�y��nv�u�e���r�FJd�û�w�Ph��|����.�fj��g�������ҳ���*Ɋ����7b��k�`+��&J�k�ݖ�8y��k���/�-��ޓ΢�*��8T ]�TU��pO�됟Lm�؍*8�\F����XmE��4\�&s��,�Kv��AVx��~�k�&~�G��� ~=p~�}��HM��[�j���%7�4F5<���_&r�$�����ᄎ�Ϲx�3��WOXا��������GgC�Jwm��
�>�*���ϴ$i|�s}8�Q?��=(�+�?`0s�mĂU��G��9��.�����]���#�=�)�U]g�����&�EA%�'{���ʊ;Xl�n.��VI�R�{J�����>�����NR�ZfP��z�����Ɠ�P3�K.�U�mzI��>�)=G
JJ�$|��EU�g�_��/�a7{� �ѥn�x���%	{��;r����H�ur��*
K��Rp`�>T�����zV_����[��{�h�쨌��[/��ţ��>�e�����;֬�|����)u���%���'O}|Ϩ;������9r��e�0 �����5[�_�����ۼ�3�+�����_(v�9/,�N�����ޖz:�mk��n3ۏ�/�� ���
aeQpo�i���o6�H��Pd%JDk�����L�d1(�9�9����`u�ڡp�7 D�j��i��:�a��W�1|�0l����{H�������jYw)8���t��8Ú�ކ
�'+/WyX�Z����������T+>��+>\Ǘ�H?�	e�M�5~ȉ�a�Ѫ� �>�#�*R�w�P�ϵ����qu[���:zь��۱�����k���.p�S�Y5)�*�X��hӪ�3b�t�~L��{�+-��3v����o��{,���h��b�z���ƻ���.ȵ�_k��Uw�!*刄C'QnE����b�6�R¿�o�m{q�ҶX�6A��\������`�8���[9�����x	��ȥjW�\�]W�M    ʸ5(R��YE
�V���6},2ܑ�@�Ej9Q�j���9�Q-���p%Pj+g��W���f�Q*�|X���?�P KGp$�\\[�ֱ����{C=�p	�@x�p�ׇ�P�t0��K��!�M���>�*ktPv#�d�t��L�������<'κa� Q�l֗�)1Q͞��P`���"m<��
ؚ��`�9��(b��k�x�RވV����#
&UU#�[��.s���f���}<EEc���e�fW�ے\3�Xk�`x��;2�N����<e�T�Xq���\:ͷ,>�]�4۶� ���y�Q9;��9֨�.�
ae��ؑ��&��e����:�5Ƽ���&��#bH9�`���` �F!��i�o_�����DCv��jvb����9DT!	��<q�����-.�bj�c2�m�S�h�O7T��(P��8�����Ī,V�����v��|�k��(��!
W�|P��=�e�HƘ7�ui�n�OPK��j1�W�v��Po�1"���z���5GN���ڂ�;q�ؼ_p�qU�7ވ�"�P�4o�'�V��<�p��!�k��{Z�m�W5]e�L��(�����=a��ȃq�W�L�*lb��8�{�*o ��Yu�5⮓�u^���5����w�?0�PeX����Q�h1Қ5����$�	�o����J���0�-L9�,���
�.�M�f��3���ӊ��2���^��@�\�6��i�!J�����!0��`r��x ��rJ{{]mV��J3�����}�}+��e�]\*���F���q��T�\Ԣ�*���5�`���hik�w�Xr���v�.u��@���T���"�CVz\�jYc��0.,v?V-Z�(]���`�î7=��~M��պL��l��j+��p��?�x4Ztg�E��hT׹"W��o4i�{/�S�����\�%�#�{��䊵�"�\B�D'+�  ���g�1`������B\����Or��`�H�^���r)w�r�Ze*�CM��Z4j$�= ���e@����&��,ׁ�� �R�������I�
<��z�x >�q��FZvT�u������։�-TamaY�#šp�A32��Ŧ�ٛ�#�2��b*[�;��c�4��X���w5��M�~�^��)��XQNtp����0��Z���%�l��/�Q/k@�no���m>��k���i��"$^B�B�b�x0��+�|l�"ů�nj�J	��AαB���I�k���L�����e�ܝ3(��2��L�K(�ڲ�j<`��e��W��'{�^�)�\�	"��Z���윱ÊE1L^����͋u�y
#�:�:�Pq��j�˙[> a�3i�9�N��:�o�����* �&�J(X�^>c�b����T\��2���`�BE�r5�C����7���,V�u�Y���'��U�6coP�����L��l�H�9�1���j.F+���&�PXm=��	dwm�5춵��D�̊-��L�e7��ɾp��>���i� tKCT��N���k^(KtQݪ^q*���0;h��;�c��VfV&���A絪!�1F��  b��u��ڮ�',�D�G����d�l���S��yNԟ������:�����A�
期t�8IO ��w�%�S\K��b����E���=��#6'����O�Y[�ǝ��㺩4Ҝ�ǻ��N���n�bRtJx-�%
���z��wZ[-T!԰�w�7����%._��/�$���H���8Q�A�w�ؠ�E����ibXV$і���{���]���Q{��1B�Y4nνF�6�T~���ӝ��j)��e�JMIF��Gv,8�֕�ʶ��i*�M/�@68]�{ �vn���4�
���0��k=��AX���p��M2����Q�œCZ�6�4=��zM#��H5Ó��%#��	� r������'�4<X�?�VwOR�w�$�c��82�>@�A�N+Z�&0a��޿[���8���%h$kԶ�[J���k)s"
Q�{��'?��$�?˔�Qۡo�o4����"��52^ڨ[3��A�FNC�߅��6z�>��/،ɥU��W��Q�� &#��*_:�Hq�j�&�g�9����ؽ\mgn��y��J�N�X1VA�d%��P�\|Z'�Z"I���k���%�E.�=�I��7���g�Q`����T��2�+�`���g�@/0r������*8k�P�$��>w=�&�����<^x$Q2�R(��kB*f�
 q�K*�����B�j����
R�t}X5�[@���ٸn%�@�r�o�4+��B��f�RM�$S'CyJ�F��W�5�{�h2@񉆝$����\��([?�Q0i%���X��/�݅_K�
�K���8����`jRIYH"J5�������|!X��˦;1�B���M��=L�[������$������DH�ǫJ�h�P��O�W��PI�:Jl�4��*�/N�^?ǏWu�4�uD\���z3�����M�9�6Z��u
\
��Ƚ����9�]f��͒���$`��y^1�D���EP̛j�ӌE���}U� �Z����<`^��(3e��!)��H%o�Ʈjϧ]�P4ȍ�^s����������װ��e�C���M����Ufs*(�b��"��=��l��WjE�Ċs����J���
���ֽmƃ�|wcHp�W��`2���%�ƪ��|��?N]=M��1Pc���<Y����01'J
�dȧ���Ĝ� �r���:��I�{��S�2E/p�u%D�RX����8T����K����;�����뚶���L��$���$Ŷ~|Q�ǝ�"�H5�Vf,%U~��r���m���m����
�"��*�3�D��Ѻ�B(�6��(����Aֈ�Cp�*LFl���̍Xa�w��t�m.�kScu���N&!�%o�.�8�e�����O�����C��m"'��t����goo���IGw�X�̓�|$�6��#���ע�IT��۽���p6��3�)W�Y�rj)��q��O�,�ȹmjn'��C���Pr��=�|I�cU���Gg���:قӃBhW�����-8U&r�?�1�J�5�Lo��5^Th����t��kQ�Rb2��C��b�>�{����:D-Ql���SA	{�h�I�vm�s���X/�����w��Z�q}P����f��h�l�)��b�+կ^��dB�}\N��`�w��j8��Z�����v�T�v۱��Il#]�.*��*{�X&��E��S��Rɜ%�5�Z�r��oh�����혝z�����~BP!��*��^���w�R4^�h���}3��Ī�)m�K�#9��?p��r��)B�|$�:�|~⼽Z�[�J�&5���}��jp��R��xŤ���=��e�������8xk�U�K�a:-u������G��/i�٣.[�G�-�HL	ak���w���i��a��밨XS{NW����&=Pe��(Qb��ҽa�;��MYڎep���wgm����$�m���R�-�m�(9s��Uy�o�i��w�)��7eiM�n�
TN5�	�ˌӶ]JV"(jAo���ԁ�ˏ E�2IS�ź��q8�`����;��iF�0q����K-�%G3��>�G���JZ��<�%[��:����� �����'x~�ݹ��o����2�ұ=��Q��	.+��/����cO�DF���j�6T�)�62����0�ߵRH]�s�e�O2&9e\�>V����[��g;P��M��	G``�F�`]O�{�j�~38���V�]�PK���D>p�	��S������:�|{���v����p��ɴ���-�O81��$��YA�y��*�Ҿa��flp�EXR�,2��{Dj�㼪P��0lپL7� ,]�9aض=L~�4�L��x&�������PQ�R��!�ᗛ�\P6��b���u����Z��I���6dO��˄#6�V�Pfٵ��9>�!Ƿ��m� {��y#e �}���!�    Zc#}]9W��^��	u[���R�����S�x��P�hݒtm�W��8ED�(���b��3T�Yؕɖ�Pt/�صMs���~�o����f��
�uis�8�)�(��"�����?�c_`��JM�
X;M�(W�Um8���B��8��{B��0���\��=$�I�@ۣf�7�ߌLu_3�2��N���E� �p�^� ��"Isi��r.9�ܵ���Ε'�^��c��l�,}#�,|���`5�'�aȫ�2���W��M���Ӷ���(y<O��y��F���hs�a����R4�TF7�2$���jJ�N�ۮ���tA0G�CX�?�����qP�d�L�-V��S�:��(,��D1$W�q�[�W�:���N�s�vdx�Ӿ��s�̹ ��f�۲��U��U_�[&��$sH-�:
�����p#�yx�F�u%����c�v	�39�)�c��@@���CG�Y��,�1�gỗh1A�$zb��&`�¹��������gZf]��=�@0+2�Zl���)�|Ҡ;�+��8`K��	?�L`����R�|]��kk+����ʻf�����T��|��iH��b��!C9�_��CƁG���0y�-���yÎ�aL�76V�����N֘Q�m�O�+\������)C)�l*K*]w\<�L����ls����>�IG�ۍf����o��JL����� ��7�j�k��ʄMW�4�
�3�����\̏����	6�����^��{2��kK#�Q��Xu��w�"|ˣ7�T��2��OO|�j�����(ϳ+o)w���J�6FB���6�uu`�N�Q���A�ݨ*ω�­��m/=��q:�L/R�w�$��)1�'�*�'�qzPz+��Z�?2����-�ٶ�왡�YRK�n;�}��j[���ᗿ���s��Ah�A~�|�;]�w+X��L�Wei�+�����6}.K!;�OJq̘d��VzSZ{��0��_�o*����t5���f��>+��釾�q2��~����L{���7뗇�,da`(Ph:.%��� �V�}�f�<����&Je����:
7sB�i�������`�nG�8U1gX0��������}�YO:��������0����f�OW�����?)˴�;|�A0�~l��	c��	>~#];���L���wf�x>l`���E(���E�M}#;�Ǖ�Sd3:�`ޭ�j�u\��l�i�����Em!�b��0����	��`��>@�n~�ϧ���3:Ad����v��|��!>��ҀzF'9��k�xt��R+es��=�����}&�G;,.ͻ����{����NZ{_��46��879|k��w�z���~C+��v����ߛߓ��1Bt�x ��,�6Zf��G��ht��zs�Ph�^��rT�=��k��H/�c���d� �q�&�����؉+�p��	�i/��kQ<87U]��j�	p�H2��P��=BN��Y.pM@~탓�<OlbY���^��e�O����u�_g�~���¡��������$��%K�X#�M�/z���pv��^1���U��;+Y�1�quN�9�dE_xM�;|5fo�>
��ܔZ&wXk�{�W�1�e@X��;�-��ז�a��{-�Z�RĒf�N>_��;������z�.�yYc������xBc��#�F���t�K�<W��,8��aEB���yzDY���[���]
}0w[���Ub�Rӌ���Sb?<Y���e�9�
,�^�wF��(��=*�ԍ�)Q`������jt�;��{��c������43�y�A�&�ԋ���5z�?C���nUͩ��Oc��l��uGg	ll�-{�jW��%z	�dnU�5:5'�c��`q(�K{�@c�0�N~��4��5�Y���֭�imǈ�Ew������f��B���F'���"�Iv58�ʏ��'&e�t6F�w��Y��!/<�� H�����xKl������,��H���_�i9��������$cv �b���{U�OO�����_�q�.q�m�ԡ���C���ώ5�f ���}�I��S���d+�&��>#�z}����q��x���JAI2��Lm�ê^�����N2kP�V�u]#u�e���/ (,1R�����_;F�w��O������&�C�[�~�圧+�(A7�'J�T�T��c����yp�3$��8��y�&`�q���<�!�J0oon �n�r��2��z��oT����K��(qa@I��y+'�CRz#T7}��(�p����&ɢ�Zx�]�8�܁���!�0I��dF�k�jƩ$����N�������|"����O�����C*�;4���¯��-	|(3)��O��ۭ�	R�ċ�$����Cg�bl�{r�TD�����d^������'⒥m�5s��1�clhqt�0K4v��ь׵�0W�& � Z}�3�V�X�gްmi���q劎����);�srg�UTr}�|�6w�QN�R;z��!?�J���ګ�8Y�s �Y؈|���K��~?Og��ڣ]�O=�X�Zp���sp��iθ�9j�����il�ZƼb���_�a�.��s��tg�����֪���2��ޱ�Y����M
��t'��$���4]Ϸ��:�&�Ϥ0.LL$~x�+��JN5
E��HT���wYQwaܓb�zD����;c2��o�;�<�~����%�D�.������}S��zlW�Pܦ�+ŀTHxN���=
o�[;?�5�@�R���گ�la������p�~WG�i��F�wյ��$����w���kL��n��uTBvJ�0B�5y�H�	Jņs��&�j�����!@��w��m�v��%���p�,��w8v��l]�}���i�RƧ�,���� r%��!.����}�o����#�����_4����yH�p� �N���V#��L�^H[}�+\�r�zG%0�сkQj��7��c����7 U�@-t/���G	�wF�Y�>�V�F6���i�z�q��$�n�j�hF>����卄_�O��Є��S��D�J�ؼ�0aQh������ȉ�q�£d��c��m\�7<)��ųd?M
��$<���.*θ�9�
�j�1	$f���Z����S	'�c��!�Uv�u���m�Y�pH�d�9"��&�؞���{�I�"�ߊ�n^2J�ߟ�`�:�j�������+�i��uS+PC�+����ҁw`Zc.�׊oP�(!��V���=xjF���;��"D�x�4��*\�y��I�)n�$�%sƍ�&�`�0<���H���
Y���u��?b�Q>���J?}��CqV:������#H�B�.��Cڣ�+�h�=}��y�8�� ����Xf�g�̅>:�1������pЭi����Q�y�W%��jx��/)�����<���Fۇ��&2<ߐ+I�S`
4���`��;�V|�3��w��ػ��|L���7���&��q�+�&��L���1ui6�䢎o��j�1�$����?�H^��I�n{�dsk /�9E�]���+l�o�������͓�v�}t�m<�m}:�঑�U�y�����)�a��dQ	n� O������)�S�ׅה��{]�gj�h��i��QF����^�:���_������9�ō�g�]�g���%;F3/��˔Hy� �O.N�Es�1%��Ϳf���Z\O���>��z�\ш�662jk�B�[�֤=�&!�7�L�s_��h�n��\
%��q!���6G�\HB`#9��h<���-@�Ӻ��H�H�Mܯ;��%}6/>ˏ����.$X�U�PF;S���3�(�,�`=��=���1A�y֨�,�F�.^縅�������~*aϋ���*U������m����f��Ub�T�=5Rm!ꖤ�t���T�s�e�"���z<�R�X��=_h�C˝����x�F1q�EB}D�?��8I&�U�}]w�    M�S������q-8���_;#�/�����ƅ����|/V�Ë���N�����ܾ=Yl�im&w�g��'׃�ʈ�oP�T>'僦mSi�j�������#�ނ�ӐGZ�J��@QsQ���F����8'�N q����6�3}Ϙ�Q���n�޲UI��Z��YyU�W�{�W��_�%P���B�IQU��Kr�A(����U	�n,Q٥��̰��H����c���? R	"p��|QX�uŷy�}�F�
`���)Ǎ[.U���$#�ro Jg�ϛssq�����M6BI�Qv}�]<P���x���Q����Ȇ/��h�-��v�q�>��3�>$�3]S��mm"��2a�4L��ˬ���p�߃Z�c��x�h�r;I}��,���xn�fg1ԕ���l<�Fr{[8���%���+��*!߹��o��^)��iZ"���fSB��@*A3�:���*�1�+���x\�p�xC������vj�֔��_)����&	�l���a�~E��2{����Z�Q�@����)Ɋ���y�B�Dek���P�L�^���x4�[��$QP�7㇤׼d��5�G�2���MP)y��p�t�k_#Zty����}K�,!��T&�����ZG+�����b��=����Pꦣ�Lp����x�q�-��1�u2��Tx�6lA�e���eOx'��t2�|�kP>�*�zQ4���i��8l���ws}\1b�5�
����gB��ajk��?�P�Cq���s���1�P��g���y��e�;B(�h����:���L�D�[$8��L<��{񠰇�P���+�M���On7�B�4��m���o�$�	.�}<^i��-A���k�l�Y�r������R��_Y3,~M��¾����������Ce�r|�)>���E#u('�r�FK<>�f<<-�!>�P���PPi�G	o��Ń��1���Gh���1UB;�(s��-��)K�S�		��U�®S[���8�C��k\&;��W��e������ű!�9�׉Tl�U�;D� ۔�5m_�T�x�(�-Iv"�� *����G��z�Vqp��8�=#Pq.u�+�o���#y�dP��[^�u����	k[�]�^zǹg��R���;�=�[K��R^Q�3�l�u3���|*%���5,/8�s(�N�.C�ם�"���<��@��s�?߾F�j��w^���`s��D�OQ�;�f5������{�R2vQ��᳊ɉ*!*�p+r�����	=Ξ�4��7�DU��g��#�K���ґ���ȑp��9�'����p���JU�V	á�������`""<�.�
�I�QbeA�-�R,�,�	kt�`9��/3�����pE�5.ϓ��L3��@����4fƹn�|���L2�Go��~X�T]k��Qe���-!ň�$KQ)d��=�������Wߋ�$@>d����Nm��UT
[y� �Z��J�|�i�=Q�)�s�%\{��))�U9��μ���j��w���3�S�]<u��)*��|�`m���fd�e�$�0e)�<hh��bJɴ�A��e���Ëǈ���)�UQ)��{ʸ_K��e�+G����G���)�}s�c�9>"���^ģvsq-�5h��%�Ee��<�f�G��N���ay����Cu(6�ˣE�E�޴C�[Y��L_y��[+�F��m�Nd�t��l�<�`-7C����]>�Q�g:'��!���܃�=��}q�mr�(]�'��].�W>��t��\��`p#q����s�E��W�/�xU�ŵ\,���8q՞��W��Ȩ
��w�"�z�q�����W�ϔ�2*4�)M�$�5�_��<���MGMk���{l�$YaxYMms#]�>2o���-k[�`C����[di՜��!N��5�2�>�m�kZ����0ZRa�ni���b��K�Ld4n��P������at��	'��������L�
<��Y/�T`�sTJC�c]�򕤗�c�ET��p�$�9�y"�k_��a�"�l�#��^�M�2C��,��d��P�b%s�b���G"9�C���G&b����ku�#u��l�V�ڼˍrk^�m��Z�ب	Nf�	̄@�#ېƎB��1-���׮�+����P�Xц��
7Ą��/k��-J�CB��{��a���
�t��ʛ�t:�8���?�H¯�����wb��y��[Jp4�zX�F��Z��&�|���C���؍-{�=�-�HBΣV��y@�ī�F ]���w��O�R#�L�
�J��qX�c,_@����E��X��@p_��(�!v��ͫ�����>��w6%^4��ȗa�%v#���4H��\ƛ���gU��3{?B�*��X�P�ŻI�
vȒ,��ʩ�c�m��KE��������~��Zv��Ƿė���=@8�pyS5}۔������Dz�=��?)��f��ܼ��/I���&r�T��ve8o�]�d��3���b'��U��	��@�6�����r��-7b\"DH9�X#.�����x[�Xy����4KlZ#R��fI��ct���M�h���i�l�I���~'�_���+��xD,���cĎ��v��jM:�	^����Ɨ�h�^�ⴭ�E��)]R����vL��܇��ܳ��K������"4�y��It�2�կ2M�9��u�LU����K��YsY��6��Ex���둻?���L�]<��tA3�ߎG�~�|�L��%�ݷ�� ����8q�k�T�(fǧMb/A��M�� ����4��39nb�+]��3d_*��=��j�`�׺at�B	q)#�^�1	~��T&	��e�����+ɐ�x���)4Zyй&cC
��'||l y@�\�U˓�^�c�y�K�9�a**�]6��X�_��%��t�^�D'w�c�����$���]�?L�l`���z�*�K��,WF�>S��%���ml6�S��N�����j�o�yc)*�P���E�[��6���h�,��-5�}/�>/��R����m.z��v��	*�~��!�z�j��	��?��C��J��0���3(�����o�*/�����%?�����ѧ-	E*�K�1�q�'�G2��pF�?�$o7}����Z� �.�7��Pė��+A��E�1IS)��ٛ�Jx�
�g�ᠹf�B����G:���?�iJ!��o@�V����n��|���\��._�i�p�g�GOb�m[7�U���@�N��8�r�����X�2�O�mݳ6�k�Q���/WB�u����J�߹f�D����M�k�Xﴈ/�j�u��>kS�GO�-v��r�����58��ÆÈ�5��!8���]
y�n�Zmp�
YPY��/z�?��M8�qp����J�R�����"i�IK��2ٝ/<���ԏ�N�� ]/n[�3':�'�*��9!��F�y�e8���~_��y��S��?�r����#Cg�d�
y�{�Ÿk�%F�E2;���K#��'�wD��dT���U��)�A�:��zp�pw'����@O���^�*>�wگ�l%�X����8�.i8����'�9�tMuT�m����Yx�ļZ׉P��!a8�)�,�S)��E[|-�
=o8߯u�І>�+�쯱����f�<�t����q��,�m�Lk�J�]yc#aUK���'_�n��)�Ǉc}B�'N�E�4~h- 0��!Am��mq
.۰��ą�lw������JR�������-c<��g��$i���P�J�i3���{�����Z�O&/��,�h��3Λ�沣d�8�b��T�ba�f���ۚ� < ��~��o��6�����M��l)PeX����܋LAt,}��^����-:�X����e,a�z24}��r�9��� �+�7羂����\�x�?K�%8Y�Nr��R��=h�C%UI���%��1~&�VCb(�6ً��k�̬��^D�8E���uu� �  n�:��KDn�?�E�]�� �`-���!�|���#ٓ�>��)xw�$�{ �����"�P�k����z���Sn����۱E��-�[��[���<Ə��j�O�\԰��7}��θ�*@���nd��F��e�B%�`�I�nu��F1x5gm�u)I9;�[v�E�;�t&X����Fd�<9=�f�9��cY� ���U�8妷���w��]���!������B�H���+HrVR
Z3������9:��=_��*b�� :��jj-�㶅k��L�-��1��ǘ��Dc�C�>M E��ÛWS�|ƴ���o#w��ͳ� �!�!�|�����,����yÚ�̛v�a�#���7ؤ8y�S��� 퇓̱�����~}E��+:}7��kw�!��d�U.��Y�a~��M�f�I3}G�a숮܆M�F�d��<Qmp�꾵伂r�[���͒��]�a��|�u�3s�zݛ�$]%�H�s�W�D�x�P4xC�3T���2�yc�7l��Y���9<���拤�kńƳ䵇}����R�1��F�k�j��[R�"귎���x�j�O��h�
��Z��9��0N𶹠��d)�Y��ԑ�Ȣt���4��K{�]0���\�*�ߤ��F�!�8����6��wZD��9�)B���J�9��]��O-�p�&jtS.��O����c �--�@��e���Z���I�dH�R�Ի���mQ���O��7)Ą_����e�	���"궷���%xᮠ�cvV����w8��>A%N�_������l�l��c �#"�;�T.�̾ln@ѡ��B��ğ�_��rRm��ǶU)�Mcʎ�g�LPA�p��0a��U2�̬�^]�i����N�X�W�d�%�rAԎ�W6N#XXy�|�W=A@�� �m$(�� ��TL�dm�e_�L����6rLw�5?��?~��,���      ^   �  x����n�6������CQ����&E�v��P�7\-k3�Ĕ�]�~�^��b��$g@�_�ƙ����ӕ*��l�u��&t;��M���:t�0�K��*�ᆁ�j��{�Z��.0��XpXήl�{�{ߺ]`�CՖDzl�o�uh�����R,�1.d����.U����;���c8x�V,�����Ɛ���bt�|ĕ��h\�Y�� ~���[�c�~�4�UdX���T�6D��gw������Uh���	O':�,eI.rT]�:��n.��/�=���JaL�l�=�[���ڿ�=t>t�S��Ѐ0����<5nL���dF��h���v}�R���Xl��~k)�O���m�2�w�.ļH�h��U���P��76��>��J�
��L�.K�ɰ$��y�&\���.��>_��nm?����0磍�_�	�qA	_'�GĶ�8��<<�UJ�Kb'ݣ�gh��v\AL��hsAS!$v�Ԧ�U9R��ۓ��6;g�'�U��3�����{�7��'��|�&�,v_rh.8�l��fq��$�vԞ��3�Da��vk���]E{������5�o���G��'FC�w�(�b�Ć*�N�dؽPpC����/��El��&W��8W��'ʓ�}�ٿ|!ٙ��g �Sp� �������G�ѿ��5v�2��z�un��fg[����! ���_E��o7������8?�q(�c�S�z,� <%�0Zbb+��&��{�m�hD�SfzE~g[��^\���N�>���;��F��E�6>Wd@�d�]cJ���a����p=�]c�ܥHd��40�t�/����(Γ��� >sh�� ��T�e�/ulՠ6��i��Q��.+����4I�.:6N/�6<��0��C��|2\mt�i�"��1l���/�!n���M���va��$������+��|廓��ڿ\���3�o=)2����{G����FUT�yhn���ac��f(2Pe.�,��>��      V   A   x�3�,.-H-JL����4202�54�5�P02�24�25�31��50�2�LO-J�K�Lħ*F��� fi�      X   �   x���M�0 �ur
�n[�7�+�����26A���4�pz��.�(:�B�����?i!�s(5�`oQb���/�*鶔K?d�XG3��eOZ�i����;oGz�/�&�h!  6�t =��Z�fQ�r�6��&�����A ��7��$��U�����tX7�kMLxYW�UȒ����9�/=�B�     