PGDMP     +                    z            school_data    13.8    13.8 !    g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            h           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            i           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            j           1262    17129    school_data    DATABASE     g   CREATE DATABASE school_data WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE school_data;
                postgres    false            H          0    17296    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    200   �       `          0    53007    eventuality 
   TABLE DATA           d   COPY public.eventuality (id, title, description, day, created_at, staff_ci, teacher_ci) FROM stdin;
    public          postgres    false    224   -       N          0    52862    grade 
   TABLE DATA           \   COPY public.grade (id, name, section, create_at, education_level_id, period_id) FROM stdin;
    public          postgres    false    206   �       L          0    52852    level 
   TABLE DATA           4   COPY public.level (id, name, create_at) FROM stdin;
    public          postgres    false    204   0       d          0    53044    logs 
   TABLE DATA           T   COPY public.logs (id, description, "table", action, create_at, user_id) FROM stdin;
    public          postgres    false    228   �       b          0    53028    news 
   TABLE DATA           J   COPY public.news (id, title, info, image, create_at, user_id) FROM stdin;
    public          postgres    false    226   �       J          0    52842    period 
   TABLE DATA           5   COPY public.period (id, name, create_at) FROM stdin;
    public          postgres    false    202          T          0    52917    record 
   TABLE DATA           b   COPY public.record (id, title, description, day, created_at, student_schoolarship_ci) FROM stdin;
    public          postgres    false    212   a       P          0    52883    representants 
   TABLE DATA           a   COPY public.representants (id, ci, rep_name, rep_last_name, phone, email, create_at) FROM stdin;
    public          postgres    false    208   ~       Z          0    52961    role 
   TABLE DATA           3   COPY public.role (id, name, create_at) FROM stdin;
    public          postgres    false    218   _       \          0    52971    staff 
   TABLE DATA           �   COPY public.staff (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, create_at, role_id) FROM stdin;
    public          postgres    false    220   �       R          0    52896    students 
   TABLE DATA           �   COPY public.students (id, schoolarship_ci, native_ci, name, last_name, address, birth_date, gender, admission_date, birth_place, house_property, created_at, representant_ci, grade_id) FROM stdin;
    public          postgres    false    210   Y!       ^          0    52989    teacher 
   TABLE DATA           �   COPY public.teacher (id, ci, name, last_name, address, phone, birth_date, gender, admission_date, birth_place, email, created_at, grade_id) FROM stdin;
    public          postgres    false    222   �#       V          0    52933    userRole 
   TABLE DATA           9   COPY public."userRole" (id, name, create_at) FROM stdin;
    public          postgres    false    214   �'       X          0    52943    users 
   TABLE DATA           Z   COPY public.users (id, email, password, recovery_token, create_at, role_user) FROM stdin;
    public          postgres    false    216   �'       y           0    0    eventuality_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.eventuality_id_seq', 1, true);
          public          postgres    false    223            z           0    0    grade_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.grade_id_seq', 16, true);
          public          postgres    false    205            {           0    0    level_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.level_id_seq', 2, true);
          public          postgres    false    203            |           0    0    logs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logs_id_seq', 1, false);
          public          postgres    false    227            }           0    0    news_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.news_id_seq', 41, true);
          public          postgres    false    225            ~           0    0    period_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.period_id_seq', 2, true);
          public          postgres    false    201                       0    0    record_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.record_id_seq', 1, false);
          public          postgres    false    211            �           0    0    representants_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.representants_id_seq', 29, true);
          public          postgres    false    207            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 5, true);
          public          postgres    false    217            �           0    0    staff_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.staff_id_seq', 1, true);
          public          postgres    false    219            �           0    0    students_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.students_id_seq', 7, true);
          public          postgres    false    209            �           0    0    teacher_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.teacher_id_seq', 1, true);
          public          postgres    false    221            �           0    0    userRole_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."userRole_id_seq"', 2, true);
          public          postgres    false    213            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    215            H   5   x�32022404602446����,��*�2	EMM�,us�ӋA�1z\\\ 7�      `   W   x�3�NU�HT�*M��IL�G��(�&+$'%&���s��"1���̭L��L�uL8-�L,,L9c��b���� �)      N   �   x���A
�@��u��@Kޛ[�S��FhA,���]eՌ������Ҽ��)'��-�jjЏ�G�S�-|�p�8���d�[΂���mZ��,�`�n�������`�[>nV��F�i@һz5��?t2�_B����kB�?l�      L   @   x�3�(J�u-N��I,�4202�54�50Q04�20�22Գ47򹌀
3s�2����� ]1�      d      x������ � �      b   m   x�31��K-W(�O)M.�LQ(NL@��Xb%)ŉ�%%�V���z���Ez����Q��^�9�zY�FFF��F��
��V�VƆz���&��\1z\\\ ���      J   7   x�3�4202��`�������������������!��e�4)3��,F��� u�      T      x������ � �      P   �   x�u��j�0����I�٧6��{�]�Ŕ�4�e���뭅�����,x/"�^�˴�s7��_�[5aQF4s��;�Ϲ��tF��uCm�X][G(C(f
����Wx��%w�A�Ǿ������F���S�ҡ�Ҳ� /�\�0�S��BBj1��S����pE���������=1��7o��i���蔯�k��]�Z�      Z   f   x�3�t�,JM.�/�4202�54�50Q04�20�22Գ�0�8�K�t�Qi�霟_������_�	�cJnf^fqIQbIfY>>����IE�E�Ԙ����qqq �0      \   t  x����n�0�ϫ��H�]��ɩi�(�$衧^��Ȕ�$O���N����� g>ΐ`����;	��Ŀ��l�hɎC�9���8���7?�RF�5r�_��9�%�~�!�ľ<�b�˳d��k���+tW�"��b ���%J��b�"��/a�id1�b6Y�в�;�qE�jR�6���/��G��U2��_Fƕ��U�I>
\�I���7s������=)鄥�ǚ���}F5Ky&n/j+�˵�l�p�^��R4�>6�6l}�˔Kc6~_�S�a/)�r����:��w�
�O��_��'�t2���V��u�W�)�AYsz����ڨ�zbjϩ�U�O��o��2$W�n��z����      R   8  x����n�P��㧰�sg��?�RZ*!(]W�ܐ2r���t�3��[� <��	�ٲcK��͜3A0�4�8O�U/�U��ٻ��������f��C��y^^�M��}�������:���V�U��F�]M�&S9yd�Vkf�d,�a o��Nơh��!�F[�$X��p��L> s���o��o?��ڤ�T~?p�Sy;8�B�>����9�YxE�
�k'G��-���ko�5<I��� ��Y�C���ȗg�X0��Q�N�5ix�	^�8��=;��8,�-5���fSU��oy_q���` f�Q{֦7����O�~@jD;��+ϴ�ۗ��yk$@���m�R���	��q$�!.��H{����
LL�>�!�p���aL��;�&&�����4�V��0��C6C�%£qܡRZb���;�I�7��lá�p�]�7�} �����DJM��E��G`�� �#�T�i���v
I�	�M��Vv�d<2�֕��� 2w���h3�ürS�3j��\��I�]�mb����~�.��(~��r�      ^   �  x����n�6�������P�D�U���E���Y����2�p��-eMީ}�}�RR�?Y@���3ϙ��*�\(�Vm��n�vg}ǮM]�4����Th�%ɢ̕暑Vłh�K��6�um�b�i!8�2����]cw3-T� ��cc\���f�1��2����	���oF�`$�B�E���k�Z���cwp��(�5���.][���yo��+#�V����YB�\?���-αT?T��*Ԁ{J��v���؝���	��u�UW�����t$2��<��\-�8�S�/��A{Z��J�um4=��`|�^�Z׵��|y@��A��8���S��Ǩ=N&��6h�n���,�h�A�m�[2��~��m�L�m��|�ENاU9�%'��7ƛ�<�6��M�1�I��3.s
�a���&\���ֿ�>]��lM?�X�!a�G5���q��x=F�4�8zc^���r�%�I�rvYo���	'�&a*�D'H��Q�#�I�}P>�zgM�d�<�2Q�uZ��u8ܰW\]O|��Η�D��E�E�(����]C'|uToF�yx*�LdtZ�[�V��ʛC�O�#ӭ���6�v}�AFF N�:4��x��%6���tu�밚�z���G�5�����
����	V�_�ٙ��'D�)�(�b�����]?9���j^�c��Gۻ�m�0#��4���DR��_	L����վ���"�=��[�%V��"����URdZI$������n�G#��2�S�w�6���(����ǳ����f���b�g⊄�m2⮑\��=L�8�,����f�]�HV*��<�|�h�~�ɻ�q�94�%����	jX�8�e�h��i���"杗��+� �]tl�Z�mx��0�6C��|2!��p��>����o��/��o���u��Ŵ�d��R��(�4�/��|��^c��޿��c�|�஧,F��]����q�p��4�Xd%6O���|@3l��]Ef~^&I�o;�K      V   @   x�3�,.-H-JL����4202�54�50Q04�20�22Գ�0�8�S�R�3����� eW�      X   �   x���9�@ �z�� �E�PTj@����d'���[X����ez���"Ls.�
�@��qk_��얎�iǨ�-��j�4��^�[��$n����(�Z�,�:
l< K��	�U^T�p�B�F*�4��o3X��4��a����y;����׫��dF���m�w����f�\6>��1� {�@     