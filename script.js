
// ⚠️ AQUI VOCÊ EDITA OS PRODUTOS — troque ícone, nome, descrição, specs e indicações
const produtos = {
    'coluna': {
        label: 'Coluna', tagClass: 'tag-green', bgClass: 'bg-green',
        itens: {
            'colete-milwalkee': {
                nome: 'colete milwalkee',
                imgs: [
                    'assets/coluna/colete-milwalke.PNG',
                    'assets/coluna/colete-milwalke-2.PNG'
                ],
                desc: 'Órtese cervico-toraco-lombo-sacra (CTLSO) utilizada no tratamento conservador de deformidades da coluna como cifose e escoliose estrutural. Ocupa todo o torso, da pelve até a base do crânio.',
                specs: [['Material', 'Alumínio + EVA'], ['Tipo', 'Sob medida'], ['Região', 'Cervical/Torácica'], ['Prazo', '10 a 15 dias']],
                indicacoes: ['Escoliose idiopática juvenil', 'Cifose de Scheuermann', 'Deformidades posturais estruturadas', 'Pós-operatório de coluna cervical']
            },
            'ortese-otls': {
                nome: 'Órtese OTLS',
                imgs: [
                    'assets/coluna/colete-OTLS.PNG',
                    'assets/coluna/colete-OTLS-2.PNG'
                ],
                desc: 'Órtese toraco-lombo-sacra com estabilização rígida e compressão ajustável para controle de deformidades escolióticas e suporte em fraturas vertebrais.',
                specs: [['Material', 'Polipropileno + espuma'], ['Tipo', 'Sob medida'], ['Região', 'T6 ao sacro'], ['Prazo', '10 a 15 dias']],
                indicacoes: ['Escoliose idiopática juvenil e adulta', 'Fraturas torácicas e lombares', 'Espondilolistese', 'Controle pós-operatório de fusão lombar']
            },
            'colete-rigo-cheneau': {
                nome: 'Colete RIGO CHENEAU 3D',
                imgs: [
                    'assets/coluna/colete-rigo-cheneau-3d.PNG',

                ],
                desc: 'Colete rígido tridimensional para correção da escoliose idiopática, com tecnologia Rigo-Chêneau que distribui pressão de derotação e melhora a postura do tronco.',
                specs: [['Material', 'Polipropileno'], ['Tipo', 'Sob medida'], ['Ajuste', 'Fechos laterais'], ['Prazo', '12 a 18 dias']],
                indicacoes: ['Escoliose idiopática juvenil', 'Tratamento conservador da escoliose', 'Prevenção de progressão de curva', 'Pós-operatório de correção vertebral']
            },
            'compressor-cdt': {
                nome: 'Compressor Dinâmico de Tórax (CDT)',
                imgs: [
                    'assets/coluna/compressao-torax.PNG',
                    'assets/coluna/compressao-torax-2.PNG'
                ],
                desc: 'Sistema de compressão dinâmica torácica para suporte respiratório e estabilidade da parede torácica em deformidades e insuficiência ventilatória restritiva.',
                specs: [['Material', 'Polietileno + velcro'], ['Ajuste', 'Progressivo'], ['Uso', 'Torácico dinâmico'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Cifose torácica', 'Síndrome de Tietze', 'Insuficiência respiratória restritiva', 'Pós-cirúrgico de parede torácica']
            },
            'colete-putti (Alto)': {
                nome: 'Colete Putti (Alto)',
                imgs: ['assets/coluna/putti alto.PNG'],
                desc: 'Colete cerclado de três pontos para correção da cifose com versão alto ou baixo perfil. Oferece suporte torácico e lombar com facilidade de uso.',
                specs: [['Material', 'Plástico rígido + almofadas'], ['Configuração', 'Alto/Baixo'], ['Ajuste', 'Velcro interno'], ['Prazo', '8 a 12 dias']],
                indicacoes: ['Cifose dorsal e lombar', 'Postura cifótica', 'Dor mecânica torácica', 'Estabilização pósural conservadora']
            },
            'colete-putti (Baixo)': {
                nome: 'Colete Putti (Baixo)',
                imgs: ['assets/coluna/putti-baixo.PNG'],
                desc: 'Colete cerclado de três pontos para correção da cifose com versão alto ou baixo perfil. Oferece suporte torácico e lombar com facilidade de uso.',
                specs: [['Material', 'Plástico rígido + almofadas'], ['Configuração', 'Alto/Baixo'], ['Ajuste', 'Velcro interno'], ['Prazo', '8 a 12 dias']],
                indicacoes: ['Cifose dorsal e lombar', 'Postura cifótica', 'Dor mecânica torácica', 'Estabilização pósural conservadora']
            },
            'colete-hipercifose': {
                nome: 'colete hipercifose',
                imgs: [
                    'assets/coluna/colete-hipercifose.PNG',
                    'assets/coluna/colete-hipercifose-2.PNG'
                ],
                desc: 'Colete cerclado de três pontos para correção da cifose com versão alto ou baixo perfil. Oferece suporte torácico e lombar com facilidade de uso.',
                specs: [['Material', 'Plástico rígido + almofadas'], ['Configuração', 'Alto/Baixo'], ['Ajuste', 'Velcro interno'], ['Prazo', '8 a 12 dias']],
                indicacoes: ['Cifose dorsal e lombar', 'Postura cifótica', 'Dor mecânica torácica', 'Estabilização pósural conservadora']
            },
            'colete-jewett': {
                nome: 'Colete Jewett',
                imgs: ['assets/coluna/colete-jewett.PNG'

                ]
                ,
                desc: 'Colete hiperextensor toraco-lombar de suporte anterior e posterior, indicado para imobilização de fraturas por compressão vertebral e osteoporose.',
                specs: [['Material', 'Alumínio + espuma'], ['Tipo', 'Hiperextensor'], ['Região', 'Torácica/Lombar'], ['Prazo', 'Imediato/estoque']],
                indicacoes: ['Fratura por compressão T6-L3', 'Osteoporose vertebral', 'Dor mecânica lombar', 'Estabilização conservadora da coluna']
            },
            'colar-cervical': {
                nome: 'Colar Cervical',
                imgs: ['assets/coluna/colar-cervical.PNG'],
                desc: 'Dispositivo de imobilização cervical disponível nas versões rígida (Philadelphia) e semi-rígida. Indicado para lesões cervicais e reabilitação pós-operatória.',
                specs: [['Material', 'Polietileno/Espuma'], ['Tipos', 'Rígido e semi-rígido'], ['Tamanhos', 'P, M, G, GG'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Hérnia cervical sintomática', 'Pós-operatório cervical', 'Traumatismo cervical (whiplash)', 'Cervicalgia aguda intensa']
            }
        }
    },
    'pe': {
        label: 'Pé / Tornozelo', tagClass: 'tag-blue', bgClass: 'bg-blue',
        itens: {
            'dennis-brown': {
                nome: 'Dennis Brown',
                imgs: [
                    'assets/pe/denis-brown.PNG',
                ],
                desc: 'Bota ortopédica articulada utilizada no tratamento do pé torto congênito (PTC) após a fase de gessagem. Mantém a correção obtida pelo método Ponseti.',
                specs: [['Material', 'Couro + aço'], ['Faixa etária', '0 a 4 anos'], ['Ajuste', 'Em abdução 60-70°'], ['Prazo', '5 a 7 dias']],
                indicacoes: ['Pé torto congênito idiopático', 'Pós-método Ponseti', 'Manutenção de correção cirúrgica', 'Displasia do desenvolvimento']
            },
            'afo-fixa': {
                nome: 'AFO Fixa',
                imgs: [
                    'assets/pe/afo-fixa.PNG',
                ],
                desc: 'Órtese tornozelo-pé rígida (Ankle Foot Orthosis) para imobilização completa e controle de movimento. Indicada em casos de paralisia, drop foot e estabilização severa.',
                specs: [['Material', 'Polipropileno rígido'], ['Tipo', 'Sob medida'], ['Articulação', 'Fixa'], ['Prazo', '10 a 15 dias']],
                indicacoes: ['Pé caído (drop foot) por AVC', 'Paralisia cerebral severa', 'Lesão medular com pé equino', 'Distrofia muscular']
            },
            'afo-articulada-novo': {
                nome: 'AFO Articulada',
                imgs: [
                    'assets/pe/afo-articulada.PNG',
                ],
                desc: 'Órtese tornozelo-pé articulada para melhora funcional da marcha e controle do movimento plantar e dorsiflexão. Oferece flexibilidade para deambulação segura.',
                specs: [['Material', 'Polipropileno'], ['Articulação', 'Dupla/articulada'], ['Tipo', 'Sob medida'], ['Prazo', '10 a 15 dias']],
                indicacoes: ['AVC e hemiplegia moderada', 'Paralisia cerebral funcional', 'Pé caído parcial', 'Espinha bífida com marcha']
            },
            'smo': {
                nome: 'SMO - Órtese Supramaleoar',
                imgs: [
                    'assets/pe/SMO.PNG',
                ],
                desc: 'Órtese supramaleoar (Supramalleolar Orthosis) que oferece estabilização leve do tornozelo e articulação subtalar. Indicada para instabilidade crônica leve e propriocepção.',
                specs: [['Material', 'Neoprene + termoplástico'], ['Ajuste', 'Velcro progressivo'], ['Tamanhos', 'P, M, G, GG'], ['Prazo', '5 a 7 dias']],
                indicacoes: ['Instabilidade crônica de tornozelo', 'Melhora proprioceptiva', 'Prevenção de entorse recidivante', 'Atividades leves de impacto']
            },
            'palmilha-sob-molde': {
                nome: 'Palmilha Sob Molde',
                imgs: [
                    'assets/pe/palmilha-sob-molde.PNG',
                ],
                desc: 'Palmilha personalizada confeccionada sob molde do pé do paciente para correção postural e distribuição de pressão plantar. Oferece máxima personalização e conforto.',
                specs: [['Material', 'EVA + termoplástico'], ['Fabricação', 'Sob molde do pé'], ['Tipos', 'Neutra/corretiva'], ['Prazo', '8 a 12 dias']],
                indicacoes: ['Pé plano e pé cavo', 'Distribuição anormal de pressão', 'Dor plantar crônica', 'Correção postural do membro inferior']
            },
            'palmilha-esportiva': {
                nome: 'Palmilha Esportiva',
                imgs: [
                    'assets/pe/palmilha-esportiva.PNG',
                ],
                desc: 'Palmilha com tecnologia de amortecimento e suporte para práticas esportivas. Reduz impacto, controla movimento e melhora performance em atividades de alto impacto.',
                specs: [['Material', 'Gel + espuma de alta densidade'], ['Amortecimento', 'Avançado'], ['Uso', 'Esporte e corrida'], ['Prazo', '5 a 8 dias']],
                indicacoes: ['Atletas e praticantes de esporte', 'Corrida e caminhada intensas', 'Prevenção de lesão de impacto', 'Fascite plantar em esportistas']
            },
            'compensacao-sob-molde': {
                nome: 'Compensação Sob Molde',
                imgs: [
                    'assets/pe/sob-molde.PNG',
                ],
                desc: 'Sistema de compensação para correção de discreparâncias de comprimento de membros inferiores. Fabricado sob molde para máximo conforto e eficácia.',
                specs: [['Material', 'EVA + termoplástico'], ['Espessura', 'Variável conforme necessidade'], ['Tipo', 'Sob medida'], ['Prazo', '10 a 15 dias']],
                indicacoes: ['Discreparância de MMII > 1 cm', 'Assimetria de membros inferiores', 'Desalinhamento pélvico', 'Correção de marcha assimétrica']
            },
            'tenis-ortopedico': {
                nome: 'Tênis Ortopédico',
                imgs: [
                    'assets/pe/tenis-ortopedico.PNG',
                ],
                desc: 'Calçado técnico com suporte biomecânico especial, solado amortecedor e fechamento seguro. Indicado para proteção plantar e prevenção de lesões em pacientes com condições especiais.',
                specs: [['Material', 'Tecido respirável + EVA'], ['Tipos', 'Diversas numerações'], ['Suporte', 'Órteses integradas'], ['Prazo', 'Imediato/estoque']],
                indicacoes: ['Diabetes com neuropatia', 'Pé diabético', 'Proteção de feridas plantares', 'Prevenção de ulceração']
            },
            'calcanheiras-silicone': {
                nome: 'Calcanheiras de Silicone',
                imgs: [
                    'assets/pe/calcanheira-silicone.PNG',
                ],
                desc: 'Cúpulas de silicone com amortecimento otimizado para proteção e conforto do calcanhar. Reduz dor e impacto durante marcha.',
                specs: [['Material', 'Silicone médico'], ['Altura', '8 a 10mm'], ['Tamanho', 'Uno/ajustável'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Fascite plantar', 'Esporão de calcâneo', 'Dor de talão', 'Proteção de calcanhar em pacientes diabéticos']
            },
            'almofada-plantar': {
                nome: 'Almofada Plantar',
                imgs: [
                    'assets/pe/almofada-plantar.PNG',
                ],
                desc: 'Almofada de gel para alívio de pressão em zona metatarsal anterior. Distribui carga e reduz dor em pé de risco.',
                specs: [['Material', 'Gel de silicone'], ['Cobertura', 'Tecido e velcro'], ['Tamanho', 'Uno'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Metatarsalgia', 'Neuroma de Morton', 'Joanete (hálux valgus)', 'Pé diabético com risco']
            },
            'kit-fascite-plantar': {
                nome: 'Kit Fascite Plantar',
                imgs: [
                    'assets/pe/noturna-fascite-plantar.PNG',
                ],
                desc: 'Kit completo para tratamento conservador da fascite plantar contendo: palmilha com arco, calcanheira, banda de noite e orientações. Combate a inflamação de forma integrada.',
                specs: [['Componentes', '4 itens'], ['Material', 'Silicone + termoplástico'], ['Uso', '24h programado'], ['Prazo', '5 a 7 dias']],
                indicacoes: ['Fascite plantar aguda e crônica', 'Tratamento conservador antes de cirurgia', 'Prevenção de recidiva', 'Esporão calcâneo sintomático']
            },
            'ortese-halux-valgus': {
                nome: 'Órtese para Hálux Valgus',
                imgs: [
                    'assets/pe/halux-valgus.PNG',
                ],
                desc: 'Órtese noturna ou diurna para controle e correção progressiva do joanete (hálux valgus). Realinha o primeiro metatarsiano e reduz dor e inflamação.',
                specs: [['Tipo', 'Noturna/diurna'], ['Material', 'Termoplástico'], ['Ajuste', 'Tensão progressiva'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Hálux valgus leve a moderado', 'Dor em primeira articulação metatarsofalangeana', 'Prevenção de progressão de deformidade', 'Alternativa conservadora à cirurgia']
            },
            'meia-compressao': {
                nome: 'Meia de Compressão',
                imgs: [
                    'assets/pe/meia-compressao.PNG',
                ],
                desc: 'Meia com malha de compressão graduada para melhora circulatória, drenagem linfática e prevenção de trombose. Oferece suporte vascular durante toda jornada.',
                specs: [['Compressão', '15-20 mmHg / 20-30 mmHg'], ['Tipos', 'Diversas espessuras'], ['Tamanhos', 'P, M, G, GG'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Insuficiência venosa', 'Prevenção de trombose', 'Linfoedema', 'Voos de longa duração e imobilização']
            },
            'sandalia-baruk-augusta': {
                nome: 'Sandália Baruk / Augusta',
                imgs: [
                    'assets/pe/sandalia-baruk.PNG',
                ],
                desc: 'Sandália pós-cirúrgica com solado rígido e fechamento seguro. Oferece proteção e imobilização para pé após procedimentos cirúrgicos. Fácil ajuste e retirada.',
                specs: [['Material', 'Tecido + EVA rígido'], ['Fechamento', 'Velcro duplo'], ['Tamanhos', 'P, M, G, GG'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Pós-cirúrgico de antepé', 'Proteção de ferida pós-operatória', 'Imobilização leve de pé', 'Hálux valgus pós-cirúrgico']
            },
            'tornozeleira-rigida': {
                nome: 'Tornozeleira Rígida',
                imgs: [
                    'assets/pe/tornozeleira-rigida.PNG',
                ],
                desc: 'Estabilizador rígido de tornozelo para imobilização parcial após lesões ligamentares ou cirurgias. Permite a marcha com suporte adequado.',
                specs: [['Material', 'Polipropileno + velcro'], ['Tamanhos', 'P, M, G, GG'], ['Uso', 'Deambulação'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Entorse grau II e III', 'Pós-artroscopia de tornozelo', 'Instabilidade crônica de tornozelo', 'Fratura de fíbula com tratamento conservador']
            }
        }
    },
    'mao': {
        label: 'Mão / Braço', tagClass: 'tag-blue', bgClass: 'bg-amber',
        itens: {
            'mao-bionica': {
                nome: 'Mão Biônica',
                imgs: [
                    'assets/mao-braco/mao-bionica.PNG',
                ],
                desc: 'Prótese mioelétrica de alta tecnologia controlada por sinais musculares do coto. Permite movimentos individuais dos dedos com resposta em tempo real.',
                specs: [['Controle', 'Mioelétrico'], ['Graus de lib.', '6 movimentos'], ['Bateria', 'Até 16h de uso'], ['Prazo', 'Sob avaliação']],
                indicacoes: ['Amputação transradial', 'Amputação parcial de mão', 'Falência congênita de membro', 'Reabilitação funcional avançada']
            },
            'mao-estetica': {
                nome: 'Mão Estética',
                imgs: [
                    'assets/mao-braco/mao-estetica.PNG',
                ],
                desc: 'Prótese cosmética em silicone de alta fidelidade para amputação parcial ou total de mão. Pigmentada individualmente para combinar com o tom de pele.',
                specs: [['Material', 'Silicone médico'], ['Pigmentação', 'Personalizada'], ['Tipo', 'Passiva/cosmética'], ['Prazo', '15 a 20 dias']],
                indicacoes: ['Amputação parcial de dedos', 'Amputação transmetacárpica', 'Necessidade estética e social', 'Complemento a prótese funcional']
            },
            'ortese-punho': {
                nome: 'Órtese de Punho',
                imgs: [
                    'assets/mao-braco/ortese-punho.PNG'
                ],
                desc: 'Órtese dinâmica para tração e mobilização ativa de dedos e punho. Utilizada na reabilitação pós-cirúrgica e em condições neurológicas.',
                specs: [['Tipo', 'Dinâmica — com molas'], ['Material', 'Termoplástico'], ['Ajuste', 'Tensão regulável'], ['Prazo', '5 a 7 dias']],
                indicacoes: ['Lesão de tendão flexor/extensor', 'Síndrome do túnel do carpo pós-op', 'Lesão de nervo radial (punho caído)', 'Artrite reumatoide']
            },
            'imobilizador-punho': {
                nome: 'Imobilizador de Punho',
                imgs: [
                    'assets/mao-braco/imobilizador-punho.PNG'
                ],
                desc: 'Imobilizador de punho com suporte rígido para estabilização pós-lesão e controle de dores em articulação radiocárpica.',
                specs: [['Material', 'Polipropileno + espuma'], ['Ajuste', 'Velcro'], ['Cobertura', 'Punho e antebraço'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Tendinite de punho', 'Síndrome do túnel do carpo', 'Instabilidade radiocárpica', 'Pós-fratura de punho estável']
            },

            'imobilizador-punho-dedo': {
                nome: 'Imobilizador de Punho',
                imgs: [
                    'assets/mao-braco/imobilizador-punhos-dedos.PNG'
                ],
                desc: 'Imobilizador de punho com suporte rígido para estabilização pós-lesão e controle de dores em articulação radiocárpica.',
                specs: [['Material', 'Polipropileno + espuma'], ['Ajuste', 'Velcro'], ['Cobertura', 'Punho e antebraço'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Tendinite de punho', 'Síndrome do túnel do carpo', 'Instabilidade radiocárpica', 'Pós-fratura de punho estável']
            },
            'imobilizador-punho-abducao': {
                nome: 'Imobilizador de Punho com Abdução do Polegar',
                imgs: [
                    'assets/mao-braco/abducao-polegar.PNG'
                ],
                desc: 'Imobilizador que associa estabilização do punho à abdução do polegar, indicado em lesões de trapézio e artrose de CMC.',
                specs: [['Material', 'Neoprene + termoplástico'], ['Ajuste', 'Velcro anatômico'], ['Suporte', 'Punho + polegar'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Artrose de trapézio metacarpiana', 'Lesão de ligamento do polegar', 'Tendinite de De Quervain', 'Instabilidade de CMC']
            },
            'ortese-sob-medida-punho-mao-dedo': {
                nome: 'Órtese Sob Medida de Punho, Mão e Dedo',
                imgs: [
                    'assets/mao-braco/punho-mao-dedo.PNG'
                ],
                desc: 'Órtese personalizada para suporte combinado de punho, mão e dedos. Confeccionada sob medida para condições complexas ou pós-operatório.',
                specs: [['Material', 'Termoplástico e EVA'], ['Tipo', 'Sob medida'], ['Cobertura', 'Punho/mão/dedos'], ['Prazo', '10 a 14 dias']],
                indicacoes: ['Pós-operatório de mão', 'Artrite reumatoide em mão e punho', 'Lesões nervosas múltiplas', 'Contraturas digitais']
            },
            'ortese-dedo-martelo': {
                nome: 'Órtese para Dedo em Martelo',
                imgs: [
                    'assets/mao-braco/dedo-em-martelo.PNG'
                ],
                desc: 'Órtese digital específica para realinhar e corrigir dedo em martelo, com suporte leve e posicionamento progressivo.',
                specs: [['Material', 'Termoplástico flexível'], ['Tipo', 'Digital individual'], ['Ajuste', 'Velcro'], ['Prazo', 'Imediato/estoque']],
                indicacoes: ['Dedo em martelo flexo', 'Contraturas digitais leves', 'Dor na articulação interfalangeana distal', 'Tratamento conservador pré-cirúrgico']
            },
            'atadura-elastica': {
                nome: 'Atadura Elástica',
                imgs: [
                    'assets/mao-braco/atadura-elastica.PNG'
                ],
                desc: 'Atadura elástica para compressão leve e suporte contínuo em lesões de punho, mão e dedos. Ideal para uso diário com conforto.',
                specs: [['Material', 'Fibra elástica'], ['Compressão', 'Leve a moderada'], ['Tamanhos', 'P, M, G'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Entorse leve de punho', 'Edema pós-traumático', 'Suporte em tendinites', 'Prevenção de recidivas em esportes']
            },
            'ortese-cotovelo': {
                nome: 'Órtese de Cotovelo',
                imgs: [
                    'assets/mao-braco/ortese-cotovelo.PNG'
                ],
                desc: 'Órtese articulada de cotovelo com travamento em ângulos definidos de 0° a 120°. Indicada para reabilitação e controle de movimento pós-cirúrgico.',
                specs: [['Amplitude', '0° a 120° travável'], ['Material', 'Alumínio + EVA'], ['Tipo', 'Sob medida'], ['Prazo', '7 dias']],
                indicacoes: ['Pós-operatório de cotovelo', 'Fratura de úmero distal', 'Contratura em flexão de cotovelo', 'Paralisia braquial obstétrica']
            }
        }
    },
    'protese': {
        label: 'Prótese', tagClass: 'tag-coral', bgClass: 'bg-coral',
        itens: {
            'transtibial': {
                nome: 'Prótese Transtibial',
                imgs: ['assets/protese/protese-transtibial.PNG'

                ],
                desc: 'Prótese para amputação abaixo do joelho com estrutura em fibra de carbono e liner de silicone de alta adesão. Combina leveza, durabilidade e conforto.',
                specs: [['Estrutura', 'Fibra de carbono'], ['Interface', 'Liner de silicone'], ['Pé protético', 'Dinâmico'], ['Prazo', '15 a 20 dias']],
                indicacoes: ['Amputação transtibial', 'Desarticulação de tornozelo', 'Reabilitação pós-amputação vascular', 'Amputação traumática abaixo do joelho']
            },
            'transfemoral': {
                nome: 'Prótese Transfemoral',
                imgs: ['assets/protese/protese-transfemural.PNG'

                ],
                desc: 'Prótese para amputação acima do joelho com joelho mecânico policêntrico ou microprocessado. Alta estabilidade na marcha e na descida de escadas.',
                specs: [['Joelho', 'Mecânico ou microprocessado'], ['Encaixe', 'CAD/CAM personalizado'], ['Liner', 'Silicone com pino'], ['Prazo', '20 a 30 dias']],
                indicacoes: ['Amputação transfemoral', 'Desarticulação de joelho', 'Amputação por doença vascular', 'Amputação congênita']
            },
            'syme': {
                nome: 'Prótese de Syme',
                imgs: ['assets/protese/protese-syme.PNG'],
                desc: 'Prótese para amputação no nível do tornozelo (Syme), preservando o calcanhar e permitindo carga direta no coto. Oferece excelente estabilidade e marcha natural.',
                specs: [['Nível', 'Tornozelo (Syme)'], ['Interface', 'Carga direta no calcanhar'], ['Pé protético', 'Dinâmico ou sólido'], ['Prazo', '15 a 20 dias']],
                indicacoes: ['Amputação de Syme', 'Preservação do calcanhar', 'Melhor controle de marcha', 'Amputação traumática no tornozelo']
            },
            'chorpat': {
                nome: 'Prótese de Chorpat',
                imgs: ['assets/protese/protese-choupart.PNG'],
                desc: 'Prótese para amputação no nível do joelho (Chorpat), com articulação condilar e sistema de travamento. Indicada para amputações congênitas ou traumáticas.',
                specs: [['Nível', 'Joelho (Chorpat)'], ['Articulação', 'Condilar com travamento'], ['Encaixe', 'Personalizado'], ['Prazo', '20 a 25 dias']],
                indicacoes: ['Amputação congênita de joelho', 'Amputação traumática no joelho', 'Falência congênita de membro inferior', 'Reabilitação pediátrica']
            },
            'dedo-estetico-silicone': {
                nome: 'Prótese estética de dedo em silicone',
                imgs: ['assets/protese/dedo-silicone.PNG'],
                desc: 'Prótese cosmética em silicone médico para amputação parcial ou total de dedo. Pigmentada para combinar com a pele, oferecendo aparência natural.',
                specs: [['Material', 'Silicone médico'], ['Pigmentação', 'Personalizada'], ['Tipo', 'Passiva/cosmética'], ['Prazo', '10 a 15 dias']],
                indicacoes: ['Amputação parcial de dedo', 'Amputação transmetacárpica', 'Necessidade estética', 'Complemento a prótese funcional']
            },
            'revestimento-estetico': {
                nome: 'Revestimento Estético',
                imgs: [
                    'assets/protese/revestimento-estetico.PNG',
                    'assets/protese/revestimento-estetico-2.PNG'
                ],
                desc: 'Revestimento estético desenvolvido para proporcionar aparência mais natural à prótese, oferecendo acabamento discreto, conforto e proteção aos componentes protéticos.',
                specs: [
                    ['Material', 'Espuma cosmética de alta densidade'],
                    ['Acabamento', 'Anatômico e personalizado'],
                    ['Compatibilidade', 'Próteses de membros inferiores e superiores'],
                    ['Prazo', '10 a 15 dias']
                ],
                indicacoes: [
                    'Melhora estética da prótese',
                    'Proteção dos componentes protéticos',
                    'Maior naturalidade visual',
                    'Uso diário e social'
                ]
            }
        }
    },

    'joelho': {
        label: 'Joelho / Quadril', tagClass: 'tag-blue', bgClass: 'bg-purple',
        itens: {
            'imobilizador-joelho': {
                nome: 'Imobilizador de Joelho',
                imgs: [
                    'assets/joelho-quadril/imobilizador-joelho.PNG',
                ],
                desc: 'Imobilizador rígido para estabilização completa do joelho após lesões graves ou cirurgias. Oferece suporte total e controle de movimento.',
                specs: [['Material', 'Polipropileno rígido'], ['Tipo', 'Imobilização completa'], ['Ajuste', 'Velcro duplo'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Fraturas de joelho', 'Pós-operatório de joelho', 'Instabilidade grave', 'Lesões ligamentares complexas']
            },
            'joelheira-articulada': {
                nome: 'Joelheira Articulada',
                imgs: [
                    'assets/joelho-quadril/joelheira-articulada.PNG'
                ],
                desc: 'Joelheira com articulação policêntrica que permite movimento controlado do joelho. Indicada para proteção e suporte durante atividades.',
                specs: [['Articulação', 'Policêntrica'], ['Material', 'Alumínio + neoprene'], ['Ajuste', 'Velcro anatômico'], ['Prazo', '5 a 7 dias']],
                indicacoes: ['Instabilidade ligamentar leve', 'Proteção pós-operatória', 'Atividades esportivas moderadas', 'Reabilitação funcional']
            },
            'kafo': {
                nome: 'Órtese KAFO',
                imgs: [
                    'assets/joelho-quadril/kafo.PNG'
                ],
                desc: 'Órtese joelho-tornozelo-pé (Knee Ankle Foot Orthosis) para estabilização completa do membro inferior em casos de fraqueza muscular ou paralisia.',
                specs: [['Cobertura', 'Coxa ao pé'], ['Articulações', 'Joelho e tornozelo'], ['Material', 'Alumínio + polipropileno'], ['Prazo', '15 a 20 dias']],
                indicacoes: ['Paralisia cerebral', 'Mielomeningocele / espinha bífida', 'Distrofias musculares', 'Sequela de poliomielite']
            },
            'hkafo': {
                nome: 'Órtese HKAFO',
                imgs: [
                    'assets/joelho-quadril/hkafo.PNG'
                ],
                desc: 'Órtese quadril-joelho-tornozelo-pé (Hip Knee Ankle Foot Orthosis) para suporte e alinhamento em casos de paralisia severa e instabilidade neurológica.',
                specs: [['Cobertura', 'Quadril ao pé'], ['Articulações', 'Quadril, joelho e tornozelo'], ['Material', 'Alumínio + polipropileno'], ['Prazo', '15 a 20 dias']],
                indicacoes: ['Paralisia cerebral severa', 'Lesões medulares altas', 'Ataxia e instabilidade neurológica', 'Pós-operatório de artroplastia de quadril']
            },
            'brace': {
                nome: 'Brace',
                imgs: [
                    'assets/joelho-quadril/brace.PNG'
                ],
                desc: 'Suporte leve para joelho com compressão ajustável. Ideal para prevenção de lesões e suporte em atividades diárias.',
                specs: [['Material', 'Neoprene + velcro'], ['Compressão', 'Ajustável'], ['Tamanhos', 'P, M, G, GG'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Dor leve de joelho', 'Prevenção de lesões', 'Suporte em atividades físicas', 'Osteoartrite inicial']
            },
            'joelheira-articulada-haste-lateral': {
                icon: '⚙️', nome: 'Joelheira Articulada com Haste Lateral',
                imgs: [
                    'assets/joelho-quadril/haste-lateral.PNG'
                ],
                desc: 'Joelheira avançada com hastes laterais para estabilização máxima. Oferece controle de varo/valgo e proteção ligamentar superior.',
                specs: [['Hastes', 'Laterais rígidas'], ['Articulação', 'Policêntrica'], ['Material', 'Alumínio aeronáutico'], ['Prazo', '10 a 15 dias']],
                indicacoes: ['Instabilidade ligamentar grave', 'Pós-reconstrução de LCA/LCP', 'Atletas de alto risco', 'Lesões complexas de joelho']
            },
            'dinamica': {
                nome: 'Órtese Dinâmica',
                imgs: [
                    'assets/joelho-quadril/dinamica.PNG'
                ],
                desc: 'Órtese com componentes dinâmicos para estimulação funcional de membros com fraqueza ou paralisia parcial. Facilita movimentos ativos residuais.',
                specs: [['Tipo', 'Dinâmica com molas'], ['Material', 'Termoplástico + aço'], ['Ajuste', 'Tensão graduável'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Hemiplegia e AVC', 'Lesão de plexo braquial', 'Neuropatia periférica', 'Reabilitação funcional pós-lesão']
            }
        }
    },
    'cabeça': {
        label: 'Cabeça', tagClass: 'tag-blue', bgClass: 'bg-indigo',
        itens: {
            'ortese-craniana': {
                nome: 'Órtese Craniana',
                imgs: [
                    'assets/cabeca/ortese-craniana.PNG',
                ],
                desc: 'Órtese craniana personalizada para correção de deformidades cranianas congênitas ou adquiridas. Utilizada em plagiocefalia, braquicefalia e outras assimetrias. Oferece suporte contínuo e ajustável para melhor adaptação.',
                specs: [['Material', 'Polipropileno'], ['Tipo', 'Sob medida'], ['Ajuste', 'Fechos laterais'], ['Prazo', '15 a 20 dias']],
                indicacoes: ['Plagiocefalia posicional', 'Braquicefalia', 'Escafocefalia', 'Deformidades cranianas adquiridas']
            },
            'reabilitacao-assimetria-torcicolo': {
                nome: 'Reabilitação de Assimetria e Torcicolo Congênito',
                imgs: [
                    'assets/cabeca/torcicolo.PNG'
                ],
                desc: 'Programa multidisciplinar de reabilitação especializada para correção de assimetrias cervicais e torcicolo congênito. Inclui exercícios terapêuticos, alongamentos, mobilização passiva e acompanhamento fisioterapêutico contínuo.',
                specs: [['Abordagem', 'Multidisciplinar'], ['Duração', '3 a 6 meses'], ['Frequência', '2 a 3x por semana'], ['Prazo', 'Imediato']],
                indicacoes: ['Torcicolo congênito', 'Assimetria cervical postural', 'Plagiocefalia associada', 'Reabilitação precoce de deformidades']
            }
        }
    },
    'cotovelo': {
        label: 'Cotovelo / Ombro', tagClass: 'tag-blue', bgClass: 'bg-rose',
        itens: {
            'tipoia-simples': {
                imgs: [
                    'assets/cotovelo-ombro/tipoia-simples.PNG'
                ],
                nome: 'Tipoia Simples',
                desc: 'Tipoia de suspensão simples para imobilização de ombro após lesões ou cirurgias. Oferece suporte e alívio de carga do membro superior, reduzindo tensão nos músculos e ligamentos.',
                specs: [['Material', 'Nylon + poliéster'], ['Ajuste', 'Velcro regulável'], ['Tamanhos', 'P, M, G'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Pós-operatório de ombro', 'Distensão ligamentar de ombro', 'Luxação de ombro', 'Síndrome do impacto subacromial']
            },
            'tipoia-abduccao': {
                imgs: [
                    'assets/cotovelo-ombro/tipoia-almofada-abducao.PNG'
                ],
                nome: 'Tipoia com Almofada de Abdução',
                desc: 'Tipoia com almofada de abdução para posicionamento específico do ombro em ângulo seguro. Indicada para pós-operatório de rotador mantendo abdução de 45-60 graus.',
                specs: [['Material', 'Nylon + espuma alta densidade'], ['Almofada', 'Abdução 45-60°'], ['Ajuste', 'Velcro duplo'], ['Prazo', '3 a 5 dias']],
                indicacoes: ['Pós-operatório de manguito rotador', 'Tendinite calcárea', 'Artroscopia de ombro', 'Recuperação de lesão SLAP']
            },
            'ortese-imobilizadora-ombro': {
                imgs: [
                    'assets/cotovelo-ombro/imobilizadora-ombro.PNG'
                ],
                nome: 'Órtese Imobilizadora para Ombro',
                desc: 'Órtese rígida de imobilização total para ombro com suporte de braço integrado. Oferece estabilização máxima em casos de trauma severo ou pós-operatório complexo.',
                specs: [['Material', 'Polipropileno rígido'], ['Imobilização', 'Total (0°)'], ['Suporte', 'Ombro e braço'], ['Prazo', '7 a 10 dias']],
                indicacoes: ['Fratura de úmero proximal', 'Luxação anterior recorrente', 'Pós-operatório de artroplastia', 'Lesão de plexo braquial']
            },
            'ortese-sarmiento': {
                imgs: [
                    'assets/cotovelo-ombro/sarmiento.PNG'
                ],
                nome: 'Órtese de Sarmiento',
                desc: 'Órtese tipo sarmiento para ombro com suporte em "Y" e imobilização funcional. Permite mobilidade controlada enquanto oferece estabilidade em fratura de úmero proximal.',
                specs: [['Material', 'Termoplástico + velcro'], ['Tipo', 'Funcional'], ['Mobilidade', 'Controlada'], ['Prazo', '10 a 12 dias']],
                indicacoes: ['Fratura de úmero proximal deslocada', 'Fratura em crista de úmero', 'Pós-operatório com mobilidade progressiva', 'Reabilitação funcional de ombro']
            },
            'espaldeira-postural': {
                imgs: [
                    'assets/cotovelo-ombro/postural-ombros.PNG'
                ],
                nome: 'Espaldeira Postural de Ombros',
                desc: 'Espaldeira postural para correção de cifose e reeducação postural dos ombros. Oferece suporte contínuo para melhor posicionamento da coluna cervical e torácica.',
                specs: [['Material', 'Neoprene + fita elástica'], ['Ajuste', 'Velcro dorsal'], ['Cobertura', 'Ombros e coluna'], ['Prazo', 'Imediato (estoque)']],
                indicacoes: ['Cifose dorsal postural', 'Síndrome do cruzamento superior', 'Postura do "ombro caído"', 'Prevenção de dor cervical crônica']
            },
            'ortese-tennis-elbow': {
                imgs: [
                    'assets/cotovelo-ombro/tenis-elbow.PNG'
                ],
                nome: 'Órtese para Lesão de Tênis Elbow',
                desc: 'Órtese específica para epicondilite lateral (Tênis Elbow) com banda de compressão e suporte de antebraço. Alivia dor e reduz carga nos tendões extensores.',
                specs: [['Material', 'Neoprene + compressão'], ['Suporte', 'Epicôndilo'], ['Ajuste', 'Velcro'], ['Prazo', '3 a 5 dias']],
                indicacoes: ['Epicondilite lateral (Tênis Elbow)', 'Tendinite do extensor radial', 'Dor por uso repetitivo', 'Prevenção em esportes']
            }
        }
    }
};

let currentSection = 'coluna';
let currentProductKey = null;

// ─── NAVEGAÇÃO POR SEÇÃO ───
function showSection(id, btn) {
    currentSection = id;
    const secIds = ['coluna', 'pe', 'mao', 'protese', 'joelho', 'cabeça', 'cotovelo'];
    secIds.forEach(s => {
        const el = document.getElementById('sec-' + s);
        if (el) el.style.display = s === id ? 'block' : 'none';
    });
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── ABRIR DETALHE ───
function openDetail(secao, produtoKey) {
    const sec = produtos[secao];
    const prod = sec.itens[produtoKey];
    if (!prod) return;

    currentProductKey = { secao, produtoKey };
    document.getElementById('detail-name').textContent = prod.nome;
    document.getElementById('detail-desc').textContent = prod.desc;
    document.getElementById('detail-tag').textContent = sec.label;
    document.getElementById('detail-tag').className = 'tag ' + sec.tagClass;
    document.getElementById('back-btn').textContent = '← Voltar para ' + sec.label;
    document.getElementById('detail-img-box').className = 'detail-img-box';

    // preenche
    if (prod.imgs && prod.imgs.length > 0) {
        let current = 0;
        const imgs = prod.imgs;

        function renderImg() {
            document.getElementById('detail-icon').innerHTML = `
      <div style="position:relative;width:100%;height:100%;">

        <img src="${imgs[current]}" style="width:100%;height:100%;object-fit:cover;display:block;">
        
        ${imgs.length > 1 ? `
          <button onclick="prevImg()" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.6);color:#C9A84C;border:1px solid #C9A84C;border-radius:50%;width:32px;height:32px;font-size:16px;cursor:pointer;">‹</button>
          <button onclick="nextImg()" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.6);color:#C9A84C;border:1px solid #C9A84C;border-radius:50%;width:32px;height:32px;font-size:16px;cursor:pointer;">›</button>
          <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;gap:6px;">
            ${imgs.map((_, i) => `<div style="width:6px;height:6px;border-radius:50%;background:${i === current ? '#C9A84C' : 'rgba(255,255,255,0.4)'}"></div>`).join('')}
          </div>
        ` : ''}
      </div>
    `;
        }

        window.prevImg = () => { current = (current - 1 + imgs.length) % imgs.length; renderImg(); }
        window.nextImg = () => { current = (current + 1) % imgs.length; renderImg(); }
        renderImg();
    }

    // specs
    const specsEl = document.getElementById('detail-specs');
    specsEl.innerHTML = prod.specs.map(([l, v]) =>
        `<div class="spec-box"><div class="s-label">${l}</div><div class="s-val">${v}</div></div>`
    ).join('');

    // indicações
    const indEl = document.getElementById('detail-indications');
    indEl.innerHTML = prod.indicacoes.map(i =>
        `<div class="ind-row"><div class="ind-dot"></div>${i}</div>`
    ).join('');

    // troca view
    document.getElementById('view-catalog').classList.remove('active');
    document.getElementById('view-detail').classList.add('active');
    document.getElementById('main-nav').style.display = 'none';


    document.getElementById('cta-whatsapp').onclick = () => {
        window.open(`https://wa.me/558588443917?text=Olá! Gostaria de saber mais sobre o produto "${prod.nome}"`, '_blank');
    }
}

// ─── VOLTAR ───
function goBack() {
    document.getElementById('view-detail').classList.remove('active');
    document.getElementById('view-catalog').classList.add('active');
    document.getElementById('main-nav').style.display = 'flex';

}