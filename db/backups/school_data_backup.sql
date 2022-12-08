PGDMP     2                    z            school_data    13.8    13.8 }    g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
       public         heap    postgres    false            �            1259    53007    eventuality    TABLE     %  CREATE TABLE public.eventuality (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    day date,
    created_at timestamp with time zone NOT NULL,
    staff_ci character varying(255),
    teacher_ci character varying(255)
);
    DROP TABLE public.eventuality;
       public         heap    postgres    false            �            1259    53005    eventuality_id_seq    SEQUENCE     �   CREATE SEQUENCE public.eventuality_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.eventuality_id_seq;
       public          postgres    false    224            k           0    0    eventuality_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.eventuality_id_seq OWNED BY public.eventuality.id;
          public          postgres    false    223            �            1259    52862    grade    TABLE       CREATE TABLE public.grade (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    section character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    education_level_id integer NOT NULL,
    period_id integer NOT NULL
);
    DROP TABLE public.grade;
       public         heap    postgres    false            �            1259    52860    grade_id_seq    SEQUENCE     �   CREATE SEQUENCE public.grade_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.grade_id_seq;
       public          postgres    false    206            l           0    0    grade_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.grade_id_seq OWNED BY public.grade.id;
          public          postgres    false    205            �            1259    52852    level    TABLE     �   CREATE TABLE public.level (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.level;
       public         heap    postgres    false            �            1259    52850    level_id_seq    SEQUENCE     �   CREATE SEQUENCE public.level_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.level_id_seq;
       public          postgres    false    204            m           0    0    level_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.level_id_seq OWNED BY public.level.id;
          public          postgres    false    203            �            1259    53044    logs    TABLE       CREATE TABLE public.logs (
    id integer NOT NULL,
    description character varying(255) NOT NULL,
    "table" character varying(255) NOT NULL,
    action character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.logs;
       public         heap    postgres    false            �            1259    53042    logs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.logs_id_seq;
       public          postgres    false    228            n           0    0    logs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;
          public          postgres    false    227            �            1259    53028    news    TABLE       CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    info character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.news;
       public         heap    postgres    false            �            1259    53026    news_id_seq    SEQUENCE     �   CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.news_id_seq;
       public          postgres    false    226            o           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public          postgres    false    225            �            1259    52842    period    TABLE     �   CREATE TABLE public.period (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.period;
       public         heap    postgres    false            �            1259    52840    period_id_seq    SEQUENCE     �   CREATE SEQUENCE public.period_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.period_id_seq;
       public          postgres    false    202            p           0    0    period_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.period_id_seq OWNED BY public.period.id;
          public          postgres    false    201            �            1259    52917    record    TABLE       CREATE TABLE public.record (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    day date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    student_schoolarship_ci character varying(255) NOT NULL
);
    DROP TABLE public.record;
       public         heap    postgres    false            �            1259    52915    record_id_seq    SEQUENCE     �   CREATE SEQUENCE public.record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.record_id_seq;
       public          postgres    false    212            q           0    0    record_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.record_id_seq OWNED BY public.record.id;
          public          postgres    false    211            �            1259    52883    representants    TABLE     O  CREATE TABLE public.representants (
    id integer NOT NULL,
    ci character varying(255) NOT NULL,
    rep_name character varying(255) NOT NULL,
    rep_last_name character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
 !   DROP TABLE public.representants;
       public         heap    postgres    false            �            1259    52881    representants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.representants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.representants_id_seq;
       public          postgres    false    208            r           0    0    representants_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.representants_id_seq OWNED BY public.representants.id;
          public          postgres    false    207            �            1259    52961    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    52959    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    218            s           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public          postgres    false    217            �            1259    52971    staff    TABLE       CREATE TABLE public.staff (
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
       public         heap    postgres    false            �            1259    52969    staff_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.staff_id_seq;
       public          postgres    false    220            t           0    0    staff_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.staff_id_seq OWNED BY public.staff.id;
          public          postgres    false    219            �            1259    52896    students    TABLE     <  CREATE TABLE public.students (
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
       public         heap    postgres    false            �            1259    52894    students_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.students_id_seq;
       public          postgres    false    210            u           0    0    students_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
          public          postgres    false    209            �            1259    52989    teacher    TABLE       CREATE TABLE public.teacher (
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
       public         heap    postgres    false            �            1259    52987    teacher_id_seq    SEQUENCE     �   CREATE SEQUENCE public.teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.teacher_id_seq;
       public          postgres    false    222            v           0    0    teacher_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.teacher_id_seq OWNED BY public.teacher.id;
          public          postgres    false    221            �            1259    52933    userRole    TABLE     �   CREATE TABLE public."userRole" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public."userRole";
       public         heap    postgres    false            �            1259    52931    userRole_id_seq    SEQUENCE     �   CREATE SEQUENCE public."userRole_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."userRole_id_seq";
       public          postgres    false    214            w           0    0    userRole_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."userRole_id_seq" OWNED BY public."userRole".id;
          public          postgres    false    213            �            1259    52943    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    recovery_token character varying(255),
    create_at timestamp with time zone NOT NULL,
    role_user integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    52941    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            x           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �           2604    53059    eventuality id    DEFAULT     p   ALTER TABLE ONLY public.eventuality ALTER COLUMN id SET DEFAULT nextval('public.eventuality_id_seq'::regclass);
 =   ALTER TABLE public.eventuality ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    53060    grade id    DEFAULT     d   ALTER TABLE ONLY public.grade ALTER COLUMN id SET DEFAULT nextval('public.grade_id_seq'::regclass);
 7   ALTER TABLE public.grade ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    206    206                       2604    53061    level id    DEFAULT     d   ALTER TABLE ONLY public.level ALTER COLUMN id SET DEFAULT nextval('public.level_id_seq'::regclass);
 7   ALTER TABLE public.level ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �           2604    53062    logs id    DEFAULT     b   ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);
 6   ALTER TABLE public.logs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    53063    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            ~           2604    53064 	   period id    DEFAULT     f   ALTER TABLE ONLY public.period ALTER COLUMN id SET DEFAULT nextval('public.period_id_seq'::regclass);
 8   ALTER TABLE public.period ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    202    202            �           2604    53065 	   record id    DEFAULT     f   ALTER TABLE ONLY public.record ALTER COLUMN id SET DEFAULT nextval('public.record_id_seq'::regclass);
 8   ALTER TABLE public.record ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            �           2604    53066    representants id    DEFAULT     t   ALTER TABLE ONLY public.representants ALTER COLUMN id SET DEFAULT nextval('public.representants_id_seq'::regclass);
 ?   ALTER TABLE public.representants ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207    208            �           2604    53067    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    53068    staff id    DEFAULT     d   ALTER TABLE ONLY public.staff ALTER COLUMN id SET DEFAULT nextval('public.staff_id_seq'::regclass);
 7   ALTER TABLE public.staff ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    53069    students id    DEFAULT     j   ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
 :   ALTER TABLE public.students ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �           2604    53070 
   teacher id    DEFAULT     h   ALTER TABLE ONLY public.teacher ALTER COLUMN id SET DEFAULT nextval('public.teacher_id_seq'::regclass);
 9   ALTER TABLE public.teacher ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    53071    userRole id    DEFAULT     n   ALTER TABLE ONLY public."userRole" ALTER COLUMN id SET DEFAULT nextval('public."userRole_id_seq"'::regclass);
 <   ALTER TABLE public."userRole" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            �           2604    53072    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            H          0    17296    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    200   ��       `          0    53007    eventuality 
   TABLE DATA           d   COPY public.eventuality (id, title, description, day, created_at, staff_ci, teacher_ci) FROM stdin;
    public          postgres    false    224   D�       N          0    52862    grade 
   TABLE DATA           \   COPY public.grade (id, name, section, create_at, education_level_id, period_id) FROM stdin;
    public          postgres    false    206   ��       L          0    52852    level 
   TABLE DATA           4   COPY public.level (id, name, create_at) FROM stdin;
    public          postgres    false    204   m�       d          0    53044    logs 
   TABLE DATA           T   COPY public.logs (id, description, "table", action, create_at, user_id) FROM stdin;
    public          postgres    false    228   ��       b          0    53028    news 
   TABLE DATA           J   COPY public.news (id, title, info, image, create_at, user_id) FROM stdin;
    public          postgres    false    226   T�       J          0    52842    period 
   TABLE DATA           5   COPY public.period (id, name, create_at) FROM stdin;
    public          postgres    false    202    �       T          0    52917    record 
   TABLE DATA           b   COPY public.record (id, title, description, day, created_at, student_schoolarship_ci) FROM stdin;
    public          postgres    false    212   G�       P          0    52883    representants 
   TABLE DATA           a   COPY public.representants (id, ci, rep_name, rep_last_name, phone, email, create_at) FROM stdin;
    public          postgres    false    208   ��       Z          0    52961    role 
   TABLE DATA           3   COPY public.role (id, name, create_at) FROM stdin;
    public          postgres    false    218   ��       \          0    52971    staff 
   TABLE DATA           �   COPY public.staff (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, create_at, role_id) FROM stdin;
    public          postgres    false    220   �       R          0    52896    students 
   TABLE DATA           �   COPY public.students (id, schoolarship_ci, native_ci, name, last_name, address, birth_date, gender, admission_date, birth_place, house_property, created_at, representant_ci, grade_id) FROM stdin;
    public          postgres    false    210   ��       ^          0    52989    teacher 
   TABLE DATA           �   COPY public.teacher (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, created_at, grade_id) FROM stdin;
    public          postgres    false    222   �       V          0    52933    userRole 
   TABLE DATA           9   COPY public."userRole" (id, name, create_at) FROM stdin;
    public          postgres    false    214   ��       X          0    52943    users 
   TABLE DATA           Z   COPY public.users (id, email, password, recovery_token, create_at, role_user) FROM stdin;
    public          postgres    false    216   ��       y           0    0    eventuality_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.eventuality_id_seq', 1, true);
          public          postgres    false    223            z           0    0    grade_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.grade_id_seq', 18, true);
          public          postgres    false    205            {           0    0    level_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.level_id_seq', 2, true);
          public          postgres    false    203            |           0    0    logs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logs_id_seq', 29, true);
          public          postgres    false    227            }           0    0    news_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.news_id_seq', 49, true);
          public          postgres    false    225            ~           0    0    period_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.period_id_seq', 2, true);
          public          postgres    false    201                       0    0    record_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.record_id_seq', 1, true);
          public          postgres    false    211            �           0    0    representants_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.representants_id_seq', 30, true);
          public          postgres    false    207            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 5, true);
          public          postgres    false    217            �           0    0    staff_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.staff_id_seq', 2, true);
          public          postgres    false    219            �           0    0    students_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.students_id_seq', 8, true);
          public          postgres    false    209            �           0    0    teacher_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.teacher_id_seq', 1, true);
          public          postgres    false    221            �           0    0    userRole_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."userRole_id_seq"', 2, true);
          public          postgres    false    213            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 7, true);
          public          postgres    false    215            �           2606    17300     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    200            �           2606    53015    eventuality eventuality_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_pkey;
       public            postgres    false    224            �           2606    52870    grade grade_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_pkey;
       public            postgres    false    206            �           2606    52859    level level_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.level DROP CONSTRAINT level_name_key;
       public            postgres    false    204            �           2606    52857    level level_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.level DROP CONSTRAINT level_pkey;
       public            postgres    false    204            �           2606    53052    logs logs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_pkey;
       public            postgres    false    228            �           2606    53036    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    226            �           2606    52849    period period_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.period
    ADD CONSTRAINT period_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.period DROP CONSTRAINT period_name_key;
       public            postgres    false    202            �           2606    52847    period period_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.period
    ADD CONSTRAINT period_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.period DROP CONSTRAINT period_pkey;
       public            postgres    false    202            �           2606    52925    record record_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.record DROP CONSTRAINT record_pkey;
       public            postgres    false    212            �           2606    52893 %   representants representants_email_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.representants
    ADD CONSTRAINT representants_email_key UNIQUE (email);
 O   ALTER TABLE ONLY public.representants DROP CONSTRAINT representants_email_key;
       public            postgres    false    208            �           2606    52891     representants representants_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.representants
    ADD CONSTRAINT representants_pkey PRIMARY KEY (ci);
 J   ALTER TABLE ONLY public.representants DROP CONSTRAINT representants_pkey;
       public            postgres    false    208            �           2606    52968    role role_name_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_name_key UNIQUE (name);
 <   ALTER TABLE ONLY public.role DROP CONSTRAINT role_name_key;
       public            postgres    false    218            �           2606    52966    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    218            �           2606    52981    staff staff_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_email_key;
       public            postgres    false    220            �           2606    52979    staff staff_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (ci);
 :   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_pkey;
       public            postgres    false    220            �           2606    52904    students students_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (schoolarship_ci);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public            postgres    false    210            �           2606    52999    teacher teacher_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_email_key;
       public            postgres    false    222            �           2606    52997    teacher teacher_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (ci);
 >   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_pkey;
       public            postgres    false    222            �           2606    52940    userRole userRole_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."userRole"
    ADD CONSTRAINT "userRole_name_key" UNIQUE (name);
 H   ALTER TABLE ONLY public."userRole" DROP CONSTRAINT "userRole_name_key";
       public            postgres    false    214            �           2606    52938    userRole userRole_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."userRole"
    ADD CONSTRAINT "userRole_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."userRole" DROP CONSTRAINT "userRole_pkey";
       public            postgres    false    214            �           2606    52953    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    52951    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    53016 %   eventuality eventuality_staff_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_staff_ci_fkey FOREIGN KEY (staff_ci) REFERENCES public.staff(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_staff_ci_fkey;
       public          postgres    false    220    2991    224            �           2606    53021 '   eventuality eventuality_teacher_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_teacher_ci_fkey FOREIGN KEY (teacher_ci) REFERENCES public.teacher(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_teacher_ci_fkey;
       public          postgres    false    2995    224    222            �           2606    52871 #   grade grade_education_level_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_education_level_id_fkey FOREIGN KEY (education_level_id) REFERENCES public.level(id);
 M   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_education_level_id_fkey;
       public          postgres    false    2965    204    206            �           2606    52876    grade grade_period_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_period_id_fkey FOREIGN KEY (period_id) REFERENCES public.period(id);
 D   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_period_id_fkey;
       public          postgres    false    202    2961    206            �           2606    53053    logs logs_user_id_fkey    FK CONSTRAINT     u   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 @   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_user_id_fkey;
       public          postgres    false    228    2983    216            �           2606    53037    news news_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 @   ALTER TABLE ONLY public.news DROP CONSTRAINT news_user_id_fkey;
       public          postgres    false    226    216    2983            �           2606    52926 *   record record_student_schoolarship_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_student_schoolarship_ci_fkey FOREIGN KEY (student_schoolarship_ci) REFERENCES public.students(schoolarship_ci) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.record DROP CONSTRAINT record_student_schoolarship_ci_fkey;
       public          postgres    false    2973    212    210            �           2606    52982    staff staff_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_role_id_fkey;
       public          postgres    false    2987    220    218            �           2606    52910    students students_grade_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(id);
 I   ALTER TABLE ONLY public.students DROP CONSTRAINT students_grade_id_fkey;
       public          postgres    false    210    206    2967            �           2606    52905 &   students students_representant_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_representant_ci_fkey FOREIGN KEY (representant_ci) REFERENCES public.representants(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 P   ALTER TABLE ONLY public.students DROP CONSTRAINT students_representant_ci_fkey;
       public          postgres    false    210    2971    208            �           2606    53000    teacher teacher_grade_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_grade_id_fkey;
       public          postgres    false    2967    222    206            �           2606    52954    users users_role_user_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_user_fkey FOREIGN KEY (role_user) REFERENCES public."userRole"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_user_fkey;
       public          postgres    false    214    2979    216            H   5   x�32022404602446����,��*�2	EMM�,us�ӋA�1z\\\ 7�      `   W   x�3�NU�HT�*M��IL�G��(�&+$'%&���s��"1���̭L��L�uL8-�L,,L9c��b���� �)      N   �   x����
�0��s�{��$M�ڛz�%�"��!>�u�� �<>~���vyW�#sKܢ4�
���s}� a�>xkaQ�,G���ө��\q��b��Ӽ��rV�,o�W�	�6�D ��SS�����IXM�7uR_�tj�J���W��3Ήe�� ��M	XB�S�4��w�=v�      L   @   x�3�(J�u-N��I,�4202�54�50Q04�20�22Գ47򹌀
3s�2����� ]1�      d   �  x���Kn�0���)x�|��Έ�@�~��n��i�R Y-�k��XI��G.PX�����C�,��ͳ?%l
�Y���u
]sw�/�&/�j�����
l�-���1�c�@B�sĉcȈ�y��3��	d������up�~�`�~�Ez3L���ɆAr���H��oC����Q�"�f���E���Z���?��[x	T��	�z��t5�-'�������c1\������1�iz��A��`�$�4�O5V �aS7��J��CQ�"@|jWg�/�l�w������#�i�q�P_�"�5$x��O��u�&d0�2��<��!�ć���͆d�,ɡ�Í�
�@%�*�òY��f�-�dK���6n:"�;v4�]����r�쪺,|��ɬ����{����_H�`Z�(�����>b㤗��smp�A��(�C&'kn���J^�1m/��H�8Z�EU>���>}��κz_�5X����t��Q�P��I��NIO���!�7�F�2�P0k������"����}��h�a84?>���5�Ͽ�f�ػ�No�Ӎ�\HA�U�7�1�B����REەR%�Y�^�*!H����My��	�X�`T�-�!V}ݽ�c�)���;�F���-      b   �   x��ͱ
�0��9y��@o��Dۼ� ..".�ik
i���ހࢋ��ÙΧ9��ǹg>3뜟G�Z�lJl�e��%�eI�Ե�����9����ԏ9b%��[&ù�--+�R�?�r����wNԀonCq�l�鏌4�lՋ� ��	]�_�      J   7   x�3�4202��`�������������������!��e�4)3��,F��� u�      T   G   x�3�LIO!N��40R�Pi) �����H���L3C+S#+#=cCS]N#c#cCcS�=... 4�      P   �   x�u��j�0�����I�m٧6��({�]�%��4)�e����Ў�����	�[+"��6���r3�2_��
�cDe�!w�?�����|�'`d�o����΄r�R1D����q�yz��q�sG*4y���0���nktH�Å�e)�%zx�v}{�C�9�����±��{���Y��DlD�UV`�l��^��pC�:-ɡq��K� 엊��
��XI�5a�6aQ}�����_֋p      Z   f   x�3�t�,JM.�/�4202�54�50Q04�20�22Գ�0�8�K�t�Qi�霟_������_�	�cJnf^fqIQbIfY>>����IE�E�Ԙ����qqq �0      \     x����n�0�3�z�� i�=��C�;�� Y��}��	d]x�?&�@�8 ·%M����~&��Av�A�:�Z��b�=�CW���Zv�C)#ښP��>�]��>�������g	���Y�3��5ZC���Q3-p��F� �G��8I�����Ƭ4�1�*��z����cM#��٧���G�Y�+q{�����eg;���1|����cc�Ɨ�L�4f��%������*��˂dס֨�����RG������#�^'��jiD-�e
sPkNo�ۿ��F]�S{��ܨ���u<���H�";����Q��u'��)f%��$�2OK�7�_����sv�X�PS�~\��+�үSQ���������      R   f  x���K��@���SXb��~U{�a���b1�Mdɉ�8�c���s�Cl�pBu<!$8Jd�/�U_��_�`5iBpYW�N���&�6�n��?�5�����/c��m��ߏ*�I\��mnn�i��͢�i6�(��/ɕd/��im��3��k�زu^ǡh��_�+���2�|���M$�t�������_ߛ�=��G^1�q�Q�ԧ��O�����(����1�U���W���sO7�5<�g�|��l9�qB�� ���`%�\"ϻ��w�.�&/ή �U�7�Ɯ#<؞KcK��=>���ݥ=xvV��Y��f)�F4PP�-���io�D*�Ԟ��d�T�C�P�-($J�El������V#��ID��4��z��H�(bj"��R��ײ�=a�U,�o����fJn�0��Ҫ�� �Bj������������^Is���.�cHJ������aI�QȖZ:�M&�{��'+��ʏ��ڢȗq6m��>ӈJJREP~7B6)&�I�S�S��!Z+���v&id��>f��6���0�����e�N�d2뉪R����`�(7��6t���J%Ar�y�ާ]Y���;��      ^   �  x����n�6��GO����(�ܫ:v��I�f�@��Ld"�B?[�6��U��/�!%e�$T����x��PP��T���Ɩ|���='O�=���)�s�0�;7���!�ɯ�m]^)
�5�*m]�.P�G��� RU,��+
��;w�R�T�ǎ|�i����@Y�c�AT��d]2��Y���v�/w���)J?�WC�O<��P��R�QS���3��o�&�oQ{Z�)@im�l���	>Qh�ܯ�����VD4�h_�"�yi�$������,�^�V��1�R��>\��qO1�/��ǡ����5�!�e�d����|��E&�
�����a�����4�]
U��mOQ����M��?]x�1߆��4..j1%,�l�ev�����eL�:�@=u�8��:<�Հǥ���Y���B�/M��L|�@��S!w�2��/�j��w��'j���.�c�33[g���=���|�.|���WFפ���K�a���|2��Y\�I�����̂,-�Y��7Op�4�9ӽk�\��f8�L��0��x��{�},�+�N�fܽX
nr]���w.p�7�z
�J-�f0m�y����w����(��	E��;�7
s�Ot�.��W�����w�1��7���y#����<w&��DT�D�j�T��nhl����8?y(��?R�f.�1C	�Kk'�en���rY��Hy�O��QK����5�����I�糓~���F V�R1+qe��6�qw�������q�8^G�Ғ����6���d�G�8�G�:y?>N�+����C���j����-kpcΎ♣:�]�B�'�(ͻ��8S�mxIG�h7�Xɧ2�8-��u�Oǅ��1o�mA������r2��*�c���zV�&ѕL��,��Rh       V   @   x�3�,.-H-JL����4202�54�50Q04�20�22Գ�0�8�S�R�3����� eW�      X     x���MS�@����)<x���.�r2�H�cd��b.-�B§���Cӡ�s���<�<�B>�9��d
�4�":�[=(��]�$����t����y��1;�B��E��KtpV0��)t����1��$���'C�׳g+vc�V]�1�ίg�����t<
�$�,�j�_?\�A6�E���%��Hy�eq�B�s�e���:�O�58L�T7\=G��3��
�Ɏ��BR���ڨ6k�j�^�&@J���o� K��	gcM     