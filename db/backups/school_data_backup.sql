PGDMP     !                    z            school_data    13.8    13.8 ~    i           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            j           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            k           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            l           1262    17129    school_data    DATABASE     g   CREATE DATABASE school_data WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE school_data;
                postgres    false            �            1259    54637    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    56575    eventuality    TABLE     %  CREATE TABLE public.eventuality (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    day date,
    created_at timestamp with time zone NOT NULL,
    staff_ci character varying(255),
    teacher_ci character varying(255)
);
    DROP TABLE public.eventuality;
       public         heap    postgres    false            �            1259    56573    eventuality_id_seq    SEQUENCE     �   CREATE SEQUENCE public.eventuality_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.eventuality_id_seq;
       public          postgres    false    224            m           0    0    eventuality_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.eventuality_id_seq OWNED BY public.eventuality.id;
          public          postgres    false    223            �            1259    56428    grade    TABLE       CREATE TABLE public.grade (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    section character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    education_level_id integer NOT NULL,
    period_id integer NOT NULL
);
    DROP TABLE public.grade;
       public         heap    postgres    false            �            1259    56426    grade_id_seq    SEQUENCE     �   CREATE SEQUENCE public.grade_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.grade_id_seq;
       public          postgres    false    206            n           0    0    grade_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.grade_id_seq OWNED BY public.grade.id;
          public          postgres    false    205            �            1259    56418    level    TABLE     �   CREATE TABLE public.level (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.level;
       public         heap    postgres    false            �            1259    56416    level_id_seq    SEQUENCE     �   CREATE SEQUENCE public.level_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.level_id_seq;
       public          postgres    false    204            o           0    0    level_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.level_id_seq OWNED BY public.level.id;
          public          postgres    false    203            �            1259    56612    logs    TABLE       CREATE TABLE public.logs (
    id integer NOT NULL,
    description character varying(255) NOT NULL,
    "table" character varying(255) NOT NULL,
    action character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.logs;
       public         heap    postgres    false            �            1259    56610    logs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.logs_id_seq;
       public          postgres    false    228            p           0    0    logs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;
          public          postgres    false    227            �            1259    56596    news    TABLE       CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    info character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.news;
       public         heap    postgres    false            �            1259    56594    news_id_seq    SEQUENCE     �   CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.news_id_seq;
       public          postgres    false    226            q           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public          postgres    false    225            �            1259    56408    period    TABLE     �   CREATE TABLE public.period (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.period;
       public         heap    postgres    false            �            1259    56406    period_id_seq    SEQUENCE     �   CREATE SEQUENCE public.period_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.period_id_seq;
       public          postgres    false    202            r           0    0    period_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.period_id_seq OWNED BY public.period.id;
          public          postgres    false    201            �            1259    56483    record    TABLE       CREATE TABLE public.record (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    day date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    student_schoolarship_ci character varying(255) NOT NULL
);
    DROP TABLE public.record;
       public         heap    postgres    false            �            1259    56481    record_id_seq    SEQUENCE     �   CREATE SEQUENCE public.record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.record_id_seq;
       public          postgres    false    212            s           0    0    record_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.record_id_seq OWNED BY public.record.id;
          public          postgres    false    211            �            1259    56449    representants    TABLE     =  CREATE TABLE public.representants (
    id integer NOT NULL,
    ci character varying(255) NOT NULL,
    rep_name character varying(255) NOT NULL,
    rep_last_name character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    email character varying(255),
    create_at timestamp with time zone
);
 !   DROP TABLE public.representants;
       public         heap    postgres    false            �            1259    56447    representants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.representants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.representants_id_seq;
       public          postgres    false    208            t           0    0    representants_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.representants_id_seq OWNED BY public.representants.id;
          public          postgres    false    207            �            1259    56527    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    56525    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    218            u           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public          postgres    false    217            �            1259    56537    staff    TABLE       CREATE TABLE public.staff (
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
       public         heap    postgres    false            �            1259    56535    staff_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.staff_id_seq;
       public          postgres    false    220            v           0    0    staff_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.staff_id_seq OWNED BY public.staff.id;
          public          postgres    false    219            �            1259    56460    students    TABLE     <  CREATE TABLE public.students (
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
       public         heap    postgres    false            �            1259    56458    students_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.students_id_seq;
       public          postgres    false    210            w           0    0    students_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
          public          postgres    false    209            �            1259    56555    teacher    TABLE       CREATE TABLE public.teacher (
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
       public         heap    postgres    false            �            1259    56553    teacher_id_seq    SEQUENCE     �   CREATE SEQUENCE public.teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.teacher_id_seq;
       public          postgres    false    222            x           0    0    teacher_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.teacher_id_seq OWNED BY public.teacher.id;
          public          postgres    false    221            �            1259    56499    userRole    TABLE     �   CREATE TABLE public."userRole" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    create_at timestamp with time zone NOT NULL
);
    DROP TABLE public."userRole";
       public         heap    postgres    false            �            1259    56497    userRole_id_seq    SEQUENCE     �   CREATE SEQUENCE public."userRole_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."userRole_id_seq";
       public          postgres    false    214            y           0    0    userRole_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."userRole_id_seq" OWNED BY public."userRole".id;
          public          postgres    false    213            �            1259    56509    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    recovery_token character varying(255),
    create_at timestamp with time zone NOT NULL,
    role_user integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    56507    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            z           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �           2604    56578    eventuality id    DEFAULT     p   ALTER TABLE ONLY public.eventuality ALTER COLUMN id SET DEFAULT nextval('public.eventuality_id_seq'::regclass);
 =   ALTER TABLE public.eventuality ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    56431    grade id    DEFAULT     d   ALTER TABLE ONLY public.grade ALTER COLUMN id SET DEFAULT nextval('public.grade_id_seq'::regclass);
 7   ALTER TABLE public.grade ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205    206                       2604    56421    level id    DEFAULT     d   ALTER TABLE ONLY public.level ALTER COLUMN id SET DEFAULT nextval('public.level_id_seq'::regclass);
 7   ALTER TABLE public.level ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �           2604    56615    logs id    DEFAULT     b   ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);
 6   ALTER TABLE public.logs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    56599    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            ~           2604    56411 	   period id    DEFAULT     f   ALTER TABLE ONLY public.period ALTER COLUMN id SET DEFAULT nextval('public.period_id_seq'::regclass);
 8   ALTER TABLE public.period ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    202    202            �           2604    56486 	   record id    DEFAULT     f   ALTER TABLE ONLY public.record ALTER COLUMN id SET DEFAULT nextval('public.record_id_seq'::regclass);
 8   ALTER TABLE public.record ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �           2604    56452    representants id    DEFAULT     t   ALTER TABLE ONLY public.representants ALTER COLUMN id SET DEFAULT nextval('public.representants_id_seq'::regclass);
 ?   ALTER TABLE public.representants ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    208    208            �           2604    56530    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    56540    staff id    DEFAULT     d   ALTER TABLE ONLY public.staff ALTER COLUMN id SET DEFAULT nextval('public.staff_id_seq'::regclass);
 7   ALTER TABLE public.staff ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    56463    students id    DEFAULT     j   ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
 :   ALTER TABLE public.students ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �           2604    56558 
   teacher id    DEFAULT     h   ALTER TABLE ONLY public.teacher ALTER COLUMN id SET DEFAULT nextval('public.teacher_id_seq'::regclass);
 9   ALTER TABLE public.teacher ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    56502    userRole id    DEFAULT     n   ALTER TABLE ONLY public."userRole" ALTER COLUMN id SET DEFAULT nextval('public."userRole_id_seq"'::regclass);
 <   ALTER TABLE public."userRole" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �           2604    56512    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            J          0    54637    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    200   9�       b          0    56575    eventuality 
   TABLE DATA           d   COPY public.eventuality (id, title, description, day, created_at, staff_ci, teacher_ci) FROM stdin;
    public          postgres    false    224   ~�       P          0    56428    grade 
   TABLE DATA           \   COPY public.grade (id, name, section, create_at, education_level_id, period_id) FROM stdin;
    public          postgres    false    206   ��       N          0    56418    level 
   TABLE DATA           4   COPY public.level (id, name, create_at) FROM stdin;
    public          postgres    false    204   <�       f          0    56612    logs 
   TABLE DATA           T   COPY public.logs (id, description, "table", action, create_at, user_id) FROM stdin;
    public          postgres    false    228   ��       d          0    56596    news 
   TABLE DATA           J   COPY public.news (id, title, info, image, create_at, user_id) FROM stdin;
    public          postgres    false    226   ��       L          0    56408    period 
   TABLE DATA           5   COPY public.period (id, name, create_at) FROM stdin;
    public          postgres    false    202   ĕ       V          0    56483    record 
   TABLE DATA           b   COPY public.record (id, title, description, day, created_at, student_schoolarship_ci) FROM stdin;
    public          postgres    false    212   
�       R          0    56449    representants 
   TABLE DATA           a   COPY public.representants (id, ci, rep_name, rep_last_name, phone, email, create_at) FROM stdin;
    public          postgres    false    208   '�       \          0    56527    role 
   TABLE DATA           3   COPY public.role (id, name, create_at) FROM stdin;
    public          postgres    false    218   ��       ^          0    56537    staff 
   TABLE DATA           �   COPY public.staff (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, create_at, role_id) FROM stdin;
    public          postgres    false    220   I�       T          0    56460    students 
   TABLE DATA           �   COPY public.students (id, schoolarship_ci, native_ci, name, last_name, address, birth_date, gender, admission_date, birth_place, house_property, created_at, representant_ci, grade_id) FROM stdin;
    public          postgres    false    210   ��       `          0    56555    teacher 
   TABLE DATA           �   COPY public.teacher (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, created_at, grade_id) FROM stdin;
    public          postgres    false    222   �      X          0    56499    userRole 
   TABLE DATA           9   COPY public."userRole" (id, name, create_at) FROM stdin;
    public          postgres    false    214   �      Z          0    56509    users 
   TABLE DATA           Z   COPY public.users (id, email, password, recovery_token, create_at, role_user) FROM stdin;
    public          postgres    false    216   �      {           0    0    eventuality_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.eventuality_id_seq', 1, false);
          public          postgres    false    223            |           0    0    grade_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.grade_id_seq', 16, true);
          public          postgres    false    205            }           0    0    level_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.level_id_seq', 2, true);
          public          postgres    false    203            ~           0    0    logs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logs_id_seq', 1, false);
          public          postgres    false    227                       0    0    news_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.news_id_seq', 1, false);
          public          postgres    false    225            �           0    0    period_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.period_id_seq', 2, true);
          public          postgres    false    201            �           0    0    record_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.record_id_seq', 1, false);
          public          postgres    false    211            �           0    0    representants_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.representants_id_seq', 386, true);
          public          postgres    false    207            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 5, true);
          public          postgres    false    217            �           0    0    staff_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.staff_id_seq', 5, true);
          public          postgres    false    219            �           0    0    students_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.students_id_seq', 525, true);
          public          postgres    false    209            �           0    0    teacher_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.teacher_id_seq', 16, true);
          public          postgres    false    221            �           0    0    userRole_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."userRole_id_seq"', 2, true);
          public          postgres    false    213            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    215            �           2606    54755     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    200            �           2606    56583    eventuality eventuality_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_pkey;
       public            postgres    false    224            �           2606    56436    grade grade_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_pkey;
       public            postgres    false    206            �           2606    56425    level level_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.level DROP CONSTRAINT level_name_key;
       public            postgres    false    204            �           2606    56423    level level_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.level DROP CONSTRAINT level_pkey;
       public            postgres    false    204            �           2606    56620    logs logs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_pkey;
       public            postgres    false    228            �           2606    56604    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    226            �           2606    56415    period period_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.period
    ADD CONSTRAINT period_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.period DROP CONSTRAINT period_name_key;
       public            postgres    false    202            �           2606    56413    period period_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.period
    ADD CONSTRAINT period_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.period DROP CONSTRAINT period_pkey;
       public            postgres    false    202            �           2606    56491    record record_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.record DROP CONSTRAINT record_pkey;
       public            postgres    false    212            �           2606    56457     representants representants_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.representants
    ADD CONSTRAINT representants_pkey PRIMARY KEY (ci);
 J   ALTER TABLE ONLY public.representants DROP CONSTRAINT representants_pkey;
       public            postgres    false    208            �           2606    56534    role role_name_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_name_key UNIQUE (name);
 <   ALTER TABLE ONLY public.role DROP CONSTRAINT role_name_key;
       public            postgres    false    218            �           2606    56532    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    218            �           2606    56547    staff staff_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_email_key;
       public            postgres    false    220            �           2606    56545    staff staff_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (ci);
 :   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_pkey;
       public            postgres    false    220            �           2606    56470    students students_native_ci_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_native_ci_key UNIQUE (native_ci);
 I   ALTER TABLE ONLY public.students DROP CONSTRAINT students_native_ci_key;
       public            postgres    false    210            �           2606    56468    students students_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (schoolarship_ci);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public            postgres    false    210            �           2606    56565    teacher teacher_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_email_key;
       public            postgres    false    222            �           2606    56567    teacher teacher_grade_id_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_grade_id_key UNIQUE (grade_id);
 F   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_grade_id_key;
       public            postgres    false    222            �           2606    56563    teacher teacher_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (ci);
 >   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_pkey;
       public            postgres    false    222            �           2606    56506    userRole userRole_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."userRole"
    ADD CONSTRAINT "userRole_name_key" UNIQUE (name);
 H   ALTER TABLE ONLY public."userRole" DROP CONSTRAINT "userRole_name_key";
       public            postgres    false    214            �           2606    56504    userRole userRole_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."userRole"
    ADD CONSTRAINT "userRole_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."userRole" DROP CONSTRAINT "userRole_pkey";
       public            postgres    false    214            �           2606    56519    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    56517    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    56584 %   eventuality eventuality_staff_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_staff_ci_fkey FOREIGN KEY (staff_ci) REFERENCES public.staff(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_staff_ci_fkey;
       public          postgres    false    220    224    2991            �           2606    56589 '   eventuality eventuality_teacher_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.eventuality
    ADD CONSTRAINT eventuality_teacher_ci_fkey FOREIGN KEY (teacher_ci) REFERENCES public.teacher(ci) ON UPDATE CASCADE ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public.eventuality DROP CONSTRAINT eventuality_teacher_ci_fkey;
       public          postgres    false    224    222    2997            �           2606    56437 #   grade grade_education_level_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_education_level_id_fkey FOREIGN KEY (education_level_id) REFERENCES public.level(id);
 M   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_education_level_id_fkey;
       public          postgres    false    2965    206    204            �           2606    56442    grade grade_period_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_period_id_fkey FOREIGN KEY (period_id) REFERENCES public.period(id);
 D   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_period_id_fkey;
       public          postgres    false    202    206    2961            �           2606    56621    logs logs_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 @   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_user_id_fkey;
       public          postgres    false    228    216    2983            �           2606    56605    news news_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 @   ALTER TABLE ONLY public.news DROP CONSTRAINT news_user_id_fkey;
       public          postgres    false    226    2983    216            �           2606    56492 *   record record_student_schoolarship_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_student_schoolarship_ci_fkey FOREIGN KEY (student_schoolarship_ci) REFERENCES public.students(schoolarship_ci) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.record DROP CONSTRAINT record_student_schoolarship_ci_fkey;
       public          postgres    false    212    2973    210            �           2606    56548    staff staff_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_role_id_fkey;
       public          postgres    false    218    220    2987            �           2606    56476    students students_grade_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(id);
 I   ALTER TABLE ONLY public.students DROP CONSTRAINT students_grade_id_fkey;
       public          postgres    false    2967    210    206            �           2606    56471 &   students students_representant_ci_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_representant_ci_fkey FOREIGN KEY (representant_ci) REFERENCES public.representants(ci) ON UPDATE CASCADE;
 P   ALTER TABLE ONLY public.students DROP CONSTRAINT students_representant_ci_fkey;
       public          postgres    false    2969    210    208            �           2606    56568    teacher teacher_grade_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_grade_id_fkey;
       public          postgres    false    2967    206    222            �           2606    56520    users users_role_user_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_user_fkey FOREIGN KEY (role_user) REFERENCES public."userRole"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_user_fkey;
       public          postgres    false    216    2979    214            J   5   x�32022404602446����,��*�2	EMM�,us�ӋA�1z\\\ 7�      b      x������ � �      P   �   x���=
�@����Sxe~v�h���FPB D���G��rV���a>�LK�y��7��y��۞R��FIk�`p?�X��Z*G�ro�s��\�-�&>���=�7�rw,��L��̈��YL�ۊt�����|�Φv��	!��      N   >   x�3�(J�u-N��I,�4202�5!Cs+S+SK=#sS].#����Ģ�D|�b���� ^	�      f      x������ � �      d      x������ � �      L   6   x�3�4202��`��!)�[�Z�Z����p�$�A�L�)����� vj�      V      x������ � �      R      x��}�v�H��u�S� �^RH
Iw%�S�j�d�z-/�X6 `w�w�.��{�~��;"�!���5�=�V E�����'�~�D�����������D�8��Q��?��zQ��ױ��P>4�żY��&��%aꥩ������4��	V�Jz��e"�U]n�E��[��z�>�O�K��E6�D��n�ȋ#�Ģ���r'�;6~qI1ˇÙ������a�A��P���O�ޔw~�z�=4��%"�|��+c�φE>��8�)��2i'ؖ��}]�^�m�x�:%�0�={|��S>W�Mv�y�ϐ�LC�y��z]m�g���X�R�A�1�^8�o�~�Rx���ϟMprR%G�ϊ�|<�������H��*�S������Z���C���|���I�F�G��x�X�I$/�z]n�B���	?���S��)��`&���l����e"^�U��ˋU���1u��^`��t0����:_���Ǿ��P?6+��ڝ�/��}�5|1(&���g�̱�z�4��q�vզ.���v[���2���W?J�׼�}z�s>fþ6���x��~l�͓L��y�P`�IlN�W��q���ЋB�3嶜�v��}6�d�)�$���2q;��lpi77Nl�����ŪU�,��2� j_`�-�$	B|@�*��f�)�4q_#�! �z��o���F��#�W��r�?<���9K�\�X� ����+	�,7Άo��L�D�j�h�J��Y#��w�e��)�E>0f
�V1����c�Vͳ{��f��a��݈��K6���#T�4�զ��;��~y����H�h�(/���s6����i-=
/���/����|k�81�����1P|Y��0�a����$�|b&��qq�������|�.��d�Z4�ȱX�i��M�Fȟ0�&vT��/�u�����y�Gq��(��a>��7�/ŕ6�0@إ	��w�s�`�r]T"^�!�y�!T���5�-�����;XeQnW�������a��- �n~�N�)Ol�-���9�<$�$S��x4����Yƣ+ϹL�]�T�U��yDM샗�R�����c�9�|4�����:ۦ��96�:c�cSG
:K��j	��4�vSnx��E|�R"W��&Y��j�h3'	���6�ey_{���2�偗D>Ά{k��,n���$����X�J��뜛����RO���u��������D���r��h��e��7�1����o~J���p��|zL�����NV�3g�'ܛ�'zߧ��@R���q�<��YV8���.�O�ۈ��� �}gC	N6_O���-L^DY�ᬂ���(�A�g�3���|<j��I�:��]��f `J�� f:\3bGg�p�P��_����w�Y ���Q���l4�Gm�9M�f�̛͞���!"&��?�(0������8f�{��r�j t�C�q�@Ԕ2���^
��޳�bQ>W���	�㈫A��D��ٙ��n���;O��i��; #|�9�lТ\��t���ʱ��<I?T5D��M��y��pT�,�t�P]~��5&�W��lr������Q�/���01&Bs�$~�9��7���y����������(��0�����β�uXU�Q�] ���7F��ft�g�O��z'�%L�vak~�e��k6�NrW����-k�ɢ.������}����:n�'@>}@�g8�N�]��#���U�9$<�Akw?�<ñ	,��2�^5W���F��LX�;��G�J�	Ou6��x}�9���^�j�CuX��[�/'�FL�)m*�����Q\\O[
��I 䶪��a�5h˝��ӣa^	&0X���W:��><$'b;P1���J���"��>�aO��Ey�������7���&+W��&<	iD\�Ձ	�Y��(J�"����Z����$#����&��f�[Kم'��A6/n����c�}��S���U>�@�%
�����;�LPܧ��C@ruҘ�|֊퀱i.�6�B�����Iz�$��L�������6wDx��צ�)W�U9/�����1R b�&�-��k$�����f
[�W+�B�n���S p	8�~ޏR��гՔ�f[�	;HEH�	}+1g�͜L3����P����c����</�T����|4�Y��� �gU>V?��;u�\yQ�)���m��� ���&�������w����R�p�P�J���b`��Û�����m�lV�i��
N��#I�H��vڣ��i9B�����ͦ6Iq[����L�Q� �7CFс�_d��.�ȸ1щư��z��r�)�	�����~�!��[1nY��F0{@��r��@���zcڐ�)\��t�8%�7�kK���u6&A
$_�s�8z�4��Ֆ���s893�����*s��` D��r]������Ȱ���f�A�g!��f�%����`ǘ �*A�4x彤D��T�?9԰��;`�CgL�������v26��O�Q�����d���ȓ��С����_�k�Lۃ�;�6f�������B���y&I�t��[O����Jxں<�H0�!��� ؄t��t�T�ͶIbw2�(Hd��	V��
U� ��bC�� D��H�  %�|0��������:I��`��fS˝߉$	�)�l��J��b�����a *�6�¸���~I�����o� ��X�C�R~|)7��Y|�|o];�:������ëA6���qqk-MƩ%���[��o	J�<,U*���6<�4�H�fQ-ȓ�ݾȿS�It�`A.g�>�l���r���Լ:O&�(!c����b�5�� _�������vΆ�P�O�4ss�� �(]"��п�Ֆ�hة��Pv���r�%������t�s��|,�'����(�t9`4Сtt;�+ e#4!�T?�-��N'����������~�J*ú^�$Q@�;&�F�츓�RF�0�c�{\]�ga���_��}��/ih�_��z훸a21�%�K�)侙zI�� �R��L�ˆm0�&�����S���f�:��7]�cA�<"��h�li�~z�%:_믈=pi�����G �ϲñ�����m�X�u�41� �A���A��P�ȟd�t�#e�G.��&�a=�0]�Y�����LG{�m���/�y٣e)x�j����?��a�l �"�e]al���4.�� �����}P	���˦n��k	��]|>�7"Ͳ!I�y�1�F?��<�AݞEh�1� No��N�'��ey���>��%Bװ`�<�Q��0��"��*w�� ���`R@Ґy��,{w�6)]W��ޕ+������|��������w��tM�PJfL�E֪�$�ځ����$Ħ|��5r���-N�x}��8VQ��0�K@�+�D��!���v�%p{��KB
��# �Q>��f2��H��sY��q�.��*W�֗ڊ��}�`s⾪�,wҺ��'���f=�K��n�6�j(����(܅(�n�4�H_����"�Rp��N��r[պ$ GՆ�.j�x��!��R\�_�e#�a�Ar����M�'	>��A�7j�x܊̃4��H�ߢ�P( �L��z4���6%�y��_�}v���I�K^���F� k8�_W���@�o��T��"ء���T��6Ձܳ\��V��t��V`�����W�G���C�ϨS��4�|��ýڊ2��~j�!��Z@���
P����X"@��ͦ�fcS��@,)V��+��U$)	�ސ�!��{"�o�*q,�>{��������y��	�����P�Zn������Ō>[H���۶oK�4�$a����ޭ��D�!��~���~i�VX�a�O+ֳ����:(n��%CŖ�)��Yk��m���D�$�A�'Nzg:LH	Q���גx��    �]�['����0�}+n��`���fV�U�����ܘ�^`?�6D ҝA��N��Mx|6��fC�'�� �E @���V�Xp L����t��������M}RsD��ٕ�f��]�eC	��0�<�o��4[#��ďrQ��rY�+lI!(�.�P=�-�٤��)p�\�3<�+�*�}�0�~~��lx{48|�H4�i�5`�H���W](�Oٗ���B��`�Ng*
�k{B�u(��D_F����J3ҶmІ�78���6 "���JhW�i`{�Q��mL�dI��z�7�.�`c�}f�	�#[�j�y�\�]�T�����*�Jp��6䑯Ζ`W����O�{�c�X>��Eئ�n�vH#`q�X `�R��:*��$��C�<��H�3&�`�� ]�ƫ�ۯ��cg^1�}�t9�f4~�Q��v�K��FE��CEH����Hj��Fi ,�2X��CC[)���/���]�%(���:���6"5DE*H��a��,v���O)8��
��˾F�1�Yw6��$(>׏�SA�I*t��h����1�f�6%z����6M��a�-�𠕻DB"D7�am��E.�r*������4�8�Y��K:�A�)�[�ӛ�����	,|�Qۋ�6�Qw5v�x6����rP"ɬ��u!�[��#�E�U���dr��i�eĲ\ԫ��a��S�A(j@������їc�l,^;���0U`:0D�)%��-��bW�^���}��r�Ж�Nwt��9mN���Mo4����R��o����q�Aڼo6�;��.xg�<,�=�?f�y�=�29{q�
@�WE`�]&6ş;��f�KjI���Z��a�>��0�|V|nW@W.��LYߗ�m�X�.��x��B���"p����Xڲ�F�{e�C1`�p�Ձy-�F�4Ů���� �HФm=ge������t�#�&D��]���[5����A��1\�(�nlTR7�B�y��<��iV����� ��'�a�@�*�U�$1�M
m�wM<U5q�V�,�ݥBS���o��0����P��<���@ϲ���lTdJm�:0�0?��l3�/��ݪ:��>�kg	�S�u��s�'WL�5��)����ĺrH8!�ɷB�҉N��S,�r�|\�"�5/۽���٥"M �3�y����S"ɱ�Qӱ�<ĩN�{䡏9�;18�]�f��9�O4N� �!{��l1[WO|��3�i-��%�ȹT�P�D��7ĩ+��	�,U�����z�6u�bi*���b���(�2�����n������lQQ��`cV���v����4XoV�܃���]����2N��읮�$�R6�U�������i_踎n�b%�n�=:�+�S��eSm��*�y���� ��v�K�+�|�����n���Z r�Ox"�!TZP�^a���k�ռZU����- �'R$�H�'���8Lw��?B�I	�m�tO,�RqЕD��t'�V���$�O ��(�$/\�c+��=��o+u��L�)$�%\!�.J��S�����S#g�a�C�|�;G��"f4��S�d�x_�U��	��,��Yau�ǆ��q�g������̥�8M�N<�<�Vi�_�xhݭp��^����j�X�%�_@�`.��z�f`�Lw�4�ܢ�4��R�v�Y��uS3��;X��-+��:̴���'x`���TԦ]��^G��wQ`!,���9��G�l�8QW*���ETF2&b<jۭ���,�߽�w�C�X�.������.s�ɇ�[�J��ɺ���c�-B�s��m���@>9-n�ٵiĠl��*�>�=���U)�[� n)	I܂�rS���FZi�-����p ��u�;C��^�]*0�5_�9�n��tG�#0���)��öL:,T��*b��N���o���JǾ�r���[�?��Dhb�i=��<�ߞu7Ք�ܷP�I�SLŵ꽛=�$Dh��J�+w��e[z��O[.,۲<U�ŷ#�AJ"�=��� ��+vE=7`���H�?R]!h�˾�!��	�����{�Sb��A�Ƨ�]��o�U��}k�Wo��\�}�8$���
�-{��DU�i�u��qv��j����!�e�lrQ�K@N� pW�zԆ�]K��E~k�u�$� ��:�W�D!=r� �K�>�Ў,�]<ֻ9=�AP���.�&CJ�%���1�u�JV��Uw�"��-�d�I�DzC�e �_��c��L=�N6�\�;OS�r���_�Z?��:"HpX��X&���� g>4��b�Q-I�� �	gZܩ%)c]Z\�6���Cq?�f�@c��_(������2r�e���ٗ��v[wv��0�4�  ��a6����a=4�9�cbwݤ�������X�a@W�����RQ�B�K֡�za���F8���(�tm���~��!���������۲�����d[,@e-A����$�pR�!�E�2�E����e�ȳw絶�k�-1:�r�-w!��
 ���q> ӗ��f�3��t��PP���8��5�J+�W���1qOt-�:$��4o��@�8%���^���S��)���D9�S98̬�&L���K��!����9X�u.H������n2�[���\J�����ɩ�<����R����<�I�Oa;��|BL���\ܴEJ�[�v�
tJIR�����������ͧ�%���/,��R�`��/�����7���|zl�������Z݅����/��XBLǗ�m�B6���k�S7� ��)��D�P��zH���g�s�g�d�i�l�F?��&%��n ?͡y.A��nRa�+�T����#���r�{U.�馻#�.PI��̋:�ݔc��_/���{�g�N�P�&�3�)�����/V/y�j
X����D|����dNOa�i�?�g���$��:s��������T)�A�RIF^ڃ7]R�)�+P�m�-�kl{E�`&^�\�۩d��`����Tv�	�E����SJ�u߭e��KT���ݧ��S�I�[�'�����&N��)	D퇗��0S��!m�e�76��z�l���d�Kv��+.����ZN[�/J}w	��0��ZO�q�`�����@O�/�/�/���Eg!��8����ǚ�|Q$3�ڸ�D�������9*�G�h8Y>�>���'V	����T����5�`�*؞;
d d�Xb�f	?��,��V�X#�%þN�|�Ν���w\Wo%_�����*�&R������w��T_�Aϩ��RP]��GcE*��y�Q�wH�u�z�t��A����H�g:���`]-���j1�����Ğ�b6䳰;S�=c�$Vhh5D�ܐ�΀Ý?��/�
�f�
�C����(O�t�J�\p����fr����t$1��>+yz2��g�{Wn��cV��,�Ĝ^��xqʓ��S�:!� ^�"@���ln�		��-��l�� 6R�%1%�BW�*8��`,�[�we3'AAC����CϽw� 4�Kص�ZL&��`��K�n����c+�x��.@��Ɗ8/�G��	m�Z�Z4���#��%��2�e���9e�.�\�%%��sق�W��<�9�:�B1��S�/�U	[q�822�Vv�H�)�6i�ƚ����ńG�)Y���F-x�㉨�E^����Z��w%ZD�T��FX�ۚK|�J���mi�9�u|3�N�s������c��*��P�0�n]�3�J2�G��̦���.�6ʦ�~�%�j�Ç�z�[�`�Pϓߚ�Ͱ8����	�!D�L���.c$�1�랜�?�Ĩu��U}l	���U
�Z��Ø:+&��d��BdEX�������F9���pD8{�^k���tv$6͍0N&��������y:��1�cK�L(B�� y������uVIM�p���<�ִ��J��'w�w�=�<�=+[ĺ���`SX��ܑ; �۪�-JPfr^�� �  �d�1
g4�ݎNdg��JI��lpu�gH;�)Hݯ�H���2M��-8�~�B,����S�=��Q��`� �byK*�`�$R���z�}u�p(�9q���BL	�g�S��ۖ�
p�bU[�[�N]�CXp��5�bl���V�$�"�n_�(7�p�,d��aL����� �vݚ���2�ז�<�K*[�?,�o��|�îa=/�����m��f�Kݦ;��%|DL�J��ۊ�P�� ��,p��e��D��8?4"�\�K�g��%��n��J���N�l�zzg��7����t�/����e>���|�؋z���Z�������C�\'E���+���r�%k+�1K%d�7`t�
v���׽�G��,�����8�� nezV���X(�o��Gr���[=�E9����H_���b��U�[�g6<�6�uJ�,Q��E,�ͮ��X�(�%	 `����P���:!�eЅ�\�+h_�}/����2��%�]$��N(�����g��hz��S�*S�D��J 5+G��Id��iϋ��ܹ��&�/	D���}`��qa,���P?^*���b��w����n�D��:/�a����c`���S���������n��P�6wN5�
?����M�Gźy��aY��zj��UI��퀼:�b$/�'�|JD�O�F��T�8�C�ROcq�*�	���O��!�m��� �n|o@�/�$�B�&�*+9��[��5�ީ�1��ah*�5c����A�q��Y��9$�5���խ�-��f��g�&���y�ݑ+-6A��3lj�W��|ӺS�d/+V!���z�^~q*6-c��s����?½1��,�T�#ʙϫ}�3�k�w�:^��k�t��׺W�^N@6������M]��ސ�@����� �����GX�Ľa�],*p>R��·�%�#��G�0`K� ��=�^�B}+���U�uW"/+�� �΄G��	�՗��{�`�vV�?!�1F�~n��m%أc��$��E�{u�=U�z��j��\��>�*��t��u��t��u�9ۄ�ysh�;�,�RT�?2���{HF;/�^����tB�3�0k6��fI���NY�-D��1�@!Vdӱ�VO�������0�ɀ58�M��+��\?7;��(v�
̀~�L׽�U����'W����vV0g��@�N���]��#1�TJ�"����a�M8I�^m�Rw�ѿ�|e�4�ь���~���|��_��1/	H�+�Ƽ���qx�b�sa绨ω`"�h�o�,Ir6�ڰB�q�#�Y>� N�_\���Eb߂�@ȿ��$`7��(�pq>�u�[��?��z�+�y�?�F�s��v$'�H���	!��~�װ�f�����H��B���PR�<��=<<RD]�/�:p���z�+���Nr�&��9.��"{���v%9�*�5/������rG��� �i�^lt]���x]R�ti�*,�D�j�{a[/U��IX)�8r����(4�R����kWű�D�1L˽�Mw���ZC��1����1a�Q�SY�(��Xi`(�Gt߽a�_F9�)��s���ݦV�q����plȖ���n
���MyX��$�']-=��x������>~o�W�!�>�燮�3�|]ҲeD��h�;`��<����@�MR��W�W�q_��V���ll��0w��^:��"�+x<�V�E
�]s��֝y���M�9qK��&��ŊS^�k1p��Cm`����
��H "۔���W��v	N�!���ԟ�S�{��_p�	�ý���0#r����"K� ~�tx�X%�1����RBV8���i��ӓ��/l"��/ �o�����1-��--��++�T�aځ����x�94�7�J#F蝫�x��M���s��7�g04:5N��^�Ӌ�4��Ż5,rm����/#}�]��	�g�����03��d�����5 ���jʬ��lC�4����@�RѧU^�
�.����d���ã�m~��R�qS.�f��mB�݉�Z��T4���G�	�ʦ��f���{SnB�tC�}p#
¹�1p��Zo��箇��E�Nݡ�&��	��0�J�oj/�>��̿D���;_�!@�Hÿ���5x`�7�~��m��5�%��_�%}� �5�[-;ﱷW��j�ނ�P�D_��D�K0���,��P����Q�)`������B�#��=,�+H~_C�I�0����S#X��@А� e[<����k^���yz_"���������O�|x{�I�#�A�����%���v6]�3t��Dv9�DR*`w�P��,V4)��E��A@/Q	/1�L8F��n��M���Ո1-|�r����K^1��lc����4{��t�IR��{�띝��yᒋ�8��$pSz?e�^�"ֵ�ҙy1w�@���5�����'xf����\$6�>��o��ʾ#��R_��y�Z��~5�8tC+���B��/�}�������C�P�:VY�S^������K8�:`5tSʴ{�_��g�X�
���ٝߒ�c�I}S�a�kB:B���HK֓�ѤQ�Ɛ�2V1�|G�dU�;���+��f8�GN��	1�MU���Ǒ�1���_���!�LݛL-菩9o�॔�s�����-������"U���± ��IC����"ʫ�V��>�Η$;�m��aJ���?l c�h:·�3"������X�9�ГUWy��_BhN�D��|���
����R�;��ybnٔ�t/坁@��?O�B��~�g�\}6�&�b��kd�s���D�2W5���.��k����e��G
i���n*�c(�d�l����$�\�̋*�ڿ�˓��E�G���潁����ס�6�����v:T��y�^��^Ʋ�X'��[�b����$���6�Y����?/�����R �      \   a   x�3�t�,JM.�/�4202�5!Cs+S+SK=#].#���$]bTs:���d�%��Wh�阒���Y\R�X�Y��O�)�RQj^51z\\\ 0      ^   s  x����n�0Dϫ��PإHJ̩i�(�$衧^��Ĕ�$_���N���9����G;�8m�x��7�=�\#�%��;��5�<|�S��\� Z�F��\�Ғ��/0�̾<N�r�+�\4F�*E��+Z�F� ����5�<����g\��]�Eݲ�9Ck�����k"�=lx��_&B�G��ղ��_Ffy��x���:�\�����ت�����ޛ�@',a
��yS�>���>��.���u�Yo�.e��s�~��ت۴�u�c����}-O%�=�E��c�u�4Σ(d露�9�9O�)�2R�8����W�1MIX���Y~�����d�;�:_Tr>�:���ː\�m���'�T      T      x����r�8�&��x
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
��Z��9��0N𶹠��d)�Y��ԑ�Ȣt���4��K{�]0���\�*�ߤ��F�!�8����6��wZD��9�)B���J�9��]��O-�p�&jtS.��O����c �--�@��e���Z���I�dH�R�Ի���mQ���O��7)Ą_����e�	���"궷���%xᮠ�cvV����w8��>A%N�_������l�l��c �#"�;�T.�̾ln@ѡ��B��ğ�_��rRm��ǶU)�Mcʎ�g�LPA�p��0a��U2�̬�^]�i����N�X�W�d�%�rAԎ�W6N#XXy�|�W=A@�� �m$(�� ��TL�dm�e_�L����6rLw�5?��?~��,���      `   �  x����n�6�������PE�U���E���Y�@oh�M���-eMީ}�}�������
�3ϙ
��T)�f��{f7�۹صm���ס˅a\�TU�7�V���{׺�w�	.Ă�Bpve��{�������$��ck}��C;�3ГC����J�,�g.d����.U����;���c8x�V,�����Ɛ���bt�|ĕ��h\�Y�� ~���[�c�~�4�UdX���T�6D��gw������Uh���	O':�,eI.��P'tz��� ����Z)�)���Gy�>�X�W��·nB�1`ʗ�3〓����I{����m0����Y��6����o-e�)���mX���ޅ���3�J��ʑ��F[�g�Q��Tac�)�s�e	4��v� /؄��������ڭ�'�|����9A6.(�����v�ޘ����A�qI�{��r�N�+�	Om.h*��N�ڔ?�*G��p{R>�f�l���<�*ӣuF���x�a�����d��� ׄ��K�����\�,N���ގ���tf�(��nmW?��h�}��n]���q���p�pb4�xg��-ƎJl���tM��7���z���\��{kr���s�`ʐy�<��7��������y�;7
r�_���Ȯ�|���j^c�,��[��F�iv��ؙ8@jM�U�)��nl_���/q~��PD�>�*�X�u!@x���h�����0���n�G#R�2�)�;�����Pt��p����ad4�$�,*���"�MF�5��.8�=l�8����k씻��Ҙ���KGi�q?���}�8��(2�pg��2ē:�jPsz[8rT��ˊ+��&i�E���Eچg��h;Ԙ�'3��FW1m^��>�m��/�=��2���>�.L�� Хi���
|������Z����U~&c��]E�#���������R�`�**�<47�� fؘf���Tٟ�,˾���T      X   =   x�3�,.-H-JL����4202�5!Cs+S+SK=#].#��ԢԼ��D<�b���� Av      Z   �   x�}͹�0 �}
Vk��C�4""��KₜM��<�q61����<��h��F٬jSѐ��".
���՛$�c׋���P�T��tS9�Wv�߽�����`Q��u���w(��}��aQ��L昪�a@2��㷳A�87�[.�λ~E	d뭐'ɣ����S�/�o3���l�w��c�-�@�     