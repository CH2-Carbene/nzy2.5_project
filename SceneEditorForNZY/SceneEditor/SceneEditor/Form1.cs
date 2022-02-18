using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;
namespace SceneEditor
{

    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
        }
        class roomTag{
            public int floor;
            public List<string> ls;
        }
        class sceneTag
        {
            public string img;
            public int id;
            public class Dir
            {
                public int up = -1, left = -1, down = -1, right = -1;
            };
            public Dir dir = new Dir();

        }
        int roomid=0;
        private void newRoom(object sender, EventArgs e)
        {
            string roomName = "新房间"+roomid.ToString();
            roomid++;
            var rm = treeView1.Nodes.Add(roomName);
            rm.ContextMenuStrip = contextMenuStrip2;
            var tg=new roomTag();
            tg.floor =0;
            tg.ls = new List<string>();
            rm.Tag = tg;

        }
        private void newScene(object sender, EventArgs e)
        {
            //Console.WriteLine(sender);
            var rm = treeView1.SelectedNode;
            var tg = ((roomTag)rm.Tag).ls;
            string nodeName = "场景" + tg.Count.ToString();
            var newNode = rm.Nodes.Add(nodeName);

            newNode.ContextMenuStrip = contextMenuStrip3;
            var st = new sceneTag();
            st.id = tg.Count;
            //st.dir = new sceneTag.Dir();
            newNode.Tag = st;
            treeView1.SelectedNode = newNode;
            tg.Add(nodeName);
        }
        private void selectImage(object sender, EventArgs e)
        {
            var tag = (sceneTag)treeView1.SelectedNode.Tag;
            DialogResult dr = openFileDialog1.ShowDialog();
            if (dr == DialogResult.OK)
            {
                tag.img = openFileDialog1.FileName.ToString();
                Console.WriteLine(tag.img);
                try {
                    pictureBox1.Image = Image.FromFile(tag.img);

                }
                catch
                {
                    MessageBox.Show("不支持的图片格式！", "图片格式错误", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }

            }
        }
        private void deleteScene(object sender, EventArgs e)
        {
            Console.WriteLine(sender);
            treeView1.Nodes.Remove(treeView1.SelectedNode);
        }
        private void selectmoveGUI(object sender, EventArgs e)
        {
            Console.WriteLine(sender);
        }

        private void treeView1_MouseClick(object sender, MouseEventArgs e)
        {
            treeView1.SelectedNode = treeView1.GetNodeAt(e.X, e.Y);
        }
        private void imgUpdate(object sender, TreeViewEventArgs e)
        {
            //Console.WriteLine(sender);



        }
        private void guiUpdate(TreeNode n) {
            if (n.Tag.GetType() == typeof(sceneTag))
            {
                var tag = (sceneTag)n.Tag;
                if (tag.img != null) pictureBox1.Image = Image.FromFile(tag.img);
                else pictureBox1.Image = null;

                var nowroomNode = treeView1.SelectedNode.Parent.Nodes;
                var ls = ((roomTag)n.Parent.Tag).ls;
                ComboBox[] cbList = { comboBox1, comboBox2, comboBox3, comboBox4 };
                int[] dirList = { tag.dir.up, tag.dir.down, tag.dir.left, tag.dir.right };

                for (int i = 0; i < 4; ++i)
                {
                    var cb = cbList[i]; var ts = dirList[i];
                    cb.Enabled = true;
                    cb.Text = ts == -1 ? "" : ls[ts];
                    cb.Items.Clear();
                    foreach (TreeNode me in nowroomNode) cb.Items.Add(me.Text);
                }
            }
            else
            {
                pictureBox1.Image = null;
                comboBox1.Enabled = false;
                comboBox2.Enabled = false;
                comboBox3.Enabled = false;
                comboBox4.Enabled = false;
            }
        }


        private void treeView1_AfterLabelEdit(object sender, NodeLabelEditEventArgs e)
        {
            if (e.CancelEdit||e.Label==null) return;
            if (e.Node.Tag.GetType() == typeof(sceneTag))
            {
                foreach (TreeNode n in e.Node.Parent.Nodes)
                {
                    if (n != e.Node && n.Text == e.Label)
                    {
                        MessageBox.Show("重名！");
                        e.CancelEdit = true;
                        return;
                    }
                }
                e.Node.Text = e.Label;
                ((roomTag)e.Node.Parent.Tag).ls[((sceneTag)e.Node.Tag).id] = e.Label;
                guiUpdate(e.Node);
            }
            //var tag = (sceneTag)e.Node.Tag;
            //if (tag != null)
            //{
            //    var nowroomNode = treeView1.SelectedNode.Parent.Nodes;
            //    //ComboBox[] cb=;
            //    foreach (ComboBox cb in new ComboBox[] { comboBox1, comboBox2, comboBox3, comboBox4 })
            //    {
            //        cb.Enabled = true;
            //        cb.Items.Clear();
            //        foreach (TreeNode me in nowroomNode) cb.Items.Add(me.Text);
            //    }

            //}
        }



        private void treeView1_AfterSelect(object sender, TreeViewEventArgs e)
        {
            guiUpdate(e.Node);
        }
        private void moveSceneChanged(string label,ref int target){
            foreach (TreeNode n in treeView1.SelectedNode.Parent.Nodes)
            {
                if (n.Text == label)
                {
                    target = ((sceneTag)n.Tag).id;
                    return;
                }
            }
            target = -1;
        }
        private void comboBox1_TextUpdate(object sender, EventArgs e)
        {
            moveSceneChanged(comboBox1.Text, ref ((sceneTag)treeView1.SelectedNode.Tag).dir.up);
        }
        private void comboBox2_TextUpdate(object sender, EventArgs e)
        {
            moveSceneChanged(comboBox2.Text, ref ((sceneTag)treeView1.SelectedNode.Tag).dir.down);
        }

        private void comboBox3_TextUpdate(object sender, EventArgs e)
        {
            moveSceneChanged(comboBox3.Text, ref ((sceneTag)treeView1.SelectedNode.Tag).dir.left);
        }

        private void comboBox4_TextUpdate(object sender, EventArgs e)
        {
            moveSceneChanged(comboBox4.Text, ref ((sceneTag)treeView1.SelectedNode.Tag).dir.right);
        }

        class Room
        {
            public int floor ;
            public Scene[] scenelist;
        }
        class Scene
        {
            public string texture;
            public class Move{
                public int Left, Right, Up, Down;
            } ;
            public Move move;
        }
        private void saveJSON()
        {

            var dt = new Dictionary<string,Room>();
            //foreach (TreeNode nd in treeView1.Nodes)
            //{
            //    dt.Columns.Add(nd.Text);
            //}
            //var dr = dt.NewRow();
            foreach (TreeNode nd in treeView1.Nodes)
            {
                int sceneCnt= nd.Nodes.Count;
                Scene[] sceneList = new Scene[sceneCnt];
                int[] outID = new int[((roomTag)nd.Tag).ls.Count];
                for (int i = 0; i < sceneCnt; ++i) outID[((sceneTag)nd.Nodes[i].Tag).id] = i;
                for (int i = 0; i < sceneCnt; ++i) {
                    var tag = (sceneTag)nd.Nodes[i].Tag;
                    sceneList[i] = new Scene();
                    sceneList[i].texture=tag.img;
                    sceneList[i].move = new Scene.Move();
                    sceneList[i].move.Left= tag.dir.left==-1?-1:outID[tag.dir.left];
                    sceneList[i].move.Right = tag.dir.right == -1 ? -1 : outID[tag.dir.right];
                    sceneList[i].move.Up= tag.dir.up == -1 ? -1 : outID[tag.dir.up];
                    sceneList[i].move.Down = tag.dir.down == -1 ? -1 : outID[tag.dir.down];
                }
                var droom = new Room();
                //droom.floor=
                droom.scenelist = sceneList;
                dt[nd.Text] = droom;
                //dr[nd.Text] = JsonConvert.SerializeObject(droom);
            }
            //dt.Rows.Add(dr);
            Console.WriteLine(JsonConvert.SerializeObject(dt));
        }
        private void save(object sender, EventArgs e)
        {
            saveJSON();
        }
    }
}
